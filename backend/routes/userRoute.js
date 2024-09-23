const express = require('express');
const router = express.Router();
const {register,login,checkuser,updateUser} =  require("../controller/userController")
const authMiddleware = require('../middleware/authMiddleware')


// register route
router.post("/register", register)
// login user
router.post("/login", login)
// check user
router.post("/check", authMiddleware,checkuser);

// Update user profile
router.put("/:userId", updateUser);

module.exports = router;