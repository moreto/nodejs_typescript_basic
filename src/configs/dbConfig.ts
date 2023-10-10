import { Pool } from "pg";

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
