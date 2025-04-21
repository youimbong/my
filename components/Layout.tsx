import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  const router = useRouter();
  const { t } = useTranslation('common');
  
  const changeLanguage = (locale: string): void => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-indigo-600">
                  {t('title')}
                </Link>
              </div>
              <nav className="ml-6 flex space-x-8">
                <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                  {t('home')}
                </Link>
                <Link href="/#about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                  {t('about')}
                </Link>
                <Link href="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                  {t('projects.title')}
                </Link>
                <Link href="/#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                  {t('contact')}
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 text-sm rounded ${router.locale === 'en' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ko')} 
                className={`px-2 py-1 text-sm rounded ${router.locale === 'ko' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}
              >
                KO
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p>© {new Date().getFullYear()} - {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 