import { ButtonExit } from "./ButtonExit";
import { Score } from "./Score";

export const HeaderQuestion = () => {
	return (
		<div className="flex justify-between items-center w-full">
			<ButtonExit />
			<Score />
		</div>
	);
};
