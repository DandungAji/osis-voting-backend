const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const adminRoutes = require("./src/routes/adminRoutes");
const pemilihRoutes = require("./src/routes/pemilihRoutes");
const kandidatRoutes = require("./src/routes/kandidatRoutes");
const votingRoutes = require("./src/routes/votingRoutes");

// Gunakan Routes
app.use("/api/admin", adminRoutes);
app.use("/api/pemilih", pemilihRoutes);
app.use("/api/kandidat", kandidatRoutes);
app.use("/api/voting", votingRoutes);

// Jalankan Server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
