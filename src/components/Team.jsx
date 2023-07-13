const companies = [
  "The Dapp List",
"Router Protocol",
"Gari(Chingari)",
"Kleros",
"Gitopia",
"Superteam",
"Bankless DAO",
]

const Team = () => {
	return (
		<div className="flex flex-col justify-center item-center w-[100vw]">
			<h1 className="text-4xl text-white bg-black text-center">Built by a team from</h1>
      <div className="flex flex-col justify-center items-center w-[100vw] bg-black pb-20">
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
		</div>
	);
};
export default Team;
