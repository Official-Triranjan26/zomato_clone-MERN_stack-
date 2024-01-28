import React from 'react'
import HomepageLayout from '../layouts/Homepage.layout'
import { useParams } from 'react-router-dom'

// importing components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife';
import Nutration from '../components/Nutration';

const Home = () => {
  const {type} = useParams();
  return (
    <>
      <div>
        {type ==='delivery' && <Delivery />}
        {type ==='dining' && <Dining />}
        {type ==='night' && <NightLife />}
        {type ==='nutri' && <Nutration />}
      </div>
    </>
  )
}

export default HomepageLayout(Home)