module.exports = {
  development: {
    client: 'sqlite3', //db driver
    connection: {
      filename: './data/posts.db3', //database
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
