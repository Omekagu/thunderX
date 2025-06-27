import React, { useState, useEffect } from 'react'
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaChartLine,
  FaSignOutAlt,
  FaExpand,
  FaMoneyCheckAlt,
  FaPiggyBank,
  FaCreditCard,
  FaHistory,
  FaIdBadge,
  FaKey,
  FaExchangeAlt
} from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function MainHeader () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600
      setIsMobile(mobile)
      if (!mobile) setDrawerOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Sidebar structure with headers and sub-links
  const sidebarSections = [
    {
      header: null,
      links: [
        { icon: <FaHome />, label: 'Dashboard', path: '/user/dashboard' },
        { icon: <FaUser />, label: 'Profile', path: '/profile' }
      ]
    },
    {
      header: 'Investment Plans',
      links: [
        {
          icon: <FaPiggyBank />,
          label: 'All Plans',
          path: '/user/investmentPlans'
        },
        {
          icon: <FaChartLine />,
          label: 'Active Investments',
          path: '/user/investmentPlans/active'
        },
        {
          icon: <FaChartLine />,
          label: 'Earnings',
          path: '/user/investmentPlans/earnings'
        }
      ]
    },
    {
      header: 'Loans',
      links: [
        { icon: <FaMoneyCheckAlt />, label: 'My Loans', path: '/user/Loans' },
        {
          icon: <FaMoneyCheckAlt />,
          label: 'Apply for Loan',
          path: '/user/Loans/apply'
        },
        {
          icon: <FaMoneyCheckAlt />,
          label: 'Loan History',
          path: '/user/Loans/history'
        }
      ]
    },
    {
      header: null,
      links: [
        { icon: <FaChartLine />, label: 'Referral', path: '/user/referral' },
        { icon: <FaChartLine />, label: 'Deposit', path: '/user/deposit' },
        {
          icon: <FaChartLine />,
          label: 'Withdrawal',
          path: '/user/withdrawal'
        },
        { icon: <FaExchangeAlt />, label: 'Transfer', path: '/transfer' },
        { icon: <FaCreditCard />, label: 'Card', path: '/card' },
        { icon: <FaHistory />, label: 'History', path: '/history' },
        { icon: <FaIdBadge />, label: 'KYC', path: '/kyc' },
        { icon: <FaKey />, label: 'Password', path: '/password' },
        {
          icon: <FaSignOutAlt />,
          label: 'Logout',
          path: '/logout',
          action: 'logout'
        }
      ]
    }
  ]

  // Google Translate integration
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

  const handleLogout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    setDrawerOpen(false)
    navigate('/')
  }

  return (
    <div>
      <div
        id='google_translate_element'
        style={{ position: 'absolute', top: 2, zIndex: 9999 }}
      ></div>
      <header className='dashboard-header'>
        <div className='logo-section'>
          <img
            src='https://i.postimg.cc/NjS69Ysh/thunder-Xtorm-logo.png'
            alt='company logo'
            className='brand-name'
            style={{ height: 36, width: 'auto', marginRight: 12 }}
          />
        </div>
        <div className='header-actions'>
          <button className='icon-btn' aria-label='Expand'>
            <FaExpand />
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

      {drawerOpen && (
        <div className='drawer-overlay' onClick={() => setDrawerOpen(false)} />
      )}

      <nav
        className={`drawer${drawerOpen ? ' open' : ''}${
          isMobile ? ' mobile' : ''
        }`}
      >
        <button
          className='drawer-close-btn'
          onClick={() => setDrawerOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className='drawer-list'>
          {sidebarSections.map((section, i) => (
            <React.Fragment key={i}>
              {section.header && (
                <li className='drawer-category-header'>{section.header}</li>
              )}
              {section.links.map((link, idx) => (
                <li key={link.path + idx} onClick={() => setDrawerOpen(false)}>
                  {link.action === 'logout' ? (
                    <a
                      href='/'
                      className='drawer-link'
                      onClick={handleLogout}
                      style={{
                        color:
                          location.pathname === link.path
                            ? '#00d4ff'
                            : undefined
                      }}
                    >
                      <span className='drawer-icon'>{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className='drawer-link'
                      style={{
                        color:
                          location.pathname === link.path
                            ? '#00d4ff'
                            : undefined
                      }}
                    >
                      <span className='drawer-icon'>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  )
}
