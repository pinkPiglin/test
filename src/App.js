import {React} from 'react';
import {RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom';

import './App.css';

import Layout from './layout/latout';
import HomePage from './pages/home/homepage';
import PostsPage from './pages/posts/postspage';
import AboutPage from './pages/about/aboutpage';
import Post from './pages/posts/post/post';
import RequireAuth from './hoc/RequireAuth';
import LoginPage from './pages/loginPage.js/loginPage';
import { AuthProvider } from './hoc/AuthProvider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<HomePage/>} />
    <Route path='posts' element={
      <RequireAuth>
        <PostsPage/>
      </RequireAuth>
    } />
    <Route path='about' element={<AboutPage/>} />
    <Route path='posts/:id' element={<Post/>}/>
    <Route path='login' element={<LoginPage/>}/>
  </Route>
)
)

const App=()=>  {
    return(
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    )
  }
 


export default App;
