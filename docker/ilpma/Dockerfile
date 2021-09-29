FROM node:12.22.6-buster-slim

ARG BUILD_DATE

LABEL maintainer="support@ilpmatude.com"
LABEL org.label-schema.description="Ilpma CLI"
LABEL org.label-schema.url="https://ilpmatude.com"
LABEL org.label-schema.build-date=$BUILD_DATE

RUN npm i -g @falconandy/ilpma@latest
RUN ilpma --version
