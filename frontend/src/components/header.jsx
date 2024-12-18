import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    if (location.pathname === '/') {
      gsap.set(".letter", { opacity: 1, y: 0 });
      tl.from(".letter", {
        opacity: 0,
        y: -50,
        duration: 0.001,
        ease: "power3.out",
        stagger: 0.03,
      });
      return () => tl.kill();
    }
  }, [location.pathname]);

 
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-2 max-w-screen-xl mx-auto">
        <nav className="bg-[#DBDCD0] header font-bebas-neue font-bold text-3xl text-black w-full flex justify-between items-center px-4">
                    <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              {[..."WATCH"].map((char, index) => (
                <span key={index} className="letter inline-block">
                  {char}
                </span>
              ))}
            </Link>
            <button onClick={toggleModal} className="flex items-center">
              {[..."[ПОИСК]"].map((char, index) => (
                <span key={index} className="letter inline-block">
                  {char}
                </span>
              ))}
            </button>
          </div>

         
          <div className="flex items-center space-x-8">
            <Link to="/auth" className="flex items-center">
              {[..."[АККАУНТ]"].map((char, index) => (
                <span key={index} className="letter inline-block">
                  {char}
                </span>
              ))}
            </Link>
            <Link to="/my-list" className="flex items-center">
              {[..."[МОЙ/ЛИСТ]"].map((char, index) => (
                <span key={index} className="letter inline-block">
                  {char}
                </span>
              ))}
            </Link>
          </div>
        </nav>
      </div>

      {/* Search Modal */}
      {isModalOpen && <SearchModal onClose={toggleModal} />}
    </div>
  );
};

export default Navbar;
