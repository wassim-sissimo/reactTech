import {features} from "../constants"
export function Featurs(){

    return(
        <div className=" mt-16 lg:mt-20 text-center">
            <span className="uppercase bg-neutral-900 rounded-lg px-2 py-1 text-orange-500 my-5">Featurs </span>
            <h1 className="capitalize mt-20 text-3xl lg:text-6xl sm:text-5xl">easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text mb-10">your code </span></h1>
           
           
            <div className="flex flex-wrap mt-10 lg:mt-20 w-[90%] mx-auto">
                {features.map((featur,index)=>
                    <div key={index} className="flex  w-full lg:w-1/3 sm:w-1/2  my-6">
                       <div className="min-w-10 h-10 bg-neutral-900 flex justify-center items-center rounded-[50%] text-orange-500 ">{featur.icon}</div>
                       <div className="ml-3" >
                            <h5 className="text-start text-[19px]">{featur.text}</h5>
                            <p className="text-start text-sm mt-3 text-neutral-300">{featur.description}</p>
                       </div>
                    </div>
                )} 
            </div>
            
        </div>
    )
}