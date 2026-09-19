# Riwaayat Business Suite

A responsive business management and analytics dashboard built with React for the TechRiwaayat Advanced React.js internship task. It runs entirely on mock data (no backend) and keeps its state in the browser.

## Setup

```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Demo accounts

| Role    | Email                | Password    | Access                                   |
|---------|----------------------|-------------|------------------------------------------|
| Admin   | admin@riwaayat.pk    | Admin@123   | Everything                               |
| Manager | manager@riwaayat.pk  | Manager@123 | Everything                               |
| Staff   | staff@riwaayat.pk    | Staff@123   | No Purchases, Suppliers, Finance, Reports |

## Technologies

React 18, Vite, React Router 6 (nested and protected routes, lazy-loaded pages), Zustand with persistence, React Hook Form + Zod, Tailwind CSS, Recharts, Lucide icons.

## Project structure

```
src/
  components/ui/         Button, Badge, Card, Modal, Drawer, Dropdown, FormField,
                         SearchBar, Pagination, DataTable, EmptyState, Skeleton, Toaster
  components/<feature>/  Feature components (dashboard, products)
  layouts/               AppLayout, AuthLayout, Sidebar, Topbar
  routes/                Route tree, ProtectedRoute (auth + roles), navigation config
  pages/                 One file per page
  store/                 Zustand stores: auth, theme, products, notifications, toasts
  services/api.js        Mock API with simulated latency
  data/                  Realistic seed data
  hooks/, utils/         useDebounce, useDialog, formatting, CSV export
```

## Build status

| Area | Status |
|------|--------|
| Auth (login, protected and role-based routes, logout) | Done |
| Reusable UI kit and DataTable | Done |
| Dark/light theme (persisted), mobile navigation | Done |
| Dashboard (KPIs, range filter, charts, activity, low stock) | Done |
| Products (search, filters, sort, pagination, CRUD, bulk delete, CSV export, stock adjustment, details) | Done |
| Notifications | Done |
| Orders, Customers, Inventory, Purchases, Suppliers, Finance, Reports, Profile, Settings | Routed, content next |

## Screenshots

Add desktop and mobile screenshots here before submitting.
