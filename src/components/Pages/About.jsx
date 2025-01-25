import AIKoleton from "../../assets/ai-koleton.png";
import EmojiRotator from "../EmojiRotator";
import Hike from "../../assets/hike.png";
import Hyperlink from "../Hyperlink"

export default function About () {
    return (
        <>
            <div className="px-10 sm:px-20 py-10 text-midBlue max-w-[1000px] mx-auto">
                <div className="text-left px-5 sm:px-20 pt-5 text-black">
                    <div>
                        <div id="my-story">
                            <img 
                                src={AIKoleton} 
                                className="h-[15em] rounded-xl float-right ml-4 mb-4 mt-4" 
                                alt="iOS Playground AI image of Koleton"
                            />
                            <EmojiRotator emojis={['📊', '👨🏼‍💻', '🖥️', '🎓']} heading={'My Story'}/>
                            <p>
                                I started my academic journey exploring various majors. I spent three years studying a variety of degrees; accounting, finance, engineering, computer science, 
                                and psychology, among others. None of these professions felt quite right. Feeling uncertain of my future, I coincidently decided to take an Introduction to 
                                Information Systems class. While taking that course, everything clicked. Information Systems felt like the perfect fit and came naturally to me. It was the 
                                perfect balance of business, technology, and data.
                            </p>
                            <p>
                                Since then, I've studied mobile app development, web development, data analytics, machine learning models, 
                                data engineering,  and cloud architecture. I have earned my bachelor's degree in Information Systems and I'm completing a master's in Information Systems 
                                Management. Along my academic journey, I have gained valuable real-world experience harnessing my technical expertise, business knowledge, and 
                                problem-solving skills.
                            </p>
                        </div>
                        <div id="skills">
                            <h2>Skills</h2>
                            <ul>
                                <li><b className="text-darkBlue">Proficient:</b> JavaScript, React, Python, AWS, SQL, HTML, CSS, R, Excel</li>
                                <li><b className="text-darkBlue">Experienced:</b> Swift, TypeScript, Node, Django, ASP.net, Tableau</li>
                            </ul>
                            <p></p>
                        </div>
                        <div id="education">
                            <h2 className="tex-decoration">Education</h2>
                            <h4 className="mb-0 pt-0 text-lg text-black">Master of Science, Information Systems Management <span className="text-midGray">(2025)</span></h4>
                            <p className="text-md text-gray-700 !mb-1">Brigham Young University – Marriott School of Business</p>
                            <h4 className="mb-0 text-lg text-black">Bachelor of Science, Information Systems <span className="text-midGray">(2025)</span></h4>
                            <p className="text-md text-gray-700 !mb-1">Brigham Young University – Marriott School of Business</p>
                            <h4 className="mb-0 text-lg text-black">Certified</h4>
                            <p>AWS Cloud Practitioner<br/>Professional Scrum Master I</p>
                        </div>
                        <div id="my-work">
                            <EmojiRotator emojis={['📱', '💻', '🏃🏼‍♂️', '💳', '🛠️', '👨🏻‍🍳']} heading={'My Work'}/>
                            <p>
                                •	Built mobile apps for recipes, physical therapy, and time management.<br/>
                                •   Made a website storefront selling thousands of dollars annually.<br/>
                                •	Developed a content website with thousands of scholarly publications.<br/>
                                •	Optimized performance for websites, automated workflows, and enhanced day-to-day business operations.
                            </p>
                            <p>
                                <Hyperlink href={'/projects'}>
                                    Check out the projects I've worked on!
                                </Hyperlink> 
                            </p>
                        </div>
                        <div id="personal-values">
                            <EmojiRotator emojis={['👏🏼', '👨🏻‍🏫', '📝', '👨🏼‍💻']} heading={'Personal Values'}/>
                            <p>
                                I thrive in team-oriented environments and love mentoring others. My experience leading teams and volunteering has helped me make an impact 
                                in my community. I combine technical expertise, problem-solving skills, and business knowledge. I value knowldedge and have a drive for 
                                continuous learning. I value the user experience. It's a goal of mine to improve the user experience in every system I have the opporutnity to 
                                work with.
                            </p>
                        </div>
                        <div id="hobbies">
                            <EmojiRotator emojis={['🥾', '🏔️', '⛷️', '🏕️', '📸', '📚', '🎥', '🧩', '🛩️', '🥘']} heading={'Hobbies'}/>
                            <img 
                                src={Hike} 
                                className="h-[15em] rounded-xl float-right ml-4 mb-4" 
                                alt="iOS Playground AI image of Koleton"
                            />
                            <p>
                                When I'm not coding, you might find me summiting Utah mountains, canyoneering through southern Utah slot canyons, and backpacking in the backcountry. 
                                I love skiing both on the water and on fresh powder. I enjoy solving jigsaw puzzles, getting lost in fiction novels, and catching the latest films. 
                                Board games and card games are my favorite activities with friends and families. I love to travel and photograph my adventures as I explore new cultures 
                                and cuisines. I'm always up for a new adventure!
                            </p>
                        </div>
                        <div id="volunteer-work">
                            <EmojiRotator emojis={['💵', '💒', '🦅']} heading={'Volunteer Work'}/>
                            <h4 className="pt-0 text-black text-lg">Volunteer Tax Preparer</h4>
                            <p className="mb-0 text-midGray text-md">Volunteer Income Tax Assistance Program</p>
                            <p className="text-black text-sm">Helped low-income families secure tax refunds.</p>
                            <h4 className="text-black text-lg">Volunteer Representative</h4>
                            <p className="mb-0 text-midGray text-md">The Church of Jesus Christ of Latter-day Saints</p>
                            <p className="text-black text-sm">Mentored young adults, organized projects, and aided food pantries to improve community well-being.</p>
                            <h4 className="text-black text-lg">Eagle Scout</h4>
                            <p className="mb-0 text-midGray text-md">Boy Scouts of America</p>
                            <p className="text-black text-sm">Honed discipline, leadership, and community service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}