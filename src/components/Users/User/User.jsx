import React, { Suspense, useState } from 'react'
import { Link } from 'react-router'
import UserDetails2 from '../../UserDetails2/UserDetails2'

const User = ({user}) => {
    const {id , name, email, phone} = user
    const [showinfo, setShowInfo] = useState(false)

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
 

    const cardStyle = {
        border: '2px solid yellow',
        marginTop: '10px',
        backgroundColor : '#2c3e50',
        borderRadius : '10px',
        color : '#fff'
    }


  return (
    <div style={cardStyle}>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
        <Link to={`/users/${id}`}>Show Details</Link>
        <button onClick={()=> setShowInfo(!showinfo)}>{showinfo ? 'Hide' : 'Show'} Info</button>

        {
          showinfo && <Suspense fallback={<span>Loading...</span>}>
            <UserDetails2 userPromise={userPromise}></UserDetails2>
          </Suspense>
        }
    </div>
  )
}

export default User