import React from 'react';
import './Home.css';
import HomeCard from './cards/HomeCard';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <HomeCard />
        </div>
    </div>
  )
}

export default Home;