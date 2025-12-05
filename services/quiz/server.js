const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5005;

app.post("/generate", (req, res) => {
  const { topic } = req.body || {};
  res.json({
    quiz_id: "quiz987",
    topic,
    questions: [
      { q: "Sample question 1?", a: "Answer 1" },
      { q: "Sample question 2?", a: "Answer 2" }
    ]
  });
});

app.listen(PORT, () => console.log("Quiz service on " + PORT));
