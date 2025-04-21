import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';
import Link from 'next/link';

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps): React.ReactElement {
  const { t } = useTranslation('common');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-indigo-600 font-semibold">
              {t('hero.greeting')}
            </p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              {t('hero.name')}
            </h1>
            <p className="mt-2 text-xl text-gray-600">{t('hero.role')}</p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('about.title')}
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p>{t('about.description')}</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t('projects.title')}
            </h2>
            <Link href="/projects" className="text-indigo-600 hover:text-indigo-500">
              {t('projects.viewAll')} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('contact.title')}
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t('contact.send')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
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
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      projects,
    },
  };
}; 