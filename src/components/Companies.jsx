const companies = [
    "./polygon.png",
    "./solana.png",
    "./flow.png",
    "./amazon.png",
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
    "./amazon.png",
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
        <div className="flex flex-col justify-center items-center w-full bg-black pb-28">
            <h1 className="text-white text-5xl ">Partners</h1>
            <div className="marquee">
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
