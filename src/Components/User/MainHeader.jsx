import React, { useState } from 'react'
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaHome,
  FaUser,
  FaChartLine,
  FaMoneyBillWave,
  FaSignOutAlt
} from 'react-icons/fa'

export default function MainHeader () {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div>
      <header className='dashboard-header'>
        <div className='logo-section'>
          <span className='brand-name'>Thunder - Xtorm</span>
        </div>
        <div className='header-actions'>
          <button className='icon-btn' aria-label='Search'>
            <FaSearch />
          </button>
          <button
            className='icon-btn'
            aria-label='Menu'
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <div className='drawer-overlay' onClick={() => setDrawerOpen(false)} />
      )}

      {/* Drawer Sidebar */}
      <nav className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <button
          className='drawer-close-btn'
          onClick={() => setDrawerOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className='drawer-list'>
          <li>
            <FaHome className='drawer-icon' /> <span>Dashboard</span>
          </li>
          <li>
            <FaUser className='drawer-icon' /> <span>Profile</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Analytics</span>
          </li>
          <li>
            <FaMoneyBillWave className='drawer-icon' />{' '}
            <span>Transactions</span>
          </li>
          <li>
            <FaSignOutAlt className='drawer-icon' /> <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
