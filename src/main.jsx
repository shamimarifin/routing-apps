import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Root from './components/Root/Root.jsx';
import Blogs from './components/Blogs/Blogs.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children : [
      {index: true, Component: Home},
      {path : "about" , Component : About},
      {path : "blogs" , Component : Blogs},
      {path : "apps" , Component : App},
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
