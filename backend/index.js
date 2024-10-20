const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Route to get country information
app.get('/api/country/:name', async (req, res) => {
  const countryName = req.params.name;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving country information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
