import {useContext, useEffect, useState} from 'react'
import { customContext } from './ContextProvider';
import { Link } from 'react-router-dom';

export default function Cart(props) {
   const { state , image} = useContext(customContext);
  //  console.log('state',state)
  
   return(
   <div className='flex gap-4 flex-col items-start'>
   <h1 className='font-bold text-xl '>Your cart value is {state}</h1>
   {state ? (
   <div className="flex gap-2 bg-slate-600 p-2 shadow-lg rounded-md max-w-[300px]">
   <div className='card border-4  border-gray-800 rounded-lg shadow-2xl h-min w-fit'>
        {image && <img src={image} alt='imageishere'/>}
      </div>
      <div className=" flex flex-col text-yellow-50 gap-1"><p className='font-medium text-base leading-[20px]'>This is the Dummy image, coming from api.</p>
      <span className='text-sm'>Quantity: {state}</span>
      </div>

      </div>
      ):null}
      <Link to={'/'} className='underline font-semibold'>Go back</Link>
   </div>
      
   )
}