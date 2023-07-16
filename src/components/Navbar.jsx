import { useState } from "react";

const NavBar = () => {
    
    return (
        <div className="items-center">
             <div className="w-full bg-[#0E0E0E] pb-3  rounded-full">
            
            <div className="absolute top-[2px] left-[801px] rounded-[120px] [background:linear-gradient(268.83deg,_#94e829,_#bd18d8)] [filter:blur(40px)] w-[294px] h-[29px]" />
            <div className="absolute top-[-7px] left-[75px] rounded-41xl [background:linear-gradient(214.63deg,_#3cdcbf,_#bd00ff)] [filter:blur(40px)] w-[74px] h-14" />
            <nav className="">
            <ul className="flex w-[50%] justify-around m-auto items-center pt-3">
                <li className="p-3 text-xl text-white text-center w-[150px] relative right-[400px] ">
                    <img src="./DEON.png" alt="" />
                </li>
                <li className="p-3 text-white text-2xl font-tektur hover:text-[#FF306E]">Mission</li>
                <li className="p-3 text-white text-2xl font-tektur hover:text-[#FF306E] ">Partners</li>
                <li className="p-3 text-white text-2xl font-tektur hover:text-[#FF306E]">Our Team</li>
                <li className="p-3 text-white  text-2xl font-tektur hover:text-[#FF306E]">Social</li>
            </ul>
            </nav>
           
        </div>
        </div>
       
    );
};
export default NavBar;
