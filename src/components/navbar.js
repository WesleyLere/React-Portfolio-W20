import React from "react";



function Nav({ currentTab, changeTab }) {

    return (
        <>
            <div>
                <h1 className="w-full pt-5 item flex justify-center bg-blue-400">Wesley's Portfolio</h1>
               
            </div>
            <nav className="sticky top-0 px-2 sm:px-4 py-2.5 bg-blue-400  flex-row md:h-auto md:w-auto items-stretch">
                <div className="nav-tabs container flex justify-center flex-wrap items-center md-block  mx-auto">

                    <ul className="nav nav-tabs flex-row border-b border-slate-800 justify-center flex ">
                        <li className="nav-item m-5">
                            <a
                                href="#about"
                                onClick={() => changeTab('About')}
                                // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item m-5">
                            <a
                                href="#portfolio"
                                onClick={() => changeTab('Portfolio')}
                                // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                       
                        <li className="nav-item m-5">
                            <a
                                href="#Technologies"
                                onClick={() => changeTab('Technologies')}
                                // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentTab === 'Technologies' ? 'nav-link active' : 'nav-link'}
                            >
                                Technologies
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Nav;