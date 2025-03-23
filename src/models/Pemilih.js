const db = require("../config/db");

const Pemilih = {
  create: (nama, nis, password, callback) => {
    const query = "INSERT INTO pemilih (nama, nis, password) VALUES (?, ?, ?)";
    db.query(query, [nama, nis, password], callback);
  },

  findByNIS: (nis, callback) => {
    const query = "SELECT * FROM pemilih WHERE nis = ?";
    db.query(query, [nis], callback);
  },

  updateStatusVoting: (id, callback) => {
    const query = 'UPDATE pemilih SET status_voting = "sudah" WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Pemilih;
