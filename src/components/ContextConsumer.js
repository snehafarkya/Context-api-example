import {useContext, useEffect, useState} from 'react'
import { customContext } from './ContextProvider';
import { Link } from 'react-router-dom';
import { HiHeart } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { CiCircleAlert } from 'react-icons/ci';
import { BsCircle } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';

export default function GetCon({children}) {
   const { state, setState, image, wishlist, setWishlist} = useContext(customContext);
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h1 className='font-bold text-3xl text-center'>Demonstrating CONTEXT API</h1>
    <main className='flex justify-center items-center flex-col gap-2 '>
      <div className='card border-4 relative border-gray-800 rounded-lg shadow-2xl h-[300px] w-[300px]'>
        {image && <img src={image} alt='imageishere'/>}
        {/* <Link to={'/wishlist'}> */}
        <FiHeart className={`absolute top-1 right-1 z-20 cursor-pointer ${wishlist ? 'fill-yellow-50 hover:fill-yellow-50':'fill-none hover:fill-none'} `} onClick={()=>setWishlist((prev)=>!prev)} />
        {/* </Link> */}
      </div>
      <div className="flex justify-center gap-2">
      <button className='p-2 rounded-sm bg-slate-600 shadow-lg text-white font-semibold' onClick={()=>setState((prev)=>prev+1)}>Add to cart ({state})</button>
      <button disabled={!state} className='p-2 rounded-sm bg-slate-600 shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold' onClick={()=>setState((prev)=>prev-1)}>Remove from cart </button>
      </div>
      <div className="flex gap-2 ">
      <Link to={'/cart'} className='underline font-semibold'>Go to Cart</Link>
      <Link to={'/wishlist'} className='underline relative font-semibold'>Wishlist
      {wishlist ? 
      <FaCircle size={8} fill='red' className=' fill-red-900 animate-pulse absolute top-0 -right-2'/> : null}
      </Link>
      </div>
      {children}
    </main>
    </div>

  )
}
