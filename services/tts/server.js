const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.post("/synthesize", (req, res) => {
  res.json({ id: "audio123", text: req.body.text });
});

app.listen(PORT, () => console.log("TTS service on " + PORT));
