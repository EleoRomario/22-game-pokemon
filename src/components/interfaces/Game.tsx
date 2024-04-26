import { Logo } from "../../icons";
import { CardQuestion } from "../common/CardQuestion";
import { HeaderQuestion } from "../common/HeaderQuestion";

export const Game = () => {
	return (
		<section className="flex flex-col items-center gap-10">
			<HeaderQuestion />
			<h1 className="flex gap-2 text-5xl items-center">
				<span>¿Qué</span>
				<span>
					<Logo className="h-16 w-auto" />
				</span>
				<span>es?</span>
			</h1>
			<CardQuestion />
		</section>
	);
};
