#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE DATABASE opencv;
    \connect opencv

    CREATE TABLE users (
      uid SERIAL PRIMARY KEY,
      username VARCHAR(20),
      firstname VARCHAR(20),
      lastname VARCHAR(20),
      password VARCHAR(116),
      lastLogin TIMESTAMP,
      ip INET
    );

    CREATE TABLE videos (
      vid SERIAL PRIMARY KEY,
      name VARCHAR(240),
      userid INTEGER,
      width INTEGER,
      height INTEGER,
      fps SMALLINT
    );

    CREATE TABLE frames (
      fid SERIAL PRIMARY KEY,
      videoid INTEGER,
      address TEXT
    );

    CREATE TABLE skull (
      yaw SMALLINT,
      pitch SMALLINT,
      roll SMALLINT,
      frameid INTEGER
    );

    CREATE TABLE pupil (
      location POINT,
      frameid INTEGER
    );

    CREATE TABLE openFace (
      location POINT,
      index SMALLINT,
      frameid INTEGER
    );
EOSQL
