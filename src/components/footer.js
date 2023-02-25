import React from "react";
import ears from '../assets/ears.png'
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscMail } from "react-icons/vsc";


function Footer() {
    return (
        <footer className="p-5 bg-blue-400">
            <div className="p-5">
            <img className="px-5" src={ears}></img>
            <h4 className="px-5">Contact me here!</h4>
            </div>
            <div className="px-5" >
                <ul>
                    <div className="p-5">
                    <li className="logo">
              <VscGithubAlt />
            </li>
                        <a href="https://github.com/WesleyLere">
                            Github
                        </a>
                    </div>
                    <div className="p-5">
                    <li className="logo">
              <AiOutlineLinkedin />
            </li>
                        <a href="https://www.linkedin.com/in/wesley-lere-29b0b3245/">
                            Linkedin
                        </a>
                    </div>
                    <div className="p-5">
                    <li className="logo">
              <VscMail/>
            </li>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                            Email
                        </a>
                    </div>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;