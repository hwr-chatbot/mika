#!/bin/bash

set -e

# Ensure workspace permissions
chown -R node:node /mika

# Install global dependencies
yarn install

# Execute latest databse migration
cd /mika/backend
make migrate
