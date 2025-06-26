import React, { useState, useEffect } from 'react'
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaHome,
  FaUser,
  FaChartLine,
  FaSignOutAlt
} from 'react-icons/fa'

export default function MainHeader () {
  // Detect mobile view
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600)
  const [drawerOpen, setDrawerOpen] = useState(() => window.innerWidth <= 600)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600
      setIsMobile(mobile)
      if (mobile) {
        setDrawerOpen(false)
      } else {
        setDrawerOpen(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
          {!isMobile && (
            <button
              className='icon-btn'
              aria-label='Menu'
              onClick={() => setDrawerOpen(true)}
            >
              <FaBars />
            </button>
          )}
        </div>
      </header>

      {/* Drawer Overlay (desktop only) */}
      {drawerOpen && !isMobile && (
        <div className='drawer-overlay' onClick={() => setDrawerOpen(false)} />
      )}

      {/* Drawer Sidebar */}
      <nav className={`drawer ${drawerOpen ? 'open' : ''}`}>
        {!isMobile && (
          <button
            className='drawer-close-btn'
            onClick={() => setDrawerOpen(false)}
          >
            <FaTimes />
          </button>
        )}
        <ul className='drawer-list'>
          <li>
            <FaHome className='drawer-icon' /> <span>Dashboard</span>
          </li>
          <li>
            <FaUser className='drawer-icon' /> <span>Profile</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Referral</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Deposit</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>withdrawal</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Transfer</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Invesment plan</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Card</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>History</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>KYC</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Password</span>
          </li>
          <li>
            <FaChartLine className='drawer-icon' /> <span>Card</span>
          </li>
          <li>
            <FaSignOutAlt className='drawer-icon' /> <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
