import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdSearch, IoMdNotificationsOutline} from 'react-icons/io'
import {FiMessageCircle} from 'react-icons/fi'
import {FaRegUserCircle} from 'react-icons/fa'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import {MdWidgets} from 'react-icons/md'

import './index.css'

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [userImage, setUserImage] = useState(true)

  const onchangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  return (
    <div className="header-container">
      <div className="hambarger-search-contianer">
        <GiHamburgerMenu />
        <div className="search-container">
          <IoMdSearch />
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={onchangeSearchInput}
          />
        </div>
      </div>
      <div className="navigation-container">
        <Link to="/message">
          <FiMessageCircle />
        </Link>
        <Link to="/notification">
          <IoMdNotificationsOutline />
        </Link>
        <Link to="/widgets">
          <MdWidgets />
        </Link>
        <div className="profile-container">
          {userImage ? (
            <FaRegUserCircle />
          ) : (
            <img src={userImage} alt="userimg" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
