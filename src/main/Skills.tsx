import { skillStrs } from "../assets/shared";
import BulletPoints from "../components/BulletPoints";

const SKILLS = skillStrs;

const Skills = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sectionTitle">SKILLS</h3>
      <div className="flex flex-col">
        <BulletPoints bullets={SKILLS} />
      </div>
    </div>
  );
};

export default Skills;
