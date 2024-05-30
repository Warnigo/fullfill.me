import { useRef, useEffect } from 'react'
import Globekit from './Globekit'

export default function Globe() {

    const canvas = useRef();
  
    useEffect(() => {
        const gk = new Globekit(canvas.current)
        console.log(gk)
    }, []);
    
    return (
      <div className="flex flex-col justify-center items-center bg-white">
        <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-gray-900 pt-16 sm:px-0 px-2">Expand your store to the world</h2>
        <span className="text-lg text-gray-500">No boundaries to your business</span>
        <div id="globekit-container" className="flex justify-center items-center bg-white border-white w-11/12 lg:aspect-h-6 md:aspect-h-9 sm:aspect-h-12 aspect-w-16 aspect-h-16">
          <canvas id="globekit-canvas" ref={canvas} className="bg-white"></canvas>
        </div>
      </div>
    )
  };