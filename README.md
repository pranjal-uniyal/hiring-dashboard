# ColoredCow Hiring Dashboard

This monorepo contains the source code for ColoredCow’s centralized hiring dashboard.

## Structure

- `/backend` — Laravel REST API (PostgreSQL, S3, Email)
- `/frontend` — Vite + React + Tailwind CSS dashboard

## Getting Started

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# set up your database, S3, and mail configs in .env
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

- Use AWS EC2/RDS/S3 for deployment.

---

## Contributing

- Use feature branches and submit PRs for review.
- Follow code style guides and keep docs up to date.

---
