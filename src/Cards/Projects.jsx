import { MoveRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TaskManagementSystem from "../assets/TaskManagementSystem.png";
import { useState } from "react";
import WeatherUI from "../assets/WeatherUI.png"
import { motion } from "framer-motion";
import Apisentinel from "../assets/Apisentinel.png"
import TalentRankAI from "../assets/TalentRankAI.png"
import chatbot from "../assets/chatbot.png"
import placeslogo from '../assets/placeslogo.png'

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
  }),
};

const tools = [
  { id: 1, name: "React" },
  { id: 2, name: "TailwindCSS" },
  { id: 3, name: "Django" },
  { id: 4, name: "PostgreSQL" },
  { id: 5, name: "ElasticSearch" },
  { id: 6, name: "FastAPI" },
  { id: 7, name: "Node.js" },
  { id: 8, name: "Express.js" },
  { id: 9, name: "MySQL" },
  { id: 10, name: "JavaScript" },
  
];

const projects = [
  {
    id: 1,
    title: "Task Management System",
    descriptions:
      "TaskFlow is a full-stack team task-management application. Users can register, create teams, add members, assign tasks, and follow work through a four-stage board: To Do, Progress, Review, and Completed.",
    image: TaskManagementSystem,
    shortdescription: "A full-stack app to manage teams and track tasks.",
    tools: [1, 2, 3, 4],
    liveLink: "https://task-management-system-pi-ebon.vercel.app",
    githubLink: "https://github.com/talha-zahid1/TaskManagementSystem.git",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "TalentRank-AI",
    descriptions:
      "TalentRank AI is a backend-only, AI-powered resume screening system that automates resume parsing, skill extraction, candidate ranking, and job application workflows for recruiters. It accepts PDF/DOCX resumes, ranks candidates against job requirements, offers fast search through Elasticsearch, and lets recruiters manage job postings, with role-based access control and email/password and Google OAuth 2.0 login. It also sends welcome, resume confirmation, and selection emails, and is built with FastAPI, PostgreSQL, Elasticsearch, and Docker, deployed on Vercel.",
    shortdescription:
      "TalentRank AI is a backend-only AI resume screening system that automates resume parsing, skill extraction, and candidate ranking.",
    image: TalentRankAI,
    tools: [4, 5, 6],
    liveLink: "https://talent-rank-ai-bexz-git-main-talhazahidse-2875s-projects.vercel.app/docs",
    githubLink: "https://github.com/talha-zahid1/TalentRank-AI.git",
    category: "Backend",
  },
  {
    id: 3,
    title: "ApiSentinel - API Key Management Service",
    descriptions:
      "ApiSentinel is a full-stack API key management platform that allows developers to generate, rotate, revoke, and monitor API keys for their applications. Built with Django REST Framework on the backend and React + Vite on the frontend.",
    shortdescription:
      "A platform for managing API keys with generation, rotation, and monitoring capabilities.",
    image: Apisentinel,
    tools: [1, 2, 3, 4],
    liveLink: "https://api-sentinel-phi.vercel.app/",
    githubLink: "https://github.com/talha-zahid1/ApiSentinel.git",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Weather UI",
    descriptions:
      "A modern weather application with a clean UI that provides real-time weather information and forecasts. Built with React and integrated with a weather API to fetch accurate data.",
    shortdescription:
      "A modern weather application with a clean UI that provides real-time weather information and forecasts.",
    image: WeatherUI,
    tools: [1, 2, 10],
    liveLink: "https://weather-ui-git-main-talhazahidse-2875s-projects.vercel.app/",
    githubLink: "https://github.com/talha-zahid1/Weather-UI.git",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Chatbot AI-Backend API",
    descriptions:
      "A backend AI chatbot application built with Node.js, Express.js, and MySQL, focused on clean, scalable backend architecture, secure session-based authentication, and well-structured RESTful APIs. Every route is documented and thoroughly tested using a Postman Collection to ensure reliability and easy integration.",
    shortdescription:
      "A backend AI chatbot application built with Node.js, Express.js, and MySQL, featuring clean architecture, session-based authentication, and RESTful APIs fully documented and tested with Postman.",
    image: chatbot,
    tools: [7, 8, 9],
    liveLink: "",
    githubLink: "https://github.com/talha-zahid1/Chat_Bot_Ai.git",
    category: "Backend",
  },
  {
    id: 6,
    title: "Nearby Places Recommender ",
    descriptions:
      "Nearby Places Recommender is a backend-only REST API that provides place recommendations based on a user’s current location (latitude and longitude). Users can select a mood or preference such as food, work, relaxation, or exploration. The API fetches nearby places using OpenStreetMap-based services and filters them according to the chosen mood. It is built with Node.js and Express and follows a clean MVC architecture for scalability and maintainability.",
    shortdescription:
      "Nearby Places Recommender is a backend-only REST API that suggests nearby places based on a user’s location and mood.",
    image: placeslogo,
    tools: [7, 8, 10],
    liveLink: "",
    githubLink: "https://github.com/talha-zahid1/Near_by_Places_Recommender.git",
    category: "Backend",
  },

];

