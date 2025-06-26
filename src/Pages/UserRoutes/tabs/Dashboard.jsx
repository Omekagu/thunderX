import { FaBars, FaSearch } from 'react-icons/fa'
import { UserAmount } from '../../../Components/User/UserAmount'
import InvestmentHistory from '../../../Components/User/InvestmentHistory'

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
    <UserAmount />

    {/* Investment History */}
    <InvestmentHistory />
  </div>
)
