import Logo from "../Logo"
import Hyperlink from "../Hyperlink"
import AIKoleton from "../../assets/ai-koleton.png";

export default function About () {
    return (
        <>
            <div className="px-10 sm:px-20 py-10 text-midBlue max-w-[1000px] mx-auto">
                <h1>My Story</h1>
                <div className="text-left px-5 sm:px-20 pt-5 text-black">
                    <div>
                        <img 
                        src={AIKoleton} 
                        className="h-[15em] rounded-xl float-right ml-4 mb-4" 
                        alt="Profile"
                        />
                        <p>Hi, I'm <Logo/>! I'm a full-stack developer who loves building scalable, user-focused solutions. Along with experience leading teams and developing complex web applications, I specialize in technologies like React, Python, and AWS. I'm currently pursuing a Master's in Information Systems Management, honing my technical, business, and leadership skills.</p>
                        <p>Over the years, I've created dozens of applications ranging from personal recipe mobile apps, to storefronts selling thousands of dollars annually, to content websites housing thousands of scholarly publications. I have optimized website performance, automated workflows with Python, and improved day-to-day business performance.</p>
                        <p>Beyond coding, I value teamwork and mentorship. These skills have been developed through leading teams and volunteering to make an impact in my community. I bring a mix of technical expertise, problem-solving, business knowledge, and a drive for continuous learning.</p>
                        <p>When I'm not coding, you'll find me hiking, canyoneering, jogging, or camping outdoors. I enjoy solving jigsaw puzzles, reading novels, and enjoying time with friends and family.</p>
                        <p>Feel free to check out the 
                            <Hyperlink href={'/projects'}>
                                &nbsp;projects&nbsp;
                            </Hyperlink> 
                            I've worked on. Connect with me on LinkedIn or GitHub to learn more.
                        </p>
                        
                        <h2 className="text-center pt-12">Technical Skills</h2>
                        <ul>
                            <li><b className="text-darkBlue">Proficient:</b> JavaScript, React, Python, AWS, SQL, HTML, CSS</li>
                            <li><b className="text-darkBlue">Experienced:</b> Swift, TypeScript, Node.js, Django, Tableau</li>
                            <li><b className="text-darkBlue">Certified:</b> AWS Cloud Practitioner, Professional Scrum Master I</li>
                        </ul>
                        <h2 className="text-center pt-12">Education & Certifications</h2>
                        <h3>Master of Science in Information Systems Management</h3>
                        <p>Brigham Young University</p>

                        <h2 className="text-center pt-12">Volunteer Work</h2>
                        <h3>Volunteer Income Tax Assistance Program</h3>
                        <p>Helped low-income families secure tax refunds.</p>
                        <h3>Volunteer Representative</h3>
                        <h3>Eagle Scout</h3>
                        <p>Honed discipline, leadership, and community service.</p>
                    </div>
                </div>
            </div>
        </>
    )
}