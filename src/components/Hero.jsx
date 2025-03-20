import React, { useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from '@gsap/react'
import { MdVisibility } from 'react-icons/md'
import { IoMdPhonePortrait } from 'react-icons/io'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'


gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const [currentIndex, setCurrentIndex]= useState(1)
    const[hasClicked, setHasClicked] = useState(false)
    const [ isLoading, setIsLoading] = useState(true)
    const [loadingVideos, setLoadingVideos]= useState(0)
    const totalVideos= 4;
    const nextVdRef = useRef(null)
    const handleMiniVdClick= ()=>{
        setHasClicked(true)
        setCurrentIndex(upCommingVideoIndex)

    }
   
    
        
    const getVideooSrc = (index)=> `videos/hero-${index}.mp4`
    const handleVideoLoad = ()=>{
        setLoadingVideos((prev)=> prev+1)
    }
    const upCommingVideoIndex = (currentIndex % totalVideos) +1



    useGSAP(() => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });
    
      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    });

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg '><div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                    <video
                    ref={nextVdRef}
                    src={getVideooSrc(upCommingVideoIndex)}
                    loop
                    muted
                    id='current-video'
                    className='size-64 origin-center scale-150 object-cover object-center '
                    onLoadedData={handleVideoLoad}
                    />
                </div>
                </div>
                <video 
                ref={nextVdRef}
                src={getVideooSrc(currentIndex)}
                loop
                muted
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                onLoadedData={handleVideoLoad}
                
                />
                <video 
                src={getVideooSrc(currentIndex===totalVideos-1 ? 1 : currentIndex)}
                autoPlay
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoad}
                />
               
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'> G<b>a</b>ming</h1>
            <div className='absolute left-0 top-0 z-40 size-full'>
                <div className='mt-24 px-5 sm:px-10'>
                    <h1 className='special-font hero-heading text-blue-100 '>redefi<b>n</b>e</h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100 '>
                        enter the metagame layer <br />unleash the play economy

                    </p>
                    <Button id= 'watch-trailer' title = 'watch trailer' lefticon = {<TiLocationArrow/>} 
                    containerClass = 'bg-yellow-300 flex-center gap-1'/>
                </div>
            </div>
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'> G<b>a</b>ming</h1>


    </div>
  )
}

export default Hero;