import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../Logo';
import logoImage from '../../assets/icon.png';
import iconImage from '../../assets/icon.png'
import { IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';


function Topbar({setOpen}) {
  return (
    <div className="bg-midBlue flex justify-between items-center px-2 py-2 sm:py-4">
      <div className='flex justify-start items-center flex-1'>
        <div className='w-1/4 flex sm:hidden'>
          <IconButton onClick={() => setOpen(true)}>
            <Menu style={{ color: 'white' }}/>
          </IconButton>
        </div>
        {/* <div className= 'hidden sm:flex px-4'>
          <Link to={'/'}>
            <Logo color={'lightBlue'} weight={'medium'} size={'xl'}/>
          </Link>
        </div> */}
      </div>
      
      <Link to={'/'}>
        <img src={logoImage} className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-[7em] sm:h-[8em] sm:pt-2" alt="Centered Image"/>
      </Link>

      <div className='hidden sm:flex justify-end items-center flex-1'>
        <img src={''} className='h-[3em] pr-3'/>
      </div>
    </div>
  )
}

export default Topbar;