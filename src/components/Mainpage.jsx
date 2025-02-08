import React, { useState } from 'react'
import Mealcard from './Mealcard'

const Mainpage = () => {
    const[search,setsearch]=useState("")
    const[data,setdata]=useState("")

    async function handledata(){
    const get= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const res=await get.json()
    setdata(res.meals)
    }

    function handlesearch(e){
        setsearch(e.target.value)
    }

  return (
    <>
    <div>
    <div className=' w-screen  md:py-0 md:px-0 gap-5  h-40 bg-gray-500 flex md:flex-row flex-col md:gap-10 justify-center items-center'>
        <input
        onChange={handlesearch}
        className='p-2 w-72 md:w-lg border-4 rounded-2xl border-white text-3xl text-white'
        placeholder='Enter dis'
         type="text" />
        <button onClick={handledata} className='bg-blue-300 text-3xl rounded-2xl p-2 border-4 border-white'>Search</button>
      </div>
        <div>
            <Mealcard detail={data} />
        </div>

    </div>

    
      
      
    </>
  )
}

export default Mainpage
