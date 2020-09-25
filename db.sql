CREATE DATABASE rest_api_practice;

--\c into rest_api_practice

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);