import React from 'react'
import { useSelector } from 'react-redux';
import UserHome from './UserHome';
import GuestHome from './GuestHome';
function Home() {
const usertype = useSelector((state) => state.login.user)
  return (
    <div>
      {usertype == null ? (<GuestHome/>):(<UserHome/>)}
    </div>
  )
}

export default Home;