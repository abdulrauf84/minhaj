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
    fontSize: '1.8em',
    fontWeight: 'bold'
  },
  logotext1: {
    fontSize: '1em',
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
        <a href='/'>
          <img src={Logo} alt='LOGO' style={{ height: '12vh', }} />
        </a>
        <a href='/'><div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', marginLeft: '1vw'
        }}>
          <Typography className={classes.logotext}>MINHAJ-UL-QURAN</Typography>
          <Typography className={classes.logotext1}>INTERNATIONAL SWEDEN</Typography>
        </div>
        </a>
      </div>
      <div className='navbar'>
        <ul className='menu'>
          <li><a href='/'>About MQI</a></li>
          <li><a href='https://www.minhaj.se/times' target="_blank">Prayer Times</a></li>
          <li><a href='/membership'>Membership</a></li>
          <li><a href='/donate'>Donate</a></li>
          <li><a href='/privacy'>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  )
}
