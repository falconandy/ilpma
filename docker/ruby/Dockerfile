FROM ruby:2.7.4-slim-buster

LABEL maintainer="support@ilpmatude.com"
LABEL org.label-schema.description="Ilpma CLI + Ruby"
LABEL org.label-schema.url="https://ilpmatude.com"

RUN apt update -qq && apt install -y -qq curl

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt update -qq && apt install -y -qq nodejs
RUN curl -o- -sL https://yarnpkg.com/install.sh | bash

RUN npm i -s -g @falconandy/ilpma@latest

RUN ilpma --version && ruby --version
