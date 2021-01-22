const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET route
router.get('/feedbackReview', rejectUnauthenticated, (req, res) => {
  // todo - ORDER BY (date probably, need to adjust table)
  pool.query(`SELECT * FROM "feedback" ORDER BY "id" desc;`)
  .then((result) => res.send(result))
  .catch((err) => {
    console.log('Feedback GET failed: ', err);
    res.sendStatus(500);
  });
});

// POST route
router.post('/clientFeedback', rejectUnauthenticated, (req, res, next) => {
  const user_id = req.user.id;
  // todo - get first and last name from req.user, add rejectUnaut....
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const rating = req.body.rating;
  const image_url = req.body.image_url;
  const comments = req.body.comments;
  const ok_to_share = req.body.ok_to_share;
  
  console.log('===========FEEDBACK POST ROUTE');
  
  // todo - change feedback table to have a date column, set default values where needed
  // make user id NOT NULL in work_request table and maybe feedback table as well
  
  const queryText = `INSERT INTO "feedback" (user_id, first_name, last_name, rating, image_url, comments, ok_to_share)
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  pool
  .query(queryText, [user_id, first_name, last_name, rating, image_url, comments, ok_to_share])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Add feedback failed: ', err);
    res.sendStatus(500);
  });
});

// PUT route
router.put('/feedbackReview', rejectUnauthenticated, (req, res) => {
  console.log('req.payload in put route is:', req.body.headers.feedbackid)
  const user_id = req.user.id;
  const id = req.body.headers.feedbackid;
  // only toggling a boolean for now, so probably don't need this one
  const is_public = req.body.is_public;
  
  console.log('===========FEEDBACK PUT ROUTE', req.body)
  
  // todo - change feedback table to have a date column, set default values where needed
  // make user id NOT NULL in work_request table and maybe feedback table as well
  
  const queryText = `UPDATE "feedback" SET "is_public" = NOT "is_public" WHERE "id"=$1;`;
  pool
  .query(queryText, [id])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Add feedback failed: ', err);
    res.sendStatus(500);
  });
});

// DELETE route
router.delete('/feedbackReview', rejectUnauthenticated, (req, res) => {
  console.log('req.payload in delete route is:', req.headers.feedbackid)
  const id = req.headers.feedbackid;
  const queryText = `DELETE FROM "feedback" WHERE "id"=$1;`;
  pool
  .query(queryText, [id])
  .then(() => res.sendStatus(200))
  .catch((err) => {
    console.log('Feedback GET failed: ', err);
    res.sendStatus(500);
  });
});

module.exports = router;
