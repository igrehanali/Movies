const Key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";
const endPoints = {
  popular: `${baseUrl}/movie/popular?api_key=${Key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${Key}`,
  trending: `${baseUrl}/movie/popular?api_key=${Key}&language=en-US7page=2`,
  comedy: `${baseUrl}/search/movie?api_key=${Key}&language=en-US&query=comedy&page=1&include_adult=flase`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${Key}`,
};

export function createImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endPoints;
