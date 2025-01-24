import React from "react";
//import Koleton from '../../assets/Koleton-Murray-Crop.png'
//import Koleton from '../../assets/Koleton-Murray-Gray.png'
import Koleton from '../../assets/Koleton-Murray-DullCROP.png'

import Logo from '../Logo';
import logoImage from '../../assets/logo+name.png';

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center p-4">
                <div className="flex-1 text-left">
                    <img className="h-[17em] mx-auto" src={logoImage} alt="Koleton Murray logo" />
                    <p className="sm:pt-5">
                       Hey! My name is <Logo/>. I am a full-stack developer based in Utah. I am passionate about creating beautiful and efficient solutions that enhance user experience and solve real-world problems. Let's build something amazing together!
                    </p>
                </div>
                <div className="flex-1 text-left pt-5 sm:pt-0">
                    <img className="h-[25em] mx-auto" src={Koleton} alt="Portrait photo of Koleton" />
                </div>
            </div>
        </>
    );
}
