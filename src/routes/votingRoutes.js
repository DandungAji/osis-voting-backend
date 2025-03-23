const express = require("express");
const router = express.Router();
const Voting = require("../models/Voting");
const Pemilih = require("../models/Pemilih");

//Melakukan Voting
router.post("/", (req, res) => {
  const { id_pemilih, id_kandidat } = req.body;
  Voting.create(id_pemilih, id_kandidat, (err) => {
    if (err) return res.status(500).json({ error: err });
    Pemilih.updateStatusVoting(id_pemilih, () => {
      res.json({ message: "Voting berhasil!" });
    });
  });
});

//Ambil hasil voting
router.get("/results", (req, res) => {
  Voting.getResults((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
