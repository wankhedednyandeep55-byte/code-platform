const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/generate-code', async (req, res) => {
    const { prompt } = req.body;
    // Replace with your actual AI API logic
    const response = await axios.post('https://api.openai.com/v1/completions', {
        model: "gpt-4",
        prompt: `Write HTML/CSS/JS for: ${prompt}`,
        // ... headers and keys go here
    });
    res.json(response.data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
