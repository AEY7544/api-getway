const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5002;

app.post("/transcribe", (req, res) => {
  const { audio } = req.body || {};
  res.json({ id: "stt123", text: "transcribed text example", audio });
});

app.listen(PORT, () => console.log("STT service on " + PORT));
