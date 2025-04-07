import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import UniversityCard from '@/components/UniversityCard';
import TestimonialCard from '@/components/TestimonialCard';
import { universities } from '@/data/universities';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  // Featured universities (top 3)
  const featuredUniversities = universities.slice(0, 3);
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Thabo Mokoena',
      role: 'Engineering Student, UCT',
      text: t('testimonials.thabo'),
      initials: 'TM',
      rating: 5
    },
    {
      id: 2,
      name: 'Lerato Ndlovu',
      role: 'Law Student, Wits',
      text: t('testimonials.lerato'),
      initials: 'LN',
      rating: 4.5
    },
    {
      id: 3,
      name: 'James Smith',
      role: 'Business Student, Stellenbosch',
      text: t('testimonials.james'),
      initials: 'JS',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-primary-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-10">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                {t('home.hero.title')}
              </h1>
              <p className="mt-5 text-xl text-gray-600">
                {t('home.hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
                <Button asChild size="lg" className="mb-3 sm:mb-0">
                  <Link href="/profile">
                    {t('home.hero.startJourney')}
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/about">
                    {t('home.hero.learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <img 
                className="h-auto w-full object-cover rounded-lg shadow-xl" 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t('home.hero.imageAlt')} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('home.features.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <i className="fas fa-user-graduate text-2xl"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-900">{t('home.features.feature1.title')}</h3>
                <p className="mt-3 text-base text-gray-500">{t('home.features.feature1.description')}</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <i className="fas fa-brain text-2xl"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-900">{t('home.features.feature2.title')}</h3>
                <p className="mt-3 text-base text-gray-500">{t('home.features.feature2.description')}</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <i className="fas fa-university text-2xl"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-900">{t('home.features.feature3.title')}</h3>
                <p className="mt-3 text-base text-gray-500">{t('home.features.feature3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('home.universities.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {t('home.universities.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredUniversities.map(university => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="secondary" className="items-center">
              <Link href="/universities">
                {t('home.universities.viewAll')}
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('home.testimonials.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-700 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('home.cta.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-100">
              {t('home.cta.subtitle')}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/profile">
                  {t('home.cta.button')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
