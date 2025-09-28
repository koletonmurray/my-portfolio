import EmojiRotator from "../EmojiRotator";
import Hyperlink from "../Hyperlink"
import ImageDisplay from "../ImageDisplay";
import Koleton from "../../assets/koleton-grad.jpg";
import Nebo from "../../assets/koleton-nebo.png";
import Timp from "../../assets/koleton-timp.png";

export default function About () {
    return (
        <>
            <div className="px-10 sm:px-20 pb-10 sm:py-10 text-midBlue max-w-[1000px] mx-auto">
                <div className="text-left px-0 sm:px-20 pt-5 text-black">
                    <div id="my-story" className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                        <div className="order-2 sm:order-1 flex-1">
                            <EmojiRotator emojis={['📊', '👨🏼‍💻', '🖥️', '🎓']} heading={'My Story'}/>
                            <p>
                                I started my academic journey exploring a variety of fields—accounting, finance, engineering, computer science, and psychology. None of them felt quite right. After 3 years of uncertainty, I took an Introduction to Information Systems course, and everything clicked. It offered the perfect blend of business, technology, and data. It came naturally to me, and I loved it. That moment set the course for both my academic and professional path.
                            </p>
                            <p>
                                Since then, I've earned both my bachelor's and master's degrees in Information Systems Management from BYU. There I studied mobile and web development, data analytics, machine learning, data engineering, and cloud architecture. More importantly, I applied those skills in real-world settings. I worked on various projects building technical solutions to people's problems and have refined my technical and leadership skills. My experience has taught me how to bridge the gap between technical solutions and real user needs.
                            </p>
                        </div>
                        <ImageDisplay
                            image={Nebo}
                            alt="Koleton hiking Mt. Nebo"
                        />
                    </div>
                    <div id="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li className="mb-7 sm:mb-2"><b className="text-darkBlue">Proficient:</b> JavaScript, TypeScript, React, Python, SQL, AWS, HTML, CSS, R, Excel</li>
                            <li><b className="text-darkBlue">Experienced:</b> Jest, Storybook, Swift, Node, Django, ASP.net, C#, Tableau</li>
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
                    <div id="my-work" className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                        <div className="order-2 sm:order-1 flex-1">
                            <EmojiRotator emojis={['🤖', '📱', '💻', '🏃🏼‍♂️', '💳', '🛠️', '👨🏻‍🍳']} heading={'My Work'}/>
                            <p>
                                •	Engineered UI elements for AI-powered customer insights.<br/>
                                •	Developed a website storefront selling tens of thousands of dollars annually.<br/>
                                •	Rebuilt an efficient and modern content website with thousands of scholarly publications.<br/>
                                •	Optimized performance for websites, automated workflows, and enhanced day-to-day business operations.<br/>
                                •	Built mobile apps for recipes, physical therapy, and time management.
                            </p>
                            <p>
                                <Hyperlink href={'/projects'}>
                                    Check out the projects I've worked on!
                                </Hyperlink> 
                            </p>
                        </div>
                        <ImageDisplay
                            image={Koleton}
                            alt="Portrait photo of Koleton"
                        />
                    </div>
                    <div id="personal-values">
                        <EmojiRotator emojis={['👥', '🌱 ', '👏🏼', '🧠', '📝', '👨🏼‍💻']} heading={'Personal Values'}/>
                        <p>
                           I am a strong advocate for respect and understanding and believe that diverse people and experiences make the best teams. 
                           I am passionate about mentorship. I’ve had incredible individuals support me along my journey, and I love opportunities 
                           to help others in theirs. My experience leading teams and volunteering has allowed me to make a positive impact in my 
                           community. I’m always striving to learn and expand my understanding. I enjoy blending my technical expertise, problem-solving, 
                           and business insight to create meaningful solutions. I believe in giving users a great experience. 
                        </p>
                    </div>
                    <div id="hobbies" className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                        <div className="order-2 sm:order-1 flex-1">
                            <EmojiRotator emojis={['🚵🏻‍♂️', '🥾', '🏔️', '⛷️', '🏕️', '📸', '🏃🏻‍♂️', '🎮', '📚', '🎥', '🧩', '🛩️', '🥘']} heading={'Hobbies'}/>
                            <p>
                                When I'm not coding, you might find me mountain biking, hiking Utah's peaks, canyoneering through southern Utah slot canyons, and backpacking in the backcountry. 
                                I enjoy skiing both on water and fresh powder. I love exploring the outdoors and capturing the beauty of nature through photography.
                            </p>
                            <p>
                                I enjoy solving jigsaw puzzles, playing video games, getting lost in fiction novels, and catching the latest films and TV shows. 
                                When I'm with family and friends, we play plenty of board games and card games. I love to travel and capture photos of my adventures.
                                I enjoy exploring new cultures and cuisines. I'm always up for a new adventure!
                            </p>
                        </div>
                        <ImageDisplay
                            image={Timp}
                            alt="Koleton hiking Mt. Timpanogos"
                        />
                    </div>
                    <div id="volunteer-work">
                        <EmojiRotator emojis={['💵', '💒', '🦅']} heading={'Volunteer Work'}/>
                        <h4 className="pt-0 text-black text-lg">Volunteer Tax Preparer</h4>
                        <p className="mb-0 text-midGray text-md">Volunteer Income Tax Assistance Program</p>
                        <p className="text-black text-sm">Helped low-income families secure tax refunds.</p>
                        <h4 className="text-black text-lg">Volunteer Representative</h4>
                        <p className="mb-0 text-midGray text-md">The Church of Jesus Christ of Latter-day Saints</p>
                        <p className="text-black text-sm">Mentored young adults, organized projects, taught English to immigrants, and aided food pantries to improve community well-being.</p>
                        <h4 className="text-black text-lg">Eagle Scout</h4>
                        <p className="mb-0 text-midGray text-md">Boy Scouts of America</p>
                        <p className="text-black text-sm">Honed discipline, leadership, and community service.</p>
                    </div>
                </div>
            </div>
        </>
    )
}