import { Link } from "react-router-dom"
import { Button } from '@mui/material';

export default function ProjectCard ( {project} ) {
    console.log("ProjectCard received project:", project); // Debugging
    const { title, subtitle, skills, link } = project;
    console.log(title)
    console.log(subtitle)

    return (
        <div>
            {title && <h3>{title}</h3>}
            {subtitle && <h4>{subtitle}</h4>}
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