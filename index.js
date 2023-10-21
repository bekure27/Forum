const express = require('express');
const app =  express();
const PORT = 4000
const dbcon = require("./db/db-config")


// user routes middleware

const userRoutes = require("./routes/userRoute")
app.use("/api/users", userRoutes)

// question middeleware



// answer middeleware



app.listen(PORT, (err) => {
if (err) {
console.log(err);
}
else {
    console.log(`server runing on ${PORT}`)
    console.log(`http://localhost:${PORT} `);

}
})