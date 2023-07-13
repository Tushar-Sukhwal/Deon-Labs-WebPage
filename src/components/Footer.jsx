const Footer = () => {
	return (
		<div className="bg-black  flex flex-col  justify-center items-center">
			<h1 className="text-white text-5xl ">
				{" "}
				You build Web3 product, We will build ecosystem for you!!
			</h1>
			<div className=" bg-pink-300 p-10 flex gap-4 rounded-xl mt-10 mb-20" >
				<h1 className=" border-black border-2 p-4 rounded">google</h1>
				<h1 className=" border-black border-2 p-4 rounded">github</h1>
				<h1 className=" border-black border-2 p-4 rounded">twitter</h1>
			</div>
		</div>
	);
};
export default Footer;
