import React, { useEffect, useState} from 'react';
import './Dashboard.css';
import HomeCard from './cards/HomeCard';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useStateValue } from '../StateProvider'; 


function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [{ canCollection }] = useStateValue();
  const [canList, setCanList] = useState([]);

  const sensorCollectionRef = collection( db, "Trashcan");

  useEffect(() => {
    const setCanListFunc = async () => {

      //get data from db
      try {
        const data = await getDocs(sensorCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setCanList(filterData);
      } catch (error) {
        alert(error);
      }

    }


    setCanListFunc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='home'>
        <div className='dashb__container'>
        {canList.map((can) => (
          <HomeCard 
            trashCanId={can.TrashcanID}
            sensorId={can.SensorID}
            trashCapacity={can.Capacity}
            locationCoordinates={can.Location}
            valueAtEmpty={can.Capacity}
          />
        ))}
        </div>
    </div>
  )
}

export default Dashboard