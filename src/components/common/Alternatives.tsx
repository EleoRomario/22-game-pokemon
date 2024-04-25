import { useState } from "react";
import { PokeballAlternative } from "../../icons";
import { ANSWER } from "../../types/types";
import { Button } from "./Button";

interface Alternatives {
	alternatives: ANSWER[];
	onClick: (isCorrect: boolean) => void;
}

export const Alternatives = ({ alternatives, onClick }: Alternatives) => {
	const [changeOrderAlternatives] = useState(() => {
		return alternatives.sort(() => Math.random() - 0.5);
	});

	return (
		<ul className="flex gap-4 flex-col w-full">
			{changeOrderAlternatives.map((alternative, index) => (
				<li key={index}>
					<Button
						label={alternative.name}
						icon={PokeballAlternative}
						onClick={() => onClick(alternative.isCorrect)}
						className="w-full"
					/>
				</li>
			))}
		</ul>
	);
};
