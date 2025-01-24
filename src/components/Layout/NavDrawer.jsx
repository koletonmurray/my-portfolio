import React from 'react';
import { Link } from 'react-router-dom';

export default function NavDrawer({setOpen, routes}){
    return(
        <ul className='p-4 w-[200px] flex flex-col gap-2 text-lg text-darkBlue font-semibold'>
            {routes.map((route) =>(
                <li className='' key={route.label}>
                    <Link to={route.path} onClick={() => setOpen(false)} className={location.pathname === route.path ? 'text-midBlue underline decoration-2 underline-offset-8' : ''}>
                        {route.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}