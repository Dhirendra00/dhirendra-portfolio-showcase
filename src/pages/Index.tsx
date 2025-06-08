import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code, Database, Globe, Server } from 'lucide-react';
import { toast } from "sonner";
import { sendEmail } from '@/lib/emailjs';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again or contact me directly.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: 'React/Next.js', icon: Code, level: 90 },
    { name: 'Node.js', icon: Server, level: 85 },
    { name: 'MongoDB', icon: Database, level: 80 },
    { name: 'TypeScript', icon: Code, level: 85 },
    { name: 'Tailwind CSS', icon: Globe, level: 90 },
    { name: 'Express.js', icon: Server, level: 80 }
  ];

  const projects = [
    {
      title: 'Redmud Coffee Website',
      description: 'A modern e-commerce website for a coffee shop featuring online ordering, menu display, and customer reviews.',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SARAD Organization Portal',
      description: 'A comprehensive management portal for NGO operations including project tracking, volunteer management, and reporting.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-portfolio bg-clip-text text-transparent">
              Dhirendra Baduwal
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-portfolio bg-clip-text text-transparent mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Hi! I Am<br />Dhirendra Dev
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Full-Stack Developer and MSc IT graduate creating dynamic web solutions with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-portfolio-coral hover:bg-portfolio-coral-dark text-white px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button variant="outline" className="border-portfolio-coral text-portfolio-coral hover:bg-portfolio-coral hover:text-white px-8 py-6 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>
          
          {/* Floating badges */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-1/4 animate-float">
              <Badge className="bg-portfolio-purple text-white px-4 py-2">Best Design Awards</Badge>
            </div>
            <div className="absolute top-8 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
              <Badge className="bg-green-500 text-white px-4 py-2">UI/UX Expert</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Full-Stack Developer with an MSc in Information Technology. 
                I specialize in creating modern, responsive web applications using cutting-edge technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With hands-on experience in React, Node.js, and cloud technologies, I bring ideas to life 
                through clean code and exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold text-portfolio-coral">Education</h4>
                  <p className="text-muted-foreground">MSc Information Technology</p>
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-coral">Experience</h4>
                  <p className="text-muted-foreground">2+ Years Development</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-portfolio-coral" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-portfolio h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my featured projects that showcase my technical skills and problem-solving abilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                      <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-portfolio-coral" />
                  <span>dhirendra.baduwal@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-portfolio-coral" />
                  <span>+44 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-portfolio-coral" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button size="icon" variant="outline" className="hover:bg-portfolio-coral hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-portfolio-coral hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-coral hover:bg-portfolio-coral-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Dhirendra Baduwal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
