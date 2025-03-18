import React, { useRef, useState } from 'react'

function Hero() {
    const [currentIndex, setCurrentIndex]= useState(1)
    const[hasClicked, setHasClicked] = useState(false)
    const [ isLoading, setIsLoading] = useState(true)
    const [loadingVideos, setLoadingVideos]= useState(0)
    const totalVideos= 4;
    const nextVdRef = useRef(null)
    const handleMiniVdClick= ()=>{
        setHasClicked(true)
        setCurrentIndex((prevIndex)=> prevIndex+1)

    }
    const getVideooSrc = (index)=> `videos/hero-${index}.mp4`
    const handleVideoLoad = ()=>{
        setLoadingVideos((prev)=> prev+1)
    }
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg '><div onClick={handleMiniVdClick} className='origin-center'>
                    <video
                    ref={nextVdRef}
                    src={getVideooSrc(currentIndex+1)}
                    loop
                    muted
                    id='current-video'
                    className='size-64 origin-center scale-150 object-cover object-center '
                    onLoadedData={hadleVideoLoad}
                    />
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero