const Hero = () => {
	return (
		<div className="flex flex-col items-center h-[500px] pt-100px  flex-shrink-0 bg-black">
			<p className="text-white text-center font-inter text-7xl font-bold pb-20px">
				Web3 Ecosystem
				<br /> Enabler
			</p>
			<div className="flex flex-col items-center w-976 h-103 flex-shrink-0 pt-20px pb-20px">
				<p className="text-white text-center font-inter text-xl font-normal ">
					Deon Labs is your In-house Web3 Ecosystem builder driving paradigm{" "}
					<br /> shift into Web3 Ecosystems.
				</p>
			</div>
			<button className="bg-[#FF306E] opacity-80 text-white p-3 px-5  items-baseline align-middle  rounded-lg">
				<h1 className=" opacity-100"> Launch App</h1>
			</button>
		</div>
	);
};
export default Hero;
