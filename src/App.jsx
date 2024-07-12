
import {Route,  BrowserRouter, Routes,} from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog/Blog'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Works" element={<Works/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
