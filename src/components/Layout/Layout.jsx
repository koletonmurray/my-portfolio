import { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import NavDrawer from './NavDrawer.jsx';
import Topbar from './Topbar.jsx';

import HomeRounded from '@mui/icons-material/HomeRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import TerminalRounded from '@mui/icons-material/TerminalRounded';

const routes = [
  { label: 'Home', path: '/', Icon: HomeRounded },
  { label: 'About Me', path: '/about', Icon: InfoRounded },
  { label: 'Projects', path: '/projects', Icon: TerminalRounded },
];


export default function Layout ({ children }) {  
  const [mobileNavOpen, setMobileNavOpen] = useState(false);  

  return (
    <div className="flex flex-col min-h-screen transition">
      <Topbar open={mobileNavOpen} setOpen={setMobileNavOpen} />
      <Drawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
        <div className='bg-darkBlue h-10'/>
        <NavDrawer routes={routes} setOpen={setMobileNavOpen} />
      </Drawer>
      <NavBar routes={routes} />
      <main className="flex-grow bg-white">
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}