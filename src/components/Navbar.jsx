
const NavBar = () => {
    return (
        <div className="w-full bg-[#0E0E0E] pb-3">
            <div className="absolute top-[2px] left-[801px] rounded-[120px] [background:linear-gradient(268.83deg,_#94e829,_#bd18d8)] [filter:blur(40px)] w-[294px] h-[29px]" />
            <div className="absolute top-[-7px] left-[75px] rounded-41xl [background:linear-gradient(214.63deg,_#3cdcbf,_#bd00ff)] [filter:blur(40px)] w-[74px] h-14" />
            <nav>
            <ul className="flex w-[50%] justify-around m-auto items-center pt-3">
                <li className="p-3 text-xl text-white text-center w-[150px] ">
                    <img src="./DEON(2).png" alt="" />
                </li>
                <li className="p-3 text-red-700">Mission</li>
                <li className="p-3 text-white">Partners</li>
                <li className="p-3 text-white">Our Team</li>
                <li className="p-3 text-white">Social</li>
            </ul>
            </nav>
           
        </div>
    );
};
export default NavBar;
