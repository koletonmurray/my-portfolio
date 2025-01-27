import { Link } from "react-router-dom"
import { Button } from '@mui/material';

import CustomCarousel from "./CustomCarousel";

export default function ProjectCard ( {project} ) {
    const { title, subtitle, bulletTitle, bullets, skills, link, linkText, carousel } = project;

    return (
        <div className="pb-20">
            {title && <h2 className="text-2xl">{title}</h2>}
            {subtitle && <p className="">{subtitle}</p>}
            {carousel && <CustomCarousel slides={carousel} />}
            {bulletTitle && <h5 className="text-lg">{bulletTitle}</h5>}
            {bullets && 
                <ul className="pb-10 list-disc pl-5 marker:text-darkBlue">
                    {bullets.map((bullet, index) => {
                        return <li key={index}>{bullet}</li>
                    })}
                </ul>
            }
            {skills && 
                <p className="text-lg">
                    <span className="text-darkBlue font-bold">Skills: </span>
                    {skills}
                </p>
            }
            {link && (
                <div className="flex justify-center sm:justify-start">
                    <Link className="mx-auto sm:mx-0" to={link} target="_blank">
                        <Button 
                            size="large"
                            variant="contained"
                            sx={{
                                backgroundColor: '#6CA4AC',
                                '&:hover': {
                                    backgroundColor: '#1C5B74',
                                },
                        }}>
                            {linkText ? linkText : "View Project"}
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}