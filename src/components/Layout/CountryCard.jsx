import React from "react";
import "../../style/CountryCard.css";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <div>
      <li className="country-card card">
        <div className="container-card bg-white-box">
          <img src={flags.svg} alt={flags.alt} />

          <div className="countryInfo">
            <p className="card-title">
              <span>Common Name:</span>
              {name.common}
            </p>
            <p className="card-title">
              <span>Capital:</span>
              {capital[0]}
            </p>
            <p className="card-title">
              <span>Population:</span>
              {population.toLocaleString()}
            </p>
            
            <p className="card-title">
              <span>Region:</span>
              {region}
            </p>
            <NavLink to={`/country/${name.common}`}>
                <button>Read More</button>
            </NavLink>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CountryCard;
