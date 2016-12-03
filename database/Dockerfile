# Defines the base image file
FROM xreid/postgres

MAINTAINER Xavier Reid <xreid@outlook.com>

LABEL Description="PostgreSQL DB with redis for a facial detection web application"
LABEL Vendor="Team UHH"

RUN apt-get update && apt-get install -y redis-server
EXPOSE 6379
