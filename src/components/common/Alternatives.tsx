import { Pokeball } from "../../icons";
import { ANSWER } from "../../types/types";
import { Button } from "./Button";
import confetti from "canvas-confetti";

export const Alternatives = ({ alternatives }: { alternatives: ANSWER[] }) => {
	const handleCorrect = (isCorrect: boolean) => {
		if (isCorrect) {
			confetti();
		} else {
			console.log("Incorrecto");
		}
	};
	return (
		<ul className="flex gap-4 flex-col">
			{alternatives.map((alternative, index) => (
				<li key={index}>
					<Button
						label={alternative.name}
						icon={Pokeball}
						onClick={() => handleCorrect(alternative.isCorrect)}
					/>
				</li>
			))}
		</ul>
	);
};
