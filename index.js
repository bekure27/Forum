const express = require('express');
const app =  express();
const PORT = 4000
const dbcon = require("./db/db-config")
const cors = require("cors");

app.use(express.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); 
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});



// app.use(
//   cors({
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//   })
// );

// user routes middleware
const userRoutes = require("./routes/userRoute")

app.use("/api/users", userRoutes)

// question middeleware
const questionRoutes = require("./routes/questionRoute");
app.use("/api/question", questionRoutes);


// answer middeleware
const answerRoute = require("./routes/answerRoute");
app.use("/api/answer", answerRoute);



async function start() {
try {
const result = await dbcon.execute("select 'test' ")
console.log("db connected ");
 await app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server runing on ${PORT}`);
    console.log(`http://localhost:${PORT} `);
  }
});
// console.log(result[0])
} catch (error) {
console.log(error.message)
}}

start()


