import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen , setIsOpen] = useState(0);
  const link = [
    {name:"Live Score",path:"/live-score"},
    {name:"Schedule",path:"/schedule"},
    {name:"Teams",path:"/teams"},
    {name:"Stats",path:"/stats"},
    {name:"News",path:"/news"},
  ];
  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between h-[50px]">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-[18px] w-[18px] bg-orange-300 rounded-full flex items-center justify-center">
              <span className="text-[12px] text-white font-bold">IPL</span>
            </div>
            <span className="text-black font-bold text-sm">
              Score Tracker
            </span>
          </Link>
          {/* desktop */}
          <div className="hidden  md:flex space-x-6">
              {link.map((link,index)=>(
                // link navigation 
                <Link 
                to={link.path} 
                key={index} 
                className="text-[12px] text-black font-medium transition-colors hover:text-orange-600">
                  {link.name}
                </Link>
              ))}
          </div>
          {/* mobile */}
          {/* toggle */}
          <button  
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" 
          onClick={toggleMenu}
          >

          </button>
        </div>
      </div>
    </div>
  );
}