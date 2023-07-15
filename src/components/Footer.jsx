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
		<div className="bg-black  flex flex-col  justify-center items-center">
			<h1 className="text-white text-center font-inter text-5xl md:text-6xl lg:text-6xl font-bold pb-20px mt-[120px] mb-[100px] ">
				You build Web3 product,<br /> We will build ecosystem for you!!
			</h1>
			<div className="flex space-x-[100px] mb-[90px] bg-gradient-to-r from-cyan-500 to-blue-500 h-[100px] w-[500px] rounded-3xl items-center">
			<img src="./mail.svg" alt="" className="px-[50px]" onMouseEnter={onMouseIn} onMouseLeave={onMoueOut} />
			<img src="./twitter.svg" alt="" className="" onMouseEnter={onMouseIn} onMouseLeave={onMoueOut} />
			<img src="./Linkedin.svg" alt="" className="" onMouseEnter={onMouseIn} onMouseLeave={onMoueOut} />
			</div>
			

			<div className="mb-[50px]">
			<p className="text-white text-center font-[Inter] text-2xl font-normal leading-normal opacity-60">All rights reserved by Deon labs ©️</p>
			<p className="text-white text-center font-[Inter] text-2xl font-normal leading-normal opacity-60">@2022-23</p>
			</div>
			
		</div>
	);
};
export default Footer;
