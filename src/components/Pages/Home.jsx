import React from "react";
import logoImage from '../../assets/logo+name.png';
import Logo from '../Logo';

export default function Home() {
    return (
        <>
            <h1>Welcome to My Portfolio!</h1>
            <div className="flex flex-col md:flex-row items-center justify-center p-4">
                <div className="flex-1 flex justify-center">
                    <img className="h-[17em]" src={logoImage} alt="Logo of Murray Electric Corp." />
                </div>
                <div className="flex-1 text-left">
                    <p>
                       <Logo/> is a web developer based in Utah
                    </p>
                </div>
            </div>
        </>
    );
}
