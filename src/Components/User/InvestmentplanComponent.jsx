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
    <section
      style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(to right, #0f1c2e, #081021)',
        color: '#f0f4f8',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2
          style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}
        >
          Investment Offers
        </h2>
        <p
          style={{
            color: '#b0b8c4',
            fontSize: '1rem',
            maxWidth: '650px',
            margin: '0 auto 2rem'
          }}
        >
          Choose your plan below. You can withdraw profits anytime, but
          principal balance requires at least one month before withdrawal.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '2rem auto 0'
        }}
      >
        {plans.map(plan => (
          <div
            key={plan.id}
            style={{
              background: 'linear-gradient(to bottom, #111a2b, #1d2e4a)',
              borderRadius: '12px',
              padding: '2rem 1.5rem',
              border: '1px solid #25314e',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'
            }}
          >
            <h3
              style={{
                color: '#00d4ff',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '0.75rem'
              }}
            >
              {plan.title}
            </h3>
            <p
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              {plan.profit}
              <span
                style={{
                  fontSize: '1rem',
                  color: '#bbb',
                  marginLeft: '0.25rem'
                }}
              >
                profit
              </span>
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: '#cbd4e1',
                fontSize: '0.95rem'
              }}
            >
              <li>
                Min Deposit: <strong>${plan.minDeposit}</strong>
              </li>
              <li>
                Max Deposit: <strong>${plan.maxDeposit}</strong>
              </li>
              <li>
                Min Withdraw: <strong>${plan.minWithdraw}</strong>
              </li>
            </ul>
            <button
              style={{
                marginTop: '1.5rem',
                width: '100%',
                padding: '12px 0',
                backgroundColor: '#00d4ff',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onClick={() => alert(`You selected ${plan.title}`)}
              onMouseOver={e =>
                (e.currentTarget.style.backgroundColor = '#00c0e4')
              }
              onMouseOut={e =>
                (e.currentTarget.style.backgroundColor = '#00d4ff')
              }
            >
              Make Deposit
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
