# MIKA

MIKA is the official chatbot of the HWR (Hochschule für Wirtschaft und Recht Berlin), designed to assist international students by answering commonly asked questions. This repository contains the source code for the frontend, backend, and Rasa service, all configured to run in a VS Code Devcontainer for a seamless and consistent development environment.

## Prerequisites

Before setting up the project, make sure the following tools are installed on your system:

### 1. Visual Studio Code (VS Code)

VS Code is required to use the devcontainer setup ([https://code.visualstudio.com/](https://code.visualstudio.com/)).

### 2. Docker

Docker is required to run all services inside containers ([https://www.docker.com](https://www.docker.com/products/docker-desktop/)).

### 3. Ansible / Ansible Vault

Required to decrypt encrypted environment files.

```bash
pip install ansible
```

## Project Setup

Follow these steps to get the project running locally and inside the VS Code devcontainer:

### 1. Create the Vault Password File

Create a file named `vaultpass` in the **project root** and write your vault password into it:

```bash
echo "your-vault-password" > vaultpass
```

> ⚠️ Keep this file private and do not commit it to version control.

### 2. Decrypt Environment Files

Run the following command to decrypt all encrypted `.env` files using Ansible Vault:

```bash
make decrypt-all
```

This will generate the required `.env` files for development.

### 3. Open in VS Code Devcontainer

1. Open the project in VS Code.
2. When prompted to **rebuild the devcontainer**, choose **Rebuild**.

The devcontainer will install dependencies and set up the environment automatically.

## Project structue

The repository is organized as follows:

- Frontend: Built with Vite, TypeScript, React, and Tailwind CSS for a modern, responsive user interface.
- Backend: Powered by Fastify, Prisma, and MySQL for efficient API and database management.
- Rasa: Implements the chatbot's conversational AI logic using Rasa.
