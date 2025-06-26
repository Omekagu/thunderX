import { FaBars, FaSearch } from 'react-icons/fa'
import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri'

export const Dashboard = () => (
  <div className='dashboard-container'>
    <header className='dashboard-header'>
      <div className='logo-section'>
        <span className='brand-name'>Thunder-storm</span>
      </div>
      <div className='header-actions'>
        <button className='icon-btn' aria-label='Search'>
          <FaSearch />
        </button>
        <button className='icon-btn' aria-label='Menu'>
          <FaBars />
        </button>
      </div>
    </header>

    {/* TOP CARD from Image 2 */}
    <section className='top-card'>
      <div className='top-card-header'>
        <img
          src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
          alt='Profile'
          className='profile-img'
        />
        <div className='greeting-area'>
          <span className='greeting'>Good Morning</span>
          <span className='user-name'>Hi, Omekagu Joseph</span>
        </div>
      </div>
      <hr className='divider' />
      <div className='spending-row'>
        <span className='spending-label'>June Spending</span>
        <button className='see-all-btn'>See all</button>
      </div>
      <div className='spending-amount'>$1050.99</div>
      <div className='actions-row'>
        <button className='action-btn'>
          <RiDownload2Line className='action-icon' />
          Deposit
        </button>
        <span className='action-divider' />
        <button className='action-btn'>
          <RiUpload2Line className='action-icon' />
          Withdraw
        </button>
      </div>
    </section>

    {/* Investment Chart Placeholder */}
  </div>
)
