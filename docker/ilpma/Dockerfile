FROM node:12.22.6-bullseye-slim

ARG BUILD_DATE

LABEL maintainer="support@ilpmatude.com"
LABEL org.label-schema.description="Ilpma CLI"
LABEL org.label-schema.url="https://ilpmatude.com"
LABEL org.label-schema.build-date=$BUILD_DATE

RUN npm i -s -g @falconandy/ilpma@latest
RUN ilpma --version
