import React from "react";
import "../../style/SearchFilterr.css"

const SearchFilterr = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChnage = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sorCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sorCountry);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChnage}
      />
      <div className="section-searchFilter-option">
        <div>
          <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>
        <div>
          <button onClick={() => sortCountries("daec")}>Daec</button>
        </div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilterr;
