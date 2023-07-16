import { useState } from "react"; // import state

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
        <img src="./DEON.png" alt="logo" />
      
        <section className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="p-3 text-white text-2xl hover:text-[#FF306E]">Mission</li>
                <li className="p-3 text-white text-2xl hover:text-[#FF306E] ">Partners</li>
                <li className="p-3 text-white text-2xl hover:text-[#FF306E]">Our Team</li>
                <li className="p-3 text-white  text-2xl hover:text-[#FF306E]">Social</li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <li className="p-3 text-white text-2xl hover:text-[#FF306E]">Mission</li>
                <li className="p-3 text-white text-2xl hover:text-[#FF306E] ">Partners</li>
                <li className="p-3 text-white text-2xl hover:text-[#FF306E]">Our Team</li>
                <li className="p-3 text-white  text-2xl hover:text-[#FF306E]">Social</li>
        </ul>
          
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}