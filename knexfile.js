// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: {
          'postgres://localhost/kblog',
          host: process.env.DB_HOST,
          username: process.env.DB_USER,
          password: process.env.DB_PASS
      }
      debug: true
    },

    db.connect({

    });

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
