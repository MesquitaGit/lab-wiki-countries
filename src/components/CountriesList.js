import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {props.countries.length > 0 ? (
            props.countries.map((country) => {
              return (
                <NavLink
                  className="list-group-item list-group-item-action"
                  to={`/country/${country.alpha3Code}`}
                >
                  <li key={country.id}>
                    <h3>{country.name.official}</h3>
                  </li>
                </NavLink>
              );
            })
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
