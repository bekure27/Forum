const mysq12 = require("mysql2");

const dbcon = mysq12.createPool({
  user: "forum_admin",
  database: "forum_db",
  host: "localhost",
  password: "12345678",
  connectionLimit: 10,
});

// using callback 

// dbcon.execute("select 'test' ", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });


module.exports = dbcon.promise()