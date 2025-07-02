import { TripleCard } from "~/components/TripleCard";
import { LinksIcon } from "~/components/icons/LinksIcon";
import { PersonIcon } from "~/components/icons/Person";
import { WorksIcon } from "~/components/icons/WorkschIcon";

const CARDS = [
	{
		position: "left" as const,
		icon: <LinksIcon />,
	},
	{ position: "center" as const, icon: <WorksIcon /> },
	{ position: "right" as const, icon: <PersonIcon /> },
];

export default function Page(): React.ReactNode {
	return (
		<main>
			<div className="grid h-dvh place-items-center antialiased">
				<div className="group w-full max-w-[620px] rounded-xl border border-[#E6E6E6] border-dashed bg-[#FCFCFC] p-14 text-center transition duration-500 hover:bg-[#F5F5F5] hover:duration-200">
					<h2 className="text-4xl text-[#212121]">WEB</h2>
					<p className="mt-1 mb-6 text-[#666666] text-sm ">
						ゆっくりしていってね♨️
					</p>
					<TripleCard cards={CARDS} />
					<button
						type="button"
						className="mt-4 rounded-lg bg-white px-4 py-2.5 font-medium text-[#212121] shadow ring-1 ring-black/[0.08] transition hover:bg-[#EDEDED] active:shadow-none"
					>
						Back to Previous Reporting Year
					</button>
				</div>
			</div>
		</main>
	);
}
