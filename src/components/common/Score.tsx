import { useScore } from "../../hooks/useScore";
import { Star } from "../../icons";

export const Score = () => {
	const { score, level } = useScore();
	return (
		<div>
			<div className="flex gap-5 items-center rounded-full bg-gradient-to-t to-yellow-400/20 via-transparent from-yellow-400/20 pl-4">
				Score {score}
				<div className=" rounded-full p-1 outline outline-2 relative outline-yellow-400">
					<div className=" flex justify-center items-center bg-gradient-to-t to-yellow-100 from-yellow-300 size-10 rounded-full text-2xl font-black text-yellow-500">
						<Star />
					</div>
					<div className="absolute -top-1 -right-1 size-5 text-center outline-2 bg-bg rounded-full outline outline-yellow-400">
						{level}
					</div>
					<div
						className="absolute right-full top-4 size-4 outline-2 bg-yellow-400 "
						style={{
							clipPath: "polygon(100% 0, 0 46%, 100% 100%)",
						}}
					></div>
				</div>
			</div>
			{/* <div className="rounded-full border-4 font-semibold text-3xl border-green-500 bg-cyan-400 p-2">
				Score: {score}
			</div> */}
		</div>
	);
};
