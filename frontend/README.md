# HWR Chatbot

A React + TypeScript + Vite web app with Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Yarn](https://yarnpkg.com/) or npm

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. Install dependencies:

    ```bash
    yarn install
    brew install ansible
    ```

3. Decrypt .env variables:

    ```bash
    make decrypt
    ```

4. Start the development server:

    Using Yarn:

    ```bash
    yarn dev
    ```

5. Open your browser and go to [http://localhost:5173](http://localhost:5173)

start backend
cd backend
yarn ts-node-dev src/server.ts

generate and execute migration
cd backend
yarn prisma migrate dev --name init
