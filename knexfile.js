module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true
  },
  seed: {
    directory: "./data/seeds",
  },
};
