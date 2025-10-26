import React, { use } from 'react'

const Users2 = ({userPromise}) => {
    const user = use(userPromise)

    console.log("User data set ", user)

  return (
    <div>
        <h2>This is User2</h2>
    </div>
  )
}

export default Users2