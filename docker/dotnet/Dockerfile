FROM mcr.microsoft.com/dotnet/sdk:3.1-buster

ARG BUILD_DATE

LABEL maintainer="support@ilpmatude.com"
LABEL org.label-schema.description="Ilpma CLI + .Net Core"
LABEL org.label-schema.url="https://ilpmatude.com"
LABEL org.label-schema.build-date=$BUILD_DATE

# NOTICE - None of these work to disable the first run Welcome message. See workaround below.
ENV DOTNET_NOLOGO=true
ENV DOTNET_SKIP_FIRST_TIME_EXPERIENCE=true
ENV DOTNET_CLI_TELEMETRY_OPTOUT=true

# NOTICE - Workaround to disable first run Welcome message in 'dotnet build'
# https://github.com/dotnet/sdk/issues/3828
# https://github.com/dotnet/sdk/issues/10411
RUN touch "$HOME"/.dotnet/"$(dotnet --version)".dotnetFirstUseSentinel

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt update -qq && apt install -y -qq nodejs
RUN curl -o- -sL https://yarnpkg.com/install.sh | bash

RUN npm i -s -g @falconandy/ilpma@latest

RUN ilpma --version && dotnet --version
