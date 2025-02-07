import { ProfileSection } from "../components/ProfileSection/ProfileSection";
import { Projects } from "../components/Projects/Projects";
import { Devider } from "../components/Devider/Devider";
import { Skills } from "../components/Skills/Skills";
import { Kontakt } from "../components/Kontakt/Kontakt";

const AboutMe = () => {
  return (
    <div>
      <ProfileSection />
      <Devider />
      <Skills />
      <Devider />
      <Projects />
      <Devider/>
      {/* <Kontakt /> */}

    </div>
  );
};

export default AboutMe;
