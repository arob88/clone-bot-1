const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));

// Main webhook endpoint that Twilio will hit
app.post('/webhook', (req, res) => {
    // This is the TwiML response that tells Twilio to play your intro MP3
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Play>https://clone-bot-1-pqk0.onrender.com/AndrewSimulator.mp3</Play>
    <Pause length="1"/>
    <Say voice="alice">Thank you for listening to my intro. Have a great day!</Say>
</Response>`;
    
    res.type('text/xml');
    res.send(twiml);
});

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Voice Clone Webhook is running!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
