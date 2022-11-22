import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineCodepen } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import deved from "../public/dev1.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Zhuzum Ivanova Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">Zhuzum</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl hover:scale-105 dark:text-gray-200"
                />
              </li>
              <li className="hover:scale-105">
                <button
                  onClick={() => (window.location = "mailto:zhuzum@gmail.com")}
                  className="bg-gradient-to-r from-cyan-700 to-teal-500 text-white px-4 py-2 rounded-md ml-8 flex justify-between gap-2"
                >
                  <IoIosSend className="mt-1" /> Contact Me
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium py-2 md:text-6xl dark:text-teal-400">
              Zhuzum Ivanova
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Frontend Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              I love to create beautiful and performant digital products with
              delightful user experiences. Join me down below and let's make
              something special!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-500">
            <a
              className="hover:scale-105 hover:text-teal-600 cursor-pointer"
              href="https://www.linkedin.com/in/zhuzum-ivanova-16403558/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/ZhuzumA"
              className="hover:scale-105 hover:text-teal-600 cursor-pointer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a
              className="hover:scale-105 hover:text-teal-600 cursor-pointer"
              href="https://codepen.io/zhuzum"
              target="_blank"
            >
              <AiOutlineCodepen />
            </a>
          </div>
          <div className="relative mx-auto mb-5 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-3 dark:text-gray-200">My, Myself & I</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              With an Engineering degree and my first working experience in the
              Oil&Gas industry, almost {"5"} years ago, my husband and I decided
              to move to Germany. After working as an Engineer and later in the
              tertiary sector as a
              <span className="text-teal-600"> Commertial</span> Photographer, I
              decided to change my career. As an engineer and digital creator, I
              wanted to combine both my skills, and I found it in Front-End
              Development.  Always open to trying new things and optimistic
              about new ideas.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I am a <span className="text-teal-600">self - taught</span>{" "}
              Front-End Developer. Definitely a team player, well-organised
              person, problem solver with high attention to detail. Fan of
              filming & video editing, outdoor activities, and electronic Music.
              A family person and mother of two inquisitive children.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 basis-1/3 dark:bg-white">
              <Image src={code} width={100} heigh={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Problem Solver</h3>
              <p className="py-2">
                Creating successful responsive websites that are fast, ease to
                use and built with best practices.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React.js, Redux</p>
              <p className="text-gray-800 py-1">
                HTML/CSS, Sass or CSS frameworks such us Tailwind, Bootstrap
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 basis-1/3 dark:bg-white">
              <Image src={design} width={100} heigh={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant responsive design suited for your small
                business
              </p>
              <h4 className="py-4 text-teal-600">
                Design tools and approaches
              </h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Responsive, Mobile First</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 basis-1/3 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                heigh={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Software Testing
              </h3>
              <p className="py-2">
                Testing your digital products to improve quality
              </p>
              <h4 className="py-4 text-teal-600">Type of Testing I do</h4>
              <p className="text-gray-800 py-1">Usability Testing</p>
              <p className="text-gray-800 py-1">API with Postman</p>
              <p className="text-gray-800 py-1">Functional</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">
              Dive into my universe
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a frontend developer, I have
              built some projects. Clock Application API, Landing Page
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a
                className="hover:scale-105 cursor-pointer"
                target="_blank"
                href="https://zhuzuma.github.io/ClockAppAPI/"
              >
                <Image
                  src={web1}
                  width={"100%"}
                  height={"100%"}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                className="hover:scale-105 cursor-pointer"
                target="_blank"
                href="https://zhuzuma.github.io/Mangato_Gallo/"
              >
                <Image
                  src={web2}
                  width={"100%"}
                  height={"100%"}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                className="hover:scale-105 cursor-pointer"
                target="_blank"
                href="https://zhuzuma.github.io/portfolio/"
              >
                <Image
                  src={web3}
                  width={"100%"}
                  height={"100%"}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 items-stretch">
              <Image
                src={web4}
                width={"100%"}
                height={"100%"}
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
