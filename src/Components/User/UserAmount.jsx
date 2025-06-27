import React from 'react'
import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const UserAmount = () => {
  return (
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
        <span className='spending-label'>Wallet balance</span>
      </div>
      <div className='spending-amount'>$1050.99</div>
      <div className='actions-row'>
        <button className='action-btn'>
          <Link to={'/user/deposit'}>
            <RiDownload2Line className='action-icon' />
            Deposit
          </Link>
        </button>
        <span className='action-divider' />
        <button className='action-btn'>
          <Link to={'/user/withdrawal'}>
            <RiUpload2Line className='action-icon' />
            Withdraw
          </Link>
        </button>
      </div>
    </section>
  )
}
