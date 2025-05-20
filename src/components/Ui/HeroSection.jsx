import { TbArrowBigRightLineFilled } from "react-icons/tb";
import "../../style/HeroSection.css";

const HeroSection = () => {
  const goToEarth = () => {
    window.open("https://earth3dmap.com/#google_vignette", "_blank");
  };
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, one Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history,culture, and beauty of every nation. Search,
            and filter through countries to find the details you
          </p>
          <button onClick={goToEarth}>
            Start Exploring <TbArrowBigRightLineFilled />
          </button>
        </div>
        <div className="hero-image">
          <img
            className="banner-image"
            src="./image/world.png"
            alt="world beauty"
          />
        </div>
      </div>
      <hr />
    </main>
  );
};

export default HeroSection;
