
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';

function App() {
 
  return (
   <>
  
      <div>
        <Routes>
        <Route path="/" element={<Login />} /> 
          <Route path="/Signup" element={<Signup/>}/>
           
         
        </Routes>
      </div>

   </>
      
  )
}

export default App
