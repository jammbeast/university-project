import React from 'react';

const Loop = () => {
  const message = "Соберите свою коллекцию фильмов и сериалов, добавьте личные оценки и делитесь с миром!  ";

  return (
    <div className="w-full bg-[#DBDCD0] py-2 overflow-x-hidden"> {/* overflow-x-hidden prevents horizontal scrollbar */}
      <div className="relative flex whitespace-nowrap animate-loop"> {/* Added animate-loop class */}
        {/* Duplicate the message multiple times for seamless looping */}
        <div className="flex">
          {[...Array(3)].map((_, i) => ( // Create 3 copies for smoother loop
            <span key={i} className="mx-12 font-pt-mono-regular text-4xl flex flex-col">
              {message}
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loop;