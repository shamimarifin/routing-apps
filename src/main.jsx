import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Root from './components/Root/Root.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/Users/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/Posts/PostDetails/PostDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children : [
      {index: true, Component: Home},
      {path : "about" , Component : About},
      {path : "blogs" , Component : Blogs},
      {path : "apps" , Component : App},
      {
        path : "users" , 
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component : Users
      },
      {
        path : 'users2',
        element : <Suspense fallback={<h3>Loading...</h3>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },

      {
        path: 'users/:usersId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component: UserDetails
      },


      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts/'),
        Component: Posts
      },

      {
        path: '/posts/:postsId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`),
        Component : PostDetails
      }




    ]
  },

  {
    path: 'about',
    element: <div>About here</div>
  },

  {
    path: 'blogs',
    Component: <div>Hello</div>
  },

  {
    path: 'apps',
    Component: App
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}/>

  </StrictMode>,
)
