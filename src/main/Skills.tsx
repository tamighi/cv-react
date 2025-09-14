import BulletPoints from "../components/BulletPoints";

const SKILLS = [
  "React/React-Native",
  "Angular",
  "Symfony (PHP)",
  "Tailwind (CSS)",
  "Oracle/Postgres (SQL)",
  "C/C++",
  "Figma",
  "Docker",
  "GIT",
];

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
