// Update with your config settings.

module.exports = {

    development: {
      client: 'postgresql',
      connection:
          'postgres://localhost/kblog'
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
