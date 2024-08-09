import {RiGovernmentLine} from 'react-icons/ri'
import {
  FaAngleRight,
  FaUserTie,
  FaFileInvoice,
  FaRegUserCircle,
} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {IoTicket} from 'react-icons/io5'
import {IoIosGlobe} from 'react-icons/io'

import './index.css'

const Sidebar = () => (
  <div className="sidebar-container">
    <img
      className="logo"
      src="https://res.cloudinary.com/ds1piowcn/image/upload/v1723195550/Screenshot_2024-08-09_145350_a7k42b.png"
      alt="logo"
    />
    <div className="menu-bar">
      <div className="single-menu-container">
        <RiGovernmentLine />
        <p className="menu-heading">Government Overview</p>
        <FaAngleRight />
      </div>
      <div className="single-menu-container">
        <FaUserTie />
        <p className="menu-heading">Institution Registry</p>
        <FaAngleRight />
      </div>
      <div className="single-menu-container">
        <FaFileInvoice />
        <p className="menu-heading">Academics</p>
        <FaAngleRight />
      </div>
      <div className="single-menu-container">
        <HiUsers />
        <p className="menu-heading">Institute Inspection</p>
        <FaAngleRight />
      </div>
      <div className="single-menu-container">
        <IoTicket />
        <p className="menu-heading">Raise a Ticket</p>
        <FaAngleRight />
      </div>
      <div className="single-menu-container">
        <IoIosGlobe />
        <p className="menu-heading">Communications</p>
        <FaAngleRight />
      </div>
      <div className="single-menu-container">
        <FaRegUserCircle />
        <p className="menu-heading">User</p>
        <FaAngleRight />
      </div>
    </div>
  </div>
)

export default Sidebar
