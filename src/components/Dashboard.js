import React from 'react';
import './Dashboard.css';
import HomeCard from './cards/HomeCard';

function Dashboard() {
  return (
    <div className='home'>
        <div className='dashb__container'>
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

export default Dashboard