DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

-- CREATE TABLE burgers(
-- 	id INTEGER AUTO_INCREMENT NOT NULL,
--     burger_name VARCHAR(255) NOT NULL,
--     is_favorite BOOLEAN,

--     PRIMARY KEY(id)
-- );

CREATE TABLE restaurant_burger(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    is_favorite BOOLEAN DEFAULT false,

    PRIMARY KEY(id)
)