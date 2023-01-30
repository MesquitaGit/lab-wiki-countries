import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    //Call the api
    async function getCountries() {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      console.log(response.data);
      setCountry(response.data);
    }

    getCountries();
  }, [id]);

  return (
    <>
      {country ? (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((country) => {
                      return (
                        <>
                          <li>
                            <Link key={country} to={`/country/${country}`}>
                              {country}
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}

export default CountryDetails;
