#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE DATABASE opencv;
    \connect opencv

    CREATE TABLE users (
      uid SERIAL,
      username VARCHAR(20),
      firstName VARCHAR(20),
      lastName VARCHAR(20),
      password VARCHAR(64),
      lastLogin TIMESTAMP,
      ip INET
    );

    CREATE TABLE videos (
      vid SERIAL,
      name VARCHAR(240),
      userId INTEGER,
      width INTEGER,
      height INTEGER,
      fps SMALLINT
    );

    CREATE TABLE frames (
      fid SERIAL,
      videoId INTEGER,
      address TEXT
    );

    CREATE TABLE skull (
      yaw SMALLINT,
      pitch SMALLINT,
      roll SMALLINT,
      frameId INTEGER
    );

    CREATE TABLE pupil (
      location POINT,
      frameId INTEGER
    );

    CREATE TABLE openFace (
      location POINT,
      index SMALLINT,
      frameId INTEGER
    );
EOSQL
