import './index.css'

import {MdOutlineNotificationsNone} from 'react-icons/md'

const UserDetails = () => (
  <>
    <div className="user-details-container">
      <div
        className="nav-link-container on-sm-devices on-lg-devices"
        key="notification"
      >
        <MdOutlineNotificationsNone size={30} color="#475569" />
      </div>
      <div>
        <div className="name-details-container">
          <img
            className="user-logo"
            src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
            alt="user"
          />
          <div>
            <h1>HiMike,</h1>
            <p>Welcome back</p>
          </div>
        </div>
      </div>
      {/* Balance Details  */}

      <div className="balance-details-container">
        <p className="today-text">Today</p>
        <h1 className="account-balance-heading">$19,892</h1>
        <p className="account-balance-para">Account Balance</p>
        <h1 className="year-to-date-contributions-heading">$4,000</h1>
        <p className="account-balance-para">Year-to-Date Contributions</p>
        <h1 className="year-to-date-contributions-heading">$1,892</h1>
        <p className="account-balance-para">Total Interest</p>
        <select className="selectBtn">
          <option value="I want to">I want to</option>
          <option value="">React js</option>
          <option value="">Angular Js</option>
          <option value="">Vue Js</option>
        </select>
      </div>
      <div className="recent-transactions-container">
        <h1 className="recent-transactions-heading">Recent Transactions</h1>
        <p className="account-balance-para">2020-08-07</p>
        <h1 className="withdrawal-heading">
          Withdrawal Transfer to Bank-xxx11
        </h1>
        <hr className="hr-line" />
        <p className="account-balance-para">2020-07-21</p>
        <h1 className="withdrawal-heading">
          Withdrawal Transfer to Bank-xxx11
        </h1>
        <hr className="hr-line" />
        <p className="account-balance-para">2020-08-16</p>
        <h1 className="withdrawal-heading">
          Withdrawal Transfer to Bank-xxx11
        </h1>
        <hr className="hr-line" />
      </div>
    </div>
  </>
)

export default UserDetails
