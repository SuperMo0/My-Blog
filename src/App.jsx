import { useContext, useState } from 'react'
import './App.css'
import Home from './Components/pages/Home/Home'
import { Routes, Route } from 'react-router';
import Header from './Components/Header/Header';

function App() {
  const [dark, setDark] = useState(false);

  function handleThemeChange() {
    setDark(!dark);
  }
  return (
    <div className="app" data-dark={dark}>
      <Header handleThemeChange={handleThemeChange}></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/about' element={<About />}></Route> */}
        {/* <Route path='/contact' element={<Contact />}></Route> */}

      </Routes>
      {/*<Home></Home>*/}
    </div>
  )
}

export default App
