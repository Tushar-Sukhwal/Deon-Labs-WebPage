const companies = [
    "./polygon.png",
    "./solana.png",
    "./flow.png",
    "./amazon.svg",
    

    //-----
   
    
    // "Hashed Emergent",
    // "Xinfin Network",
    // "Zcash",
];

const partners = [
    "./ipfs.png",
    "./shardeum.png",
    "./google.png",
    "./tezoz.png",
    
]

const organizations = [
    "./filcoin.png",
    "./binance.png",
    "./chainlink.png",
    "./aurora.png",
    
]

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
        <div id="partners" className="flex flex-col justify-center items-center w-full bg-black pb-28 space-y-24">
            <div className="space-y-10">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center font-inter text-5xl md:text-6xl lg:text-5xl  pb-20px mt-[120px] tracking-[0.1em] font-medium ">OUR PARTNERS</h1>
            <p className="text-white text-center font-poppins text-2xl font-normal leading-normal opacity-60">
            Deon motivates transformative strategies that revolutionize<br /> global business, consumer, and organizational operations., 
                </p>
            </div>
            
           
                <ul className="flex space-x-48">
                    
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

                <ul className="flex space-x-48">
                    
                    {partners.map((partner, idx) => (
                        <div
                            key={`${partner}#${idx}`}
                            className="m-5 w-28 flex">
                            <img
                                src={partner}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </ul>

                <ul className="flex space-x-48">
                    
                    {organizations.map((organization, idx) => (
                        <div
                            key={`${organization}#${idx}`}
                            className="m-5 w-28 flex">
                            <img
                                src={organization}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </ul>
                
        </div>
    );
};
export default Companies;
