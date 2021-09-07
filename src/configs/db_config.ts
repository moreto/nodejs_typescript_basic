import { Pool } from "pg";

//// Elephant
// export default new Pool({
//   host: "batyr.db.elephantsql.com",
//   user: "yhivadjn",
//   password: "kFX6yIrPmFgQUBO1NKWJ9zt-pgYvGGq3",
//   port: 5432,
//   database: "yhivadjn",
//   ssl: { rejectUnauthorized: false },
//   max: 2,
//   idleTimeoutMillis: 30000,
// });

// // Heroku
// export default new Pool({
//   host: "ec2-54-211-176-156.compute-1.amazonaws.com",
//   user: "syspwxosiecsxh",
//   password: "da37ccb913778c363d084a2541ca95c9595fe2cdfcc6ef04cc79e83681bceb7c",
//   port: 5432,
//   database: "d27vmoqh3rdqop",
//   ssl: { rejectUnauthorized: false },
//   max: 10,
//   idleTimeoutMillis: 30000,
// });

// Localhost
export default new Pool({
  host: "192.168.0.10",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "techfire",
  // ssl: { rejectUnauthorized: false },
  max: 20,
  idleTimeoutMillis: 30000,
});
