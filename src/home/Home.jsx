import React from 'react'
import './Home.css'
import {useFetch} from '../hooks/useFetch'
import RecipeList from '../Components/RecipeList';

export default function Home() {
  const {data , isPending, error } = useFetch('http://localhost:3000/recipes');
  return (
    <div className='hom'>
      {error && <p className='error'>Error</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipe = {data}/>}
    </div>
  )
}
