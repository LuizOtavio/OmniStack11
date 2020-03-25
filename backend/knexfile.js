// Update with your config settings.
require('dotenv').config();

module.exports = {

  /*development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    }, 
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },*/

  development: {
    client: 'mysql',
    connection: {
      host : process.env.MYSQLHOST,
      user : process.env.MYSQLUSER,
      password : process.env.MYSQLPASS,
      database : process.env.MYSQLDB
    }, 
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
