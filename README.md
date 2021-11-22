This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Accessing the dev db

To give access to new users, the admin must add that user's ARN to the policis for the AWS CMK and the AWS secret.

## Creating the databases

We use AWS's RDS Aurora with Web Data API. No connection pooling is required.
To manage migrations, metadata and seeds we use Hasura (https://hasura.io).
After creating the databases we should create a user for Hasura and give necessary permissions to it.

```
CREATE USER hasurauser WITH PASSWORD 'env.HASURA_PASSWORD';

CREATE EXTENSION IF NOT EXISTS citext;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SCHEMA IF NOT EXISTS hdb_catalog;
ALTER SCHEMA hdb_catalog OWNER TO hasurauser;


GRANT USAGE ON SCHEMA public TO hasurauser;
GRANT ALL ON ALL TABLES IN SCHEMA public TO hasurauser;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO hasurauser;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO hasurauser;


CREATE SCHEMA IF NOT EXISTS yard;

GRANT USAGE ON SCHEMA yard TO hasurauser;
GRANT CREATE ON SCHEMA yard TO hasurauser;
GRANT ALL ON ALL TABLES IN SCHEMA yard TO hasurauser;
GRANT ALL ON ALL SEQUENCES IN SCHEMA yard TO hasurauser;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA yard TO hasurauser;
```

You can get the password for the hasura user from the `.env` file of the environmnt.

This is the command to update local migrations from a server:

```
hasura migrate create "start" --from-server --envfile ../.env.development.local --project database --database-name default
```

To update the metadata from the server:

```
hasura metadata export --envfile ../.env.development.local --project database
```

To open the hasura console and see the state of the database:

```
hasura console --envfile ../.env.development.local --project database
```

To apply the migrations to the production:

```
hasura metadata apply --envfile ../.env.production.local --project database
hasura migrate apply --envfile ../.env.production.local --project database --all-databases
hasura metadata reload --envfile ../.env.production.local --project database
```

To check the status of the migrations on the dev database:

```
hasura migrate status --envfile ../.env.development.local --project database --database-name default
```

To add a seed file:

```
hasura seed create initial_user_types --envfile ../.env.development.local --project database --database-name default
```

To apply the seeds to development:

```
hasura seed apply --envfile ../.env.development.local --project database --database-name default
```

## NPM commands to work with db migrations

To see the migration status on development:

```
  npm run migration-status-dev
```

To see the migration status on production:

```
  npm run migration-status-prod
```

To initiate db migration from scratch run the following command:

```
npm run db-migration-init
```

This will create an initial migration folder called "start" and produces the necessary code to reproduce the state of your dev database.
\*\*\* This command should only be run once.

To start the hasura console for the development database run:

```
npm run hasura-console-dev
```

To start the hasura console for the production database run:

```
npm run hasura-console-prod
```

\*\*\* You should never apply changes directly to the production server. Apply all changes to the development server and then apply to the production by running the migration commands (below).

To fetch the metedata from the development server and save it to the migration files run:

```
npm run hasura-fetch-metadata-dev
```

To deploy your changes to the production run the following commands:

```
npm run db-update-metadata-prod
npm run db-migrate-prod
npm run db-reload-metadata-prod
```

To apply seed data to the development database run:

```
npm run seed-dev
```

To apply seed data to the production database run:

```
npm run seed-prod
```
