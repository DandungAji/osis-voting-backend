const db = require("../config/db");

const Kandidat = {
  getAll: (callback) => {
    const query = "SELECT * FROM kandidat";
    db.query(query, callback);
  },

  create: (nama, visiMisi, foto, callback) => {
    const query =
      "INSERT INTO kandidat (nama, visi_misi, foto) VALUES (?, ?, ?)";
    db.query(query, [nama, visiMisi, foto], callback);
  },
};

module.exports = Kandidat;
