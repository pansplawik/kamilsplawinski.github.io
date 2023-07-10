import Accordion from "react-bootstrap/Accordion";

export function CardScreen(props) {
	const { description } = props;
	const descriptionArray = Array.isArray(description)
		? description
		: [description];

	return (
		<Accordion style={{ width: "80vw", marginBottom: "5vw" }}>
			{descriptionArray.map((descript, index) => (
				<Accordion.Item eventKey={index.toString()}>
					<Accordion.Header style={{ fontFamily: "monospace", fontSize: 25 }}>
						{descript[0]}
					</Accordion.Header>
					<Accordion.Body
						style={{
							fontFamily: "monospace",
							fontSize: 18,
							marginTop: 10,
							textAlign: "left",
						}}
					>
						{descript[1].split("\n").map((line, index) => (
							<p key={index}>{line}</p>
						))}
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
