import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { Project } from '../../types';

interface ProjectsPageProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsPageProps): React.ReactElement {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('projects.title')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // This would typically come from an API or CMS
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A description of project 1',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A description of project 2',
      image: '/images/project2.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A description of project 3',
      image: '/images/project3.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      link: 'https://example.com/project3',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A description of project 4',
      image: '/images/project4.jpg',
      technologies: ['React Native', 'GraphQL', 'AWS'],
      link: 'https://example.com/project4',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'A description of project 5',
      image: '/images/project5.jpg',
      technologies: ['Angular', 'TypeScript', 'MySQL'],
      link: 'https://example.com/project5',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'A description of project 6',
      image: '/images/project6.jpg',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://example.com/project6',
    },
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      projects,
    },
  };
}; 