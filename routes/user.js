const express = require("express");
const {
  sinupUser,
  loginUser,

  // getUsers,
  getUser,
  // updateUser,
  // deleteUser,
} = require("../controllers/user");
const authMiddleware = require("../middlewares/auth.middleware");

//router
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", sinupUser);

// // get all  users
// router.get("/all", authMiddleware, getUsers);

// get an user
router.get("/:userId", authMiddleware, getUser);

// // update an user
// router.patch("/:userId", authMiddleware, updateUser);

// // update an user
// router.delete("/:userId", authMiddleware, deleteUser);

module.exports = router;
