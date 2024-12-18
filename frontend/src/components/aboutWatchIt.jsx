import { useState } from 'react';

const AboutWatchIt = () => {
  return (
    <div className="container mx-auto px-40 py-8">
      {/* Основной контейнер */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Первый блок */}
        <div className="bg-black text-center p-6 shadow-[10px_-10px_0_0_#9B0C29]">
          <div className=" inline-block font-bebas-neue px-6 bg-[#DBDCD0] text-black text-2xl lg:text-4xl font-bold">
            Ваш персональный список ждёт!
          </div>
          <p className="text-[#DBDCD0] font-pt-mono-regular text-sm lg:text-base mt-4">
            Больше не потеряйте ни один фильм или сериал, который стоит посмотреть! Ваш персональный список станет проводником в мире кино и сериалов. 
            <span className="block mt-2">Начните составлять прямо сейчас!</span>
          </p>
        </div>

        {/* Второй блок */}
        <div className="bg-black text-center p-6 shadow-[-10px_10px_0_0_#D69142]">
          <div className="font-bebas-neue font-bold text-black text-2xl lg:text-4xl inline-block px-4 bg-[#DBDCD0]">
            Оцените свои впечатления!
          </div>
          <p className="text-[#DBDCD0] font-pt-mono-regular text-sm lg:text-base mt-4">
            Делитесь своими мнениями о каждом фильме и сериале с помощью нашей простой и интуитивной системы оценок.
          </p>
        </div>

        {/* Третий блок (опционально) */}
        <div className="bg-black text-center p-6 shadow-[10px_-10px_0_0_#808080] col-span-1 md:col-span-2">
        <div className="inline-block font-bebas-neue px-6 bg-[#DBDCD0] text-black text-2xl lg:text-4xl font-bold">
            Свет. Камера.
          </div>
          <p className="text-[#DBDCD0] font-pt-mono-regular text-sm lg:text-base mt-4">
            Делитесь своими впечатлениями об актёрской игре и неожиданных поворотах сюжета. Это был шедевр или провал? 
            <span className="block mt-2">Берите попкорн и начинайте рецензировать!</span>
          </p>
          
          {/* Блок REVIEWS! */}
          <div className=" mt-8">
          <div className="inline-block font-bebas-neue px-6 bg-[#DBDCD0] text-black text-2xl lg:text-6xl font-bold">
            РЕЦЕНЗИИ!
          </div>
          </div>
        </div>
      </div>
        </div>
  );
};

export default AboutWatchIt;
