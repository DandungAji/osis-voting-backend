const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// Login admin
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Admin.findByUsername(username, (err, results) => {
    if (err) return req.status(500).json({ error: err });
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ error: "Username atau password salah" });
    }
    res.json({ message: "Login berhasil", admin: results[0] });
  });
});

module.exports = router;
