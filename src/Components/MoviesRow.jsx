import axios from "axios";
import { useEffect, useState } from "react";
import MovieItems from "./MovieItems";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MoviesRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const rowId = Math.floor(Math.random() * 1000);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, []);

  const slider = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      <h2 className="f font-nsans-Bold md:text-xl p-4 capitalize">{title}</h2>

      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={() => slider(-400)}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItems movie={movie} key={movie.id} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slider(400)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
      </div>
    </>
  );
};

export default MoviesRow;
