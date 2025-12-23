import { useContext, useState } from 'react'
import './App.css'
import Home from './Components/pages/Home/Home'
import { Routes, Route } from 'react-router';
import Header from './Components/Header/Header';
import Article from './Components/pages/Article/Article';
import About from './Components/pages/About/About'
import Contact from './Components/pages/Contact/Contact'
import Login from './Components/pages/Login/Login';
import Guest from './layouts/Guest';
import AuthProvider from './Auth/AuthProvider';

function App() {
  const [dark, setDark] = useState(false);

  function handleThemeChange() {
    setDark(!dark);
  }
  return (
    <div className="app" data-dark={dark}>
      <Routes>
        <Route path='/' element={<Guest handleThemeChange={handleThemeChange} ></Guest>}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blogs/:id' element={<Article />}></Route>
        </Route>

        <Route path='/admin' element={<AuthProvider handleThemeChange={handleThemeChange} />}>
          <Route path='login' element={<Login></Login>}></Route>




        </Route>


      </Routes>


      {/* <Route path='/admin/login' element={<Login />}></Route> */}


    </div>
  )
}

export default App
