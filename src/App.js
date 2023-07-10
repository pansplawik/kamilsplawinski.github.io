import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPage } from "./components/navbar";
import { Educaiton } from "./screens/education";
import { Experience } from "./screens/experience";
import { Technologies } from "./screens/tech/technologies";
import { ProjectsDataScience } from "./screens/projectsData";
import { ProjectsSoftware } from "./screens/projectsSoft";
import { SocialMedia } from "./screens/social/social";
import Footer from "./components/footer";
import { Forms } from "./screens/forms";

function App() {
	return (
		<div className="App">
			<NavbarPage />
			<header className="App-header">
				<div class="title">CV - Kamil Spławiński</div>
				<Educaiton />
				<Experience />
				<Technologies />
				<ProjectsDataScience />
				<ProjectsSoftware />
				<SocialMedia />
				<Forms />
			</header>
			<Footer />
		</div>
	);
}

export default App;
