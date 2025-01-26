import { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import NavDrawer from './NavDrawer.jsx';
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
    }
  ];


export default function Layout ({ children }) {  
    const [mobileNavOpen, setMobileNavOpen] = useState(false);  

    return (
      <div className="flex flex-col min-h-screen transition">
        <Topbar open={mobileNavOpen} setOpen={setMobileNavOpen} />
        <Drawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
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
    );
}