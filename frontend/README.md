# ColoredCow Hiring Dashboard — Frontend

## Tech Stack

- React.js (with Vite)
- Tailwind CSS (utility-first CSS)
- Redux Toolkit (state management)
- Axios (API calls)
- Chart.js or Recharts (for reports/graphs)

## Setup Steps

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Folder Structure

- `src/components` — UI components (Sidebar, Table, Modal, etc.)
- `src/pages` — Screens (Dashboard, Applications, Reports, etc.)
- `src/store` — Redux slices
- `src/api` — API services

## Responsive Design

- Tailwind breakpoints: mobile, tablet, desktop.

## Deployment

- Use AWS S3+CloudFront for static site, or EC2 for Node server.s
