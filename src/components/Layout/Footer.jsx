import React from 'react';
import IconButton from '../IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Hyperlink from '../Hyperlink';
import Logo from '../Logo';
import { Email } from '@mui/icons-material';

export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            {/* Section 1 = Contact/Social */}
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 xl:gap-64 py-8 bg-gradient-to-l from-darkBlue to-midBlue text-white'>
                {/* Section 1b - Follow Me */}
                <div className='flex flex-col items-center'>
                    <h3 className='text-2xl font-semibold pb-2 text-white'>Let's Connect</h3>
                    <div className='flex gap-3'>
                        <IconButton href="mailto:mail@koleton.dev" target="_blank" icon={<EmailIcon />} color="#1C5B74" logoColor={"#FFFFFF"} />
                        <IconButton href="https://www.linkedin.com/in/koleton-murray/" target="_blank" icon={<LinkedInIcon />} color="#0077B5" logoColor={"#FFFFFF"} />
                        <IconButton href="https://github.com/koletonmurray" target="_blank" icon={<GitHubIcon />} color="#6e5494" logoColor={"#FFFFFF"} />
                    </div>
                </div>
            </div>

            {/* Section 2 = Footer, Privacy */}
            <div className='justify-center p-6 bg-darkBlue text-white'>
                <div className='text-2xl font-semibold py-4'><Logo/></div>
                <p className='text-white'>{`UT, USA | © ${currentYear}`}</p>
            </div>
        </footer>
    )
}