import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
