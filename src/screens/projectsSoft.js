import { CardScreen } from "../components/card";

export const ProjectsSoftware = () => {
	const description = [
		[
			"Football App",
			"A web application visualizing the progress of young soccer players' activities. The data is visualized using tables and charts.\nBackend: C#\nDatabase: Azure SQL\nFrontend: Razor, Google Charts",
		],
		[
			"CV-page",
			"CV in the form of a website.\nTechnologies: react, bootstrap, JavaScript",
		],
	];
	return (
		<>
			<div id="soft">
				<div class="subTitle">Projects - Software</div>
				<CardScreen description={description} />
			</div>
		</>
	);
};
