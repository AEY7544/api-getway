const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5004;

app.post("/upload", (req, res) => {
  const { fileName } = req.body || {};
  res.json({ document_id: "doc123", message: "Document uploaded: " + fileName });
});

app.listen(PORT, () => console.log("Document service on " + PORT));
