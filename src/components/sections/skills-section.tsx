import { Globe, Server, Database, TerminalSquare, Briefcase, Laptop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Laptop className="h-8 w-8 text-primary" />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C/C++'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ['React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'PrimeReact', 'AntD'],
  },
  {
    title: 'Databases',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ['MySQL', 'SQL-based queries', 'Data Extraction'],
  },
  {
    title: 'Tools & DevOps',
    icon: <TerminalSquare className="h-8 w-8 text-primary" />,
    skills: ['Docker', 'Git', 'CI/CD (YAML)', 'Azure DevOps', 'JEST', 'Pytest'],
  },
  {
    title: 'Project Management',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    skills: ['Agile Methodologies', 'Jira', 'Cross-team Collaboration'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex justify-center mb-4">{category.icon}</div>
                <CardTitle className="font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
