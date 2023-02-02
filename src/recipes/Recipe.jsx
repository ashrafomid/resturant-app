import React from 'react'
import './Recipe.css'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function Recipe() {
  const {id} = useParams();
  
  const url = 'http://localhost:3000/recipes/'+id
  const {data:recipe, isPending, error} = useFetch(url)
  return (
    <div className='recipe'>
      {error && <p>{error}</p>}
      {isPending &&  <p>Loading...</p>}
      {recipe && (
      <div key={recipe.index}>
      <h2 className="page-title">
        {recipe.title}
      </h2>
      <p>Takes {recipe.cookingTime} to Make</p>
      <ul>
        {recipe.ingredients.map(ing=>(
          <li key={ing}>
            {ing}
          </li>

        ))}
      </ul>
      <p className='method'>{recipe.method}</p>
      </div>
      )
      }

    </div>
  )
  
}