const Projects = () => {
  const [project_id, setproject_id] = useState(1);

  const selected_project = projects.find((elem) => elem.id === project_id);

  return (
    <div className="flex items-center flex-col px-5 justify-center w-full">
      {/* Featured Project */}
      <div className="grid md:grid-cols-[1.5fr_2fr] grid-cols-1 border md:gap-3 w-full max-w-[780px] p-2 mt-5 border-purple-600 rounded-lg">
        {/* Project Image */}
        <motion.div
          className="relative flex items-center justify-center p-6"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute h-1/2 w-1/2 rounded-lg bg-purple-600/40 blur-3xl" />

          <div className="relative w-[75%] mx-auto md:w-full z-10 rounded-2xl border-[6px] border-[#0b0614] bg-[#0b0614] shadow-[0_0_40px_rgba(168,85,247,0.5)] [transform:perspective(1200px)_rotateX(12deg)_rotateY(35deg)_rotateZ(-15deg)] transition-transform duration-500 hover:[transform:perspective(1200px)_rotateY(0deg)_rotateZ(0deg)]">
            <img
              src={selected_project?.image}
              alt={selected_project?.title}
              className="block h-auto w-full rounded-lg object-contain"
            />
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="md:gap-3 p-3 gap-1 md:p-5 mt-5 flex flex-col items-start min-h-[100px]"
        >
          <div className="border border-purple-600 bg-purple-500/25 shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)] h-[25px] w-[85px] md:h-[35px] md:w-[105px] flex justify-center items-center rounded-3xl">
            <p className="font-hero text-white text-sm md:text-lg">
              {selected_project?.category}
            </p>
          </div>

          <h1 className="font-hero text-white px-1 mt-1 md:text-3xl">
            {selected_project?.title}
          </h1>

          <p className="font-hero text-purple-200 md:text-lg text-xs tracking-tight px-1 md:px-2">
            {selected_project?.descriptions}
          </p>

          {/* Tools Used */}
          <div className="flex flex-1 flex-wrap mt-2 md:gap-3 gap-2 inline-flex md:px-1">
            {selected_project?.tools?.map((tool_id) => {
              const tool = tools.find((elem) => elem.id === tool_id);

              if (!tool) return null;

              return (
                <div
                  key={tool_id}
                  className="border border-purple-600 bg-purple-200/10 shadow-[inset_0_0_6px_rgba(168,85,247,0.3),0_0_8px_rgba(168,85,247,0.2)] h-[25px] md:h-[30px] min-w-0 flex justify-center items-center rounded-2xl p-2"
                >
                  <p className="font-hero px-3 text-purple-100 text-xs md:text-lg">
                    {tool.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Live and GitHub Links */}
          <div className="inline-flex md:gap-3 gap-2 px-1 md:px-2 py-2">
            {
              selected_project?.liveLink?(
                <a
              href={selected_project?.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:h-[40px] h-[25px] w-[65px] md:w-[130px] border bg-gradient-to-r from-violet-600 to-purple-500 text-white flex items-center justify-center hover:from-violet-500 hover:to-purple-400 md:gap-1 gap-0.5 border-purple-500 rounded-xl font-hero md:text-xl text-sm tracking-wider"
            >
              <ExternalLink className="md:h-5 h-3 w-4 md:w-6" />
              Live
            </a>
              ):( <button
    onClick={() => alert("Not deployed yet!")}
    className="md:h-[40px] h-[25px] w-[65px] md:w-[130px] border bg-gradient-to-r from-violet-600 to-purple-500 text-white flex items-center justify-center hover:from-violet-500 hover:to-purple-400 md:gap-1 gap-0.5 border-purple-500 rounded-xl font-hero md:text-xl text-sm tracking-wider"
  >
    <ExternalLink className="md:h-5 h-3 w-4 md:w-6" />
    Live
  </button>)
            }

            <a
              href={selected_project?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:h-[40px] h-[25px] min-w-0 md:w-[130px] border border-violet-500/50 shadow-[0_0_12px_rgba(139,92,246,0.35)] text-white flex items-center justify-center hover:bg-purple-100/20 md:gap-1 p-2 rounded-xl font-hero md:text-xl text-sm tracking-wider"
            >
              <FaGithub className="md:h-5 h-3 w-4 md:w-6" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Small Project Cards */}
      <div className="border grid md:grid-cols-3 items-stretch gap-2 md:pt-3 pt-3 md:gap-3 w-full max-w-[780px]">
        {projects
          .filter((elem) => elem.id !== project_id)
          .map((elem, index) => {
            return (
              <motion.div
                key={elem.id}
                variants={item}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                
                className="min-h-[100px] w-full md:flex md:flex-col p-2 min-w-0 flex flex-row items-center gap-3 md:items-stretch md:gap-0 md:flex-none border border-purple-600 rounded-lg "
              >
                {/* Project Image */}
                <div className="relative flex  items-center justify-center w-24 shrink-0 md:w-full md:shrink md:p-2">
                  <div className="relative w-full z-10 rounded-lg md:rounded-2xl border-2 md:border-[6px] border-[#0b0614] bg-[#0b0614] md:shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    <img
                      src={elem?.image}
                      alt={elem?.title}
                      className="block h-[105px] w-full rounded-md md:rounded-lg object-contain"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col items-start flex-1 min-w-0 gap-1 p-0 md:p-5 md:mt-1 md:min-h-[100px]">
                  <div className="border border-purple-600 bg-purple-500/25 shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)] h-[25px] w-[85px] md:h-[25px] md:w-[95px] hidden md:flex justify-center items-center rounded-3xl">
                    <p className="font-hero text-white text-sm">
                      {elem?.category}
                    </p>
                  </div>

                  <h1 className="font-hero text-white text-base px-1 mt-1 max-w-full truncate md:overflow-visible md:whitespace-normal md:px-1 md:mt-1 md:text-xl">
                    {elem?.title}
                  </h1>

                  <p className="font-hero text-purple-200 md:text-sm text-xs tracking-tight px-1 md:px-2">
                    {elem?.shortdescription}
                  </p>

                  {/* Tools Used */}
                  <div className="flex flex-wrap mt-2 md:gap-3 gap-2 inline-flex md:px-1">
                    {elem?.tools?.map((tool_id) => {
                      const tool = tools.find(
                        (toolItem) => toolItem.id === tool_id
                      );

                      if (!tool) return null;

                      return (
                        <div
                          key={tool.id}
                          className="border border-purple-600 bg-purple-200/10 shadow-[inset_0_0_6px_rgba(168,85,247,0.3),0_0_8px_rgba(168,85,247,0.2)] h-[25px] md:h-[25px] min-w-0 flex justify-center items-center rounded-2xl p-2"
                        >
                          <p className="font-hero px-3 text-purple-100 text-xs md:text-sm">
                            {tool.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* View Project */}
                  <div className="md:h-[40px] md:mt-2 mt-1 h-[25px] w-full border border-violet-500/50 shadow-[0_0_12px_rgba(139,92,246,0.35)] hover:bg-purple-100/20 text-purple-200  flex items-center justify-center rounded-2xl font-hero md:text-sm text-xs tracking-wider md:gap-3 gap-0.5 px-1 cursor-pointer"
                  onClick={() => setproject_id(elem.id)}
                  >
                    <p>View Project</p>
                    <MoveRight className="text-purple-400 md:h-5 h-3 w-4 md:w-6" />
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;