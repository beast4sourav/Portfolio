import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import realtime from "@/assets/images/Real-time.png"
import gemini from "@/assets/images/gemini.png"
import chatapp from "@/assets/images/chat-app.png"
import carRent from"@/assets/images/carRent.png"
import Image from "next/image";
import CheckCircle from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import password from "@/assets/images/password.png"


const portfolioProjects = [
  {
    company: "Chat App",
    year: "2025",
    title: "Real Time Chat App",
    results: [
      { title: "This is real time chating App" },
      { title: "This Project cover backend and socket.io concepts" },
      { title: "Thanks for visiting " },
    ],
    link: "https://fullstack-chat-app-7xt5.onrender.com",
    image: chatapp,
  },
  {
    company: "Car-Rental",
    year: "2025",
    title: "Car Rental App",
    results: [
      { title: "This is the app to reant luxury cars" },
      { title: "In this you can book luxury cars from legit owner" },
      { title: "Thanks for visiting " },
    ],
    link: "https://car-rent-frontend-sk.vercel.app/",
    image: carRent,
  },
 
  {
    company: "Map",
    year: "2024",
    title: "Real Time Device Tracking",
    results: [
      { title: "This is real time Device Tracking" },
      { title: "This Project cover some backend concepts" },
      { title: "Thanks for visiting " },
    ],
    link: "https://github.com/beast4sourav/Portfolio/tree/master/src/assets/images",
    image: realtime,
  },
  {
    company: "Google Gemini",
    year: "2024",
    title: "Frontend of Google Gemini",
    results: [
      { title: "This is the Ai tool that is introduced by Google" },
      { title: "This Project cover some API calling concept" },
      { title: "Click the link to see the Project" },
    ],
    link: "https://gemini-sk.vercel.app/",
    image: gemini,
  },

  {
    company: "Password Generator",
    year: "2022",
    title: "Amazing Password Generator ",
    results: [
      { title: "This is the Password Generator" },
      { title: "This project cover new Javascript concept" },
      { title: "Click the like to generator your unique Password" },
    ],
    link: "https://password-generator-sk.vercel.app/",
    image: password,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircle className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="inline-flex h-12 animate-shimmer mt-4 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      Visite Live Site
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
