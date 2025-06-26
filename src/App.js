import { Route, Routes } from 'react-router-dom'
import Login from './Pages/adminroutes/Login'
import ManageRole from './Pages/adminroutes/ManageRole'
import ManageHotels from './Pages/adminroutes/ManageHotels'
import Schedule from './Pages/adminroutes/Schedule'
import Tickets from './Pages/adminroutes/Tickets'
import ManageReferral from './Pages/adminroutes/ManageReferral'
import Payments from './Pages/adminroutes/Payments'
import Deposit from './Pages/adminroutes/Deposit'
import Withdrawal from './Pages/adminroutes/Withdrawal'
import GatewaySettings from './Pages/adminroutes/GatewaySettings'
import EmailManager from './Pages/adminroutes/EmailManager'
import GeneralSettings from './Pages/adminroutes/GeneralSettings'
import ManageLanguage from './Pages/adminroutes/ManageLanguage'
import ManageTheme from './Pages/adminroutes/ManageTheme'
import CommissionLog from './Pages/adminroutes/CommissionLog'
import ManageMobile from './Pages/adminroutes/ManageMobile'
import Newsletter from './Pages/adminroutes/Newsletter'
import Report from './Pages/adminroutes/Report'
import UpdateSystem from './Pages/adminroutes/UpdateSystem'
import ManagerUsers from './Pages/adminroutes/ManageUsers'
import PrivateRoute from './Pages/adminroutes/PrivateRoute'
import Reservations from './Pages/adminroutes/Reservations'
import ManageRooms from './Pages/adminroutes/ManageRooms'
import StaffSection from './Pages/adminroutes/StaffSection'
import Reports from './Pages/adminroutes/Reports'
import GuestReviews from './Pages/adminroutes/GuestReviews'
import ActiveUsers from './Pages/adminroutes/manage-users/ActiveUsers'
import Analytics from './Pages/adminroutes/dashboard/Analytics'
import DashBoard from './Pages/adminroutes/DashBoard'
import Bookings from './Pages/adminroutes//manage-users/Bookings'
import { UserDashboard } from './Pages/UserRoutes/tabs/UserDashboard'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin/dashboard' element={<DashBoard />} />
          <Route path='/user/dashboard' element={<UserDashboard />} />
        </Route>
        <Route path='/dashboard/analytics' element={<Analytics />} />
        <Route exact path='/Reservations' element={<Reservations />} />
        <Route exact path='/manage-rooms' element={<ManageRooms />} />
        <Route exact path='/staff-scetion' element={<StaffSection />} />
        <Route exact path='/Reports' element={<Reports />} />
        <Route exact path='/guest-reviews' element={<GuestReviews />} />
        <Route exact path='/Reservations' element={<Reservations />} />
        <Route exact path='/manage-role' element={<ManageRole />} />
        <Route exact path='/manage-users' element={<ManagerUsers />} />
        <Route exact path='/manage-user/users' element={<ActiveUsers />} />
        <Route exact path='/manage-user/booking' element={<Bookings />} />
        <Route exact path='/manage-hotels' element={<ManageHotels />} />
        <Route exact path='/schedule' element={<Schedule />} />
        <Route exact path='/tickets' element={<Tickets />} />
        <Route exact path='/manage-referral' element={<ManageReferral />} />
        <Route exact path='/payments' element={<Payments />} />
        <Route exact path='/deposit' element={<Deposit />} />
        <Route exact path='/withdrawal' element={<Withdrawal />} />
        <Route exact path='/gateway-settings' element={<GatewaySettings />} />
        <Route exact path='/email-manager' element={<EmailManager />} />
        <Route exact path='/general-settings' element={<GeneralSettings />} />
        <Route exact path='/manage-language' element={<ManageLanguage />} />
        <Route exact path='/manage-theme' element={<ManageTheme />} />
        <Route exact path='/commission-log' element={<CommissionLog />} />
        <Route exact path='/manage-mobile' element={<ManageMobile />} />
        <Route exact path='/newsletter' element={<Newsletter />} />
        <Route exact path='/report' element={<Report />} />
        <Route exact path='/update-system' element={<UpdateSystem />} />
      </Routes>
    </div>
  )
}

export default App
