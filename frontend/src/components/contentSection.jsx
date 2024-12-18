import React, {useEffect} from 'react';

const ContentSection = () => {
  
  return (
    <div>
      {/*  Watchlist */}
      <div className="pt-3 mx-24 px-1">
        <div className="col-start-2 col-span-4 bg-[#9B0C29] text-center row-span-6 pb-2 shadow-[10px_-10px_0_0_#DBDCD0]">
          <div className="text-[#DBDCD0] inline-block font-pt-mono-regular px-6 bg-black text-3xl mt-2">
          Ваш персональный 
            <br /> список ждёт!
          </div>
          <div className="text-center font-pt-mono-regular text-3xl pt-4">
          Больше не потеряйте ни один фильм или сериал, который стоит посмотреть!
          </div>
          <div className="text-center font-pt-mono-regular text-3xl pt-8">
          Ваш персональный список станет проводником в мире кино и сериалов. Начните составлять прямо сейчас!
          </div>
        </div>

        {/* Rating */}
        <div className="col-start-8 col-span-4 row-span-4 bg-[#D69142] pb-2 z-10 shadow-[-10px_10px_0_0_#DBDCD0]">
          <div className="font-pt-mono-regular text-[#DBDCD0] text-3xl mt-2 inline-block px-4 bg-black">
          Оцените свои <br /> впечатления!
          </div>
          <div className="text-center font-pt-mono-regular text-3xl pt-8">
          Делитесь своими мнениями о каждом фильме и сериале с помощью нашей простой и интуитивной системы оценок.
          </div>
        </div>
      </div>

      {/*  Reviews */}
      <div className="pt-20 mx-24 px-1">
        <div className="col-start-2 col-span-10 relative bg-[#808080] mt-10 font-pt-mono-regular p-6 min-h-[400px]">
          {/**/}
          <div className="text-left pl-4 inline-block">
            <div className="text-[#DBDCD0] text-5xl">СВЕТ</div>
            <div className="text-[#DBDCD0] text-6xl">КАМЕРА</div>
            <div className="font-pt-mono-regular text-3xl pt-4 max-w-3xl">
            Делитесь своими впечатлениями об актёрской игре и неожиданных поворотах сюжета. Это был шедевр или провал? Ваши отзывы помогут другим зрителям и могут стать началом обсуждений. Берите попкорн и начинайте рецензировать!
            </div>
          </div>

          {/* Блок REVIEWS! */}
          <div className="relative mt-10">
            <div className="flex justify-between items-center">
              {/* Первый  REVIEWS! */}
              <div className="relative text-7xl flex items-center ">
                Рецензии!
                <div className="absolute left-[40px] top-[10px] bg-black w-[88px] h-[64px] z-0"></div>
                <div className="absolute left-[40px] top-0 text-[#DBDCD0] z-10">ец</div>
              </div>

              {/* второй REVIEWS! */}
              <div className="relative text-7xl flex items-center">
                
                Рецензи
                <div className="relative text-[#DBDCD0] z-10">и!</div>
                <div className="absolute left-[-86px] top-1 bg-black w-[88px] h-[64px] z-0"></div>
                <div className="absolute left-[300px] top-1 bg-black w-[88px] h-[64px] z-0"></div>
              </div>

              {/* Третий REVIEWS! */}
              <div className="text-7xl text-[#DBDCD0]">Рецензии!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;