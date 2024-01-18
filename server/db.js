require('dotenv').config()
const Pool = require("pg").Pool;

const pool = new Pool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DB,
    port: process.env.DBPORT
});

module.exports = pool;
