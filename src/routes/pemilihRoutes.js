const express = require("express");
const router = express.Router();
const Pemilih = require("../models/Pemilih");

// Login Pemilih
router.post("/login", (req, res) => {
  const { nis, password } = req.body;
  Pemilih.findByNIS(nis, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ error: "NIS atau password salah" });
    }
    res.json({ message: "Login berhasil", pemilih: results[0] });
  });
});

module.exports = router;
