import Card from "react-bootstrap/Card";

export const Technologies = () => {
	return (
		<>
			<div id="technologies">
				<div class="subTitle">Technologies</div>
				<Card bg="light" style={{ width: "80vw", marginBottom: "5vw" }}>
					<Card.Body>
						<img
							class="iconTechnologies"
							src={require("./icons/reactNative.png")}
							alt="React Native"
						/>
						<img
							class="iconTechnologies"
							src={require("./icons/cSharp.png")}
							alt="C#"
						/>
						<img
							class="iconTechnologies"
							src={require("./icons/python.png")}
							alt="Python"
						/>
						<img
							class="iconTechnologies"
							src={require("./icons/sql-server.png")}
							alt="SQL"
						/>
						<img
							class="iconTechnologies"
							src={require("./icons/typescript.png")}
							alt="TypeScript"
						/>
						<img
							class="iconTechnologies"
							src={require("./icons/r.png")}
							alt="R"
						/>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};
