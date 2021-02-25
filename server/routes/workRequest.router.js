const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  if (req.user.is_admin) {
    console.log('work request get route connected');
    const queryText = `
    SELECT "work_request".id, "user_id", "project_name", "description", "location", "dimensions", "image_url", "work_request"."phone", "work_request"."email", "best_time_to_call", "weekends_ok", "first_name", "last_name", "work_type"."text" FROM "work_request"
    JOIN "user" ON "user".id = "work_request".user_id
    JOIN "work_type" ON "work_type".id = "work_request".work_type_id
    ORDER BY "work_request".id desc;`;
    pool.query(queryText)
      .then((result) => {
        res.send(result);
        console.log(result)
      })
      .catch((error) => {
        console.log('work request GET failed: ', error);
        res.sendStatus(500);
      });
  } else {
    console.log('you do not have permission to do that.');
    res.sendStatus(403)
  }
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('work request post route connected', req.body);
  const workRequest = req.body;
  const queryText = `
  INSERT INTO "work_request"(
    "work_type_id", 
    "user_id", 
    "project_name", 
    "description", 
    "location", 
    "dimensions", 
    "image_url", 
    "phone", 
    "email", 
    "best_time_to_call", 
    "weekends_ok"
    ) 
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
  pool.query(queryText, [
    // workRequest.work_type,
    // todo - replace below with above when working on dom
    1,
    req.user.id,
    workRequest.project_name,
    workRequest.description,
    workRequest.location,
    workRequest.dimensions,
    workRequest.image_url,
    workRequest.phone,
    workRequest.email,
    workRequest.best_time_to_call,
    // workRequest.weekends_okay
    // todo - replace below with above when working on dom
    true
  ])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error adding new job request', error);
      res.sendStatus(500);
    })
});

module.exports = router;
