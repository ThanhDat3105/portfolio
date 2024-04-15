import React, { useContext, useEffect, useRef } from "react";

import js from "../../../images/js.png";
import react from "../../../images/reactjs.png";
import ts from "../../../images/ts.png";
import git from "../../../images/git.png";
import nextjs from "../../../images/nextjs.png";
import redux from "../../../images/redux.png";
import antd from "../../../images/antd.png";
import tailwind from "../../../images/tailwind.png";
import { MyContext } from "../../../contexts/MyContext";

export default function Skill() {
  const { setRefSkill } = useContext(MyContext);
  const refSkill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRefSkill(refSkill);
  }, []);

  return (
    <div ref={refSkill} className="skill pt-60">
      <div className="container_all flex flex-col gap-20">
        <div className="title_skill text-5xl font-semibold text-white">
          My <span className="text-[#00ccd6]">Skill</span>
        </div>
        <div className="content_skill grid grid-cols-4 gap-10">
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={js}
                alt="js"
              />
            </div>
            <p className="name text-2xl font-semibold">JavaScript</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={ts}
                alt="ts"
              />
            </div>
            <p className="name text-2xl font-semibold">TypeScript</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={react}
                alt="react"
              />
            </div>
            <p className="name text-2xl font-semibold">ReactJs</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={redux}
                alt="redux"
              />
            </div>
            <p className="name text-2xl font-semibold">Redux</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={git}
                alt="git"
              />
            </div>
            <p className="name text-2xl font-semibold">Git</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={nextjs}
                alt="nextjs"
              />
            </div>
            <p className="name text-2xl font-semibold">NextJs</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={tailwind}
                alt="tailwind"
              />
            </div>
            <p className="name text-2xl font-semibold">Tailwind</p>
          </div>
          <div className="img_skill flex justify-center items-center text-white gap-5">
            <div className="img_src relative w-[80px] h-[80px]">
              <img
                className="absolute top-1/2 -translate-y-1/2"
                src={antd}
                alt="antd"
              />
            </div>
            <p className="name text-2xl font-semibold">Ant Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
