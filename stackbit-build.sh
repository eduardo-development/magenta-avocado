#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://b8893ff97507.ngrok.io/project/5eea1fb6d11ba340594e8f44/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://b8893ff97507.ngrok.io/pull/5eea1fb6d11ba340594e8f44
curl -s -X POST https://b8893ff97507.ngrok.io/project/5eea1fb6d11ba340594e8f44/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://b8893ff97507.ngrok.io/project/5eea1fb6d11ba340594e8f44/webhook/build/publish > /dev/null
