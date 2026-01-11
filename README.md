## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js
- Prisma ORM
- SQLite
- Tailwind CSS
- Hero UI
- React Hot Toast

## Database

The database schema includes Users, Posts, Addresses, and Companies. See the diagram below:

![Database Schema](./docs/image.png)

Seed the database with sample data:

```bash
npx prisma db push --force-reset
npx prisma db seed
```

See [seed.ts](./prisma/seed.ts) for details.
