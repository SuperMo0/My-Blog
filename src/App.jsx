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
import DashBoard from './Components/pages/DashBoard/DashBoard';
import RequireGuest from './Auth/RequireGuest';
import RequireAuth from './Auth/RequireAuth';
import EditorPage from './Components/pages/EditorPage/EditorPage';

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
        <Route path='/admin' element={<Guest handleThemeChange={handleThemeChange}></Guest>}>
          <Route path='login' element={<RequireGuest><Login /></RequireGuest>}></Route>
          <Route path='dashboard' element={<RequireAuth> <DashBoard /></RequireAuth>}></Route>
          <Route path='editor/:id?' element={<RequireAuth> <EditorPage dark={dark} /></RequireAuth>}></Route>
        </Route>

      </Routes>


      {/* <Route path='/admin/login' element={<Login />}></Route> */}


    </div>
  )
}

export default App
