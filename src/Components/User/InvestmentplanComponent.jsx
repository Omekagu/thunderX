import React from 'react'

const plans = [
  {
    id: 1,
    title: 'ARGENT+ PACK',
    profit: '60%',
    minDeposit: 50,
    maxDeposit: 50,
    minWithdraw: 50
  },
  {
    id: 2,
    title: 'GOLD PACK',
    profit: '65%',
    minDeposit: 50,
    maxDeposit: 50,
    minWithdraw: 50
  },
  {
    id: 3,
    title: 'ARGENT PACK',
    profit: '70%',
    minDeposit: 50,
    maxDeposit: 50,
    minWithdraw: 50
  },
  {
    id: 4,
    title: 'PLATINUM PACK',
    profit: '75%',
    minDeposit: 50,
    maxDeposit: 50,
    minWithdraw: 50
  },
  {
    id: 5,
    title: 'VIP PACK',
    profit: '80%',
    minDeposit: 3000,
    maxDeposit: 50,
    minWithdraw: 50
  }
]

export default function InvestmentPlanComponent () {
  return (
    <section className='investmentplans-section'>
      <div className='investmentplans-header'>
        <h2>Investment Offers</h2>
        <p>
          Choose your plan below. You can withdraw profits anytime, but
          principal balance requires at least one month before withdrawal.
        </p>
      </div>
      <div className='investmentplans-grid'>
        {plans.map(plan => (
          <div className='investmentplan-card' key={plan.id}>
            <div className='plan-glass-bg' />
            <h3>{plan.title}</h3>
            <p className='plan-profit'>
              {plan.profit}
              <span className='plan-profit-label'>profit</span>
            </p>
            <ul>
              <li>
                <span>Min Deposit:</span> <strong>${plan.minDeposit}</strong>
              </li>
              <li>
                <span>Max Deposit:</span> <strong>${plan.maxDeposit}</strong>
              </li>
              <li>
                <span>Min Withdraw:</span> <strong>${plan.minWithdraw}</strong>
              </li>
            </ul>
            <button
              className='plan-btn'
              onClick={() => alert(`You selected ${plan.title}`)}
            >
              Make Deposit
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
