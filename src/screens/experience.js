import { CardScreen } from "../components/card";

export const Experience=()=> {
    const description = ["Junior Software Developer\nNubisoft\n12.2022 - Present\nCreate mobile app to connect and control tripod camera by WiFi.\nTechnologies: React native, git, SQL, Docker, REST API",
    "Internship\nKSK-Development\n07.2022-09.2022\nCreate alghoritm to Calculate CRC32.\nCreate desktop app to monitoring parking sensors\nTechnologies: Python, C#, REST API"
];
  return (
    <>
    <div class="subTitle">Experience</div>
    <CardScreen description={description}/>
    </>
  );
}

