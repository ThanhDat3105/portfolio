import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../../contexts/MyContext";
import me from "../../../images/me.jpg";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { refSkill, setRefAbout } = useContext(MyContext);

  useEffect(() => {
    setRefAbout(aboutRef);
  }, []);

  const handleScroll = () => {
    if (refSkill) refSkill.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={aboutRef} className="about pt-60">
      <div className="container_all">
        <div className="content_about flex">
          <div className="about_left w-1/2">
            <div className="my_img rounded-full w-[350px] h-[350px] relative left-1/2 -translate-x-1/2">
              <img
                className="absolute w-full h-full rounded-full object-cover"
                src={me}
                alt="my-image"
              />
            </div>
          </div>
          <div className="about_right w-1/2 text-white relative">
            <div className="absolute top-1/2 -translate-y-1/2 text-left">
              <div className="about_top font-semibold pb-5">
                <h1 className="text-5xl">
                  About <span className="text-[#00ccd6]">Me</span>
                </h1>
                <h5 className="text-2xl pt-5">Front-end Developer</h5>
              </div>
              <h5 className="">
                I'm a web developer specializing in React.js, deeply passionate
                about crafting dynamic, efficient, and maintainable web
                applications. With diverse experience and knowledge in React.js
                and related technologies, I'm committed to providing optimal and
                innovative solutions for each project. I believe that utilizing
                Next.js not only enhances performance and optimizes websites but
                also opens up creative opportunities while ensuring the best
                user experience. My professionalism, dedication, and teamwork
                skills will ensure that your project is executed smoothly and
                successfully. Let's build amazing and groundbreaking websites
                together.
              </h5>
              <button
                onClick={() => handleScroll()}
                className="bg-[#00ccd6] px-5 py-[6px] mt-10 rounded-3xl text-black text-[14px] duration-300 font-bold hover:shadow-cyan-500 hover:shadow-[0_0_5px,0_0_25px,0_0_100px,0_0_200px]"
              >
                More My Skill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
