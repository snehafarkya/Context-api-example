import {useContext, useEffect, useState} from 'react'
import { customContext } from './ContextProvider';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { BiArrowBack } from 'react-icons/bi';

export default function Wishlist(props) {
   const { state , image, wishlist, setWishlist} = useContext(customContext);
  //  console.log('state',state)
  
   return(
   <div className='flex gap-4 flex-col items-start'>
   <h1 className='font-bold text-xl '>{wishlist ? `Your Wishlist✨` :`Oopss, you didn't made a wish till now:(`}</h1>
   {wishlist ? (
   <div className="flex gap-2 bg-slate-600 p-2 shadow-lg rounded-md max-w-[300px]">
   <div className='card border-4  border-yellow-50 rounded-lg shadow-2xl h-min w-fit'>
        {image && <img src={image} alt='imageishere'/>}
      </div>
      <div className=" flex relative flex-col text-yellow-50 gap-1"><p className='font-medium text-base leading-[20px]'>This is the Dummy image, coming from api.</p>
      {/* <span className='text-sm'>Quantity: {wishlist}</span> */}
      <button title='Remove from wishlist' className='text-sm absolute bottom-1 p-1 bg-yellow-50 hover:bg-amber-100 font-semibold text-slate-600 rounded-sm flex gap-1 items-end justify-center' onClick={()=>setWishlist(prev=>!prev)}>Remove <IoClose/></button>

      </div>
      </div>
      ):null}
      <Link to={'/'} className='hover:underline font-semibold flex gap-1 items-center'><BiArrowBack/> Go back</Link>
   </div>
      
   )
}