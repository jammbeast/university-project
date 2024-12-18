import React, { useState, useEffect, useRef } from 'react';
import MoviePoster from './MoviePoster';

const GridNowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('movies');
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/${category === 'tv' ? 'tvShows' : 'movies'}`);
        if (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`)}
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [category]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    e.preventDefault(); // Отключение выделения при нажатии
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Отключение выделения при перемещении
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; // Скорость прокрутки
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="">
      {/* Категории переключения */}
      <div className="pt-20 grid sm:grid-cols-2 lg:grid-cols-11 gap-x-10 mx-24 px-1">
        <div className=" col-start-3 col-span-6 text-[#dbdcd0] text-9xl font-bebas-neue font-bold">Популярные Новинки </div>
        
        <button className={`col-start-3 col-span-2 text-start font-bebas-neue font-bold text-4xl ${category === 'tv' ? 'bg-[#D69142]' : 'bg-[#DBDCD0]'}`}
        onClick={()=>setCategory('tv')}
        >Сериалы
           </button>
        <button className={`col-start-4 text-start font-bebas-neue font-bold text-4xl ${category ==='movies' ? 'bg-[#9B0C29]' : 'bg-[#DBDCD0]'}`}
        onClick={()=>setCategory('movies')} 
        >Фильмы </button>
      </div>
      <div
        className="pl-11 mx-auto flex w-full max-w-[100%] space-x-20 overflow-x-auto bg-black px-4 py-12 carousel-container"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'default' }} // Курсор при перемещении
      >
        {movies.map((movie) => (
  <MoviePoster
    id={movie.id}
    title={movie.title || movie.name} // У сериалов используется поле 'name'
    genre_ids={movie.genre_ids}
    releaseDate={movie.release_date || movie.first_air_date} // У сериалов это 'first_air_date'
    posterUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
  />
))}
      </div>
    </div>
  );
};

export default GridNowPlaying;


// key={movie.id}
//     title={movie.title || movie.name} // У сериалов используется поле 'name'
//     genres={movie.genre_ids}
//     releaseDate={movie.release_date || movie.first_air_date} // У сериалов это 'first_air_date'
//     posterUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}