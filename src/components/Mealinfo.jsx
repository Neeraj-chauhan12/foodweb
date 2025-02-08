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
      !id ? "data not found" :<div>
      <div><img src={id.strMealThumb} alt="" /></div>
      <div>
        <h1>Recipe detail</h1>
        <button>{id.strMeal}</button>
        <h3>Instruction</h3>
        <p>{id.strInstructions}</p>
      </div>
    </div>
    }
      
      
    </>
  )
}

export default Mealinfo
