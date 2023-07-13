const companies = [
	"Polygon",
	"Solana",
	"Flow",
	"Amazon",
	"Google",
	"Filecoin",
	"Shardeum",
	"Topl",
	"Chainlink",
	"5ire chain",
	"IPFS",
	"Tezos",
	"Aurora Chain",
	"Binance",
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
						<div className="card-body">
							<h5 className="card-title">{company}</h5>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Companies;
