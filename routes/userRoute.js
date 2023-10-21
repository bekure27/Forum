const express = require('express');
const router = express.Router();
const {register,login,checkuser} =  require("../controller/userController")



// register route
router.post("/register", register)
// login user
router.post("/login", login)
// check user
router.post("/check", checkuser)


module.exports = router;