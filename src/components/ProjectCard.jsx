import { Link } from "react-router-dom"
import { Button } from '@mui/material';

import CustomCarousel from "./CustomCarousel";

export default function ProjectCard ( {project} ) {
    const { title, subtitle, skills, link, carousel } = project;

    return (
        <div className="pb-10">
            {title && <h2 className="">{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
            {carousel && <CustomCarousel slides={carousel} />}
            {skills && 
                <div>
                    <h5>Skills:</h5>
                    <p>{skills}</p>
                </div>
            }
            {link && (
                <Link to={link} target="_blank">
                    <Button variant="contained"
                        sx={{
                            backgroundColor: '#57b9d0',
                            '&:hover': {
                                backgroundColor: '#3587a1',
                            },
                        }}>
                        View Project
                    </Button>
                </Link>
            )}
        </div>
    )
}