


const NavBar = () => {
  return (
    <div className="w-[100vw] bg-[#0E0E0E] pb-3">
      <ul className="flex w-[50%] justify-around m-auto items-center pt-3">
        <li className="p-3 text-xl text-white text-center "><span className="text-3xl align-middle">Deon </span><br />Labs</li>
        <li className="p-3 text-red-700">Overview</li>
        <li className="p-3 text-white">Roadmap</li>
        <li className="p-3 text-white">Docs</li>
        <li className="p-3 text-white">Social</li>
        <li className="bg-[#FF306E] opacity-80 text-white p-3 px-5  items-baseline align-middle  rounded-lg"><h1 className=" opacity-100"> Launch App</h1></li>
      </ul>
    </div>
  )
}
export default NavBar