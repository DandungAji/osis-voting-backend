const express = require("express");
const router = express.Router();
const Kandidat = require("../models/Kandidat");

// Get All Kandidat
router.get("/", (req, res) => {
  Kandidat.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
