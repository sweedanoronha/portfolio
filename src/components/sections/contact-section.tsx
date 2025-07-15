import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
    return (
        <section id="contact" className="bg-muted/50 dark:bg-card">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-headline text-3xl font-bold">Get In Touch</h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                         <Button variant="outline" size="lg" asChild>
                            <Link href="mailto:sweeda.noronha20@gmail.com">
                                <Mail className="mr-2 h-5 w-5" /> Email Me
                            </Link>
                        </Button>
                        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                           <a
                                href="/resume.pdf"
                                download="Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-600 hover:underline"
                                >
                                <Download className="mr-2 h-5 w-5" />
                                Download Resume
                                </a>
                        </Button>
                    </div>
                   
                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
                            <Link href="https://github.com/sweedanoronha" target="_blank" aria-label="GitHub">
                                <Github className="h-6 w-6" />
                            </Link>
                        </Button>
                         <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
                            <Link href="https://www.linkedin.com/in/sweeda-noronha-742439139/" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
