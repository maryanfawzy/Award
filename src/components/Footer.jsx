import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi'
const links = [
    {href: 'https://maryanfawzy.com', icon : <FaDiscord/>},
    {href: 'https://maryanfawzy.com', icon : <FaDiscord/>},
    {href: 'https://maryanfawzy.com', icon : <FaGithub/>}
]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-center text-sm font-light md:text-left">@Maryan Fawzy 2025</p>
            <div className="flex justify-center gap-4  md:justify-start">
                


            </div >


        </div>

    </footer>
  )
}

export default Footer
