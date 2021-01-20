
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "phone" varchar,
  "email" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "is_admin" boolean DEFAULT FALSE
);

CREATE TABLE "feedback" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "first_name" varchar,
  "last_name" varchar,
  "rating" int,
  "comments" varchar,
  "image_url" varchar,
  "ok_to_share" boolean,
  "is_public" boolean DEFAULT FALSE,
  "project_name" varchar
);

CREATE TABLE "work_request" (
  "id" int PRIMARY KEY,
  "work_type_id" int,
  "user_id" int,
  "project_name" varchar,
  "description" varchar,
  "location" varchar,
  "dimensions" varchar,
  "image_url" varchar,
  "phone" varchar,
  "email" varchar,
  "best_time_to_call" varchar,
  "weekends_ok" boolean
);

CREATE TABLE "work_type" (
  "id" int PRIMARY KEY,
  "text" varchar
);

ALTER TABLE "work_request" ADD FOREIGN KEY ("work_type_id") REFERENCES "work_type" ("id");

ALTER TABLE "work_request" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "feedback" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

-- insert values

INSERT INTO "public"."user"("first_name", "last_name", "phone", "email", "password", "is_admin") VALUES('Ad', 'Min', '098-765-4321', 'admin@domain.com', '$2a$10$sDR0w3HCQ5Nl7NGlno1ehO9cI0MEXbgyUkaknfYdcfY9NADlY9.4m', TRUE);

INSERT INTO "public"."user"("first_name", "last_name", "phone", "email", "password", "is_admin") VALUES('John', 'Doe', '123-456-7890', 'email@domain.com', '$2a$10$pLUNwC5Vs7kW5fJ5rNwnOuWYKO/oNSxg6w3.WbmU8KGZhVlJj6s1S', FALSE);
