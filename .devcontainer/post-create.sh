#!/bin/bash

set -e

# Install latest npm and yarn
npm install -g npm@latest
npm install -g yarn

# Install Ansible for .env encryption/decryption
if ! command -v ansible >/dev/null 2>&1; then
    echo "Installing Ansible..."
    pip3 install --user ansible
fi

# Ensure workspace permissions
chown -R node:node /workspace

# Initialize frontend
cd /workspace/frontend
make init

# Initialize backend
cd /workspace/backend
make init
