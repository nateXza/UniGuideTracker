import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from '@/hooks/useTranslation';
import { University } from '@/lib/types';

interface UniversityCardProps {
  university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
      <img 
        className="h-48 w-full object-cover" 
        src={university.image} 
        alt={`${university.name} campus`} 
      />
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{university.name}</h3>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <i className="fas fa-map-marker-alt mr-1"></i>
          <span>{university.location}, {university.province}</span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t('universities.studentSatisfaction', 'Student Satisfaction')}</span>
            <span className="font-medium text-gray-900">{university.ratings.studentSatisfaction}/5</span>
          </div>
          <Progress 
            value={university.ratings.studentSatisfaction * 20} 
            className="h-2 mt-1 bg-gray-200" 
          />
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t('universities.academicExcellence', 'Academic Excellence')}</span>
            <span className="font-medium text-gray-900">{university.ratings.academicExcellence}/5</span>
          </div>
          <Progress 
            value={university.ratings.academicExcellence * 20} 
            className="h-2 mt-1 bg-gray-200" 
          />
        </div>
        <div className="mt-4 space-x-2">
          {university.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6">
          <Button className="w-full">
            {t('universities.viewDetails', 'View Details')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
