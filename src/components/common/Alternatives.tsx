import confetti from "canvas-confetti";
import { PokeballAlternative } from "../../icons";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { ANSWER } from "../../types/types";
import { useQuestion } from "../../hooks/useQuestion";

interface AlternativesProps {
	setIsCorrect: (isCorrect: boolean) => void;
}

export const Alternatives = ({ setIsCorrect }: AlternativesProps) => {
	const { question, generateQuestion } = useQuestion();
	const [order, setOrder] = useState<ANSWER[] | null>(null);

	useEffect(() => {
		setOrder(question.sort(() => Math.random() - 0.5));
	}, [question]);

	const isCorrect = (isCorrect: boolean) => {
		if (isCorrect) {
			confetti();
			setIsCorrect(true);
			setTimeout(() => {
				setIsCorrect(false);
				generateQuestion();
			}, 2000);
		} else {
			console.error("Incorrecto");
		}
	};

	return (
		<ul className="flex gap-4 flex-col w-full">
			{order &&
				order.map((alternative, index) => (
					<li key={index}>
						<Button
							label={alternative.name}
							icon={PokeballAlternative}
							onClick={() => isCorrect(alternative.isCorrect)}
							className="w-full"
						/>
					</li>
				))}
		</ul>
	);
};
