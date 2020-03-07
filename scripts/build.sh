#! /bin/bash

# Set stage variable for socket address.
STAGE=$1

if [ -z "$STAGE" ]; then
  STAGE="development"
fi

# Remove previous build.
npm -s run clean

echo "Starting build phase"

webpack --env.NODE_ENV=$STAGE

echo "Build Complete\n"
