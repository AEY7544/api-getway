const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const SERVICES = {
    tts: process.env.TTS_URL,
    stt: process.env.STT_URL,
    chat: process.env.CHAT_URL,
    doc: process.env.DOC_URL,
    quiz: process.env.QUIZ_URL
};

app.get("/", (req, res) => {
    res.send({ status: "API Gateway running in Docker" });
});

app.post("/api/tts/synthesize", async (req, res) => {
    try {
        const r = await axios.post(`${SERVICES.tts}/synthesize`, req.body);
        res.send(r.data);
    } catch (e) {
        res.status(500).send({ error: "TTS Service Error" });
    }
});

app.listen(3000, () => console.log("Gateway running on port 3000"));
