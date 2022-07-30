import React from 'react'
import {FaSearch,FaBell,FaCalendar,FaClock,FaStar} from  'react-icons/fa'
import image from './assets/img.jpg'
const Belling = () => {
const images =[
    {
        id:1,
        image:'./assets/img.jpg'
    },
    {
        id:2,
        image:'./assets/img.jpg'
    },
    {
        id:3,
        image:'./assets/img.jpg'
    },
    {
        id:4,
        image:'./assets/img.jpg'
    },
]
  return (
    <div>
    <div className='flex justify-between w-min-screen  min-screen-h'>
        <div className='m-2'>
            <h1 className='font-bold'>Hi Jane,</h1>
            <h3>How are you doing?</h3>
        </div>
        <div className='flex m-2'>
          <FaBell size={40} className="text-gray-600 p-2"/>
          <FaSearch size={40} className="text-gray-600 p-2"/>
        </div>      
    </div>
    {/**Card */}
    <div className='flex items-center '>
    <div className=' m-3 w-full bg-indigo-600  rounded-lg h-[150px] shadow-2xl'>
        <div className='flex pt-3'>
          <img src={image} height="20px" width="80px" className='ml-7 mb-6 pt-2 rounded-lg' alt="" />
          <div className='m-2 text-white mt-2'>
          <h3 className='font-bold'>Jane Belling Belling</h3>
          <h4>Software Engineer</h4>
          <div className='ml-6 pt-2 flex '>
            <div className='flex rounded-xl bg-blue-500  mt-5'>
         <FaCalendar className='m-1'/>Today
         <FaClock className='m-1'/>11:47-12-47PM
            </div>
          </div>
          
          </div>
          
        </div>
        
        </div>
       
    </div>
    <h2 className='p-2 font-bold'>Health Needs</h2>
             
<div className=' flex justify-center items-center'> 
{
 images.map(({id,images})=>(
<img key={id} src={image} alt="" height="12px" width="60px"  className='rounded-full p-2'/>

 ))
} 

</div>


<h2 className='p-2 font-bold text-lg'>Nearby Doctor</h2>
<div className='flex'>
<img src={image} alt=""  height="100px" width="90px" className='m-3'/>
<div className='pt-6'>
<h3 className='font-bold'>dr.Drew Darkwah</h3>
<h3>Dental Specialist</h3>
<div className='flex'>
<FaStar className='m-1 text-yellow-500'/>
<h4>(12)Reviews</h4>
</div>
</div>

</div>
<div className='flex'>
<img src={image} alt=""  height="100px" width="90px" className='m-3'/>
<div className='pt-6'>
<h3 className='font-bold'>dr.Drew Darkwah</h3>
<h3>Dental Specialist</h3>
<div className='flex'>
<FaStar className='m-1 text-yellow-500'/>
<h4>(12)Reviews</h4>
</div>
</div>

</div>



    </div>
  )
}

export default Belling