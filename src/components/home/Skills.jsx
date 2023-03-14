import React from "react";

const frontendSkillls = [
  {
    title: "HTML",
    rating: 90,
  },
  {
    title: "CSS",
    rating: 92,
  },
  {
    title: "Tailwind CSS",
    rating: 95,
  },
  {
    title: "Javascript",
    rating: 85,
  },
  {
    title: "React js",
    rating: 95,
  },
  {
    title: "Next js",
    rating: 85,
  },
];

const backendSkillls = [
  {
    title: "Express js",
    rating: 80,
  },
  {
    title: "Node js",
    rating: 70,
  },

  {
    title: "PHP",
    rating: 50,
  },
];

const databaseSkillls = [
  {
    title: "MySQL",
    rating: 75,
  },
  {
    title: "MongoDB",
    rating: 60,
  },
];

const cyberSecuritySkillls = [
  {
    title: "Networking",
    rating: 40,
  },
  {
    title: "Penitation Testing",
    rating: 30,
  },
];

const othersSkillls = [
  {
    title: "UI/UX",
    rating: 60,
  },
  {
    title: "Competitve Programming",
    rating: 40,
  },
  {
    title: "Git/Github",
    rating: 50,
  },
];

const Skills = () => {
  return (
    <div className="mt-6 md:mt-28">
      <h1 className="text-2xl font-bold mb-2 border-l-2 border-primary pl-3">
        SKILLS
      </h1>

      <div className="grid md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-success mt-3">Front-End</h2>
          <div className="my-6">
            {frontendSkillls.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 py-2 md:items-center"
              >
                <progress
                  className="progress progress-secondary w-56"
                  value={skill.rating}
                  max="100"
                ></progress>
                <span className="font-bold">
                  {skill.rating}% - {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-success mt-3">Back-End</h2>
          <div className="flex flex-wrap gap-10 my-6">
            {backendSkillls.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div
                  className="radial-progress text-secondary"
                  style={{ "--value": skill.rating }}
                >
                  {skill.rating}%
                </div>
                <span className="font-bold">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-success mt-3">Database</h2>
          <div className="my-6">
            {databaseSkillls.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 py-2 md:items-center"
              >
                <progress
                  className="progress progress-secondary w-56"
                  value={skill.rating}
                  max="100"
                ></progress>
                <span className="font-bold">
                  {skill.rating}% - {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-success mt-3">
            Cyber Security
          </h2>
          <div className="my-6">
            {cyberSecuritySkillls.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 py-2 md:items-center"
              >
                <progress
                  className="progress progress-secondary w-56"
                  value={skill.rating}
                  max="100"
                ></progress>
                <span className="font-bold">
                  {skill.rating}% - {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-success mt-3">Others</h2>
          <div className="my-6">
            {othersSkillls.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 py-2 md:items-center"
              >
                <progress
                  className="progress progress-secondary w-56"
                  value={skill.rating}
                  max="100"
                ></progress>
                <span className="font-bold">
                  {skill.rating}% - {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
