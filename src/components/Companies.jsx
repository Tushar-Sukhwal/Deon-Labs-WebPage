const companies = [
	"./polygon.png",
	"./solana.png",
	"./flow.png",
	"./amazon.png",
	"./google.png",
	"./filecoin.png",
	"./shardeum.png",,
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
      <h1 className="text-white text-4xl ">
        Partner compaines
      </h1>
			<div className="flex text-white pt-10 flex-wrap items-center justify-center">
				{companies.map((company) => (
					<div className="card m-4">
						<div className="card-body w-20 h-10">
							<img src={company} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Companies;
