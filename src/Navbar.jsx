import React from 'react'
import { useState } from 'react'
import {
    FaBars,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaTimes
} from 'react-icons/fa'
import ActionButton from './ActionButton'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    {/**Links */}
    const links =[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'services'
        },
        {
            id:4,
            link:'contact'
        },

    ]
  return (
    
    <div className='w-screen h-20 z-20 fixed bg-gray-900 text-white'>{/**Navbar Container */}

        <div className="px-3 flex items-center justify-between w-full h-full">{/**Navbar Contents */}

            <div className='flex items-center'>{/**inside Navbar contents first */}
                
                    <h1 className='font-bold text-4xl'>
                           mione
                    </h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({id, link})=> (
                     <li key={id} className='capitalize p-4 cursor-pointer hover:text-blue-500 duration-300'>{link}</li>
      
            ))}
             </ul>
             <div className='hidden md:flex mr-4'>{/**Button */}
                <ActionButton title="Register" className="px-9 py-3 text-white"/>
             </div>


          {/**Hamburger */}
        <div className='md:hidden'>
            <div onClick={()=>{setNav(true)}} className='cursor-pointer'>
                <FaBars size={30}/>  
        </div>
             </div>


          {/**Mobile menu */}
           <div className={nav ? 'fixed left-0 top-0 w-4/5 h-full text-white bg-gray-900 p-10 duration-500 ease-in ': " h-full fixed top-0 left-[-100%] p-10 duration-300 ease-in"}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <h2 className='text-3xl font-bold capitalize cursor pointer'>myni</h2>
                    <div onClick={()=>{setNav(false)}} className='p-3 cursor pointer'>
                        <FaTimes size={30} />
                    </div>
                </div>
            </div>
           </div>




          </div>    
        </div>
    
  )
}

export default Navbar