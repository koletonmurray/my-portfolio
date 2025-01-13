import { useState } from 'react';
import NavBar from './NavBar.jsx';
import NavDrawer from './NavDrawer.jsx';
import Drawer from '@mui/material/Drawer';
import Footer from './Footer.jsx';
import Topbar from './Topbar.jsx';

const routes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Projects",
      path: '/projects'
    },
    {
      label: "Contact",
      path: '/contact'
    }
  ];


export default function Layout ({ children }) {  
    const [mobileNavOpen, setMobileNavOpen] = useState(false);  

    return  (
      <>
        <Topbar open={mobileNavOpen} setOpen={setMobileNavOpen} />
        <Drawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
          <NavDrawer routes={routes} setOpen={setMobileNavOpen}/>
        </Drawer>
        <NavBar routes={routes}/>
        <main className='px-10 sm:px-20 py-10 bg-white text-midBlue max-w-[1000px] mx-auto'>
          {children}
        </main>
        <Footer />
      </>
    )
}