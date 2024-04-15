import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

export default function Header() {
  const { refIntroduce, refAbout, refSkill, refProject, refContact } =
    useContext(MyContext);
  const handleScroll = (refScroll: any) => {
    if (refScroll) refScroll.current.scrollIntoView({ behavior: "smooth" });
    console.log(refScroll);
  };

  return (
    <div className="header bg-[#06112a] text-white fixed w-full z-50">
      <div className="container_all">
        <div className="content_header flex h-[60px] items-center">
          <div className="left_header w-1/2 flex">
            <p className="font-semibold text-xl">Portfolio.</p>
          </div>
          <div className="right_header w-1/2">
            <ul className="flex text-xl font-semibold justify-between">
              <li className="p-[16px]">
                <button
                  className="hover:text-cyan-500 duration-300"
                  onClick={() => handleScroll(refIntroduce)}
                >
                  Introduce
                </button>
              </li>
              <li className="p-[16px]">
                <button
                  className="hover:text-cyan-500 duration-300"
                  onClick={() => handleScroll(refAbout)}
                >
                  About
                </button>
              </li>
              <li className="p-[16px]">
                <button
                  className="hover:text-cyan-500 duration-300"
                  onClick={() => handleScroll(refSkill)}
                >
                  Skills
                </button>
              </li>
              <li className="p-[16px]">
                <button
                  className="hover:text-cyan-500 duration-300"
                  onClick={() => handleScroll(refProject)}
                >
                  Project
                </button>
              </li>
              <li className="p-[16px]">
                <button
                  className="hover:text-cyan-500 duration-300"
                  onClick={() => handleScroll(refContact)}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
