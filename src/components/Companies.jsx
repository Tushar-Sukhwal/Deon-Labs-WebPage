const companies = [
    "./polygon.png",
    "./solana.png",
    "./flow.png",
    "./amazon.svg",
    "./google.png",
    "./filcoin.png",
    "./shardeum.png",
    "./chainlink.png",
    "./5ire.svg",
    "./ipfs.png",
    "./tezoz.png",
    "./aurora.png",
    "./binance.png",

    //-----
    "./polygon.png",
    "./solana.png",
    "./flow.png",
    "./amazon.",
    "./google.png",
    "./filcoin.png",
    "./shardeum.png",
    "./chainlink.png",
    "./5ire.svg",
    "./ipfs.png",
    "./tezoz.png",
    "./aurora.png",
    "./binance.png",

    // "Hashed Emergent",
    // "Xinfin Network",
    // "Zcash",
];

const Companies = () => {
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
        <div className="flex flex-col justify-center items-center w-full  pb-28 z-20 relative ">

            <h1 className="text-white text-center font-inter text-5xl md:text-6xl lg:text-5xl  pb-20px mt-[120px] tracking-[0.1em] font-medium ">PARTNERS</h1>

            <div className="marquee ">
                <ul className="marquee__content">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="m-5 w-28 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain "
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </ul>
                <ul className="marquee__content">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="m-5 w-28 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </ul>
                <ul className="marquee__content">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="m-5 w-28 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Companies;
