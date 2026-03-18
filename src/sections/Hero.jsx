import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../components/Model.jsx'
import { Button } from '../components/Button.jsx'
import { ArrowBigRight, ChevronDown, Download } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx'

const skills = [
    "Java",
    "C#/.NET",
    "Python",
    "Machine Learning",
    "React",
    "MongoDB",
    "TypeScript",
    "Git",
    "Docker",
    "AWS",
    "Node.js",
    "React Native",
    "Kotlin",
    "Android Studio",
    "Jetpack Compose"
]
export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/mint-hero-background.png"
                    alt="hero image"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            {/* Content — above canvas */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left column - text */}
                    <div className="space-y-8">

                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-primary uppercase">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineering Student
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                                Engineering <span className="text-primary/80 glow-text font-serif">solutions</span> that solve <span className="font-serif text-primary/80 italic"> real </span> problems
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                                Hi, I'm Sandhiya Radhaharan. I am a Masters student at UBC studying Computer Engineering with experience building frontend and backend software systems for mobile and web applications.
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                LinkedIn <ArrowBigRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton href="/resume.pdf" download>
                                        <Download className="w-5 h-5"  />
                                        Download Resume
                            </AnimatedBorderButton>
                        </div>

                    </div>

                     {/* Right column - 3D canvas, only occupies this column */}
                        <div className="hidden lg:block relative h-150">
                            <Canvas camera={{ position: [7, 3, 5], fov: 30 }}>
                                <Suspense fallback={null}>
                                    <ambientLight intensity={1.5} />
                                    <directionalLight position={[5, 5, 5]} intensity={1} />
                                    <group scale={0.05}>
                                        <Model />
                                    </group>
                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        enableRotate={true}
                                        
                                    />
                                </Suspense>
                            </Canvas>
                        </div>

                </div>
                {/*Skills Section*/}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Languages, Technologies and Frameworks I've Used: </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx)=> (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>

                        ))}</div>
                    </div>
                </div>
                   {/*Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
                    <a
                    href = "#about"
                    className = "group flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-xs uppercase tracking-wider group-hover:text-primary transition-colors">Scroll</span>
                        <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary transition-colors"></ChevronDown>
                    </a>
            </div>
            </div>
       
        </section>
        
    )
}