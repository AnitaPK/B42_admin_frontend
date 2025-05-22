import { useState } from 'react'
import Login from './PAGES/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import ProtectedRoute from './ProjectedRoute/ProtectedRoute';
import DashboardRoutes from './Routes/DashboaredRoute';
import Layout from './PAGES/Layout';


function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Login />} ></Route>

    <Route path='/' element={
         <ProtectedRoute>
      <Layout/>
    </ProtectedRoute>
    }>

 {DashboardRoutes}


    </Route>


    </Routes>
      
    </BrowserRouter>
  )
}

export default App
