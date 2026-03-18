import { Button } from '../components/Button.jsx'
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"}
]

export const Navbar = () => {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll );

        return () => window.removeEventListener("scroll", handleScroll) //prevent memory leaks
    }, [])
    return(
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled? "glass-strong py-3" : " bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    SR<span className="text-primary">.</span>
                </a>
                {/*Desktop navigation*/}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index)=> (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                        ))}
                    </div>

                </div>
                {/*CTA Button*/}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

               <button className="md:hidden p-2 text-foreground cursor-pointer" onClick = {() => setisMobileMenuOpen((current)=> !current)}>
                        {isMobileMenuOpen? <X size={24}/>: <Menu size={24}/>}
               </button>
            </nav>
            {/*Mobile Menu*/}
            {isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
                <div>
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index)=> (
                            <a href={link.href} key={index} onClick={() => setisMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-muted-foreground py-2">{link.label}</a>
                        ))}
                        <Button onClick={()=> setisMobileMenuOpen(false)} size="sm">Contact Me</Button>
                    </div>
                </div>
            </div>}
            
        </header>
    )
}