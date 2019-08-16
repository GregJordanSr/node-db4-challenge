// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: '../data/recipes.db3'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // sqlite will not enforce Foreign Keys by default
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // turns on the FK enforcement
      },
  },

};
