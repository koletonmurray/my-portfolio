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
                       Hey! My name is <Logo/>. I am a full-stack developer based in Utah. I am passionate about crafting efficient solutions that enhance user experience and solve real-world problems. Let's build something amazing together!
                    </p>
                </div>
            </div>
        </>
    );
}
