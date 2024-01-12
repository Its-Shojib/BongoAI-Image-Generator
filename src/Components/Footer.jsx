/* eslint-disable react/jsx-no-target-blank */
import img from '../../public/Bongo.png'
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer justify-around items-center p-4 bg-[#0f1b21] text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <img className='w-12 h-12' src={img} alt="" />
                    <p className='text-lg'>Copyright © 2024 - All right reserved by Md Shojib Hossain</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
                    <a href='https://www.facebook.com/mdshojib.hossain.7927' target='_blank'><FaFacebook className='text-4xl' /></a>
                    <a href='https://github.com/Its-Shojib' target='_blank'><FaGithub className='text-4xl' /></a>
                    <a href='https://www.linkedin.com/in/md-shojib-hossain' target='_blank'><FaLinkedin className='text-4xl' /></a>
                    <a href='https://its-shojib.netlify.app' target='_blank'><FaGlobe className='text-4xl' /></a>
                </nav>
            </footer>
        </div>
    )
}
export default Footer;