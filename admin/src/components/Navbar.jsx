import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {
    const {aToken, setAToken} = useContext(AdminContext);
    const {dToken, setDToken} = useContext(DoctorContext)
    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
        setAToken('');
        localStorage.removeItem('aToken');
        setDToken('');
        localStorage.removeItem('dToken');
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex gap-2 text-xs'>
        <img className='w-10' src={assets.admin_logo} alt="logo" />
        <div className='items-center'>
        <span className='text-green-500'>YourCareDoctors</span>
        <p className='border px-2.5 rounded-full border-gray-500 text-gray-600 w-14 mt-1'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar