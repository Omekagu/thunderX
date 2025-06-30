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
import { ethers } from 'ethers'

// Supported chains and some popular tokens
const CHAINS = [
  {
    id: 1,
    name: 'Ethereum',
    explorer: 'https://etherscan.io/tx/',
    native: { symbol: 'ETH', decimals: 18 },
    tokens: [
      { name: 'ETH (native)', address: null, decimals: 18 },
      {
        name: 'USDT',
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        decimals: 6
      },
      {
        name: 'USDC',
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48',
        decimals: 6
      }
    ]
  },
  {
    id: 56,
    name: 'BSC',
    explorer: 'https://bscscan.com/tx/',
    native: { symbol: 'BNB', decimals: 18 },
    tokens: [
      { name: 'BNB (native)', address: null, decimals: 18 },
      {
        name: 'USDT',
        address: '0x55d398326f99059fF775485246999027B3197955',
        decimals: 18
      },
      {
        name: 'BUSD',
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        decimals: 18
      }
    ]
  },
  {
    id: 137,
    name: 'Polygon',
    explorer: 'https://polygonscan.com/tx/',
    native: { symbol: 'MATIC', decimals: 18 },
    tokens: [
      { name: 'MATIC (native)', address: null, decimals: 18 },
      {
        name: 'USDT',
        address: '0x3813e82e6f7098b9583FC0F33a962D02018B6803',
        decimals: 6
      },
      {
        name: 'USDC',
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        decimals: 6
      }
    ]
  }
  // Add more chains/tokens as needed
]

const ERC20_ABI = [
  'function transfer(address to, uint256 value) public returns (bool)',
  'function decimals() view returns (uint8)'
]

export default function MainHeader () {
  // UI state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  // Web3 state
  const [selectedChainId, setSelectedChainId] = useState(1)
  const [selectedTokenIdx, setSelectedTokenIdx] = useState(0)
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [walletAddress, setWalletAddress] = useState(null)
  const [txHash, setTxHash] = useState(null)
  const [web3Error, setWeb3Error] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Handles wallet connect + transaction
  // Wallet connect and send
  const handleSend = async e => {
    e.preventDefault()
    setWeb3Error(null)
    setTxHash(null)
    setIsLoading(true)
    try {
      if (!window.ethereum) {
        setWeb3Error(
          'No wallet detected. Please install Trust Wallet or MetaMask.'
        )
        setIsLoading(false)
        return
      }
      // Connect wallet
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const userAddress = await signer.getAddress()
      setWalletAddress(userAddress)
      // Switch to correct chain if needed
      const chain = CHAINS.find(c => c.id === Number(selectedChainId))
      const chainIdHex = '0x' + chain.id.toString(16)
      const currentChainId = (await provider.getNetwork()).chainId
      if (Number(currentChainId) !== chain.id) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainIdHex }]
          })
        } catch (switchError) {
          setWeb3Error('Please switch to the correct network in your wallet.')
          setIsLoading(false)
          return
        }
      }
      // Send
      const token = chain.tokens[selectedTokenIdx]
      if (token.address == null) {
        // Native coin transfer
        const tx = await signer.sendTransaction({
          to: recipient,
          value: ethers.parseUnits(amount, chain.native.decimals)
        })
        setTxHash(tx.hash)
      } else {
        // Token transfer
        const contract = new ethers.Contract(token.address, ERC20_ABI, signer)
        // Use token.decimals, or fetch from contract (safer for new tokens)
        let decimals = token.decimals
        try {
          decimals = await contract.decimals()
        } catch {} // fallback to static decimals
        const tx = await contract.transfer(
          recipient,
          ethers.parseUnits(amount, decimals)
        )
        setTxHash(tx.hash)
      }
      setModalOpen(false)
      setRecipient('')
      setAmount('')
    } catch (err) {
      if (err.code === 4001) {
        setWeb3Error('Transaction rejected by user.')
      } else {
        setWeb3Error(err.message || 'Transaction failed')
      }
    }
    setIsLoading(false)
  }
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600
      setIsMobile(mobile)
      if (!mobile) setDrawerOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
        { icon: <FaUser />, label: 'Profile', path: '/user/profile' }
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
      header: 'Transactions',
      links: [
        { icon: <FaChartLine />, label: 'Referral', path: '/user/referral' },
        { icon: <FaChartLine />, label: 'Deposit', path: '/user/deposit' },
        {
          icon: <FaChartLine />,
          label: 'Withdrawal',
          path: '/user/withdrawal'
        },
        { icon: <FaExchangeAlt />, label: 'Transfer', path: '/user/transfer' }
      ]
    },
    {
      header: 'Privacy',
      links: [
        { icon: <FaCreditCard />, label: 'Card', path: '/user/card' },
        { icon: <FaHistory />, label: 'History', path: '/user/history' },
        { icon: <FaIdBadge />, label: 'KYC', path: '/user/kyc' },
        { icon: <FaKey />, label: 'Password', path: '/user/password' },
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

  // Modal for sending tokens
  const chain = CHAINS.find(c => c.id === Number(selectedChainId))
  const explorerBase = chain?.explorer || 'https://etherscan.io/tx/'

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
          <button
            className='icon-btn'
            aria-label='Expand'
            onClick={() => setModalOpen(true)}
            disabled={isLoading}
            style={isLoading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
          >
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

      {/* Modal for sending tokens */}
      {modalOpen && (
        <div
          className='modal-overlay'
          style={{
            zIndex: 10000,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)'
          }}
        >
          <div
            className='modal-content'
            style={{
              background: '#fff',
              maxWidth: 400,
              margin: '10vh auto',
              padding: 24,
              borderRadius: 10,
              position: 'relative'
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
                background: 'none',
                border: 'none',
                fontSize: 18
              }}
            >
              ×
            </button>
            <h2>Send Tokens</h2>
            <form onSubmit={handleSend}>
              <label>
                Network
                <select
                  value={selectedChainId}
                  onChange={e => {
                    setSelectedChainId(Number(e.target.value))
                    setSelectedTokenIdx(0)
                  }}
                >
                  {CHAINS.map(chain => (
                    <option key={chain.id} value={chain.id}>
                      {chain.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Token
                <select
                  value={selectedTokenIdx}
                  onChange={e => setSelectedTokenIdx(Number(e.target.value))}
                >
                  {chain.tokens.map((tok, idx) => (
                    <option key={tok.name} value={idx}>
                      {tok.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Recipient
                <input
                  type='text'
                  required
                  value={recipient}
                  placeholder='0x...'
                  onChange={e => setRecipient(e.target.value)}
                />
              </label>
              <label>
                Amount
                <input
                  type='number'
                  required
                  min='0'
                  step='any'
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </label>
              <button
                type='submit'
                disabled={isLoading}
                style={{ marginTop: 12, width: '100%' }}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
            {web3Error && (
              <div style={{ color: 'red', marginTop: 12 }}>{web3Error}</div>
            )}
          </div>
        </div>
      )}

      {/* Show wallet connection status */}
      {walletAddress && (
        <div style={{ color: 'green', marginLeft: 20 }}>
          Connected: {walletAddress}
        </div>
      )}
      {txHash && (
        <div style={{ color: 'blue', marginLeft: 20 }}>
          Transaction sent:{' '}
          <a
            href={`${explorerBase}${txHash}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {txHash}
          </a>
        </div>
      )}

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
                            ? '#61CE70'
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
                            ? '#61CE70'
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
