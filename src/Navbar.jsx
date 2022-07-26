import React from 'react'
import {
    FaBars,
    FaFacebook,
    FaTwitch,
    FaLinkedin
} from 'react-icons/fa'
import ActionButton from './ActionButton'


const Navbar = () => {
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
    <div className='w-screen h-20 z-20 fixed bg-gray-900 text-white'>
        <div className="px-3 flex items-center justify-between w-full h-full">
           <div className='flex items-center'>
        {/*Menu bar */}
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
             <div className='hidden md:flex mr-4'>
                <ActionButton title="Register" className="px-9 py-3 text-white" />
             </div>
          {/**Hamburger */}
          <div className='md:hidden'>
          <div className='cursor-pointer'>
                <FaBars size={30}/>  
             </div>
          </div>
             
        </div>
    </div>
  )
}

export default Navbar