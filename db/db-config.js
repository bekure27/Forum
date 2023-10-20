const mysq12 = require("mysql2");

const dbconn = mysq12.createPool({
  user: "forum_admin",
  database: "forum_db",
  host: "localhost",
  password: "12345678",
  connectionLimit: 10,
});
dbconn.execute("select 'test' ", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});
