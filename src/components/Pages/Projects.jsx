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
        <>
            <div className="px-10 sm:px-20 py-10 text-midBlue max-w-[1000px] mx-auto">
                <h1 className="text-center">Featured Projects</h1>
                <div className="text-left sm:px-20 sm:pt-5 text-black">
                    <div>
                        {projectList.map((project, index) => {
                            return <ProjectCard key={index} project={project} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}