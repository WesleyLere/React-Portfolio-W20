import React from "react";
import { projects } from "../lib/projectlibrary";

function portfolio() {
  return (
    <>
      <section id="work" className=" jobs">
        <div className="w-full text-xl text-bold pb-5 item flex justify-center bg-blue-400">
          <h1 className="justify-center">Personal Projects</h1>
        </div>
        <div className="flex">
          {projects.map((project, i) => (
            <div className="flex border-2 rounded w-1/2 m-5 text-gray-200 bg-gradient-to-t from-blue-600 to-blue-800 border-slate-800 job" key={i}>
              <div className="job-info flex-col ">
                <div className="job-img ">
                  <a href={project.link} target="blank">
                    <img
                      src={project.src}
                      className=" flex p-5 "
                      alt={project.name}
                    />
                  </a>
                </div>
                <div className="job-text w-3/4 flex item-center ">

                  <p className="m-5">{project.description}</p>
                </div>
              </div>
            </div>
          )
          )}
        </div>
      </section>
    </>
  );
};

export default portfolio;