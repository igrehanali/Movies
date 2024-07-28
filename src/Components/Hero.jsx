import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import endPoints from "../Services/movieservice";

const Hero = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(endPoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovies = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovies);
    });
  }, []);

  const truncate = (str, length) => {
    if (!str) return "";

    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  if (!movie)
    return (
      <>
        <h2>Fetching movies...</h2>
      </>
    );

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px] xl:[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black ">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            className="w-full h-full object-cover object-top"
          />

          <div className="w-full absolute top-[10%] lg:top-[25%] p-4 md:p-8">
            <h1 className="text-3xl md:text-6xl font-nsans-Bold">{title}</h1>
            <div className="mt-8 mb-4 flex gap-3">
              {/* <button className="border c capitalize bg-gray-300 text-black py-2 px-5">
                Play
              </button> */}
              <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-red-600 via-red-500 to-black rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-red-500 before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-red-600 before:via-red-500 before:to-black before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-red-500 active:bg-red-700 focus:ring-red-700">
                Play
              </button>
              <button className="text-black hover:text-gray-300 backdrop-blur-lg bg-gradient-to-tr from-transparent via-transparent to-transparent rounded-2xl py-2 px-6 shadow hover:shadow-red-400 duration-700">
                Watch later
              </button>

              {/* <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
                Watch later
              </button> */}
            </div>
            <p className="text-gray-400 text-sm">{release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncate(overview, 265)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
