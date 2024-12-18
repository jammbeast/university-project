import React, { useState, useEffect } from 'react';
import axios from 'axios';
import genreMapping from './genreMapping.js'; 
import {Link} from 'react-router-dom';
function SearchModal({ onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searchType, setSearchType] = useState('multi'); // По умолчанию 'multi'

    const handleSearch = async () => {
        try {
            const endpoint = searchType === 'movie' 
                ? '/api/movie/search' 
                : searchType === 'tv' 
                ? '/api/tv/search' 
                : '/api/search';
                
            const response = await axios.get(`http://localhost:3001${endpoint}`, {
                params: { query }
            });
            setResults(response.data.results);
        } catch (error) {
            console.error("Error fetching search results");
        }
    };

    useEffect(() => {
        if (query) {
            handleSearch();
        }
    }, [query, searchType]);

    const toggleSearchType = (type) => {
        setSearchType((prevType) => (prevType === type ? 'multi' : type));
    }
    const filteredResults = results.filter(item => item.genre_ids && item.genre_ids.length > 0);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-100">
            <div className="bg-black text-white p-6 stroke-white w-full max-w-[50%] min-h-[80vh] max-h-[80vh] relative overflow-y-auto" style={{boxShadow: '0 0 0 3px #DBDCD0'}}>
            <div className="flex items-center justify-between">
                
                <h2 className="text-4xl font-bebas-neue  text-[#DBDCD0]">Поиск</h2>
                <button onClick={onClose} className="top-6 right-4 text-2xl font-rubik-mono-one-regular font-bold text-[#DBDCD0]">
                    x
                </button>
                </div>
                <input
                    className="mt-4 p-2 text-2xl bg-[#DBDCD0] font-bebas-neue text-black w-full" 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Введите название"
                />

                <div className="flex mt-4 space-x-4">
                    <button
                        onClick={() => toggleSearchType('movie')}
                        className={`${searchType === 'movie' ? 'bg-[#9B0C29] w-[20%]' : 'bg-[#DBDCD0]'} p-2 text-black font-bebas-neue text-2xl`}
                    >
                        Фильмы
                    </button>
                    <button
                        onClick={() => toggleSearchType('tv')}
                        className={`p-2  ${searchType === 'tv' ? 'bg-[#D69142] w-[20%]' : 'bg-[#DBDCD0]'} text-black font-bebas-neue text-2xl`}
                    >
                        Сериалы
                    </button>
                </div>

                <div className="mt-4 results grid gap-4">
    {filteredResults.map((item) => (
        <div key={item.id} className="result-item p-4 rounded-md flex">
            {item.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} 
                    alt={item.title || item.name} 
                    className="w-20 h-auto rounded-md" 
                />
            )}
            <div className="flex flex-col ml-4">
                <Link to={`/movie/${item.id}`} className="result-item mt-2 rounded-md flex">
                    <h3 className="text-3xl font-bebas-neue">{item.title || item.name}</h3>
                </Link>
                <h3 className="font-pt-mono-regular mt-2">({(item.release_date || item.first_air_date)?.slice(0, 4)})</h3>
                <p className="text-gray-400 mt-2 font-pt-mono-regular">
                    /{item.genre_ids && item.genre_ids.length > 0 ? item.genre_ids.map(id => genreMapping[id] || 'Unknown').join(' /') : 'No genre available'}
                </p>
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    );
}

export default SearchModal;
