import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'
import Productos from './pages/Productos'
import Usuarios from './pages/Usuarios'
import Inventario from './pages/Inventario'
import Reportes from './pages/Reportes'
import Configuracion from './pages/Configuracion'
import Vehiculos from './pages/Vehiculos'
import InsertarVeh from './pages/vehiculos/insertarVeh'
import ActualizarVeh from './pages/vehiculos/ActualizarVeh'
import './App.css'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  

  return (
    <BrowserRouter>
     <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
   
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Vehiculos' element={<Vehiculos/>}/>
        <Route path='/InsertarVehiculo' element={<InsertarVeh/>}/>
        <Route path='/ActualizarVehiculo/:id' element={<ActualizarVeh/>}/>
        <Route path='/Usuarios' element={<Usuarios/>}/>
        <Route path='/Inventario' element={<Inventario/>}/>
        <Route path='/Reportes' element={<Reportes/>}/>
        <Route path='/Configuración' element={<Configuracion/>}/>
      </Routes>
 </div>

      <Footer/>
    
    </BrowserRouter>
      
      
  

  )
}

export default App
