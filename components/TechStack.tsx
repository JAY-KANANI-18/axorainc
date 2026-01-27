import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPhp,
  FaLaravel,
  FaAndroid,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSketch,
  FaDatabase,
  FaCode,
  FaCloud
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiGreensock,
  SiFramer,
  SiDotnet,
  SiNestjs,
  SiExpress,
  SiSocketdotio,
  SiReact,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobecreativecloud,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiSqlite,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiAndroidstudio,
  SiIntellijidea,
  SiPycharm,
  SiJira,
  SiPostman,
  SiSonarqube,
  SiVercel,
  SiGooglecloud,
  SiGitlab,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiPandas,
  SiNumpy
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  title: string;
  gradient: string;
  technologies: Technology[];
}
const techCategories: TechCategory[] = [
  {
    title: "Intelligent Systems",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "Python Programming", icon: <FaPython className="text-blue-500" /> },
      { name: "TensorFlow Framework", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "PyTorch Engine", icon: <SiPytorch className="text-red-500" /> },
      { name: "Computer Vision (OpenCV)", icon: <SiOpencv className="text-green-600" /> },
      { name: "Data Analysis (Pandas)", icon: <SiPandas className="text-blue-600" /> },
      { name: "Numerical Computing (NumPy)", icon: <SiNumpy className="text-blue-500" /> },
    ],
  },
  {
    title: "Web Experience",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "React UI Library", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js Platform", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Angular Framework", icon: <FaAngular className="text-red-600" /> },
      { name: "Vue Frontend", icon: <FaVuejs className="text-green-500" /> },
      { name: "Type-Safe JavaScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Modern JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap UI Kit", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Material Design System", icon: <SiMui className="text-blue-500" /> },
      // { name: "Advanced Animations (GSAP)", icon: <SiGreensock className="text-green-500" /> },
      // { name: "Motion Effects", icon: <SiFramer className="text-pink-500" /> },
    ],
  },
  {
    title: "Server & APIs",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "Node.js Runtime", icon: <FaNodeJs className="text-green-600" /> },
      { name: ".NET Core Services", icon: <SiDotnet className="text-purple-600" /> },
      { name: "NestJS Architecture", icon: <SiNestjs className="text-red-500" /> },
      { name: "Laravel Framework", icon: <FaLaravel className="text-red-600" /> },
      { name: "PHP Services", icon: <FaPhp className="text-indigo-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: "Real-Time Communication", icon: <SiSocketdotio className="text-gray-800 dark:text-white" /> },
    ],
  },
  {
    title: "Mobile Solutions",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "Cross-Platform (React Native)", icon: <TbBrandReactNative className="text-cyan-400" /> },
      { name: "Native Android", icon: <FaAndroid className="text-green-500" /> },
      { name: "Flutter SDK", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Kotlin Language", icon: <SiKotlin className="text-purple-500" /> },
      { name: "Swift for iOS", icon: <SiSwift className="text-orange-500" /> },
    ],
  },
  {
    title: "UI / Visual Design",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "Figma Design Tool", icon: <FaFigma className="text-purple-500" /> },
      { name: "Adobe XD Suite", icon: <SiAdobexd className="text-pink-600" /> },
      { name: "Framer Prototyping", icon: <SiFramer className="text-pink-500" /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-600" /> },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-orange-600" /> },
      // { name: "Sketch App", icon: <FaSketch className="text-orange-500" /> },
      { name: "After Effects Motion", icon: <SiAdobeaftereffects className="text-purple-600" /> },
      { name: "Adobe Creative Suite", icon: <SiAdobecreativecloud className="text-red-600" /> },
    ],
  },
  {
    title: "Data & Storage",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "PostgreSQL Database", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-red-600" /> },
      { name: "MySQL Engine", icon: <SiMysql className="text-blue-500" /> },
      { name: "Oracle Database", icon: <SiOracle className="text-red-600" /> },
      { name: "SQLite Storage", icon: <SiSqlite className="text-blue-400" /> },
      { name: "Firebase Backend", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "MongoDB NoSQL", icon: <SiMongodb className="text-green-600" /> },
      { name: "Supabase Platform", icon: <SiSupabase className="text-green-500" /> },
    ],
  },
  {
    title: "Engineering Toolkit",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "Version Control (Git)", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub Collaboration", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
      { name: "Visual Studio IDE", icon: <FaCode className="text-purple-600" /> },
      { name: "VS Code Editor", icon: <FaCode className="text-blue-500" /> },
      { name: "Android Studio IDE", icon: <SiAndroidstudio className="text-green-500" /> },
      { name: "IntelliJ Platform", icon: <SiIntellijidea className="text-red-500" /> },
      { name: "PyCharm IDE", icon: <SiPycharm className="text-green-500" /> },
      { name: "Jira Project Tracking", icon: <SiJira className="text-blue-600" /> },
      { name: "API Testing (Postman)", icon: <SiPostman className="text-orange-500" /> },
      { name: "Code Quality (SonarQube)", icon: <SiSonarqube className="text-blue-500" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    gradient: "from-blue-600 to-purple-600",
    technologies: [
      { name: "Amazon Web Services", icon: <FaAws className="text-orange-500" /> },
      { name: "Azure Cloud", icon: <FaCloud className="text-blue-500" /> },
      { name: "Vercel Hosting", icon: <SiVercel className="text-black dark:text-white" /> },
      { name: "Google Cloud Platform", icon: <SiGooglecloud className="text-blue-500" /> },
      { name: "Docker Containers", icon: <FaDocker className="text-blue-500" /> },
      { name: "GitLab Pipelines", icon: <SiGitlab className="text-orange-600" /> },
      { name: "Kubernetes Orchestration", icon: <SiKubernetes className="text-blue-600" /> },
    ],
  },
];


const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" aria-labelledby="tech-stack">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="tech-stack" className="text-4xl md:text-5xl font-bold bg-blue-900 bg-clip-text text-transparent mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, innovative solutions
          </p>
        </div>

        {/* Tech Categories - Flowing Layout */}
        <div className="space-y-12">
          {techCategories.map((category, idx) => (
            <div key={idx} className="relative">
              {/* Category Header with Gradient Line */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex-shrink-0 px-6 py-3 rounded-full bg-blue-900 shadow-lg`}>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className={`flex-1 h-1 bg-gradient-to-r ${category.gradient} opacity-20 rounded-full`}></div>
              </div>

              {/* Technologies - Flowing Grid */}
              <div className="flex flex-wrap gap-4">
                {category.technologies.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="group relative flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-xl transition-all duration-300"
                  >
                    {/* Gradient Border on Hover */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                    <div className="absolute inset-[2px] rounded-[10px] bg-white dark:bg-gray-800 z-0"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-blue-900 rounded-2xl shadow-2xl">
            <p className="text-white text-lg font-semibold mb-2">
              Ready to build something amazing?
            </p>
            <p className="text-blue-100 text-sm">
              We adapt our tech stack to match your project's unique requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
