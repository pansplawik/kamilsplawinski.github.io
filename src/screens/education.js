import { CardScreen } from "../components/card";

export const Educaiton = () => {
	const description = [
		[
			"Biomedical Engineering",
			"Silesian University of Technology\n10.2020 - Present",
		],
	];
	return (
		<>
			<div id="education">
				<div class="subTitle">Education</div>
				<CardScreen description={description} />
			</div>
		</>
	);
};
