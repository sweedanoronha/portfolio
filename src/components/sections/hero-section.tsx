'use client';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';

type PersonalProfileProps = {
  introduction: string;
  isIntroductionLoading: boolean;
};

export function HeroSection({ introduction, isIntroductionLoading }: PersonalProfileProps) {
  return (
    <section id="hello" className="container py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:col-span-1">
          <Image
            src="/images/sweeda_pic.jpg"
            alt="Developer Headshot"
            width={300}
            height={300}
            className="rounded-full object-cover aspect-square shadow-lg"
            data-ai-hint="developer portrait"
            priority
          />
        </div>
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
            Sweeda Noronha
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary">
            Full-Stack Developer
          </h2>
          {isIntroductionLoading ? (
            <div className="space-y-2 max-w-2xl mx-auto md:mx-0">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : (
            <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 min-h-[72px]">
              {introduction}
            </p>
          )}
          <div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="https://github.com/sweedanoronha" target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="https://www.linkedin.com/in/sweeda-noronha-742439139/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
