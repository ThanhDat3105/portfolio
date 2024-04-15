import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../../contexts/MyContext";
import phoneEcommerce from "../../../images/phone-ecommerce.png";
import movie from "../../../images/movie.png";
import course from "../../../images/course.png";

export default function Project() {
  const projectRef = useRef<HTMLDivElement>(null);
  const { setRefProject } = useContext(MyContext);

  useEffect(() => {
    setRefProject(projectRef);
  }, []);

  return (
    <div ref={projectRef} className="project pt-60">
      <div className="container_all">
        <h1 className="project_title text-5xl font-semibold text-white pb-20">
          Latest<span className="text-[#00ccd6]">Project</span>
        </h1>
        <div className="content_project flex gap-10">
          <div className="project_item group relative">
            <div className="img_project">
              <img
                className="rounded-lg"
                src={phoneEcommerce}
                alt="my-project"
              />
            </div>
            <div className="view_detail flex flex-col justify-around rounded-lg bg-gradient-to-t from-[#00eeff] overflow-hidden group-hover:overflow-auto w-full h-0 group-hover:h-full  transition-all duration-300 bottom-0 absolute">
              <p className="text-2xl font-bold">Phone-ecommerce</p>
              <button className="bg-[#e0dfe0] hover:bg-[#e0dfe0c0] duration-300 mr-auto ml-auto px-5 py-[6px] bottom-0 rounded-3xl text-black text-[14px] font-semibold mt-5">
                <a
                  target="_blank"
                  href="https://phone-ecommerce-delta.vercel.app/"
                >
                  View Detail
                </a>
              </button>
            </div>
          </div>
          <div className="project_item group relative">
            <div className="img_project rounded-lg">
              <img className="rounded-lg" src={movie} alt="my-project" />
            </div>
            <div className="view_detail flex flex-col justify-around rounded-lg bg-gradient-to-t from-[#00eeff] overflow-hidden group-hover:overflow-auto w-full h-0 group-hover:h-full transition-all duration-300 bottom-0 absolute">
              <p className="text-2xl font-bold">Review Movies</p>
              <button className="bg-[#e0dfe0] hover:bg-[#e0dfe0c0] duration-300 mr-auto ml-auto px-5 py-[6px] bottom-0 rounded-3xl text-black text-[14px] font-semibold mt-5">
                <a
                  target="_blank"
                  href="https://movie-app-brown-ten.vercel.app/"
                >
                  View Detail
                </a>
              </button>
            </div>
          </div>
          <div className="project_item group relative">
            <div className="img_project rounded-lg">
              <img className="rounded-lg" src={course} alt="my-project" />
            </div>
            <div className="view_detail flex flex-col justify-around rounded-lg bg-gradient-to-t from-[#00eeff] overflow-hidden group-hover:overflow-auto w-full h-0 group-hover:h-full transition-all duration-300 bottom-0 absolute">
              <p className="text-2xl font-bold">Course</p>
              <button className="bg-[#e0dfe0] hover:bg-[#e0dfe0c0] duration-300 mr-auto ml-auto px-5 py-[6px] bottom-0 rounded-3xl text-black text-[14px] font-semibold mt-5">
                <a
                  target="_blank"
                  href="https://e-learning-app-three.vercel.app/"
                >
                  View Detail
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
