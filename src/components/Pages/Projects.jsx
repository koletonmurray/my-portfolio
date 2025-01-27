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
        subtitle: "For three years, I worked with the BYU Studies website. There I rebuilt the non-functioning website using React. The new website is now deployed on a modern, industry-level cloud infrastructure on AWS. The improved design creates a more user-friendly interface for reading free digital content and purchasing print copies. This new website drastically improves the site's load time and helps centralize data storage.",
        bulletTitle: "This large system rebuild included:",
        bullets: [
            "Implementing agile development practices to improve team efficiency and product quality.",
            "Architecting a scalable and maintainable cloud system.",
            "Upgrading the database to improve data integrity and easier management.",
            "Designing a content delivery website for thousands of articles.",
            "Creating a storefront and transaction process.",
            "Complying with PCI standards and secure payment processing.",
            "Building an admin dashboard for easy content management.",
            "Implementing a responsive design for mobile and desktop users."
        ],
        skills: "React, AWS, JavaScript, Python, SQL, HTML, Tailwind CSS, Agile Development, Scrum, Project Leadership, UX Design",
        link: "https://byustudies.byu.edu",
        linkText: "View Website",
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
        subtitle: "This mobile app is built in Swift and ready to be added to the App Store. This app gives users the ability to keep their favorite recipes in their pocket. At meal time pull out your phone to view your digital recipes. Search for recipes by ingredient, meal-type, or another category. This app has a focus on user-friendly design and intuitive navigation.",
        skills: "Swift, UX Design, Mobile Development",
        link: "https://github.com/koletonmurray/RecipeCatalog",
        carousel: [
            { image: SizzleStirWelcome, alt: "Sizzle & Stir Welcome Screen", label: "Welcome Screen", caption: "Users are greeted with a simple and clean welcome screen." },
            { image: SizzleStirCategories, alt: "Sizzle & Stir Categories", label: "Categories", caption: "Recipes are organized by category for easy browsing." },
            { image: SizzleStirRecipe, alt: "Sizzle & Stir Recipe", label: "Recipe", caption: "Detailed recipe view with ingredients and instructions." },
            { image: SizzleStirEdit, alt: "Sizzle & Stir Edit Recipe", label: "Edit Recipe", caption: "Users can add, edit, or delete recipes with ease." }
        ]
    }
]

export default function Projects() {
    return (
        <>
            <div className="px-10 sm:px-20 py-10 text-midBlue max-w-[1000px] mx-auto">
                <h1 className="text-center pb-7">Featured Projects</h1>
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