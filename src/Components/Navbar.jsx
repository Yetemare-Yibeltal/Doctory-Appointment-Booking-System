import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/adidas.png'
import profile from '../assets/48206.jpg'
import dropdownIcon from '../assets/dropdown-icon.png'

const Navbar = () => {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [token, setToken] = useState(true)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/doctors', label: 'ALL DOCTORS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' }
  ]

  return (
    <div className='bg-white sticky top-0 z-50 shadow-sm'>
      {/* Header */}
      <div className='flex items-center justify-between text-sm py-4 px-4 sm:px-[10%] border-b border-b-gray-400'>
        {/* Hamburger and Logo */}
        <div className='flex items-center gap-3'>
          <button
            onClick={toggleMobileMenu}
            className='md:hidden text-gray-800 focus:outline-none'
            aria-label='Menu'
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          <img
            className='w-20 cursor-pointer'
            src={logo}
            alt='logo image'
            onClick={() => navigate('/')}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} className='block'>
                <span className='py-1'>{link.label}</span>
                <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* User Area */}
        <div className='flex items-center gap-4'>
          {token ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={profile} alt='Profile' />
              <img
                className='w-4 hidden md:block'
                src={dropdownIcon}
                alt='Dropdown'
              />

              {/* Desktop Profile Dropdown */}
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p
                    className='hover:text-black cursor-pointer'
                    onClick={() => navigate('/my-profile')}
                  >
                    My profile
                  </p>

                  <p
                    className='hover:text-black cursor-pointer'
                    onClick={() => navigate('/my-appointments')}
                  >
                    My Appointment
                  </p>

                  <p
                    className='hover:text-black cursor-pointer'
                    onClick={() => setToken(false)}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'
            >
              Create account
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='px-4 py-3 space-y-2'>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMobileMenu}
                className='block py-2 px-3 rounded hover:bg-gray-100 text-gray-800 font-medium'
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {!token && (
            <li className='pt-2 border-t border-gray-200'>
              <button
                onClick={() => {
                  navigate('/login')
                  closeMobileMenu()
                }}
                className='w-full text-left py-2 px-3 text-[#5f6FFF] font-medium'
              >
                Create account
              </button>
            </li>
          )}

          {token && (
            <li className='pt-2 border-t border-gray-200'>
              <button
                onClick={() => {
                  setToken(false)
                  closeMobileMenu()
                }}
                className='w-full text-left py-2 px-3 text-red-500 font-medium'
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
