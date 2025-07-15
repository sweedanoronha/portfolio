import Link from 'next/link';
import { Github, Linkedin, Code } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Porfolio</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</Link>
            <Link href="#side-projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Side Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/sweedanoronha" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/sweeda-noronha-742439139/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
