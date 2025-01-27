import ProjectCard from "../ProjectCard"
import BYUSArticle from "../../assets/byu-studies-article.png";
import BYUSCheckout from "../../assets/byu-studies-checkout.png";
import BYUSHome from "../../assets/byu-studies-home.png";
import BYUSJournal from "../../assets/byu-studies-journal.png";
import BYUSStore from "../../assets/byu-studies-store.png";
import SizzleStirCategories from "../../assets/sizzle-stir-categories.png";
import SizzleStirEdit from "../../assets/sizzle-stir-edit.png";
import SizzleStirRecipe from "../../assets/sizzle-stir-recipe.png";
import SizzleStirWelcome from "../../assets/sizzle-stir-welcome.png";

const projectList = [
    {
        title: "BYU Studies Website",
        subtitle: "A React-based website with an optimized AWS cloud architecture, improving load time and centralizing data storage.",
        skills: "React, AWS, Python, SQL, UX Design",
        link: "https://byustudies.byu.edu",
        carousel: [
            { image: BYUSHome, alt: "BYU Studies Home Page", label: "Home Page", caption: "A clean, redesigned landing page for users to navigate the site." },
            { image: BYUSJournal, alt: "BYU Studies Journal", label: "Journal", caption: "Digital archive of past issues of the journal." },
            { image: BYUSArticle, alt: "BYU Studies Article", label: "Article", caption: "Read or listen to content online for free." },
            { image: BYUSStore, alt: "BYU Studies Store", label: "Store", caption: "Users can purchase books and subscriptions." },
            { image: BYUSCheckout, alt: "BYU Studies Checkout", label: "Checkout", caption: "Seamless checkout process for users to finalize their purchases." },
        ]
    },
    {
        title: "Sizzle & Stir Recipe App",
        subtitle: "A mobile app for storing digital recipes, with a focus on user-friendly design and intuitive navigation.",
        skills: "Swift, UX Design, Mobile Development",
        link: "https://github.com/koletonmurray/RecipeCatalog",
        carousel: [
            { image: SizzleStirWelcome, alt: "Sizzle & Stir Welcome Screen", label: "Welcome Screen", caption: "Users are greeted with a simple and clean welcome screen." },
            { image: SizzleStirCategories, alt: "Sizzle & Stir Categories", label: "Categories", caption: "Recipes are organized by category for easy browsing." },
            { image: SizzleStirRecipe, alt: "Sizzle & Stir Recipe", label: "Recipe", caption: "Detailed recipe view with ingredients and instructions." },
            { image: SizzleStirEdit, alt: "Sizzle & Stir Edit Recipe", label: "Edit Recipe", caption: "Users can add, edit, or delete recipes with ease." }
        ]
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