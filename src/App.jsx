import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <WorkFlow/>
    </div>
    </>
  )
}

export default App
