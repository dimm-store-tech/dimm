import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
// Iconos inactivos
import home from '../../img/icons-active/home.svg';
import profile from '../../img/icons-active/profile.svg';
import attendance from '../../img/icons-active/attendance.svg';
import clients from '../../img/icons-active/clients.svg';
import employees from '../../img/icons-active/employees.svg';
import orders from '../../img/icons-active/orders.svg';
import menu from '../../img/icons-active/menu.svg';


// Iconos activos
import menuInactive from '../../img/icons-inactive/menu.svg';
import ordersInactive from '../../img/icons-inactive/orders.svg';
import employeesInactive from '../../img/icons-inactive/employees.svg';
import attendanceInactive from '../../img/icons-inactive/attendance.svg';
import profileInactive from '../../img/icons-inactive/profile.svg';
import homeInactive from '../../img/icons-inactive/home.svg';
import clientsInactive from '../../img/icons-inactive/clients.svg';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const {isAutenticaded} = useAuth()
  // El menu se ocultara si el usuario no esta autenticado
  const initialActiveState = {
    home: true,
    profile: false,
    attendance: false,
    clients: false,
    employees: false,
    orders: false,
    menu: false
  };

  // Cargar el estado del Local Storage al inicio
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem('activeIcons');
    return storedState ? JSON.parse(storedState) : initialActiveState;
  });

  // Guardar el estado en el Local Storage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('activeIcons', JSON.stringify(isActive));
  }, [isActive]);

  const handleClick = (icon) => {
    const updatedState = { ...isActive };
    Object.keys(updatedState).forEach(key => {
      updatedState[key] = key === icon;
    });
    setIsActive(updatedState);
  };



  return (
    <div>
      {isAutenticaded ? 
      <React.Fragment>

      <h1 className='text-2xl font-bold my-2'>dimm</h1>
      <nav className='my-2'>
        <div className="grid grid-cols-7 items-center gap-4">
          <Link onClick={() => handleClick('home')} to='/' className={`${isActive.home ? 'border-b-2 border-blue-800' : null} col link-item`}><img src={isActive.home ? home : homeInactive} alt="Home Icon" /></Link>
          <Link onClick={() => handleClick('profile')} to='/profile' className={`${isActive.profile ? 'border-b-2 border-blue-800' : null} col link-item`}><img src={isActive.profile ? profile : profileInactive} alt="Icon employee" /></Link>
          <Link onClick={() => handleClick('attendance')} to='/attendance' className={`${isActive.attendance ? 'border-b-2 border-blue-800' : null} col link-item`}><img src={isActive.attendance ? attendance : attendanceInactive} alt="Icon attendance" /></Link>
          <Link onClick={() => handleClick('clients')} to='/clients' className={`${isActive.clients ? 'border-b-2 border-blue-800' : null} col link-item`}><img src={isActive.clients ? clients : clientsInactive} alt="" /></Link>
          <Link onClick={() => handleClick('employees')} to='/employees' className={`${isActive.employees ? 'border-b-2 border-blue-800' : null} col link-item`}><img src={isActive.employees? employees : employeesInactive} alt="Icon employee"/></Link>
          <Link onClick={() => handleClick('orders')} to='/orders'className={`${isActive.orders ? 'border-b-2 border-blue-800' : null} col link-item`} ><img src={isActive.orders ? orders : ordersInactive} alt="Icon order" /></Link>
          <Link onClick={() => handleClick('menu')}  to='/menu' className={`${isActive.menu ? 'border-b-2 border-blue-800' : null} col link-item`}><img src={isActive.menu ? menu : menuInactive} alt="" /></Link>
        </div>
      </nav>
      </React.Fragment>
  : ""}
    </div>
  );
}
export default Header