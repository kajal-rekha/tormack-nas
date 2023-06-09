const os = require("os");
const useragent = require("express-useragent");
const Device = require("../models/device");

// get device data
const getDevice = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
