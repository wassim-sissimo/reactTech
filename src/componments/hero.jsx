import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import "../index.css"
export function Hero(){
    return(
        <div className="max-w-7xl  mx-auto  text-center lg:mt-20 mt-8 py-8 flex flex-col  items-center">
            <h1 className="text-center  lg:text-7xl  md:text-6xl  sm:text-6xl  text-4xl tracking-wide">virtual build tules <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">for developers</span> </h1>
            <p className="text-center text-neutral-500 max-w-4xl mt-20">Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your imagination
            into immersive reality!</p>

            <div className="mt-20 ">
                <button className="mx-6 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded">Start for free</button>
                <button className="border py-2 rounded px-1">Documentation</button>
            </div>

            <div className="mt-20 flex video-container space-x-6 justify-center">
                <video loop muted autoPlay className="w-1/2 border border-orange-700 rounded-lg " >
                    <source src={video1} type="video/mp4" />
                </video>
                <video loop muted autoPlay className="w-1/2 border border-orange-700 rounded-lg " >
                    <source src={video2} type="video/mp4" />
                </video>
            </div>
        </div>


    )
}