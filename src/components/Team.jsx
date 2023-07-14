const companies = [
    "/dapp list.svg",
    "/router protocol.png",
    "Gari(Chingari)",
    "/kleros.png",
    "Gitopia",
    "/superteam.png",
    "/bankless.png",
];

const Team = () => {
    return (
        <div className="flex flex-col justify-center item-center w-full">
            <h1 className="text-4xl text-white bg-black text-center">
                Built by a team from
            </h1>
            <div className="flex flex-col justify-center items-center w-full bg-black pb-20">
                <div className="flex text-white pt-10 flex-wrap items-center justify-center">
                    {companies.map((company) => (
                        <div key={company} className="card m-4">
                            <div className="card-body w-20">
                                <img src={company} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Team;
