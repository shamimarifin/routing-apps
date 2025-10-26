import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const PostDetails = () => {
    const posts = useLoaderData()
    const navigate = useNavigate()


  return (
    <div>
        <p>{posts.title}</p>
        <p>{posts.body}</p>
        <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}

export default PostDetails