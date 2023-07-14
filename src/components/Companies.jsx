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
			<h1 className="text-white text-4xl ">Partner compaines</h1>
			<div className="flex text-white pt-10 flex-wrap items-center justify-center  bg-gray-50/40 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  m-10  rounded-xl">
				{companies.map((company) => (
					<div className="m-4">
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
