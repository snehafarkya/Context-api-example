import {useContext, useEffect, useState} from 'react'
import { customContext } from './ContextProvider';
import { Link } from 'react-router-dom';

export default function GetCon({children}) {
   const { state, setState, image} = useContext(customContext);
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='font-bold text-3xl '>Welcome to a learning lesson for CONTEXT API</h1>
    <main className='flex justify-center items-center flex-col gap-2 '>
      <div className='card border-4  border-gray-800 rounded-lg shadow-2xl h-[300px] w-[300px]'>
        {image && <img src={image} alt='imageishere'/>}

      </div>
      <div className="flex justify-center gap-2">
      <button className='p-2 bg-slate-600 shadow-lg text-white font-semibold' onClick={()=>setState((prev)=>prev+1)}>Add to cart ({state})</button>
      <button disabled={!state} className='p-2 bg-slate-600 shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold' onClick={()=>setState((prev)=>prev-1)}>Remove from cart </button>
      </div>
      <Link to={'/cart'} className='underline font-semibold'>Go to Cart</Link>
      {children}
    </main>
    </div>

  )
}
