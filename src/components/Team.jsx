const companies = [
    "./kleros.png",
    "./bankless.png",
    "./Dapp_list.png",
    "./router protocol.png",
    "./superteam.png", 
    "./gitopia.png",
    "./gari.png"
    

    //-----
   

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
        <div id="team" className="flex flex-col justify-center items-center w-full bg-black pb-28 space-y-20">
            <div className="space-y-10">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center font-inter text-5xl md:text-6xl lg:text-5xl font-bold pb-20px mt-[120px] tracking-[0.1em] font-medium">BUILT BY A TEAM FROM</h1>
            <p className="text-white text-center font-poppins text-2xl font-normal leading-normal opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Cumque nostrum iure <br /> cum magni animi perferendis ex iste vel fuga.
                </p>
            </div>
            
            <div className="px-11">
                <ul className="flex space-x-32">
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
