import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from '@/hooks/useTranslation';
import { UniversityMatch, PersonalityTrait } from '@/lib/types';

interface ResultsCardProps {
  universityMatches: UniversityMatch[];
  personalityTraits: PersonalityTrait[];
  recommendedCareers: string[];
  matchDate: string;
  studentName?: string;
  fieldOfStudy?: string;
  averageMark?: number;
  primaryCareer?: string;
}

const ResultsCard: React.FC<ResultsCardProps> = ({
  universityMatches,
  personalityTraits,
  recommendedCareers,
  matchDate,
  studentName,
  fieldOfStudy,
  averageMark,
  primaryCareer
}) => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
      <CardContent className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {studentName ? `${studentName}'s ${t('results.universityMatches')}` : t('results.universityMatches')}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              {t('results.matchDescription')}
            </p>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-100">
              <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              {t('results.matchComplete')}
            </Badge>
          </div>
        </div>

        <div className="mt-6">
          <div className="border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{t('results.matchDate')}</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(matchDate).toLocaleDateString()}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{t('results.preferredField')}</dt>
                <dd className="mt-1 text-sm text-gray-900">{fieldOfStudy || t('results.notSpecified')}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{t('results.averageMark')}</dt>
                <dd className="mt-1 text-sm text-gray-900">{averageMark ? `${averageMark}%` : t('results.notSpecified')}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{t('results.careerDirection')}</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {primaryCareer || t('results.notSpecified')}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-base font-medium text-gray-900">{t('results.topUniversityMatches')}</h4>
          <ul className="mt-4 divide-y divide-gray-200">
            {universityMatches.length > 0 ? (
              universityMatches.map((match, index) => (
                <li key={match.university.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                        <span className="text-lg font-medium">{index + 1}</span>
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{match.university.name}</p>
                      <p className="text-sm text-gray-500 truncate">{match.program}</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-100">
                        {match.matchPercentage}% {t('results.match')}
                      </Badge>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className="py-4 text-gray-500">{t('results.noMatchesFound')}</p>
            )}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-base font-medium text-gray-900">{t('results.careerInsights')}</h4>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/2">
                <h5 className="text-sm font-medium text-gray-900 mb-2">{t('results.careerPersonalityProfile')}</h5>
                <div className="space-y-2">
                  {personalityTraits.map((trait) => (
                    <div key={trait.trait}>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">{trait.trait}</span>
                        <span>{trait.score}%</span>
                      </div>
                      <Progress value={trait.score} className="h-2 mt-1" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:w-1/2 sm:pl-6">
                <h5 className="text-sm font-medium text-gray-900 mb-2">{t('results.recommendedCareerPaths')}</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  {recommendedCareers.length > 0 ? (
                    recommendedCareers.map((career, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check-circle text-accent-500 mr-2"></i>
                        {career}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">{t('results.noRecommendationsYet')}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
