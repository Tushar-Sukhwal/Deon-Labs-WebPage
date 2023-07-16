const Footer = () => {
	const onMouseIn = (e) => {
		const cursor = document.querySelector("#cursor").firstChild;
		cursor.innerHTML = `<div class="cursor-text">${
			e.target.src.split("/").pop().split(".")[0]
		}</div>`;
	};

	const onMoueOut = () => {
		const cursor = document.querySelector("#cursor").firstChild;
		cursor.innerText = "";
	};
	return (
		<main className="bg-black  flex flex-col  justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<div className="space-y-4">
			<h1 className="text-white text-center font-poppins text-5xl md:text-6xl lg:text-6xl font-bold pb-20px mt-[120px] mb-[100px] ">
				YOU BUILD WEB3 PRODUCT,
				<br /> WE WILL BUILD ECOSYSTEM FOR YOU!!
			</h1>
			</div>
			
			<div className="flex justify-between px-10 mb-[90px] bg-gradient-to-r from-cyan-500 to-blue-500 h-[100px] w-[500px] rounded-3xl items-center  ">
				<div>
				<a href="mailto: hello@deonlabs.com">
					<img
						src="./mail.svg"
						alt=""
						className="hover:fill-[#FF306E]"
						onMouseEnter={onMouseIn}
						onMouseLeave={onMoueOut}
						
					></img>
				</a>
				</div>
				
				<a href="https://twitter.com/0xDeon">
					<img
						src="./twitter.svg"
						alt=""
						className=""
						onMouseEnter={onMouseIn}
						onMouseLeave={onMoueOut}
					/>
				</a>
				<a href="https://www.linkedin.com/company/deon-labs/">
					<img
						src="./Linkedin.svg"
						alt=""
						className=""
						onMouseEnter={onMouseIn}
						onMouseLeave={onMoueOut}
					/>
				</a>
			</div>

			<div className="mb-[50px]">
				<p className="text-white text-center font-[Inter] text-2xl font-normal leading-normal opacity-60">
					All rights reserved by Deon labs ©
				</p>
				<p className="text-white text-center font-[Inter] text-2xl font-normal leading-normal opacity-60">
					@2022-23
				</p>
			</div>
			
		</main>
	);
};
export default Footer;
