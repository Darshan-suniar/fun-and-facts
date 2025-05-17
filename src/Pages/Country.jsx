import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/Ui/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilterr from "../components/Ui/SearchFilterr";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const resp = await getCountryData();
      setCountries(resp.data);
    });
  }, []);

  if (isPending) return <Loader />;
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  //   here is the main logic
  const folterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilterr
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid  grid-four-cols">
        {folterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
