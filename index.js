const express = require("express");
const gTTS = require("gtts");
const cors = require("cors");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve frontend files

// Text-to-Speech Endpoint
app.post("/speak", (req, res) => {
    const { text, lang } = req.body;

    const language = lang || "en"; // Default to English
    const gtts = new gTTS(text, language);

    let generatedFile = `${uuidv4()}.mp3`
    const filePath = path.join(`${__dirname}/public/output`, generatedFile);

    gtts.save(filePath, function (err) {
        if (err) {
            return res.status(500).json({ error: "Error generating speech!" });
        }
        res.status(200).json({
            status: "success",
            message: "Audio generated successfully",
            filename: generatedFile
        });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
