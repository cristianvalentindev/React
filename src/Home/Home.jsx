import React, { useState } from 'react'
import './Home.scss'
import Header from '../components/Header/Header'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'

const Home = () => {

  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home