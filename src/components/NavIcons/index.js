import {AiFillHome} from 'react-icons/ai'
import {BiSearch, BiNews} from 'react-icons/bi'

import './index.css'

import {CgNotes, CgProfile} from 'react-icons/cg'
import {MdOutlineNotificationsNone, MdOutlineLogout} from 'react-icons/md'

const NavIcons = () => (
  <>
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
  </>
)

export default NavIcons
