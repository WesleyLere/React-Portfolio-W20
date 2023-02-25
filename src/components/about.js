import React from 'react';


function About() {
  return (
    <section id="about-me" className=" intro">
      <div className="w-full text-xl text-bold pb-5 item flex justify-center bg-blue-400">
          <h1 className="justify-center">About Me</h1>
        </div>
      <div className="flex justify-center m-5">
        <div className="intro-info w-3/4 flex item-center">
          <div className="intro-img">
            <img src=''></img>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;