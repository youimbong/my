import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  const { t } = useTranslation('common');
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        {project.image && (
          <Image 
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          {project.link && (
            <Link 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t('projects.viewProject')} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 