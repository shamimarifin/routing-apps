import React from 'react'
import { Link, useNavigate } from 'react-router'

const Post = ({post}) => {

    const {id, title} = post
    const navigate = useNavigate()

    const postStyle = {
        border: '1px solid red',
        marginTop: '10px'
    }

    const handleNavigate = ()=> {
        navigate(`/posts/${id}`)
    }

  return (
    <div style={postStyle}>
        <p>{title}</p>
        <Link to={`/posts/${id}`}>
            <button>Show Details</button>
        </Link>
        <button onClick={handleNavigate}>Details of : {id}</button>
    </div>
  )
}

export default Post