# ColoredCow Hiring Dashboard — Backend

## Tech Stack

- Laravel (API only)
- PostgreSQL
- AWS S3 (resume storage)
- AWS SES or Mailgun (email)

## Setup Steps

1. Install dependencies:
   ```bash
   composer install
   ```
2. Setup environment:
   ```bash
   cp .env.example .env
   ```
   Update DB, AWS, and mailer configs.
3. Generate app key:
   ```bash
   php artisan key:generate
   ```
4. Run migrations:
   ```bash
   php artisan migrate
   ```
5. Run local server:
   ```bash
   php artisan serve
   ```

## Folder Structure

- `app/Models` — Eloquent models
- `app/Http/Controllers/Api` — API controllers
- `routes/api.php` — API routes
- `database/migrations` — Migrations

## API Overview

- `/api/jobs` — Job postings
- `/api/candidates` — Candidate CRUD
- `/api/applications` — Application tracking, status updates
- `/api/reports` — Analytics endpoints

## Deployment

- Use AWS EC2 for hosting
- Use AWS RDS for PostgreSQL
- Use AWS S3 for file storage
