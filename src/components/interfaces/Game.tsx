import { CardQuestion } from "../common/CardQuestion";
import { HeaderQuestion } from "../common/HeaderQuestion";

export const Game = () => {
	return (
		<section className="flex flex-col items-center gap-10 min-w-96 min-h-96">
			<HeaderQuestion />
			<CardQuestion />
		</section>
	);
};
