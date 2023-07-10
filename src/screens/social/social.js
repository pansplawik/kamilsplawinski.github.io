import Card from "react-bootstrap/Card";
export const SocialMedia = () => {
	return (
		<>
			<div class="subTitle">Social Media</div>
			<Card
				bg="light"
				style={{ width: "80vw", marginBottom: "5vw" }}
				id="social"
			>
				<Card.Body>
					<a
						href="https://www.linkedin.com/in/kamil-spławiński-ab29731b7"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="iconTechnologies"
							src={require("./icons/linkedin.png")}
							alt="linkedin"
						/>
					</a>
					<a
						href="https://github.com/pansplawik"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="iconTechnologies"
							src={require("./icons/github.png")}
							alt="linkedin"
						/>
					</a>
					<a
						href="https://gitlab.com/pansplawik"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="iconTechnologies"
							src={require("./icons/gitlab.png")}
							alt="linkedin"
						/>
					</a>
					<a
						href="https://www.instagram.com/pansplawik/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="iconTechnologies"
							src={require("./icons/instagram.png")}
							alt="linkedin"
						/>
					</a>
				</Card.Body>
			</Card>
		</>
	);
};
