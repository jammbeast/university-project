import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/header';
function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(`/api/movie/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(error.message);
      }
    }
    fetchMovie();
  }, [id]);

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!movie) return <p className="text-center">Loading...</p>;

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-8 bg-transparent text-[#DBDCD0]">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 lg:w-1/4 sm:shadow-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="font-pt-mono-regular mb-2 text-lg md:text-xl">({movie.release_date})</h1>
            <div className="flex items-center justify-between">
                <h1 className="font-pt-mono-regular text-2xl md:text-4xl font-bold">{movie.title}</h1>
                <button className="text-white text-2xl">
                  ❤️
                </button>
            </div>
            <p className="font-bebas-neue text-xl md:text-2xl lg:text-4xl my-4 bg-[#9B0C29] pl-4 break-words">{movie.tagline}</p>
            <p className="text-2xl font-pt-mono-regular mt-8">{movie.overview}</p>
          </div>
        </div>
        <div className="mt-10 font-pt-mono-regular text-xl md:text-2xl flex flex-wrap gap-2">
          {movie.genres.map((genre, index) => (
            <span key={genre.id} className="whitespace-nowrap">
              {genre.name}
              {index < movie.genres.length - 1 && ' / '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
