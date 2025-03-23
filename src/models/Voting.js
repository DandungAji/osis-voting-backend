const db = require("../config/db");

const Voting = {
  create: (idPemilih, idKandidat, callback) => {
    const query = "INSERT INTO voting (id_pemilih, id_kandidat) VALUES (?, ?)";
    db.query(query, [idPemilih, idKandidat], callback);
  },

  getResults: (callback) => {
    const query = `SELECT kandidat.id, kandidat.nama, COUNT(voting.id) AS jumlah_vote FROM voting JOIN kandidat ON voting.id_kandidat = kandiat.id GROUP BY kandidat.id, kandidat.nama ORDER BY jumlah_vote DESC`;
    db.query(query, callback);
  },
};

module.exports = Voting;
