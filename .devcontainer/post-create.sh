#!/bin/bash

set -e

# Ensure workspace permissions
chown -R node:node /mika

# Execute latest databse migration
cd /mika/backend
make migrate
