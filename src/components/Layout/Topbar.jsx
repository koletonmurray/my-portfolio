import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../Logo';
import logoImage from '../../assets/icon.png';
import iconImage from '../../assets/icon.png'
import { IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';


function Topbar({setOpen}) {
  return (
    <div className="bg-gradient-to-r from-darkBlue to-midBlue flex justify-between items-center px-2 py-2 sm:py-4">
      <div className='flex justify-start items-center flex-1'>
        <div className='sm:hidden absolute top-3 left-3'>
          <IconButton onClick={() => setOpen(true)}>
            <Menu style={{ color: 'white' }}/>
          </IconButton>
        </div>
      </div>
      
      <Link to={'/'}>
        <img 
          src={logoImage} 
          className="absolute top-0 right-0 z-10 h-[6em] sm:h-[8em] pr-2 sm:pr-10" 
          alt="Koleton Murray logo"
        />
      </Link>

      <div className='flex justify-end items-center flex-1'>
        <img src={''} className='h-[3em] pr-3'/>
      </div>
    </div>
  )
}

export default Topbar;