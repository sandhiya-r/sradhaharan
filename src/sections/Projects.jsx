import { Github, ArrowUpRight } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx'
const projects = [
    {
        title: "Feast Friends - Full-Stack Android App",
        description: "Full-stack app built using Kotlin and Jetpack Compose with a Node.js backend",
        image: "/projects/project1.png",
        tags: ["Node.js", "Kotlin", "TypeScript", "MongoDB", "Docker", "AWS EC2", "Jetpack Compose", "REST APIs", "CI/CD", "Git", "Jest", "Supertest"],
        github: "https://github.com/feastfriends/321-project/tree/main",
    },
    {
        title: "Workplace Health Monitoring - Full-stack C#/ASP.NET Web App",
        description: "Web Dashboard for processing and visualization of IoT Sensor Data",
        image: "/projects/project2.png.png",
        tags: ["HTML", "Javascript", "C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "Tailwind CSS", "Alpine.js", "REST APIs", "Git"],
        github: "#"
    },
    {
        title: "CPRobot - Flutter App for Remote CPR Training",
        description: "Cross-platform mobile application that connects to Smart CPR manikin for feedback and visualization of CPR compressions during training.",
        image: "/projects/project3.png",
        tags: ["C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "Tailwind CSS", "Alpine.js", "JavaScript", "REST APIs", "Git"],
        github: "https://github.com/sandhiya-r/CPRApplication"
    },
]
export const Projects = () => {
    return(
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
            {/*Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Diverse projects that <span className="tiny5-regular italic font-normal text-primary"> span technologies.</span></h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200"> Here are a couple of projects I've worked on most recently, featuring both academic and personal project applications. </p>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((projects,idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                                    style = {{ animationDelay: `${(idx + 1) * 100}ms` }}>
                        <div className="relative overflow-hidden aspect-video"> {/*Image */}
                            <img 
                                src={projects.image} 
                                alt={projects.title}
                                className ="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/*Gradient that goes around the image */}
                            <div 
                                className="absolute inset-0 
                                           bg-linear-to-t from-card via-card/50
                                           to-transparent opacity-60"
                            />
                            {/*Overlay links - takes you to github */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={projects.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                         {/*Project Content */}
                         <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{projects.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{projects.description}</p>
                            <div className="flex flex-wrap gap-2 ">{projects.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}</div>

                           
                        </div>
                    </div>
                ))}
            </div>
             {/*View all Projects Call to Action */}
                            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                                <AnimatedBorderButton>
                                    View Other Projects on Github
                                    <ArrowUpRight className="w-5 h-5"/>
                                </AnimatedBorderButton>
                            </div>
            </div>
        </section>
    )
}