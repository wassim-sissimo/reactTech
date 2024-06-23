import logo from '../assets/logo.png'
import{Menu,X} from "lucide-react"
import { navItems } from '../constants'
import { useState } from 'react'
export function NavBar(){
    const [menuOpen,setMenuOpen]=useState(false)
    return(
        <>
            <nav className="sticky top-0 z-2 backdrop-blur-lg border-b border-blue-50 pb-2 ">
                    <div className='  h-10 mx-auto flex justify-around items-center'>
                        <div className='flex items-center cursor-pointer'>
                            <img src={logo} alt="logo" className='w-10 h-10' />
                            <span className='tracking-tight text-lg'>ReactTech</span>
                        </div>
                        <div>
                            <ul className='hidden lg:flex space-x-6'>
                                {navItems.map((item,index)=>
                                    <li key={index}><a href={item.href}>{item.label}</a></li>
                                )}
                            </ul>
                        </div>
                        <div className='hidden lg:block space-x-6'>
                            <button className='border px-3 py-1 rounded-md'>singin</button>
                            <button className='bg-gradient-to-r from-orange-500 to-orange-800  rounded-md px-3 py-1'>creat acount</button>
                        </div>
                            
                            <button className='lg:hidden' onClick={()=>{
                                setMenuOpen((current)=>!current)
                                console.log(menuOpen)
                            }}>
                                {menuOpen?<X/>:<Menu/>}
                            </button>

                           
                    </div>
                    {menuOpen && (
                        <div className='w-full  bg-neutral-900 fixed  left-0  flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item,index)=>
                                <li className='py-2' key={index}><a href={item.href}>{item.label}</a></li>
                            )}
                        </ul>

                        <div className=' my-5 space-x-7'>
                        <button className='border px-3 py-1 rounded-md'>singin</button>
                        <button className='bg-gradient-to-r from-orange-500 to-orange-800  rounded-md px-3 py-1'>creat acount</button>
                        </div>
                        </div>
                    )}
            </nav>
        </>
    )
}