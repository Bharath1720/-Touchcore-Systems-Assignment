import {Component} from 'react'

import {FaGreaterThan} from 'react-icons/fa'

import './index.css'

import {AiFillHome} from 'react-icons/ai'
import {BiSearch, BiNews} from 'react-icons/bi'

import {CgNotes, CgProfile} from 'react-icons/cg'
import {MdOutlineNotificationsNone, MdOutlineLogout} from 'react-icons/md'

import UserDetails from '../UserDetails'

import RetirementIncome from '../RetirementIncome'

class MockTest extends Component {
  state = {
    value: 12,
    secValue: 65,
  }

  handleOnChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSecOnChange = event => {
    this.setState({
      secValue: event.target.value,
    })
  }

  render() {
    const {value, secValue} = this.state
    return (
      <div className="main-page-home-container">
        {/* Navigation Icons */}
        <div className="navbar">
          <div className="navigation-lg-container">
            <ul className="nav-options">
              <img
                className="image-logo"
                src="https://previews.123rf.com/images/wangsinawang/wangsinawang2003/wangsinawang200300031/142375047-beauty-butterfly-logo-ideas-inspiration-logo-design-template-vector-illustration-isolated-on-white-b.jpg"
                alt="logo"
              />
              <li className="nav-link-container" key="home">
                <BiSearch size={20} color="#475569" />
              </li>
            </ul>
            <ul className="nav-options">
              <li className="nav-link-container" key="home">
                <AiFillHome size={30} color="#5571f8" />
              </li>

              <li className="nav-link-container" key="news">
                <BiNews size={30} color="#475569" />
              </li>

              <li className="nav-link-container" key="notes">
                <CgNotes size={30} color="#475569" />
              </li>

              <li className="nav-link-container" key="profile">
                <CgProfile size={30} color="#475569" />
              </li>
            </ul>
            <ul className="nav-notifications-options">
              <li className="nav-link-container" key="notifications">
                <MdOutlineNotificationsNone size={30} color="#475569" />
              </li>
              <li className="nav-link-container" key="logout">
                <MdOutlineLogout size={30} color="#475569" />
              </li>
            </ul>
          </div>
          <ul className="navigation-sm-container">
            <li className="nav-link-container" key="home">
              <AiFillHome size={30} color="#5571f8" />
            </li>

            <li className="nav-link-sm-container" key="news">
              <BiNews size={30} color="#475569" />
            </li>

            <li className="nav-link-sm-container" key="notes">
              <CgNotes size={30} color="#475569" />
            </li>

            <li className="nav-link-sm-container" key="profile">
              <CgProfile size={30} color="#475569" />
            </li>

            <li className="nav-link-sm-container" key="search">
              <BiSearch size={30} color="#475569" />
            </li>
          </ul>
        </div>
        <div className="details">
          <UserDetails />
        </div>
        <div className="income">
          <RetirementIncome />
        </div>

        {/* Retirement Stratergy */}

        <div className="retirement-strategy-container">
          <h1 className="retirement-strategy-heading">Retirement Strategy</h1>
          <form id="myForm">
            <div className="label-container">
              <label htmlFor="rangeEmployeeContribution">
                Employee Contribution
              </label>
              <br />
              <input
                className="range"
                min="0"
                max="20"
                value={value}
                type="range"
                id="rangeEmployeeContribution"
                step="1"
                onChange={this.handleOnChange}
              />
              <span className="values">{`${value}%`}</span>
            </div>

            <div className="label-container">
              <label htmlFor="rangeRetirementAge">Retirement Age</label>
              <br />
              <input
                className="range"
                min="0"
                max="100"
                value={secValue}
                type="range"
                id="rangeRetirementAge"
                step="1"
                onChange={this.handleSecOnChange}
              />
              <span className="values">{`${secValue}`}</span>
            </div>
            <hr className="hr-line-retirement" />
            <div className="employee-contribution-container">
              <p className="employee-contribution-text">
                Employee Contribution
              </p>
              <p className="employee-contribution-value">8.4%</p>
            </div>
            <div className="employee-contribution-container">
              <p className="employee-contribution-text">Interest Rate</p>
              <p className="employee-contribution-value">5%</p>
            </div>
            <div className="update-btn-container">
              <button className="update-btn" type="button">
                Update
              </button>
            </div>
            <div className="view-docs">
              <p className="view-docs-para">
                View Help Docs <FaGreaterThan size={11} color="#5571f8" />
              </p>
            </div>
          </form>
          <div className="additional-info">
            <p className="additional-info-para">
              Are you considering
              <br />
              <span className="additional-info-heading">Housing Advice</span>
            </p>
            <p className="additional-info-para2">
              Limited time to reduce interest
            </p>
            <p className="learn-more-text">
              Learn More
              <FaGreaterThan className="icon-size" size={8} color="#5571f8" />
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MockTest
