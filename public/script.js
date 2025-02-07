async function convertTextToSpeech() {
    const text = document.getElementById("textInput").value;
    const lang = document.getElementById("lang").value;

    try {
        const response = await fetch("http://localhost:3000/speak", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, lang }),
        });

        const data = await response.json(); // Get the MP3 file URL
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = `output/${data.filename}`;
        audioPlayer.style.display = "block";
        audioPlayer.play();
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to generate speech!");
    }
}