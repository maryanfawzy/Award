import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { HiRefresh } from 'react-icons/hi'
const links = [
    {href: 'https://maryanfawzy.com', icon : <FaPerson/>},
    {href: 'https://www.linkedin.com/in/maryan-fawzy-591a0990', icon : <FaLinkedin/>},
    {href: 'https://github.com/maryanfawzy', icon : <FaGithub/>}
]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-center text-sm font-light md:text-left">@Maryan Fawzy 2025</p>
            <div className="flex justify-center gap-4  md:justify-start">
                {links.map((link)=>(
                    <a key={link} href={link.href} target='-blank'
                    rel='noopener noreferrer '  className="text-black transition-colors duration-500 ease-in-out hover:text-white">{link.icon}</a>
                ))}
                


            </div >
            <a href=""></a>


        </div>

    </footer>
  )
}

export default Footer
