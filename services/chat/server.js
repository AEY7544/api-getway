const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5003;

app.post("/message", (req, res) => {
  const { message } = req.body;
  res.json({ reply: "AI reply: " + message });
});

app.listen(PORT, () => console.log("Chat service on " + PORT));
