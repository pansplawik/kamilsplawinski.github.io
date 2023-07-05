import { CardScreen } from "../components/card";

export const Educaiton=()=> {
    const description = "Biomedical Engineering\nSilesian University of Technology\n10.2020 - Present";
  return (
    <>
    <div class="subTitle">Education</div>
    <CardScreen description={description}/>
    </>
  );
}
