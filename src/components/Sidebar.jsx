import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <p>Ar Sistema</p>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
    
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Productos">
                        <BsFillArchiveFill className='icon'/> Productos
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Vehiculos">
                        <BsFillGrid3X3GapFill className='icon'/> Vehiculos
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Usuarios">
                        <BsPeopleFill className='icon'/> Usuarios
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Inventario">
                        <BsListCheck className='icon'/> Inventario
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Reportes">
                        <BsMenuButtonWideFill className='icon'/> Reportes
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Configuración">
                        <BsFillGearFill className='icon'/> Configuración
                    </Link>
                </li>
            </ul>
        </aside>
  )
}

export default Sidebar