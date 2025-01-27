import React from "react";

import CustomCard from "../CustomCard";
import { AutoStories, Computer } from "@mui/icons-material";
import Koleton from '../../assets/koleton-portrait.png'
import Logo from '../Logo';
import logoImage from '../../assets/logo.png';

export default function Home() {
    const cards = [
        {
          title: "My Story",
          text: "Learn more about my journey, skills, and experiences in the world of tech.",
          buttonText: "Read More",
          buttonLink: "/about",
          Icon: AutoStories,
        },
        {
          title: "Featured Projects",
          text: "Explore the projects I've worked on, from mobile apps to scalable web solutions.",
          buttonText: "View Projects",
          buttonLink: "/projects",
          Icon: Computer,
        },
    ];

    return (
        <>
            <div className="bg-white">
                <div className="px-10 sm:px-20 py-10 text-midBlue max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="flex-1 text-left mx-auto sm:px-10">
                        <img className="h-[17em] mx-auto" src={logoImage} alt="Koleton Murray logo" />
                        <h3 className="text-xl font-medium pt-0">
                            Hey, <span className="wave">👋🏼</span> I'm <Logo/>!
                        </h3>
                        <p className="pt-2">
                            I am a full-stack developer based in Utah! I am passionate about creating beautiful and efficient solutions that enhance user experience and solve real-world problems.<br/><br/>
                            <span className="text-darkBlue font-semibold">
                                Let's build something amazing together!
                            </span>
                        </p>
                    </div>
                    <div className="flex-1 text-right pt-5 sm:pt-0">
                        <img className="h-[25em] mx-auto" src={Koleton} alt="Portrait photo of Koleton" />
                    </div>
                    
                </div>
            </div>
            <div className="bg-cream">
                <div className="px-12 sm:px-20 py-5 text-midBlue max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
                    {cards.map((item, index) => (
                        <CustomCard
                        key={index}
                        title={item.title}
                        text={item.text}
                        buttonText={item.buttonText}
                        buttonLink={item.buttonLink}
                        Icon={item.Icon}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
