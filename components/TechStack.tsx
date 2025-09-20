import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend Technologies",
    technologies: [
      {
        name: "React – A JavaScript library for building UI",
        icon: <FaReact className="text-sky-500" />,
      },
      {
        name: "Next.js – A framework for server-rendered React apps",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      {
        name: "TypeScript – Strongly typed JavaScript",
        icon: <SiTypescript className="text-blue-600" />,
      },
      {
        name: "Tailwind CSS – Utility-first CSS framework",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
    ],
  },
  {
    title: "Backend Technologies",
    technologies: [
      {
        name: "Node.js – JavaScript runtime for backend",
        icon: <FaNodeJs className="text-green-600" />,
      },
    ],
  },
  {
    title: "Databases",
    technologies: [
      {
        name: "PostgreSQL – Relational database",
        icon: <SiPostgresql className="text-blue-700" />,
      },
      {
        name: "MongoDB – NoSQL document database",
        icon: <SiMongodb className="text-green-500" />,
      },
    ],
  },
];

const TechStack: React.FC = () => {
  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="tech-stack"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h2
          id="tech-stack"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Our Technology Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="text-3xl flex-shrink-0">{tech.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
