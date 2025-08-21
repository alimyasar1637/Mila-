const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Public klasörünü açıyoruz
app.use(express.static(path.join(__dirname)));

// Ana sayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});
