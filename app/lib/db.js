// db.js
const { Pool } = require('pg');

// Replace these with your PostgreSQL connection details
// const connectionString = 'postgresql://username:password@localhost:5432/yourdatabase';
const pool = new Pool();

// Export the PostgreSQL connection pool
module.exports = pool;
