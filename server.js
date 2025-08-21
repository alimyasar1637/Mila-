const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Public (statik) dosyaları sunmak için
app.use(express.static(path.join(__dirname)));

// Ana sayfa için
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
