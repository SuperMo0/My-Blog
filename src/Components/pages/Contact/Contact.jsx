import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";




export default function Contact() {
    return (
        <div className="wrapper">
            <div className="socials-container">

                <div className="social-container">
                    <a href="https://www.linkedin.com/in/mowafk-mha/"><FaLinkedin className='contact-social'></FaLinkedin>  <p>Linked in</p></a>

                </div>

                <div className="social-container">
                    <a href="https://github.com/SuperMo0"><  FaGithub className='contact-social' />   <p>Github</p>
                    </a>

                </div>


                <div className="social-container">
                    <a href="https://codeforces.com/profile/SuperMo"><SiCodeforces className='contact-social'></SiCodeforces>  <p>CodeForces</p></a>

                </div>
            </div>




        </div>
    )
}
