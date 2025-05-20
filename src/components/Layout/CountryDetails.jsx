import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndvData } from "../../api/postApi";
import Loader from "../Ui/Loader";
import "../../style/CountryDetails.css"

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();

  const [country, setCountry] = useState();
  console.log(country?.name?.official);

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountryIndvData(params.id);

      if (resp.status === 200) {
        setCountry(resp.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            className="flag"
          />
          <div className="country-contant">
            <p className="card-title">{country?.name?.official}</p>
            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names:</span>
                {country?.name?.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key]?.common)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Population :</span>
                {country?.population?.toLocaleString()}
              </p>
              <p>
                <span className="card-description">Sub Region :</span>
                {country?.subregion}
              </p>
              <p>
                <span className="card-description">Capital :</span>
                {country?.capital}
              </p>
              <p>
                <span className="card-description">Top Level Domain :</span>
                {country?.tld[0]}
              </p>
              <p>
                <span className="card-description">Currencies :</span>
                {country?.currencies
                  ? Object.keys(country.currencies)
                      .map((curElem) => country.currencies[curElem]?.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Languages :</span>
                {country?.languages
                  ? Object.keys(country.languages)
                      .map((curElem) => country.languages[curElem])
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
        <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn">
            <button>Go Back</button></NavLink>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
