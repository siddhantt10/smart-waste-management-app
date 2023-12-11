import React from 'react';
import './Home.css';
import HomeCard from './cards/HomeCard';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        <HomeCard
          trashCanId='123'
          sensorId='arduino123'
          trashCapacity={100}
          locationCoordinates='40.7128, -74.0060'
          valueAtEmpty={0}
        />
        <HomeCard
          trashCanId='123'
          sensorId='arduino123'
          trashCapacity={100}
          locationCoordinates='40.7128, -74.0060'
          valueAtEmpty={0}
        />
        <HomeCard
          trashCanId='123'
          sensorId='arduino123'
          trashCapacity={100}
          locationCoordinates='40.7128, -74.0060'
          valueAtEmpty={0}
        />
        <HomeCard
          trashCanId='123'
          sensorId='arduino123'
          trashCapacity={100}
          locationCoordinates='40.7128, -74.0060'
          valueAtEmpty={0}
        />
        </div>
    </div>
  )
}

export default Home;