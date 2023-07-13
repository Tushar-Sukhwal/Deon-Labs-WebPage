const NavBar = () => {
  return (
    <div className="w-[100vw] bg-[#0E0E0E] pb-3">
      <div className="absolute top-[2px] left-[801px] rounded-[120px] [background:linear-gradient(268.83deg,_#94e829,_#bd18d8)] [filter:blur(40px)] w-[294px] h-[29px]" />
      <div className="absolute top-[-13px] left-[1757px] rounded-41xl [background:linear-gradient(214.63deg,_#ff0000,_#bd00ff)] [filter:blur(60px)] w-[74px] h-14" />
      <div className="absolute top-[-7px] left-[75px] rounded-41xl [background:linear-gradient(214.63deg,_#3cdcbf,_#bd00ff)] [filter:blur(40px)] w-[74px] h-14" />
      <div className="absolute top-[2719px] left-[-260px] rounded-[50%] [background:linear-gradient(180deg,_#524fed,_rgba(210,_92,_252,_0))] [filter:blur(400px)] w-[519px] h-[519px]" />
      <div className="absolute top-[4156px] left-[-387px] rounded-[50%] [background:linear-gradient(180deg,_#dadd5a,_rgba(211,_69,_163,_0))] [filter:blur(400px)] w-[585px] h-[585px]" />
      <div className="absolute top-[1828px] left-[1572px] rounded-[50%] [background:linear-gradient(180deg,_#00ff94,_rgba(211,_69,_163,_0))] [filter:blur(400px)] w-[370px] h-[585px]" />
      <ul className="flex w-[50%] justify-around m-auto items-center pt-3">
        <li className="p-3 text-xl text-white text-center w-[150px] "><img src="./DEON(2).png" alt="" /></li>
        <li className="p-3 text-red-700">Overview</li>
        <li className="p-3 text-white">Roadmap</li>
        <li className="p-3 text-white">Docs</li>
        <li className="p-3 text-white">Social</li>
       
      </ul>
    </div>
  )
}
export default NavBar