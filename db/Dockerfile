# Defines the base image file
FROM postgres:latest

MAINTAINER Xavier Reid <xavier.reid.sjsu.edu>

LABEL Description="PostgreSQL DB for a facial detection web application"
LABEL Vendor="Team UHH"

# Install packages (we need psycopg2 from pip3)
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y \
    python-dev \
    python3-pip \
    libpq-dev

RUN pip3 install psycopg2

# Builds the PostgreSQL database
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
