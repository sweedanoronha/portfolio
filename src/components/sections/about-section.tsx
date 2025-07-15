import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bug } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 dark:bg-card">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm an innovative and results-driven Full-Stack Developer with a strong focus on building fast, scalable, and user-friendly web applications. With a backend-first mindset, I specialize in Python and FastAPI for creating robust APIs, and I’m equally comfortable crafting modern UIs with React, Next.js, and Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I thrive at the intersection of backend architecture and frontend experience. From designing RESTful APIs and managing databases to implementing secure, production-ready systems with CI/CD pipelines using GitHub Actions and Docker — I handle the full development lifecycle with precision.
          </p>          
          <p className="mt-4 text-lg text-muted-foreground">
           Recently, I’ve been diving deep into AI-powered apps, experimenting with semantic search and document understanding to build smarter full-stack solutions. I’m passionate about writing clean, maintainable code and collaborating with cross-functional teams to ship end-to-end products in fast-paced environments.
           </p>
           <p className="mt-4 text-lg text-muted-foreground">
            Always curious and eager to learn, I enjoy tackling challenging projects that push my technical and creative boundaries.
           </p>
        </div>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-center font-headline">My Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-[150px] w-[150px] flex items-center justify-center text-primary">
                  <Bug className="h-24 w-24" />
                </div>
                <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground">
                  "You learn how to code not by writing the code, but by debugging the code."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
