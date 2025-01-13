import ProjectCard from "../ProjectCard"

const projectList = [
    {
        title: "BYU Studies Website",
        subtitle: "A React-based website with an optimized AWS cloud architecture, improving load time and centralizing data storage.",
        skills: "React, AWS, Python, SQL, UX Design",
        link: "https://byustudies.byu.edu"
    },
    {
        title: "File Conversion Automation",
        subtitle: "A Python solution that automates publication file conversion to HTML, saving hundreds of hours annually.",
        skills: "Python, Automation, Backend Development.",
    },
    {
        title: "Team Leadership",
        subtitle: "Directed a team of six developers, ensuring timely delivery and high-quality output for critical features.",
        skills: "Team Management, Agile Development."
    }
]

export default function Projects() {
    return (
        <div className="text-left">
            <h2>Featured Projects</h2>
            <div>
                {projectList.map((project, index) => {
                    console.log("Rendering project:", project); // Debugging
                    return <ProjectCard key={index} project={project} />;
                })}
            </div>
            <h2>Technical Skills</h2>
            <ul>
                <li><b>Proficient</b>: JavaScript, React, Python, AWS, SQL, HTML, CSS.</li>
                <li><b>Experienced</b>: Swift, TypeScript, Node.js, Django, Tableau.</li>
                <li><b>Certified</b>: AWS Cloud Practitioner, Professional Scrum Master I.</li>
            </ul>
            <h2>Education & Certifications</h2>
            <p>
                •	Master of Science in Information Systems Management (In Progress) – Brigham Young University.
                •	Certifications: AWS Cloud Practitioner, Professional Scrum Master I.
            </p>
            <h2>Volunteer Work & Leadership</h2>
            <p>
                •	Volunteer Income Tax Assistance Program: Helped low-income families secure tax refunds.
                •	Eagle Scout: Honed discipline, leadership, and community service.
            </p>
        </div>
    )
}