const express = require("express");
const { signupUser, loginUser, sinupUser } = require("../controllers/user");

//router
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", sinupUser);

module.exports = router;
