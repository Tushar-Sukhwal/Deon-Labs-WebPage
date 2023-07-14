const companies = [
	"./polygon.png",
	"./solana.png",
	"./flow.png",
	"./amazon.png",
	"./google.png",
	"./filcoin.png",
	"./shardeum.png",
	,
	"./chainlink.png",
	"./5ire.svg",
	"./ipfs.png",
	"./tezoz.png",
	"./aurora.png",
	"./binance.png",
	"Hashed Emergent",
	"Xinfin Network",
	"Zcash",
];

const Companies = () => {
	return (
		<div className="flex flex-col justify-center items-center w-[100vw] bg-black pb-20">
			<h1 className="text-white text-5xl ">PARTNERS</h1>
			<div className="flex text-white pt-6 flex-wrap items-center justify-center  border-white border-2  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  mx-10 mt-5  rounded-xl">
				{companies.map((company) => (
					<div className="m-5">
						<div className=" w-20 ">
							<img src={company} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Companies;
