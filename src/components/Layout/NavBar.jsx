import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({ routes }) {
  const location = useLocation();

  return (
    <header id="header">
      <div className="mx-auto hidden sm:block px-2 md:px-8 bg-darkBlue text-white">
        <nav className="links">
          <ul className="flex items-center py-4 justify-left gap-4 md:gap-6 lg:gap-8 font-semibold">
            {routes.map(({ label, path, Icon }) => {
              const isActive = location.pathname === path;
              const baseColor = isActive ? "text-lightBlue" : "text-white";
              const hoverColor = isActive ? "" : "hover:text-lightBlue";

              return (
                <li key={label}>
                  <Link
                    to={path}
                    className={`
                      flex items-center gap-2
                      ${baseColor} ${hoverColor}
                      ${isActive ? "font-bold underline decoration-2 underline-offset-8" : ""}
                      hover:underline hover:decoration-2 hover:underline-offset-4 hover:scale-105
                      transition-all duration-300 ease-in-out
                    `}
                  >
                    <span className="relative flex items-center justify-center">
                      <Icon
                        sx={{
                          fontSize: 20,
                          verticalAlign: "middle",
                          position: "relative",
                          top: "0.5px",
                        }}
                        className="text-current transition-transform duration-200 ease-in-out group-hover:scale-105"
                      />
                    </span>
                    <span className="leading-none">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mx-auto block sm:hidden px-2 md:px-8 bg-darkBlue text-white h-5" />
    </header>
  );
}