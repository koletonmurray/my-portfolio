import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavDrawer({ setOpen, routes }) {
  const location = useLocation();

  return (
    <div className="w-[260px]">
      <div className="bg-darkBlue h-2" />
      <ul className="p-3 flex flex-col gap-1">
        {routes.map(({ label, path, Icon }) => {
          const isActive = location.pathname === path;

          return (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'group flex items-center gap-3 rounded-lg px-3 py-2',
                  'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-midBlue',
                  isActive
                    ? 'bg-darkBlue text-white font-semibold'
                    : 'text-darkBlue hover:bg-lightBlue/20 hover:text-midBlue font-semibold'
                ].join(' ')}
              >
                {/* Icon inherits text color via text-current */}
                <Icon className="text-current" fontSize="small" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}