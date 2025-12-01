import { experiences } from "../assets/shared";
import BulletPoints from "../components/BulletPoints";

const experience = experiences.SJeuropeanCommission;

const Experience = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sectionTitle">EXPERIENCE</h3>
      <div className="flex flex-col overflow-hidden gap-1">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center flex-row gap-4">
            <img
              className="max-h-8 max-w-8"
              src={experience.icon}
              alt={experience.companyName}
            />
            <span className="font-bold">{experience.title}</span>
          </div>
          <span className="font-bold">{experience.period}</span>
        </div>
        <p className="whitespace-break-spaces">{experience.description}</p>
        <div className="flex gap-2">
          <span className="font-semibold">Languages:</span>
          <BulletPoints bullets={experience.languages} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
