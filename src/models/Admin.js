const db = require("../config/db");

const Admin = {
  create: (username, password, callback) => {
    const query = "INSERT INTO admin (username, password) VALUES (?, ?)";
    db.query(query, [username, password], callback);
  },

  findByUsername: (username, callback) => {
    const query = "SELECT * FROM admin WHERE username = ?";
    db.query(query, [username], callback);
  },
};

module.exports = Admin;
