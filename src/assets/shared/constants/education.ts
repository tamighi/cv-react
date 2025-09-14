import { fortytwo, ulb } from "../images";

export type Education = {
  title: string;
  companyName: string;
  period: string;
  description: string;
  icon?: string;
};

type Educations = {
  [K: string]: Education;
};

export const educations = {
  school19: {
    title: "Software developer",
    companyName: "School 19",
    period: "July 2021 - Sep 2022",
    icon: fortytwo,
    description: `I trained at School 19 (42 Network): a project-driven, peer-to-peer program that builds developers through autonomy, collaboration, and problem-solving. 

I developed strong skills in algorithms, low-level programming, and full-stack web projects.`,
  },
  ulb: {
    title: "Neurosychology master",
    companyName: "ULB",
    period: "September 2015 - June 2021",
    icon: ulb,
    description:
      "Bachelor and master’s degree in neuropsychology in the Free University of Brussels.",
  },
} satisfies Educations;

export const educationArray = Object.entries(educations).map(
  ([id, education]) => ({ id, ...education }),
);
