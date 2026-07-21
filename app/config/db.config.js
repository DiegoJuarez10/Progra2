module.exports = {
  HOST: "ep-snowy-star-attuxjkg-pooler.c-9.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_hKL9PMWkDi2B",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
