import { educationArray } from "../assets/shared/constants/education";

const Education = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sectionTitle">EDUCATION</h3>
      {educationArray.map((education) => {
        return (
          <div className="flex flex-col overflow-hidden gap-1">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center flex-row gap-4">
                <img
                  className="max-h-8 max-w-8"
                  src={education.icon}
                  alt={education.companyName}
                />
                <span className="font-bold">{education.title}</span>
              </div>
              <span className="font-bold">{education.period}</span>
            </div>
            <p>{education.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
