import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Product List Reel Component',
    description: "A responsive, horizontal carousel to display car models, built with Next.js. Features server-side data fetching and navigation controls.",
    tags: ['Next.js', 'React', 'TypeScript', 'Testing'],
    imageUrl: '/images/project1.png',
    imageHint: 'car carousel',
    liveUrls: {
      desktop: 'https://github.com/sweedanoronha/cars-display/blob/main/descriptions/example-desktop.gif',
      mobile: 'https://github.com/sweedanoronha/cars-display/blob/main/descriptions/example-mobile.gif',
    },
    githubUrl: 'https://github.com/sweedanoronha/cars-display/',
    features: [
      'Data fetching using Next.js 14 App Router.',
      'Accessible arrow buttons for scrolling.',
      'Styled frames for each car with links to model-specific pages.',
      'Unit tests to ensure component reliability.'
    ],
  },
  {
    title: 'Internal Tools Platform (User & Admin)',
    description: 'A comprehensive platform for employees to find internal tools and for admins to manage them, featuring AI-powered search, feedback mechanisms, and analytics.',
    tags: ['Next.js', 'FastAPI', 'Vector DB', 'AI', 'Ongoing'],
    imageUrl: '/images/project2.png',
    imageHint: 'dashboard analytics',
    features: [
      'User App: Smart filtering, AI-powered chat assistant, and product comparison view.',
      'Admin App: Usage analytics, feedback tagging, and bulk upload capabilities.',
      'Request tracking dashboard for users to monitor their submissions.',
      'Content quality scoring and notification system for admins.',
    ],
  },
];

export function SideProjectsSection() {
  return (
    <section id="side-projects" className="bg-muted/50 dark:bg-card">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold">Side Projects</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-muted-foreground">
          Here are a few projects I've worked on, showcasing my skills from backend logic to frontend interfaces.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
