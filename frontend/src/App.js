import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Use the backend URL from environment variable or default to localhost
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setCountryData(null);
    try {
      // Fetch data from the backend
      const response = await axios.get(`${backendUrl}/api/country/${country}`);
      setCountryData(response.data[0]);
    } catch (err) {
      setError('Error fetching country data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Country Information</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={country}
          onChange={handleInputChange}
          placeholder="Enter country name"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {countryData && (
        <div className="country-info">
          <h2>{countryData.name.common}</h2>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
          <p>Region: {countryData.region}</p>
          <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
        </div>
      )}
    </div>
  );
}

export default App;
