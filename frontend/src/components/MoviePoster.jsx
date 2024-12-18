import React from 'react';
import genreMapping from './genreMapping.js'; // Import genre mapping
import { Link } from 'react-router-dom'; // Import Link for routing

const MoviePoster = ({ id, title, genre_ids, releaseDate, posterUrl }) => {
  const genreNames = genre_ids && genre_ids.length > 0
    ? genre_ids.map(id => genreMapping[id] || 'Unknown').join(', ')
    : 'No genre available';

  return (
    <div className="shrink-0 relative flex flex-col rounded-[10px] p-4 w-48" style={{ userSelect: 'none' }}>
      <img 
        className="relative h-auto transition-transform duration-200 transform hover:scale-105" 
        src={posterUrl} 
        alt={title} 
      />
      <Link to={`/movie/${id}`} className="font-bebas-neue text-3xl mt-2 font-normal text-[#dbdcd0] text-ellipsis">
        <h2 style={{ userSelect: 'text', cursor: 'pointer' }}>
          {title}
        </h2>
      </Link>
      <h3 className="font-bebas-neue text-xl font-normal tracking-wide text-[#808080]">
        {genreNames}
      </h3>
      <div className="rounded-[40px] font-['Teko'] text-xl font-normal tracking-wide text-[#808080]">
        {releaseDate || 'Release date not available'}
      </div>
    </div>
  );
};

export default MoviePoster;
