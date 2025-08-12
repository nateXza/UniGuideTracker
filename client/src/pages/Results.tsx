import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ProgressSteps from '@/components/ProgressSteps';
import ResultsCard from '@/components/ResultsCard';
import { useTranslation } from '@/hooks/useTranslation';
import { useProfile } from '@/context/ProfileContext';
import { getUniversityMatches, calculateCareerMatches } from '@/lib/utils/matching';

const Results: React.FC = () => {
  const { t } = useTranslation();
  const { profile, assessment, updateResults } = useProfile();
  
  // Calculate results when component mounts
  useEffect(() => {
    if (profile && assessment.answers) {
      const universityMatches = getUniversityMatches(profile, assessment.answers);
      const careerMatches = calculateCareerMatches(assessment.answers);
      
      updateResults({
        universityMatches,
        careerMatches,
        matchDate: new Date().toISOString()
      });
    }
  }, [profile, assessment, updateResults]);

  const { results } = useProfile();
  const topUniversities = results.universityMatches?.slice(0, 3) || [];
  
  const personalityTraits = results.careerMatches?.personalityTraits || [
    { trait: 'Investigative', score: 85 },
    { trait: 'Realistic', score: 72 },
    { trait: 'Conventional', score: 63 }
  ];
  
  const recommendedCareers = results.careerMatches?.recommendedCareers || [];

  // Check if we have complete information to show results
  const hasProfile = Object.keys(profile).length > 0;
  const hasResults = Object.keys(results).length > 0;
  const hasCompleteData = hasProfile && hasResults;

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            {t('results.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            {t('results.subtitle')}
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps currentStep={3} />

        <div className="mt-12 bg-card shadow-xl rounded-lg overflow-hidden">
          {hasCompleteData ? (
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-foreground">
                    {profile.firstName ? `${profile.firstName}'s University Matches` : t('results.universityMatches')}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    {t('results.matchDescription')}
                  </p>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {t('results.matchComplete')}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="border-t border-gray-200 pt-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-muted-foreground">{t('results.matchDate')}</dt>
                      <dd className="mt-1 text-sm text-foreground">
                        {results.matchDate ? new Date(results.matchDate).toLocaleDateString() : new Date().toLocaleDateString()}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-muted-foreground">{t('results.preferredField')}</dt>
                      <dd className="mt-1 text-sm text-foreground">{profile.fieldOfStudy || t('results.notSpecified')}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-muted-foreground">{t('results.averageMark')}</dt>
                      <dd className="mt-1 text-sm text-foreground">{profile.averageMark ? `${profile.averageMark}%` : t('results.notSpecified')}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-muted-foreground">{t('results.careerDirection')}</dt>
                      <dd className="mt-1 text-sm text-foreground">
                        {results.careerMatches?.primaryCareer || recommendedCareers[0] || t('results.notSpecified')}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-base font-medium text-foreground">{t('results.topUniversityMatches')}</h4>
                <ul className="mt-4 divide-y divide-gray-200">
                  {topUniversities.length > 0 ? (
                    topUniversities.map((match, index) => (
                      <li key={match.university.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                              <span className="text-lg font-medium">{index + 1}</span>
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{match.university.name}</p>
                            <p className="text-sm text-muted-foreground truncate">{match.program}</p>
                          </div>
                          <div>
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              {match.matchPercentage}% {t('results.match')}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="py-4 text-muted-foreground">{t('results.noMatchesFound')}</p>
                  )}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-base font-medium text-foreground">{t('results.careerInsights')}</h4>
                <div className="mt-4 bg-muted p-4 rounded-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/2">
                      <h5 className="text-sm font-medium text-foreground mb-2">{t('results.careerPersonalityProfile')}</h5>
                      <div className="space-y-2">
                        {personalityTraits.map((trait) => (
                          <div key={trait.trait}>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">{trait.trait}</span>
                              <span>{trait.score}%</span>
                            </div>
                            <Progress value={trait.score} className="h-2 mt-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-0 sm:w-1/2 sm:pl-6">
                      <h5 className="text-sm font-medium text-foreground mb-2">{t('results.recommendedCareerPaths')}</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {recommendedCareers.length > 0 ? (
                          recommendedCareers.map((career, index) => (
                            <li key={index} className="flex items-center">
                              <i className="fas fa-check-circle text-accent-500 mr-2"></i>
                              {career}
                            </li>
                          ))
                        ) : (
                          <li className="text-muted-foreground">{t('results.noRecommendationsYet')}</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Button asChild>
                  <Link href="/universities">
                    {t('results.exploreUniversities')}
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="px-4 py-5 sm:p-6 text-center">
              <h3 className="text-lg font-medium text-foreground mb-4">{t('results.incomplete')}</h3>
              <p className="text-muted-foreground mb-6">{t('results.incompleteDescription')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {!hasProfile && (
                  <Button asChild>
                    <Link href="/profile">{t('results.createProfile')}</Link>
                  </Button>
                )}
                {hasProfile && !hasResults && (
                  <Button asChild>
                    <Link href="/assessment">{t('results.takeAssessment')}</Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
