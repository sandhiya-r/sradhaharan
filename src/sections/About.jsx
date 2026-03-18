
import { Code2 , Users} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable and well-tested code."
    },
    {
        icon: Code2,
        title: "Project Experience",
        description: "Built and deployed full-stack web and mobile applications end to end."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Collaborated in Agile teams using Git workflows, code reviews, and sprint planning."
    },
    {
        icon: Code2,
        title: "Technical Foundation",
        description: "Grounded in data structures, algorithms, computer architecture, and networking"
    },
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Thoughtful design,
                            <span className="tiny5-regular italic font-normal text-primary"> for every detail.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a Master of Computer Engineering student at the University of British Columbia, specializing in Software Engineering. I am passionate about building reliable, scalable software systems that solve real-world problems, with a particular interest in healthcare, cloud infrastructure, and data-driven applications. My background in Biomedical Engineering has shaped my motivation to use technology to improve patient care and develop systems that have meaningful impact.
                            </p>
                            <p>
                                I have experience in full-stack development across both web and mobile platforms. I have built backend systems using Node.js, TypeScript, and REST APIs, deployed applications using Docker and AWS, and worked with databases such as MongoDB and SQLite. On the frontend, I have developed applications using React, React Native, and modern web technologies like HTML, CSS, and JavaScript. I enjoy designing systems that are clean, maintainable, and well-tested.
                            </p>
                            <p>
                                Through my projects, I have worked on real-time and data-driven applications, including a workplace health monitoring system and a full-stack Android application with live features such as synchronized group interactions. I have also explored reinforcement learning in Java by building an autonomous robot in Robocode, applying object-oriented design principles to structure complex system behavior.
                            </p>
                            <p>
                                I enjoy working in collaborative, Agile environments where I can contribute to meaningful projects, learn from others, and continuously improve my skills. I am always eager to explore new technologies and take on challenging problems that create real impact.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                I enjoy creative thinking, design and problem-solving. As an Electrical and Biomedical engineering undergraduate student, I gained experience with engineering design and hardware. I bring a perspective to software development that reflects my unique background.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}