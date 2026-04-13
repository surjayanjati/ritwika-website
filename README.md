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

## Vercel deployment

This repo is configured for Vercel:

- The frontend is built from `client`.
- The API is served by Vercel Functions under `/api`.
- Every push to `main` can auto-deploy through Vercel's Git integration.
- GitHub Actions runs CI on every push to `main` and on pull requests.

### Vercel setup

1. Import the GitHub repo into Vercel.
2. Keep the project root as the repo root.
3. Vercel will use [`vercel.json`](./vercel.json) for build settings.
4. Deploy the `main` branch.

After deployment, check:

- `/`
- `/api/health`
- `/api/portfolio`

### Pipeline

This repo includes a GitHub Actions workflow at `.github/workflows/ci.yml`.

- Pull requests run CI checks before merge.
- Pushes to `main` run CI automatically.
- Vercel deploys the latest pushed commit from `main`.
