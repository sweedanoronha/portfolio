import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  liveUrls?: {
    mobile: string;
    desktop: string;
  };
  githubUrl?: string;
  features: string[];
};

export function ProjectCard({ title, description, tags, imageUrl, imageHint, liveUrls, githubUrl, features }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
            <Image src={imageUrl} alt={title} fill className="object-cover" data-ai-hint={imageHint} />
        </div>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-code">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {liveUrls && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href={liveUrls.desktop} target="_blank">
                  <Monitor className="mr-2 h-4 w-4" />
                  Desktop View
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={liveUrls.mobile} target="_blank">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile View
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {githubUrl && githubUrl !== '#' && (
          <Button asChild>
            <Link href={githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
