import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="about-card-heading">
        Here are the Intersting Facts <br /> About World{" "}
      </h2>
      {/* <hr /> */}
      <div className="gradient-cards">
        {countryFacts.map((elem) => {
          const { id, country, population, capital, fact, interestingFact } =
            elem;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <h2 className="card-title">{country}</h2>
                <p>
                  <span className="card-description">Capital :</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population :</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Fact :</span>
                  {fact}
                </p>
                <p>
                  <span className="card-description">Interesting Facts :</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
