# Defines the base image file
FROM postgres:latest
#FROM xreid/postgres

MAINTAINER Xavier Reid <xreid@outlook.com>

LABEL Description="PostgreSQL DB with redis for a facial detection web application"
LABEL Vendor="Team UHH"

# Builds the PostgreSQL database
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

RUN apt-get update && apt-get install -y redis-server
EXPOSE 6379
