# MIKA

**MIKA** is a modern chatbot application with a full-stack architecture. It consists of:

- A **React + TypeScript + Vite frontend** for user interaction.
- A **Fastify + TypeScript + Prisma backend** for database management and API endpoints.
- A **Rasa conversational AI service** for natural language understanding and chatbot logic.

This README will guide you through setting up and running the project locally.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Services](#running-the-services)
4. [Project Structure](#project-structure)

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Make](https://www.gnu.org/software/make/) (for `make` commands)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mika.git
cd mika
```

2. Install dependencies for frontend and backend:

```bash
# Frontend
cd frontend
yarn install

# Backend
cd ../backend
yarn install
```

3. Set up your database (for Prisma backend):

```bash
cd backend
npx prisma migrate dev
```

## Running the Services

You can start all three services individually. Make sure to open separate terminals if needed:

### Frontend

This will start the React + Vite frontend at `http://localhost:5173`:

```bash
make start-frontend
```

### Backend

This starts the Fastify backend API at `http://localhost:8080`:

```bash
make start-backend
```

### Rasa Service

This launches the Rasa conversational AI service at `http://localhost:5005`:

```bash
make start-rasa
```

## Project Structure

```
mika/
├─ frontend/          # React + Vite frontend
├─ backend/           # Fastify + Prisma backend
├─ rasa/              # Rasa conversational AI
├─ Makefile           # Commands to start services
└─ README.md
```

- **frontend/**: Contains all UI code and components.
- **backend/**: Handles API requests, database interactions, and Prisma models.
- **rasa/**: Contains Rasa NLU, dialogue models, and training data.
