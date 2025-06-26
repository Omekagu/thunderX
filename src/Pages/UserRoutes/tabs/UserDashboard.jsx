import { UserAmount } from '../../../Components/User/UserAmount'
import InvestmentHistory from '../../../Components/User/InvestmentHistory'
import MainHeader from '../../../Components/User/MainHeader'

export const UserDashboard = () => (
  <div className='dashboard-container'>
    <MainHeader />

    {/* TOP CARD from Image 2 */}
    <UserAmount />

    {/* Investment History */}
    <InvestmentHistory />
  </div>
)
