import React from 'react'
import InvestmentPlanComponent from '../../../Components/User/InvestmentplanComponent'
import MainHeader from '../../../Components/User/MainHeader'

export default function InvestmentPlan () {
  return (
    <div>
      <MainHeader />
      <header
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          textAlign: 'center'
        }}
      >
        <h1>Welcome to SunTrustMint Investment</h1>
        <p>Your gateway to smart financial growth</p>
      </header>

      <main>
        <InvestmentPlanComponent />
      </main>
    </div>
  )
}
