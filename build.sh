#!/usr/bin/env bash

# Script to set up dependencies and run front end unit tests

# Check if npm is installed
command -v npm >/dev/null 2>&1 || { echo >&2 "NPM must be installed. https://nodejs.org/download/"; exit 1; }

# Get the script directory
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Install node dependencies
echo "Installing node dependencies..."
cd $DIR && npm install || exit 1

# Build
echo "Building..."
$DIR/node_modules/.bin/grunt build
