import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import UniversityCard from '@/components/UniversityCard';
import UniversityModal from '@/components/UniversityModal';
import TestimonialCard from '@/components/TestimonialCard';
import { universities } from '@/data/universities';
import { University } from '@/lib/types';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle university selection and modal open
  const handleUniversitySelect = (university: University) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

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
      <section className="bg-gradient-to-b from-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-10">
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl sm:tracking-tight lg:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                  {t('home.hero.title')}
                </span>
              </h1>
              <p className="mt-5 text-xl text-muted-foreground">
                {t('home.hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
                <Button asChild size="lg" className="mb-3 sm:mb-0 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800">
                  <Link href="/login">
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
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg shadow-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Your Educational Journey</h3>
                  <p className="text-muted-foreground">Discover universities, TVET colleges, and career paths tailored for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {t('home.features.title')}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-card border border-purple-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4">
                  <i className="fas fa-user-graduate text-2xl"></i>
                </div>
                <h3 className="text-xl font-medium text-foreground">{t('home.features.feature1.title')}</h3>
                <p className="mt-3 text-base text-muted-foreground">{t('home.features.feature1.description')}</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-card border border-purple-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4">
                  <i className="fas fa-brain text-2xl"></i>
                </div>
                <h3 className="text-xl font-medium text-foreground">{t('home.features.feature2.title')}</h3>
                <p className="mt-3 text-base text-muted-foreground">{t('home.features.feature2.description')}</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-card border border-purple-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4">
                  <i className="fas fa-university text-2xl"></i>
                </div>
                <h3 className="text-xl font-medium text-foreground">{t('home.features.feature3.title')}</h3>
                <p className="mt-3 text-base text-muted-foreground">{t('home.features.feature3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-12 bg-gradient-to-b from-purple-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600">
                {t('home.universities.title')}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              {t('home.universities.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredUniversities.map(university => (
              <UniversityCard 
                key={university.id} 
                university={university} 
                onClick={() => handleUniversitySelect(university)}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="secondary" className="items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700">
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
      <section className="py-12 sm:py-16 bg-gradient-to-b from-teal-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                {t('home.testimonials.title')}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
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
      <section className="py-12 sm:py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('home.cta.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-100">
              {t('home.cta.subtitle')}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="secondary" size="lg" className="bg-card text-indigo-600 hover:bg-indigo-50">
                <Link href="/profile">
                  {t('home.cta.button')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* University Detail Modal */}
      {selectedUniversity && (
        <UniversityModal
          university={selectedUniversity}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Home;