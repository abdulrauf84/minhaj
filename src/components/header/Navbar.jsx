import React, { Fragment } from 'react'
import { AppBar, List, ListItem, Typography } from '@material-ui/core'
import Logo from '../../assets/images/logo.jpg'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({

  header: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'brown',
    width: '100vw'
  },
  topnav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1vh',
    marginLeft: '10px',
  },
  logotext: {
    color: 'brown',
    fontSize: '2em',
    fontWeight: 'bold'
  },
  logotext1: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: 'green',
  },
  navbar: {
    marginTop: '1vh',
    backgroundColor: 'brown',
    display: 'flex',
  },
  menu: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'verdana'
  },

}));

export default function Navbar() {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <div className={classes.topnav}>
        <img src={Logo} alt='LOGO' style={{ height: '16vh', }} />
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', marginLeft: '1vw'
        }}>
          <Typography className={classes.logotext}>MINHAJ-UL-QURAN</Typography>
          <Typography className={classes.logotext1}>INTERNATIONAL SWEDEN</Typography>
        </div>
      </div>
      <div className='navbar'>
        <ul className='menu'>
          <li>Home</li>
          <li>Prayer Times</li>
          <li>Membership</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}
