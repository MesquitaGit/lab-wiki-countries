// src/App.js
import { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //Call the api
    async function getCountries() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    }
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
export default App;
