require("dotenv").config();

const mysq12 = require("mysql2");

const dbcon = mysq12.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
});

// const dbcon = mysql2.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: 3306,
//   connectionLimit: process.env.DB_CONNECTION_LIMIT,
// });

// using callback

// dbcon.execute("select 'test' ", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbcon.promise();
