import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowUp, AiOutlineGithub } from 'react-icons/ai';
import me from "../assets/profile3.jpg"

const Footer = () => {
    return (
        <footer>
            <a href="#home"> <AiOutlineArrowUp /> </a>
            <div>
                <img src={me} alt="Founder" />
                {/* https://avatars.githubusercontent.com/u/25058652 */}
                <h2>Atharv Singh</h2>
                <p>I live and breathe development.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://github.com/im-atharvsingh" target={'blank'}> <AiOutlineGithub /></a>
                </article>

                <article>
                    <a href="linkedin.com/in/itsatharv-singh" target={'blank'}> <AiFillLinkedin /></a>
                </article>

                <article>
                    <a href="https://twitter.com/itisatharv" target={'blank'}> <AiFillTwitterCircle /></a>
                </article>  

                <article>
                    <a href="https://www.instagram.com/iatharvsingh_pvt" target={'blank'}> <AiFillInstagram /></a>
                </article>
                
            </aside>

        </footer>
    )
}

export default Footer;
