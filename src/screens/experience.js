import { CardScreen } from "../components/card";

export const Experience=()=> {
    const description = [["Junior Software Developer","Nubisoft\n12.2022 - Present\nTechnologies: React native, GitLab, SQL, Docker, REST API"],
    ["Internship","KSK-Development\n07.2022-09.2022\nTechnologies: Python, C#, REST API"],
    ["Frontend Developer (volunteering)","Ad Personam\n05.2023-Present\nTechnologies: React, Tailwind"]
];
  return (
    <>
    <div id='experience'>
       <div class="subTitle">Experience</div>
    <CardScreen description={description}/>
    </div>  
    </>
  );
}

