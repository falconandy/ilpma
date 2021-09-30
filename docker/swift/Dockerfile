FROM swift:5.5.0-focal

ARG BUILD_DATE

LABEL maintainer="support@ilpmatude.com"
LABEL org.label-schema.description="Ilpma CLI + Swift"
LABEL org.label-schema.url="https://ilpmatude.com"
LABEL org.label-schema.build-date=$BUILD_DATE

RUN apt update -qq && apt install -y -qq curl

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt update -qq && apt install -y -qq nodejs
RUN curl -o- -sL https://yarnpkg.com/install.sh | bash

RUN npm i -s -g @falconandy/ilpma@latest

RUN ilpma --version && swift --version
