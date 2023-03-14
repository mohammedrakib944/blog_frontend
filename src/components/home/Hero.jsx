import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import profilePic from "../../../public/img/rakib.jpg";
import Typewriter from "typewriter-effect";
// import BG from "./bg.svg";

const Hero = () => {
  return (
    <div className="hero mt-8 min-h-[480px] 0 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={profilePic}
          alt="rakib"
          priority={true}
          width=""
          className="mask mask-squircle w-[290px] lg:-rotate-6 hover:rotate-0 hover:scale-110 duration-200"
        />
        <div className="lg:ml-6">
          <h2 className="text-3xl">Hi!</h2>
          <h1 className="text-3xl lg:text-4xl font-bold flex gap-2">
            I'm
            <Typewriter
              options={{
                strings: ["Rakib", "a Programmer", "a Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-5 text-gray-400">
            I am a Fullstack Web Developer. Also I have great knowledge about{" "}
            <b>Cyber Security</b> <br /> and Compitive Programming
          </p>

          <a
            className="text-2xl"
            href="https://github.com/mohammedrakib944"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
