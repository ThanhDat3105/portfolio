import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../../contexts/MyContext";
import me from "../../../images/me.jpg";

export default function Introduce() {
  const refIntroduce = useRef<HTMLDivElement>(null);
  const { refAbout, setRefIntroduce } = useContext(MyContext);

  useEffect(() => {
    setRefIntroduce(refIntroduce);
  }, []);

  const handleScroll = () => {
    if (refAbout) refAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={refIntroduce} className="introduce pt-40">
      <div className="container_all">
        <div className="content_introduce flex">
          <div className="introduce_left w-1/2 text-white relative">
            <div className="max-w-[450px] absolute top-1/2 -translate-y-1/2 text-left">
              <div className="introduce_top font-semibold pb-5">
                <h5 className="text-xl">Hello, It's Me</h5>
                <h1 className="text-4xl">Cao Thanh Dat</h1>
                <h5 className="text-xl font-semibold">
                  And I'm a
                  <span className="text-[#00ccd6]"> Front-end Developer</span>
                </h5>
              </div>
              <h5 className="line-clamp-3">
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
                className="bg-[#00ccd6] px-5 py-[6px] rounded-3xl text-black text-[14px] duration-300 font-bold mt-5 hover:shadow-cyan-500 hover:shadow-[0_0_5px,0_0_25px,0_0_100px,0_0_200px]"
              >
                More About Me
              </button>
            </div>
          </div>
          <div className="introduce_right w-1/2">
            <div className="my_img shadow-[0_0_1px,0_0_25px,0_0_50px,0_0_60px] shadow-cyan-500 rounded-full w-[450px] h-[450px] relative left-1/2 -translate-x-1/2">
              <img
                className="absolute w-full h-full rounded-full object-cover"
                src={me}
                alt="my-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
