import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {

  const [id,setid]=useState()

  const {mealid}=useParams();
  console.log(mealid)

  async function getid(){
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    const response=await res.json()
    console.log(response.meals[0])
    setid(response.meals[0])
  }

  if(id !=""){
    getid()
  }

  return (
    <>
    {
      !id ? "data not found" :
      <div className='w-screen bg-black text-white md:h-screen h-auto flex md:flex-row flex-col'>
      <div className='md:w-5xl w-64 m-12 md:m-0 h-72 md:h-full flex justify-center items-center  '>
        <img className='w-2xl rounded-4xl ' src={id.strMealThumb} alt="" />
        </div>
      <div className='md:w-5xl w-screen  flex flex-col gap-7 md:py-8 px-5'>
        <h1 className='font-bold text-4xl '>Recipe detail</h1>
        <button className='bg-red-500 border-2 border-black rounded-2xl px-3 py-2 w-64'>{id.strMeal}</button>
        <h3 className='text-3xl font-extrabold'>Instruction</h3>
        <p>{id.strInstructions}</p>
      </div>
    </div>
    }
      
      
    </>
  )
}

export default Mealinfo
