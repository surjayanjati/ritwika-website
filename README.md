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

## Free deployment

The simplest free setup for this repo is a single Render web service:

- Render builds the client and server from this repo.
- The Express server serves the built React app in production.
- Every push to `main` can auto-deploy through Render's Git integration.

### Render setup

1. Sign in to Render and create a new Blueprint or Web Service from this GitHub repo.
2. Render will detect [`render.yaml`](./render.yaml) in the repo root.
3. Deploy the `main` branch.
4. After the first deploy, open:
   - `/` for the portfolio site
   - `/api/health` for the health check
   - `/api/portfolio` for the API

This uses Render's free web service plan, which is suitable for hobby/testing deployments.
