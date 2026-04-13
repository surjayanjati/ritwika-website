# Ritwika Website

Monochrome designer portfolio scaffold with:

- React + Vite frontend
- Node.js + Express backend
- Dockerized frontend and backend

## Local development

Install dependencies:

```bash
npm run install:all
```

Start the backend:

```bash
npm run dev:server
```

Start the frontend in another terminal:

```bash
npm run dev:client
```

The client expects the API at `http://localhost:5001/api` during local development.

## Docker

```bash
docker compose up --build
```

The site will be available at `http://localhost` and the backend at `http://localhost:5001/api/portfolio`.
