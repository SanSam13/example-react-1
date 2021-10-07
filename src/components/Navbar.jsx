import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuData } from './MenuData';

import logo from '../images/logo_boletia.png'

/**
 * Componente que crear un menu de navegación apartir de una lista
 * @returns navbar
 */

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    //Función para cambiar el icono cerrar/abrir menú
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)


    const [clickDrop, setClickDrop] = useState(false);
    const handleClickDrop = () => setClickDrop(!clickDrop);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="Logo Boletia" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                {MenuData.map((item, index) => {
                    const arraySubmenus = Object.entries(item.submenu)

                    return(
                        arraySubmenus.length !== 0 ? (
                            <li key={index} className={item.cName}
                                >
                                <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>
                                    {item.title} <i className='fas fa-caret-down'></i>
                                </Link>
                                {/* {console.log('demo: ' + clickDrop)} */}
                                <ul
                                    onClick={handleClickDrop}
                                    className={'dropdown-menu clicked'}
                                >
                                    
                                    {arraySubmenus.map((sub, i) => {
                                        return (
                                            <li key={i}>
                                                <Link
                                                    className={sub[1].cName}
                                                    to={sub[1].path}
                                                    onClick={() => setClickDrop(false)}
                                                >
                                                    {sub[1].title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {dropdown}
                            </li>
                        ) :
                        (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    )

                })}
                </ul>
                <Link to='/form'>
                    <button className='btn'>Formulario</button>
                </Link>
            </nav>  
        </>
    )
}

export default Navbar
