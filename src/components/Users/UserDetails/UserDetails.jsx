import React from 'react'
import { useLoaderData } from 'react-router'

const UserDetails = () => {
    
    const user = useLoaderData()

    console.log(user)
  
  return (
    <div>
        <p>Username : {user.username}</p>
        <p>Website : {user.website}</p>
    </div>
  )
}

export default UserDetails