import React from "react";

const HomeGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-black text-white">
      {children}
    </div>
  );
};

export default HomeGrid;