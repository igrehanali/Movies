import Hero from "../Components/Hero";
import MoviesRow from "../Components/MoviesRow";
import endPoints from "../Services/movieservice";

const Home = () => {
  return (
    <>
      <Hero />
      <MoviesRow title="Upcoming" url={endPoints.upcoming} />
      <MoviesRow title="Trending" url={endPoints.trending} />
      <MoviesRow title="TopRated" url={endPoints.topRated} />
      <MoviesRow title="comedy" url={endPoints.comedy} />
      <MoviesRow title="popular" url={endPoints.popular} />
    </>
  );
};

export default Home;
