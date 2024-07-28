import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../Context/AuthContext";
import { db } from "../Services/firebase";
import { createImageUrl } from "../Services/movieservice";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import MovieItems from "../Components/MovieItems";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShow);
      });
    }
  }, [user?.email]);

  if (!movies) {
    return <h1>Loading...</h1>;
  }
  const slider = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  const handleUnlike = async (movie) => {
    const userDoc = doc(db, "users", user.email);

    await updateDoc(userDoc, {
      favShow: arrayRemove(movie),
    });
  };

  return (
    <>
      <div>
        <div>
          <img
            className="w-full block h-[500px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/1ff59121-777a-410e-afeb-6da82228426f/PK-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="img"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
          <div className="p-4 absolute md:p-8 top-[30%]">
            <p className="text-3xl md:text-5xl font-nsans-Bold my-2">
              My Shows
            </p>
            <p className=" font-nsans-Light to-gray-400 text-lg">
              {user.email}
            </p>
          </div>
        </div>

        <h2 className="f font-nsans-Bold md:text-xl p-4 capitalize">
          Fav Show
        </h2>

        <div className="flex relative items-center group pb-6">
          <MdChevronLeft
            onClick={() => slider(-400)}
            className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            size={40}
          />
          <div
            id={`slider`}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies.map((movie) => (
              <div
                className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
                key={movie.id}
              >
                <img
                  src={createImageUrl(
                    movie.backdrop_path ?? movie.poster_path,
                    "w500"
                  )}
                  alt={movie.title}
                  className="w-full h-40 block object-cover object-top"
                />
                <div className="top-0 absolute left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                  <p className="text-xs whitespace-normal md:text-sm flex justify-center items-center h-full font-nsans-Bold">
                    {movie.title}
                  </p>

                  <p>
                    <AiOutlineClose
                      size={30}
                      className="top-2 ring-2  absolute"
                      onClick={() => handleUnlike(movie)}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={() => slider(400)}
            className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
