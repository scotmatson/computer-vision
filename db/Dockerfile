# Defines the base image file
FROM postgres:latest

MAINTAINER Xavier Reid <xavier.reid.sjsu.edu>

LABEL Description="PostgreSQL DB for a facial detection web application"
LABEL Vendor="Team UHH"

# Builds the PostgreSQL database
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
