import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-1100 h-screen m-auto border border-red-500 flex flex-col items-center '>
      <Header></Header>
      <Navigation></Navigation>
      <div className='w-full flex flex-col items-center'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home