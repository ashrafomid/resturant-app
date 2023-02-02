import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'

export default function RecipeList({recipe}) {
  return (
    <div className='recipe-list'>
        {recipe.map(recipeli =>(
            <div className='card' key={recipeli.id}>
                <h3>{recipeli.title}</h3>
                <p>{recipeli.cookingTime} to make</p>
                <div>{recipeli.method.substring(0,100)}...</div>
                <Link to={`/recipe/${recipeli.id}`}>Cook This</Link>
            </div>
        ))}
    </div>
  )
}
