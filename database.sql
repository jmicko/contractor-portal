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
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "first_name" varchar,
  "last_name" varchar,
  "rating" int,
  "comments" varchar,
  "image_url" varchar,
  "ok_to_share" boolean DEFAULT FALSE,
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

-- insert user values

INSERT INTO "public"."user"("first_name", "last_name", "phone", "email", "password", "is_admin") VALUES('Admin', 'Contractor', '098-765-4321', 'admin@admin.com', '$2a$10$WOyN9iMLUrvuJtmFcPU6ZOpi2APc0S2piK/CMbOV1QxTQjAKORW6W', TRUE);

INSERT INTO "public"."user"("first_name", "last_name", "phone", "email", "password", "is_admin") VALUES('Client', 'User', '123-456-7890', 'client@client.com', '$2a$10$vrHAW4POXerQtYlUBmBqoebMnWPvZr2LyfqcQO2Vn6nHha8QJexFq', FALSE);