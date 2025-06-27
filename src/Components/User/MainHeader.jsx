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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600
      setIsMobile(mobile)
      if (!mobile) setDrawerOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Sidebar links
  const sidebarLinks = [
    { icon: <FaHome />, label: 'Dashboard', path: '/user/dashboard' },
    { icon: <FaUser />, label: 'Profile', path: '/profile' },
    { icon: <FaChartLine />, label: 'Referral', path: '/referral' },
    { icon: <FaChartLine />, label: 'Deposit', path: '/user/deposit' },
    { icon: <FaChartLine />, label: 'Withdrawal', path: '/user/withdrawal' },
    { icon: <FaChartLine />, label: 'Transfer', path: '/transfer' },
    {
      icon: <FaChartLine />,
      label: 'Investment Plan',
      path: '/user/investmentPlans'
    },
    { icon: <FaChartLine />, label: 'Card', path: '/card' },
    { icon: <FaChartLine />, label: 'History', path: '/history' },
    { icon: <FaChartLine />, label: 'KYC', path: '/kyc' },
    { icon: <FaChartLine />, label: 'Password', path: '/password' },
    { icon: <FaSignOutAlt />, label: 'Logout', path: '/logout' }
  ]

  // Google Translate integration (React-safe)
  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.type = 'text/javascript'
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(script)
      window.googleTranslateElementInit = function () {
        // @ts-ignore
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        )
      }
    }
  }, [])

  return (
    <div>
      <div
        id='google_translate_element'
        style={{ position: 'absolute', top: 2, zIndex: 9999 }}
      ></div>
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

      {/* Overlay */}
      {drawerOpen && (
        <div className='drawer-overlay' onClick={() => setDrawerOpen(false)} />
      )}

      {/* Sidebar Drawer */}
      <nav
        className={`drawer ${drawerOpen ? 'open' : ''} ${
          isMobile ? 'mobile' : ''
        }`}
      >
        <button
          className='drawer-close-btn'
          onClick={() => setDrawerOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className='drawer-list'>
          {sidebarLinks.map((link, index) => (
            <li key={index} onClick={() => setDrawerOpen(false)}>
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
