import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // 01. Healthcare App (In Progress)
  {
    id: "Healthcare App",
    category: "Healthcare App",
    title: "My Healthcare App",
    src: "/assets/projects-screenshots/Sangeetaprojects/DoctorSelection.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/DoctorSelection.png",
    ],
    live: "", // Replace with actual healthcare app live URL
    github: "https://github.com/Sangeeta-Prajapati/HealthCare-Project",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Healthcare Appointment System
          </TypographyH3>
          <p className="font-mono mb-2">
            Developed a comprehensive healthcare appointment booking platform
            with a user-friendly interface. The system allows patients to easily
            schedule appointments with their preferred doctors and receive
            instant confirmation.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/DoctorSelection.png`,
              `${BASE_PATH}/Sangeetaprojects/AppointmentBooking.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Secure Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Implemented OAuth integration for secure and seamless
            authentication, allowing users to sign in with their Google,
            Facebook, or Apple accounts while maintaining data privacy and
            security.
          </p>
          <SlideShow images={[`${BASE_PATH}/Sangeetaprojects/SignUp&In.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>

          <p className="font-mono mb-2">
            The platform includes appointment scheduling, doctor selection,
            real-time availability checking, and automated email confirmations
            to enhance the patient experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/AppointmentBooking.png`,
              `${BASE_PATH}/Sangeetaprojects/AppointmentPreview.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This Healthcare App streamlines the patient-doctor connection while
            ensuring a secure, efficient booking experience.
          </p>
        </div>
      );
    },
  },

  // 02. Matrimonial Software
  {
    id: "Matchmaking Pro",
    category: "Matrimonial Software",
    title: "Matchmaking Pro",
    src: "/assets/projects-screenshots/Sangeetaprojects/MP-Dashboard.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/MP-Dashboard.png",
    ],
    live: "", // Replace with actual matrimonial app live URL
    github: "https://github.com/Sangeeta-Prajapati/Matrimonial-Project",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital showcase of a revolutionary matchmaking
            platform that&apos;s currently in development.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Intelligent Matchmaking Platform
          </TypographyH3>
          <p className="font-mono mb-2">
            This matrimonial software goes beyond traditional matching by
            incorporating advanced algorithms and personalized support. Each
            profile is carefully curated to ensure meaningful connections, with
            dedicated call support to guide users through their matchmaking
            journey.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/MP-Dashboard.png`,
              `${BASE_PATH}/Sangeetaprojects/ProfileView.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Personalized Support</TypographyH3>
          <p className="font-mono mb-2">
            Our dedicated call support team provides personalized assistance to
            users, helping them navigate profiles and find their perfect match.
            All interactions are recorded for quality assurance and future
            reference.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/Sangeetaprojects/CallRecording.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>

          <p className="font-mono mb-2">
            Comprehensive user profiles, real-time status updates, call
            recording functionality, and an intuitive dashboard make this
            platform stand out in the matrimonial software market.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/MP-Dashboard.png`,
              `${BASE_PATH}/Sangeetaprojects/LiveStatus.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This platform isn&apos;t just a matrimonial service — it&apos;s a
            complete matchmaking ecosystem designed to create meaningful
            connections.
          </p>
        </div>
      );
    },
  },

  // 03. Portfolio project
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/Sangeetaprojects/LandingPage.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/LandingPage.png",
    ],
    live: "", // Replace with actual portfolio live URL
    github: "https://github.com/Sangeeta-Prajapati/Sangeeta-Portfolio.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/LandingPage.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/Projects.png`,
              `${BASE_PATH}/Sangeetaprojects/ProjectView.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },

  // 04. Weather Forecast
  {
    id: "weather-forecast",
    category: "weather-forecast",
    title: "Weather Explorer",
    src: "/assets/projects-screenshots/Sangeetaprojects/weatherLandingPage.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/weatherLandingPage.png",
    ],
    live: "https://weather-data-forecast-frontend-assgn.vercel.app/",
    github:
      "https://github.com/Sangeeta-Prajapati/WeatherData-Forecast-Frontend-Assgn",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive weather forecasting application that brings
            real-time weather data to life with stunning visuals and intuitive
            user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Interactive Weather Dashboard
          </TypographyH3>
          <p className="font-mono mb-2">
            Get instant access to current weather conditions, hourly forecasts,
            and 5-day predictions. The dashboard features dynamic weather icons,
            temperature trends, and detailed meteorological data including
            humidity, wind speed, and atmospheric pressure.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/weatherLandingPage.png`,
              `${BASE_PATH}/Sangeetaprojects/weatherExplore.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Smart Location Search</TypographyH3>
          <p className="font-mono mb-2">
            Search for weather data in any city worldwide with autocomplete
            suggestions. The app also supports geolocation for instant local
            weather updates.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/weatherSearch.png`,
              `${BASE_PATH}/Sangeetaprojects/WeatherForecast.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Modern UI/UX Design</TypographyH3>

          <p className="font-mono mb-2">
            Built with React.js and styled with Tailwind CSS, featuring smooth
            animations powered by Framer Motion and enhanced with Aceternity UI
            components for a premium user experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/weatherBox.png`,
              `${BASE_PATH}/Sangeetaprojects/weatherSearch.png`,
              `${BASE_PATH}/Sangeetaprojects/WeatherForecast2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            Weather forecasting made beautiful and accessible for everyone.
          </p>
        </div>
      );
    },
  },

  // 05. Crypto Currenct Tracker
  {
    id: "crypto-currency-tracker",
    category: "crypto-currency-tracker",
    title: "Crypto Dashboard",
    src: "/assets/projects-screenshots/Sangeetaprojects/cryptoDashboard.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/cryptoDashboard.png",
    ],
    live: "https://reacts-dashboard-crypo-project.vercel.app/",
    github:
      "https://github.com/Sangeeta-Prajapati/Reacts-Dashboard--Crypo--Project",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive cryptocurrency tracking dashboard that provides
            real-time market data, price analysis, and portfolio management
            tools with an intuitive and modern interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-Time Crypto Dashboard
          </TypographyH3>
          <p className="font-mono mb-2">
            Track live cryptocurrency prices, market cap, volume, and price
            changes across hundreds of digital assets. The dashboard features
            interactive charts, trending coins, and detailed market statistics
            with automatic data refresh.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/cryptoDashboard.png`,
              `${BASE_PATH}/Sangeetaprojects/selectCoin.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Advanced Coin Selection</TypographyH3>
          <p className="font-mono mb-2">
            Browse and filter through thousands of cryptocurrencies with
            advanced search functionality. Compare different coins, view
            historical data, and analyze market trends with interactive price
            charts and downloads into excel, PNG and SVG.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/cryptoCurrancy.png`,
              `${BASE_PATH}/Sangeetaprojects/cryptoDownloads.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Modern Crypto Interface
          </TypographyH3>

          <p className="font-mono mb-2">
            Built with React.js , featuring a sleek design with Tailwind CSS,
            smooth animations powered by Framer Motion, and enhanced with ShadCN
            and Aceternity UI components for a professional trading experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/marketPrice.png`,
              `${BASE_PATH}/Sangeetaprojects/marketVolume.png`,
              `${BASE_PATH}/Sangeetaprojects/marketCap.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            Cryptocurrency tracking made simple, powerful, and accessible for
            everyone.
          </p>
        </div>
      );
    },
  },

  // 06. Animated Electra Shop
  {
    id: "electra-shop",
    category: "electra-shop",
    title: "Electra Homepage",
    src: "/assets/projects-screenshots/Sangeetaprojects/ElectraHomePage.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/ElectraHomePage.png",
    ],
    live: "https://electra-shop-animated.vercel.app/",
    github: "https://github.com/Sangeeta-Prajapati/ElectraShop-animated",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A modern animated e-commerce platform showcasing electronic products
            with stunning visual effects, smooth animations, and an engaging
            user experience designed to captivate customers and drive sales.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Dynamic Product Showcase
          </TypographyH3>
          <p className="font-mono mb-2">
            Experience an immersive product gallery featuring the latest
            electronic gadgets and devices. Each product is presented with
            high-quality images, detailed specifications, and interactive hover
            effects that bring the shopping experience to life.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/ElectraHomePage.png`,
              `${BASE_PATH}/Sangeetaprojects/electraPolicies.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">
            Trending Products & Deals
          </TypographyH3>
          <p className="font-mono mb-2">
            Discover the hottest electronics and exclusive deals with our
            trending products section. Features dynamic pricing displays,
            discount badges, and promotional banners that update in real-time to
            showcase the best offers.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/TrendingProducts.png`,
              `${BASE_PATH}/Sangeetaprojects/electraDeals.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Enhanced User Experience
          </TypographyH3>

          <p className="font-mono mb-2">
            Built with React.js, featuring stunning animations powered by Framer
            Motion, modern UI components from ShadCN and Aceternity, plus 3D
            elements created with Spline for an unforgettable shopping journey.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/Testimonials.png`,
              `${BASE_PATH}/Sangeetaprojects/followus.png`,
              `${BASE_PATH}/Sangeetaprojects/ElectraContactUs.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            Where cutting-edge technology meets exceptional shopping experience.
          </p>
        </div>
      );
    },
  },

  // 07. 3D Animation
  {
    id: "3d-animation",
    category: "3d-animation",
    title: "3D Landing Page",
    src: "/assets/projects-screenshots/Sangeetaprojects/3DLandingPage.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/3DLandingPage.png",
    ],
    live: "https://3-d-animation-two.vercel.app/", 
    github: "https://github.com/Sangeeta-Prajapati/3D-animation-",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An immersive 3D animated landing page that showcases cutting-edge
            web technologies with stunning visual effects, interactive 3D
            elements, and smooth animations that create an unforgettable user
            experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Interactive 3D Elements
          </TypographyH3>
          <p className="font-mono mb-2">
            Experience breathtaking 3D models and animations created with Spline
            that respond to user interactions. From floating objects to rotating
            geometries, every element is designed to engage and captivate
            visitors with smooth, realistic movements.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/3DLandingPage.png`,
              `${BASE_PATH}/Sangeetaprojects/3D-whoWeAre.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">
            Advanced Animation Techniques
          </TypographyH3>
          <p className="font-mono mb-2">
            Powered by Framer Motion and custom CSS animations, the page
            features parallax scrolling, morphing transitions, and physics-based
            interactions that create a seamless blend between 2D and 3D
            elements.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/3D-skills.png`,
              `${BASE_PATH}/Sangeetaprojects/3D-contact.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Modern 3D Web Experience
          </TypographyH3>

          <p className="font-mono mb-2">
            Built with React.js and JavaScript, featuring stunning 3D animations
            powered by Spline, smooth transitions with Framer Motion, and modern
            UI components from ShadCN and Aceternity for a premium interactive
            experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Sangeetaprojects/3D-whoWeAre.png`,
              `${BASE_PATH}/Sangeetaprojects/3D-skills.png`,
              `${BASE_PATH}/Sangeetaprojects/3D-contact.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            Where imagination meets reality through the power of 3D web
            animation.
          </p>
        </div>
      );
    },
  },


 



  // 08. StoryBit Streaming Dashboard
{
  id: "storybit-streaming-dashboard",
  category: "streaming-dashboard",
  title: "StoryBit Streaming Dashboard",
   src: "/assets/projects-screenshots/Sangeetaprojects/streaming-dashboardLandingboard.png",
    screenshots: [
      "/assets/projects-screenshots/Sangeetaprojects/storybitLandingPage.png",
    ],
  live: "https://streaming-movie-five.vercel.app/",
  github: "https://github.com/Sangeeta-Prajapati/StreamingMovie.git",
  skills: {
    frontend: [
      PROJECT_SKILLS.next, // Next.js 14 (App Router)
      PROJECT_SKILLS.ts, // TypeScript
      PROJECT_SKILLS.react, // React
      PROJECT_SKILLS.tailwind, // Tailwind CSS
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.css,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.js,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          StoryBit is a modern Netflix-style streaming dashboard built using
          Next.js 14 App Router, TypeScript, and Tailwind CSS. The application
          delivers featured content, categorized movie shelves, and cinematic
          detail pages powered by real-time data from TMDB API.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">
          Server-Rendered Streaming Experience
        </TypographyH3>
        <p className="font-mono mb-2">
          The homepage is fully server-rendered using Next.js App Router,
          ensuring fast load times and optimized SEO. It includes a dynamic
          hero banner showcasing featured movies along with multiple
          horizontally scrollable movie rows such as Trending, Popular,
          and Top Rated categories.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/Sangeetaprojects/storybitLandingPage.png`,
            `${BASE_PATH}/Sangeetaprojects/trailer.png`,
          ]}
        />

        <TypographyH3 className="my-4 ">
          Dynamic Movie Detail Pages
        </TypographyH3>
        <p className="font-mono mb-2">
          Each movie has a dedicated dynamic route that displays detailed
          information including synopsis, ratings, release date, genres,
          and external links. The detail layout is designed with a cinematic
          feel, inspired by modern OTT platforms like Netflix.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/Sangeetaprojects/popular-topRated.png`,
            `${BASE_PATH}/Sangeetaprojects/visitSite-IMDb.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">
          Optimized Architecture & Performance
        </TypographyH3>

        <p className="font-mono mb-2">
          Built with TypeScript for type safety and scalable architecture,
          the project includes structured API helper utilities for TMDB with
          caching and error handling. Server Components eliminate client-side
          data waterfalls, improving performance and reducing Time to First Byte (TTFB).
        </p>

        <TypographyH3 className="my-4 ">
          Modern UI & Deployment Ready
        </TypographyH3>

        <p className="font-mono mb-2">
          The UI follows a glassmorphism-inspired design system with full
          responsiveness across desktop and mobile devices. Images are
          optimized using Next.js Image component for improved Largest
          Contentful Paint (LCP). The project is fully deployment-ready
          on Vercel with environment variable configuration for TMDB API.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/Sangeetaprojects/searchMovie.png`,
            `${BASE_PATH}/Sangeetaprojects/moviesRows.png`,
          ]}
        />

        <p className="font-mono mb-2 mt-8 text-center">
          A production-ready streaming dashboard focused on performance,
          scalability, accessibility, and modern frontend architecture.
        </p>
      </div>
    );
  },
},


  
];
export default projects;
