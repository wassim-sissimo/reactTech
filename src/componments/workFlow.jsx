import { CheckCircle2 } from "lucide-react"
import { checklistItems } from "../constants"
import code from "../assets/code.jpg"

export function WorkFlow(){
    return(
        <div className="mt-[10rem] lg:mt-[12rem] text-center">
            <h1 className="text-3xl lg:text-6xl sm:text-5xl capitalize">accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">coding workkflow</span></h1>
            {/* main cotainer for the pic and the lsit */}
            <div className="flex flex-wrap mt-16 lg:mt-20 w-[85%] mx-auto">
                <img src={code} alt="code pic" className="w-full lg:w-1/2"/>

                {/* the container for the list  */}
                <div className="w-full lg:w-1/2">
                    {checklistItems.map((item)=>
                        // list item
                        <div className="flex my-16">
                            <div className="w-9 h-9 bg-neutral-900 text-green-600  flex justify-center items-center rounded-full"><CheckCircle2/></div>
                            <div className="ml-4 text-start">
                                <h4 >{item.title}</h4>
                                <p className="text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                   
                    )}
                </div>
            </div>
        </div>
    )
}