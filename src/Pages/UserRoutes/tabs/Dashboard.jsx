import { FaBars, FaPlus } from 'react-icons/fa'

export const Dashboard = () => (
  <div className='dashboard-container'>
    <header className='dashboard-header'>
      <div className='logo-section'>
        <span className='brand-name'>Thunder-storm</span>
      </div>
      <div className='header-actions'>
        <button className='icon-btn' aria-label='Search'>
          <i className='icon-search' />
        </button>
        <button className='icon-btn' aria-label='Menu'>
          <FaBars />
        </button>
      </div>
    </header>

    <div className='dashboard-content'>
      <h2 className='dashboard-title'>Dashboard</h2>
      <p className='dashboard-subtitle'>
        Happy to see you again. Get update of your asset today!
      </p>
      <div className='dashboard-actions'>
        <button className='circle-btn'>
          <FaPlus />
        </button>
        <div className='dropdown'>
          <button className='dropdown-btn'>
            <i className='icon-calendar' />
            <span>All Time</span>
            <i className='icon-caret-down' />
          </button>
        </div>
        <button className='buy-btn'>INVESTMENT PLANS</button>
      </div>
      <section className='assets-card'>
        <div className='assets-header'>
          <span>
            Total Investments <i className='icon-info' />
          </span>
        </div>
        <div className='assets-value'>
          <span className='amount'>$325,980.65</span>
        </div>
        <div className='assets-growth'>
          <span className='growth-positive'>
            <i className='icon-arrow-up' /> +12%
          </span>
          <span className='growth-amount'>+$39,117.67 in this year</span>
        </div>
        <div className='assets-distribution'>
          <span className='distribution-title'>Distribution</span>
          <div className='distribution-bar'>
            <div className='bar-segment stocks' style={{ width: '65%' }}></div>
            <div className='bar-segment bonds' style={{ width: '25%' }}></div>
            <div
              className='bar-segment mutual-funds'
              style={{ width: '10%' }}
            ></div>
          </div>
          <div className='distribution-list'>
            <div className='distribution-item'>
              <span className='dot stocks'></span>
              <span className='name'>Stocks</span>
              <span className='percent'>65%</span>
              <span className='amount'>$211,887.42</span>
            </div>
            <div className='distribution-item'>
              <span className='dot bonds'></span>
              <span className='name'>Bonds</span>
              <span className='percent'>25%</span>
              <span className='amount'>$81,495.16</span>
            </div>
            <div className='distribution-item'>
              <span className='dot mutual-funds'></span>
              <span className='name'>Mutual Funds</span>
              <span className='percent'>10%</span>
              <span className='amount'>$32,598.06</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)
