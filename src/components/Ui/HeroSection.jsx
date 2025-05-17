import { TbArrowBigRightLineFilled } from "react-icons/tb";

const HeroSection = () => {
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
          <button>
            Start Exploring <TbArrowBigRightLineFilled />
          </button>
        </div>
        <div className="hero-image">
          <img src="./image/world.png" alt="world beauty" />
        </div>
      </div>
      <hr/>
    </main>
  );
};

export default HeroSection;
