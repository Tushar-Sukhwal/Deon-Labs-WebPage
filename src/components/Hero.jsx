const Hero = () => {
    return (
        <main className="flex flex-col items-center z-10 bg-black pb-44 relative">
            <p className="text-white text-center font-inter text-5xl md:text-6xl lg:text-8xl font-bold pb-20px mt-[120px]">
                Web3 Ecosystem
                <br /> Enabler
            </p>
            <div className="flex flex-col items-center flex-shrink-0 pt-20px pb-20px">
                <p className="text-white text-center font-[Inter] text-2xl font-normal leading-normal opacity-60">
                    Deon Labs is your In-house Web3 Ecosystem builder driving
                    paradigm <br /> shift into Web3 Ecosystems.
                </p>
            </div>
            <button className="bg-[#FF306E] text-white p-3 px-5  items-baseline align-middle  rounded-lg font-semibold">
                <h1 className=" opacity-100">Build Web3 ecosystem</h1>
            </button>
            <div className="absolute w-full h-full hero-bg" />
        </main>
    );
};
export default Hero;
