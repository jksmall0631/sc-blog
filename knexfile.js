module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/scblog",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "pg",
    connection: "postgres://localhost/scblogTest",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/production"
    },
    useNullAsDefault: true
  }
};
