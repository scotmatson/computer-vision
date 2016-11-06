# Dockerfile
# Build:
#   docker build -t [image]:[tag] [source]
#
# Run
#   docker run --rm -ti --name [name] -v [path-to-repo]:[/srv/httpd] -p [host-port]:[container-port] [image]:[tag] bash


# Defines the base image file
FROM ubuntu:14.04

MAINTAINER Scot Matson <sjpmatson@gmail.com>

LABEL Description="Development image for a facial recognition web app"
LABEL Vendor="Team UHH"

# Set installation to non-interactive mode
ARG DEBIAN_FRONTEND=noninteractive

# Set the terminal env variable
RUN echo "export TERM=xterm" >> /root/.bashrc

# Set locale
RUN apt-get update && apt-get install -y --no-install-recommends \
    language-pack-en=1:14* && \
    update-locale LANG=en_US.UTF-8

# Install packages
RUN apt-get install -y --no-install-recommends \
    ca-certificates \
    python3-dev \
    python3-pip \
    nodejs \
    nodejs-legacy \
    npm \
    vim \
    git \
    ssh

# Generate 'node' symlink; resolves Webpack misnaming error
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Install Python libraries (and explicit dependencies)
RUN pip3 install --upgrade pip && pip3 install \
    itsdangerous \
    click \
    MarkupSafe \
    Jinja2 \
    Werkzeug \
    flask

# Import the project
RUN mkdir /srv/httpd

# Set the public facing directory
WORKDIR /srv/httpd/public

# Execute the Flask web server
EXPOSE 5000
CMD ["python3 app.py"]
