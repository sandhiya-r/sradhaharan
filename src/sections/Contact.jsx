import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from 'lucide-react'
import { Button } from '../components/Button'
import { useState } from 'react';
import emailjs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "sandhiya.rad@gmail.com",
        href: "mailto:sandhiya.rad@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (416) 909-3702",
        href: "tel:+14169093702"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Vancouver, BC | Toronto, ON",
        href: "#"
    }
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus ]= useState(
        {
            type: null, //either success or error
            message: ""
        }
    )
    const handleSubmit = async (e) => 
    {
        e.preventDefault(); //prevent default behaviour of refreshing the page
        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
           
            if (!serviceId || !templateId || !publicKey){
                throw new Error("EmailJS Config is missing. Please check environment variables.")
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey)

            setSubmitStatus({
                type: 'success',
                message: "Email sent successfully! I'll get back to you soon!"
            })
            setFormData({name: "", email: "", message:""})
        }
        catch (e){
            console.error("EmailJs error: ", e);
            setSubmitStatus({
                type:'error',
                message:
                    e.text || "Failed to send message. Please try again later."
            })
        } finally {
            setIsLoading(false);
        }
    }
    return(
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className= "absolute top-0 left-0 w-full h-full">
                  <div className = "absolute top-1/2 left-1/4 w-106 h-126 bg-emerald-100/20 rounded-full blur-3xl -translate-y-1/2"/>
                  <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                  {/*Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Open to <span className="tiny5-regular italic font-normal text-primary"> Opportunities.</span></h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200"> Please contact me if you are seeking to hire a software engineer or developer for your team or project. I would love to hear from you.</p>
                </div>
                {/*Contact Form */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border-primary/30 animate-fade-in animate-delay-200">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input id="name" type="text" required placeholder="Your name... " 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div> 
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                rows={5} required placeholder="Your message..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                            </div>

                            <Button className="w-full" type="submit" size="lg" disable={isLoading}>
                                {isLoading? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                     <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                     </>
                                )

                                }
                               
                            </Button>
                            
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
                        </form>
                    </div>
                    
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Open to Work</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to work on new projects and co-op or full-time job opportunities. Reach out to me on LinkedIn or through my contact to hear more about my experience and educational background!
              </p>
            </div>
          </div>
                </div>
            </div>

            
        </section>
    )
}