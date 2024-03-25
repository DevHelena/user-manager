import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import User from './pages/User.tsx'
import { UserProvider } from "./context.tsx";


function App() {
  return (

    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="user/:id" element={<User/>}/>
        </Routes>
        </UserProvider>
    </BrowserRouter>
  )
}

export default App
