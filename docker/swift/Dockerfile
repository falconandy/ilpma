FROM swift:5.5.0-focal

ARG BUILD_DATE

LABEL maintainer="support@ilpmatude.com"
LABEL org.label-schema.description="Ilpma CLI + Swift"
LABEL org.label-schema.url="https://ilpmatude.com"
LABEL org.label-schema.build-date=$BUILD_DATE

RUN apt update && apt install -y curl

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt update && apt install -y nodejs
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN npm i -g @falconandy/ilpma@latest

RUN ilpma --version
RUN swift --version
