# Text-to-Speech Converter (Node.js + Express)

## 📌 Overview
This is a simple **Text-to-Speech (TTS) Converter API** built using **Node.js** and **Express.js**. It allows users to send text input and receive an **MP3 file** with the spoken version of the text using **Google Text-to-Speech (gTTS)**.

## 🚀 Features
✅ Convert text to speech (MP3 format)  
✅ Support for multiple languages  
✅ Simple REST API with Express.js  
✅ Play or download generated audio  
✅ Frontend for easy interaction  

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Text-to-Speech Engine:** Google Text-to-Speech (gtts)
- **Frontend:** HTML, JavaScript, Fetch API
- **Storage:** Local file system (for MP3 files)

## 📦 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/text-to-speech-api.git
cd text-to-speech-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server
```sh
npm run dev
```
Server will run on **http://localhost:3000**

## 📡 API Endpoints
### 🔹 Convert Text to Speech
**POST** `/speak`

#### Request Body (JSON):
```json
{
  "text": "Hello, welcome to my Text-to-Speech API!",
  "lang": "en"
}
```

#### Response:
- **MP3 file URL** (to download or play audio)

## 🎨 Frontend Usage
A simple frontend (`index.html`) is included in the **public/** folder:
1. Open **http://localhost:3000** in a browser.
2. Enter text and select a language.
3. Click "Convert to Speech" to play the generated audio.


