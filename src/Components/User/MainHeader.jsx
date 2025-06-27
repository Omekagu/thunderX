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
import { Link } from 'react-router-dom'

export default function MainHeader () {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600)
  const [drawerOpen, setDrawerOpen] = useState(() => window.innerWidth > 600)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600
      setIsMobile(mobile)
      setDrawerOpen(!mobile)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Sidebar links
  const sidebarLinks = [
    { icon: <FaHome />, label: 'Dashboard', path: '/user/dashboard' },
    { icon: <FaUser />, label: 'Profile', path: '/profile' },
    { icon: <FaChartLine />, label: 'Referral', path: '/referral' },
    { icon: <FaChartLine />, label: 'Deposit', path: '/deposit' },
    { icon: <FaChartLine />, label: 'Withdrawal', path: '/withdrawal' },
    { icon: <FaChartLine />, label: 'Transfer', path: '/transfer' },
    {
      icon: <FaChartLine />,
      label: 'Investment Plan',
      path: '/investmentPlans'
    },
    { icon: <FaChartLine />, label: 'Card', path: '/card' },
    { icon: <FaChartLine />, label: 'History', path: '/history' },
    { icon: <FaChartLine />, label: 'KYC', path: '/kyc' },
    { icon: <FaChartLine />, label: 'Password', path: '/password' },
    { icon: <FaSignOutAlt />, label: 'Logout', path: '/logout' }
  ]

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

      {/* Overlay (desktop only) */}
      {drawerOpen && !isMobile && (
        <div className='drawer-overlay' onClick={() => setDrawerOpen(false)} />
      )}

      {/* Sidebar Drawer */}
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
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className='drawer-link'>
                <span className='drawer-icon'>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
