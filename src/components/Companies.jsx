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
    return (
        <div className="flex flex-col justify-center items-center w-full bg-black pb-20">
            <h1 className="text-white text-5xl ">Partners</h1>
            <div className="marquee">
                <ul className="marquee__content">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="m-5 w-20 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    ))}
                </ul>
                <ul className="marquee__content">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="m-5 w-20 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    ))}
                </ul>
                <ul className="marquee__content">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="m-5 w-20 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Companies;
