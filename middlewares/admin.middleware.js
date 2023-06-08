const isAdmin = (req, res, next) => {
  if (req.user?.username === "admin") {
    next();
  } else {
    res.status(403).jon({ error: "Unauthorized access" });
  }
};

module.exports = isAdmin;
