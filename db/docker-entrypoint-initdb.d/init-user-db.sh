#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE DATABASE opencv;
    \connect opencv

    CREATE TABLE users (
      id SERIAL,
      username VARCHAR(20),
      firstName VARCHAR(20),
      lastName VARCHAR(20),
      password VARCHAR(20),
      lastLogin TIMESTAMP,
      ip INET
    );

    CREATE TABLE videos (
      id SERIAL,
      name VARCHAR(240),
      userId INTEGER,
      width INTEGER,
      height INTEGER,
      fps SMALLINT
    );

    CREATE TABLE skull (
      yaw SMALLINT,
      pitch SMALLINT,
      roll SMALLINT,
      frameNumber INTEGER
    );

    CREATE TABLE pupil (
      location POINT,
      fameNumber INTEGER
    );

    CREATE TABLE openFace (
      location POINT,
      index SMALLINT,
      frameNumber INTEGER
    );
EOSQL
