const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint to handle OpenAI requests
app.post('/api/generate', async (req, res) => {
  try {
    const { systemPrompt, userPrompt, model, maxTokens, temperature, apiKey } = req.body;
    
    // Prioritize the API key from the request, then fall back to environment variable
    const useApiKey = apiKey || process.env.VITE_OPENAI_API_KEY;
    
    if (!useApiKey) {
      return res.status(500).json({ error: 'API key not configured. Please provide an API key in your request or configure it on the server.' });
    }
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: model || 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: maxTokens || 2048,
        temperature: temperature || 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${useApiKey}`
        }
      }
    );
    
    const content = response.data.choices[0].message.content.trim();
    
    res.json({ content });
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Error generating content',
      details: error.response?.data || error.message
    });
  }
});

// Handle all other requests by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 