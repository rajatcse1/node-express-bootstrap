# node-express-bootstrap

# Basic setup

## init node app

npm init -y

## runtime deps

`npm install express mongoose zod dotenv morgan cors express-async-errors`

## dev deps (types & tooling)

`npm install -D typescript ts-node-dev @types/express @types/node @types/morgan @types/cors`

## test dependency

`npm install -D jest ts-jest supertest @types/jest @types/supertest mongodb-memory-server`

# Structure

```
node-express-bootstrap/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── models/
│   │   └── user.model.ts
│   ├── routes/
│   │   └── user.routes.ts
│   ├── middlewares/
│   │   ├── errorHandler.ts
│   │   └── validate.ts
│   ├── validations/
│   │   └── user.validation.ts
│   ├── utils/
│   │   └── apiResponse.ts
│   └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

```
