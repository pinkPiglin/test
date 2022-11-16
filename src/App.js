import {React} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Layout from './layout/latout';
import HomePage from './pages/home/homepage';
import PostsPage from './pages/posts/postspage';
import AboutPage from './pages/about/aboutpage';
import Post from './pages/posts/post/post';
import RequireAuth from './hoc/RequireAuth';
import LoginPage from './pages/loginPage.js/loginPage';
import { AuthProvider } from './hoc/AuthProvider';

const App=()=>  {
    return(
      <>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/posts' element={
            <RequireAuth>
              <PostsPage/>
            </RequireAuth>
            } />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </>
    )
  }
 


export default App;
