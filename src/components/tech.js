import React from "react";

function Technologies() {
    return (
        <>
            <div className="w-full text-xl text-bold pb-5 item flex justify-center bg-blue-400">
                <h1 className="section-title primary-border">Technologies</h1>
            </div>
            <section>

                <section id="home-page-body" className="resume-body flex justify-center">
                    <div className="article column1 p-5">
                        <p className="column-title text-xl justify-center">Font-End Tech</p>
                        <p className="column-text">
                            <ul className=" p-5">
                                <li className="logo">
                                </li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>APIs</li>
                                <li>TailwindCSS</li>
                                <li>GIT</li>
                            </ul>
                        </p>
                    </div>

                    <div className="article column2">
                        <p className="column-title text-xl p-5 justify-center">Back-End Tech</p>
                        <p className="column-text">
                            <ul className="article column1 p-5">
                                <li className="logo">
                                </li>
                                <li>Node.Js</li>
                                <li>Jest</li>
                                <li>Express.js</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>Object-Relational Mapping(ORM)</li>
                                <li>Model-View-Controller (MVC)</li>
                            </ul>
                        </p>
                    </div>
                    <div className="article column3">
                        {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
                        <p className="column-title p-5 text-xl">Performance Tech</p>
                        <p className="column-text">
                        <ul className="article column1 p-5">
                                <li className="logo">
                                </li>
                                <li>NoSQL</li>
                                <li>Progressive Web Applications (PWA)</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>GraphQL</li>
                                <li>React</li>
                                <li>MERN</li>
                                <li>State</li>
                            </ul>
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
}





export default Technologies;