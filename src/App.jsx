import MainPage from '../Pages/AuthenticationPage/MainPage'
import LoginPage from '../Pages/AuthenticationPage/LoginPage'
import { Routes,Route } from 'react-router-dom'
import SIgnUpPage from '../Pages/AuthenticationPage/SIgnUpPage'
import User from '../Pages/UserPage/User'

function App() {


  return (
    <> 
     <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signUp' element={<SIgnUpPage />}></Route>
        <Route path='/User' element={<User />}></Route>
        <Route path='/demo' element={<User />}></Route>
        <Route path='/*' element={<h1 className='text-5xl text-red-600'>404 not found</h1>}></Route>
     </Routes> 
    </>
  )
}

export default App
