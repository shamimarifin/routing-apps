import React, { use } from 'react'

const UserDetails2 = ({userPromise}) => {

    const {name, username} = use(userPromise)


  return (
    <div>
        <p>{name}</p>
        <p>{username}</p>
    </div>
  )
}

export default UserDetails2