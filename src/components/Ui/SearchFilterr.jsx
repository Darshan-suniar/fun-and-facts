import React from "react";

const SearchFilterr = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChnage = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChnage}
      />
      <div>
        {/* <div><button onClick={sortCountries}>A</button></div>1 */}
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
