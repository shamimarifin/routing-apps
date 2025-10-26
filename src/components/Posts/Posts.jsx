import React from 'react'
import { useLoaderData } from 'react-router'
import Post from './Post/Post'

const Posts = () => {

    const posts = useLoaderData()
    const limitedPosts = posts.slice(0, 10)

  return (
    <div>
        <h2>This posts length {limitedPosts.length}</h2>
        {
            limitedPosts.map(post=> <Post post={post}></Post>)
        }
    </div>
  )
}

export default Posts