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
      created TIMESTAMP,
      ip INET
    );

    CREATE TABLE videos (
      vid SERIAL PRIMARY KEY,
      uid INTEGER,
      filename VARCHAR(20),
      filehash VARCHAR(64),
      description VARCHAR(60),
      created TIMESTAMP
    );
EOSQL
