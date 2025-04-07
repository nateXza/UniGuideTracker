import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from '@/hooks/useTranslation';
import { University } from '@/lib/types';

interface UniversityCardProps {
  university: University;
  onClick?: () => void;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university, onClick }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        <img 
          className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105" 
          src={university.image} 
          alt={`${university.name} campus`} 
        />
        <div className="absolute top-0 left-0 m-3">
          <Badge variant="default" className="bg-primary-500 text-white">
            {university.province}
          </Badge>
        </div>
        {university.accommodationAvailable && (
          <div className="absolute top-0 right-0 m-3">
            <Badge variant="outline" className="bg-white bg-opacity-90 text-green-600 border-green-600">
              Accommodation
            </Badge>
          </div>
        )}
        
        {/* University Logo */}
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-full bg-white shadow-lg border-4 border-white overflow-hidden flex items-center justify-center">
            <img 
              src={university.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(university.name)}&background=random&color=fff&bold=true&size=80`} 
              alt={`${university.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 pt-12 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">{university.name}</h3>
          <div className="flex items-center justify-center min-w-[38px] h-[38px] rounded-full bg-primary-50 text-primary-700 font-bold border border-primary-200">
            {((university.ratings.academicExcellence + university.ratings.studentSatisfaction) / 2).toFixed(1)}
          </div>
        </div>
        
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{university.location}, {university.province}</span>
        </div>
        
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">{t('universities.studentSatisfaction', 'Student Satisfaction')}</span>
                <span className="font-medium text-gray-900">{university.ratings.studentSatisfaction}/5</span>
              </div>
              <Progress 
                value={university.ratings.studentSatisfaction * 20} 
                className="h-1.5 bg-gray-100" 
              />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">{t('universities.academicExcellence', 'Academic Excellence')}</span>
                <span className="font-medium text-gray-900">{university.ratings.academicExcellence}/5</span>
              </div>
              <Progress 
                value={university.ratings.academicExcellence * 20} 
                className="h-1.5 bg-gray-100" 
              />
            </div>
          </div>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {university.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-100">
              {tag}
            </Badge>
          ))}
        </div>
        
        {expanded && (
          <div className="mt-4 text-sm text-gray-600 border-t border-gray-100 pt-4 animate-fadeIn">
            <p className="mb-3">{university.description}</p>
            
            <div className="mb-3">
              <h4 className="font-semibold text-gray-800 mb-1">Programs Offered:</h4>
              <ul className="list-disc pl-5 text-xs space-y-1">
                {university.programsOffered.slice(0, 4).map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
                {university.programsOffered.length > 4 && (
                  <li className="text-primary-600">+{university.programsOffered.length - 4} more programs</li>
                )}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-gray-800">Tuition: </span>
                <span>{university.tuitionRangeFees}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Application Deadline: </span>
                <span>{university.applicationDeadline}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleExpanded}
          className="text-primary-600 hover:text-primary-800"
        >
          {expanded ? t('universities.showLess', 'Show Less') : t('universities.showMore', 'Show More')}
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          onClick={onClick}
        >
          {t('universities.viewDetails', 'View Details')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UniversityCard;
