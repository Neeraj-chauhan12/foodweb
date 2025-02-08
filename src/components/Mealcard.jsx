import React from 'react'
import { Link } from 'react-router-dom'

const Mealcard = ({detail}) => {

  return (
    <>
    <div className='h-auto  w-screen container bg-black md:px-36 flex flex-wrap'>
        {!detail ? <div className='h-screen w-screen flex text-white flex-col justify-center items-center'>
      <h1 className=' md:text-9xl text-3xl mb-4'>Data not found...</h1>
      <h1 className='md:text-5xl text-2xl'>Please try again and search the disc</h1>
        </div>:  detail.map((curr)=>{
            return(
                <div className='h-auto pb-5 w-80 rounded-2xl mx-10 my-5 text-white border-2 border-gray-300 overflow-hidden'>
                    <img className='w-full h-72  ' src={curr.strMealThumb} />
                    <h1 className='text-3xl my-3 text-center'>{curr.strMeal}</h1>
                    <Link to={`/${curr.idMeal}`} className='px-5 mx-18 bg-blue-200 text-2xl border-2 border-white mt-5 rounded-2xl hover:bg-blue-800 hover:scale-75'>View more</Link>

                </div>
            )
          
        })
            
        
      }
    </div>
      
    </>
  )
}

export default Mealcard
