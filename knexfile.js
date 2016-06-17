// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: 'postgres://localhost/kblog',
      debug: true
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'kblog'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
