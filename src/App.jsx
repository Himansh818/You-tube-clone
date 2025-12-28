import MainPage from '../Pages/AuthenticationPage/MainPage'
import LoginPage from '../Pages/AuthenticationPage/LoginPage'
import { Routes,Route } from 'react-router-dom'
import SIgnUpPage from '../Pages/AuthenticationPage/SIgnUpPage'
import Dashboard from '../Pages/UserPage/Dashboard'
import MoviePage from '../components/MoviePage'
// import EmployeeDashboard from '../Pages/DashboardPage/EmployeeDashboard'

function App() {


  return (
    <> 
     <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signUp' element={<SIgnUpPage />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/demo' element={<Dashboard />}></Route>
        <Route path='/moviePage' element={<MoviePage />}></Route>
        <Route path='/*' element={<h1 className='text-5xl text-red-600'>404 not found</h1>}></Route>
     </Routes> 

    </>
  )
}

export default App
