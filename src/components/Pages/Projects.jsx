import ProjectCard from "../ProjectCard"
import BYUSArticle from "../../assets/byu-studies-article.png";
import BYUSAdmin from "../../assets/byu-studies-admin.png";
import BYUSArticles from "../../assets/byu-studies-articles.png";
import BYUSCheckout from "../../assets/byu-studies-checkout.png";
import BYUSHome from "../../assets/byu-studies-home.png";
import BYUSJournal from "../../assets/byu-studies-journal.png";
import BYUSOrder from "../../assets/byu-studies-order.png";
import BYUSStore from "../../assets/byu-studies-store.png";
import HalfordAdmin from "../../assets/halford-admin.png";
import HalfordAssignedWorkout from "../../assets/halford-assigned-workouts.png";
import HalfordAwards from "../../assets/halford-awards.png";
import HalfordExercise from "../../assets/halford-exercise.png";
import HalfordExercises from "../../assets/halford-exercises.png";
import HalfordHome from "../../assets/halford-home.png";
import HalfordLeaderboard from "../../assets/halford-leaderboard.png";
import HalfordProfile from "../../assets/halford-profile.png";
import HalfordProgress from "../../assets/halford-progress.png";
import HalfordWorkoutBuilder from "../../assets/halford-workout-builder.png";
import HalfordWorkoutComplete from "../../assets/halford-workout-complete.png";
import HalfordWorkoutStart from "../../assets/halford-workout-start.png";
import HalfordWorkoutPreview from "../../assets/halford-workout-preview.png";
import SizzleStirCategories from "../../assets/sizzle-stir-categories.png";
import SizzleStirEdit from "../../assets/sizzle-stir-edit.png";
import SizzleStirRecipe from "../../assets/sizzle-stir-recipe.png";
import SizzleStirWelcome from "../../assets/sizzle-stir-welcome.png";

const projectList = [
    {
        title: "BYU Studies Website",
        subtitle: "For three years, I worked with the BYU Studies website. There I rebuilt the non-functioning website into a fully-functioning React website. The new website is now deployed with a modern, industry-level cloud infrastructure on AWS. The improved design creates a more user-friendly interface for reading free digital content and purchasing print copies. This new website drastically improves the site's load time and helps centralize data storage.",
        bulletTitle: "This large system rebuild included:",
        bullets: [
            "Leading agile development practices to improve team efficiency and product quality.",
            "Architecting a scalable and maintainable cloud system.",
            "Generating $25k+ revenue and improved site load times by 96.7%",
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
            { image: BYUSAdmin, alt: "BYU Studies Admin", label: "Admin", caption: "Admin portal for content management." },
            { image: BYUSArticles, alt: "BYU Studies Admin Articles", label: "Admin Articles", caption: "Add, edit, delete articles for dynamic rendering on the website." },
            { image: BYUSOrder, alt: "BYU Studies Orders", label: "Orders", caption: "Easy management of orders for the office manager." }
        ]
    },
    {
        title: "Precision Therapy App",
        subtitle: "As part of my master's capstone project, my team and I partnered with Halford Hoops & Precision Therapy to create a gamified physical therapy platform. Patients struggled to complete home exercise programs delivered through papers or spreadsheets. We developed a mobile app and admin portal to streamline exercise assignment and increase patient motivation through points, streaks, progress tracking, and a leaderboard.",
        bulletTitle: "This physical therapy system included:",
        bullets: [
            "Collaborating with our client to bring their vision to life.",
            "Designing a user-centered experience based on user testing and iterative feedback.",
            "Building a React-based admin portal for therapists to create and assign personalized workouts.",
            "Gamifying the patient experience with points, streaks, achievements, confetti, and leaderboard.",
            "Migrating 900+ exercises into a structured database with integrated YouTube demo videos.",
            "Creating a search and filtering system for therapists to quickly build custom workout plans.",
            "Connecting mobile and web apps to a centralized AWS cloud infrastructure.",
        ],
        skills: "React, JavaScript, Typescript, React Native, Expo, AWS, SQL, UX/UI Design",
        link: "https://youtu.be/EId8ASel82Q",
        linkText: "Watch Demo",
        carousel: [
            {
                image: HalfordHome,
                alt: "Halford App Home",
                label: "Home",
                caption: "A progress path showing daily workouts for the week."
            },
            {
                image: HalfordWorkoutPreview,
                alt: "Workout Preview",
                label: "Workout Preview",
                caption: "Preview of all exercises for the day including sets, reps, and intensity."
            },
            {
                image: HalfordWorkoutStart,
                alt: "Workout Start Screen",
                label: "Workout Start",
                caption: "Rolling barbell animation showing total exercises in today's workout."
            },
            {
                image: HalfordExercise,
                alt: "Exercise Screen",
                label: "Exercise",
                caption: "YouTube demo, set breakdown, and navigation to the next exercise."
            },
            {
                image: HalfordWorkoutComplete,
                alt: "Workout Complete",
                label: "Workout Complete",
                caption: "Trophy animation and confetti for finishing the workout, showing streak and points earned."
            },
            {
                image: HalfordProgress,
                alt: "Progress Summary",
                label: "Progress",
                caption: "View daily completion progress and a weekly workout summary."
            },
            {
                image: HalfordLeaderboard,
                alt: "Leaderboard",
                label: "Leaderboard",
                caption: "Optional anonymized leaderboard with fun, generated display names."
            },
            {
                image: HalfordAwards,
                alt: "Awards & Badges",
                label: "Awards",
                caption: "Earned badges based on total workouts and milestones."
            },
            {
                image: HalfordProfile,
                alt: "Profile Page",
                label: "Profile",
                caption: "User summary with streak, total workouts, and editable profile data."
            },
            {
                image: HalfordAdmin,
                alt: "Admin Overview",
                label: "Admin",
                caption: "Therapist dashboard showing global stats on workouts, clients, and exercises."
            },
            {
                image: HalfordExercises,
                alt: "Exercise Library",
                label: "Exercises",
                caption: "Browse and manage all 900+ exercises with filtering, editing, and add/remove functionality."
            },
            {
                image: HalfordWorkoutBuilder,
                alt: "Workout Builder",
                label: "Workout Builder",
                caption: "Search and assemble custom workouts with detailed set and rep configuration."
            },
            {
                image: HalfordAssignedWorkout,
                alt: "Assigned Workouts Table",
                label: "Assigned Workouts",
                caption: "View all assigned workouts for a selected client with full workout breakdown."
            }
        ]
    },
    {
        title: "Sizzle & Stir Recipe App",
        subtitle: "I built this recipe app to give you the ability to store your favorite recipes in your pocket. At meal time pull out your phone and view your digital recipes. Search for recipes by ingredient, meal-type, or another category. This app has a focus on user-friendly design and intuitive navigation. I built this mobile app in Swift and it's ready to be added to the App Store.",
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
        title: "Other Development Projects",
        subtitle: "In addition to the featured projects above, I've built other projects across web, mobile, backend, and data-focused domains. From class assignments to experimental tools and real-world prototypes, these projects showcase my range as a full-stack developer. Feel free to browse my repositories for code samples, ideas, and ongoing development.",
        link: "https://github.com/koletonmurray",
        linkText: "Explore my GitHub",
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