import React from 'react'
import './Header.css'
import logo2 from './logo2.png'
import { Avatar } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { Link } from 'react-router-dom';

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div className='header'>
      <div className="header__left">
        <img className='header__logo' src={logo2} alt='' />
      </div>

      <div className="header__center">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className="header__icons">
            <ChatOutlinedIcon />
            <span>Chat</span>
          </div>
        </Link>

        {/* <Link to='/calendar' style={{ textDecoration: 'none' }}>
          <div className="header__icons">
            <ScheduleIcon />
            <span>Calendar</span>
          </div>
        </Link> */}

        <Link to='/movies' style={{ textDecoration: 'none' }}>
          <div className="header__icons">
            <OndemandVideoIcon />
            <span>Movies</span>
          </div>
        </Link>


        <Link to='weather' style={{ textDecoration: 'none' }}>
          <div className="header__icons">
            <CloudOutlinedIcon />
            <span>Weather</span>
          </div>
        </Link>
{/* 
        <Link to='/news' style={{ textDecoration: 'none' }}>
          <div className="header__icons">
            <ReceiptOutlinedIcon/>
            <span>News</span>
          </div>
        </Link> */}


      </div>

      <div className="header__right">
        <Avatar src={user?.photoURL} />
        <h4 onClick={() => auth.signOut()}>Logout</h4>
      </div>

    </div>
  )
}

export default Header
