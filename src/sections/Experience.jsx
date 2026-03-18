const experiences = [
     {
        period: "August 2024 - September 2025",
        role: "Lead Software Engineering Instructor",
        company: "Code Ninjas",
        description: "Instructed 30+ students on software development using JavaScript, Unity and C#. Developed curriculum for computer vision and AI projects using IBM Machine Learning for Kids and Google Teachable machine",
        technologies: ["Javascript", "Unity/C#", "Game Development"],
        current: true
    },
    {
        period: "May 2021 - August 2022",
        role: "Signal Integrity Engineer PEY",
        company: "Intel Corporation",
        description: "Used industry-standard electromagnetic simulation tools to debug IBIS-AMI models and wrote scripts to automate workflows.",
        technologies: ["Python", "Linux", "Automation"],
        current: false
    },
   
    {
        period: "March 2019 - August 2019",
        role: "Software Engineering Research Assistant",
        company: "McMaster University",
        description: "Developed an Android application to collect and integrate data from wearable and phone sensors by implementing Bluetooth LE detection, Wi-Fi scanning, and GPS capabilities ",
        technologies: ["Java", "Android Studio", "APIs"],
        current: false
    },
    
]
export const Experience = () => {
    return(
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className = "absolute top-1/2 left-1/4 w-106 h-126 bg-emerald-100/20 rounded-full blur-3xl -translate-y-1/2"/>
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200"
                >A timeline of some of my internship and professional work experiences spanning my undergraduate and current graduate journey.</p>
                </div>
                
                {/*Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                    {/*Experience items*/}
                    <div className="space-y-12">
                        {experiences.map((experiences,idx)=>(
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                          style={{animationDelay: `${(idx + 1) * 150}ms}`}}>

                                {/*Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {experiences.current && 
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                                </div>
                                {/*Content */}
                                <div className={`pl-8 md:pl-0 ${idx%2===0?"md:pr-16 md:text-right": "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{experiences.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{experiences.role}</h3>
                                        <p className="text-muted-foreground">{experiences.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{experiences.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0? "md:justify-right" : ""}`}>{experiences.technologies.map((tech,techIdx)=>(
                                            <span 
                                            key = {techIdx}
                                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                        ))}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}