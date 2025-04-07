import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TvetCollege } from '@shared/schema';
import { useTranslation } from '@/hooks/useTranslation';
import TVETCollegeModal from '@/components/TVETCollegeModal';

interface TVETCollegeCardProps {
  college: TvetCollege;
  onClick?: () => void;
}

const TVETCollegeCard: React.FC<TVETCollegeCardProps> = ({ college, onClick }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const getProgramCategories = () => {
    const categories = [];
    if (college.engineeringPrograms) categories.push('Engineering');
    if (college.businessPrograms) categories.push('Business');
    if (college.itPrograms) categories.push('IT');
    if (college.hospitalityPrograms) categories.push('Hospitality');
    if (college.artisanPrograms) categories.push('Artisan');
    if (college.agriculture) categories.push('Agriculture');
    if (college.tourism) categories.push('Tourism');
    if (college.media) categories.push('Media');
    if (college.safety) categories.push('Safety');
    return categories;
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200" onClick={handleCardClick}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold text-gray-800">{college.name}</CardTitle>
              <CardDescription className="text-gray-600">{college.location}, {college.province}</CardDescription>
            </div>
            {college.logo && (
              <div className="h-12 w-12 rounded-full overflow-hidden bg-white shadow-sm">
                <img src={college.logo} alt={`${college.name} logo`} className="h-full w-full object-contain" />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 line-clamp-3">
                {college.description.substring(0, 150)}
                {college.description.length > 150 ? '...' : ''}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {getProgramCategories().slice(0, 4).map((category, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {category}
                </Badge>
              ))}
              {getProgramCategories().length > 4 && (
                <Badge variant="outline" className="font-normal">
                  +{getProgramCategories().length - 4}
                </Badge>
              )}
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex justify-between">
                <span>{t('tvetColleges.campuses')}:</span>
                <span className="font-medium">{Array.isArray(college.campuses) ? college.campuses.length : 0}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('tvetColleges.programs')}:</span>
                <span className="font-medium">{Array.isArray(college.programs) ? college.programs.length : 0}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('tvetColleges.accommodation')}:</span>
                <span className="font-medium">{college.accommodationAvailable ? t('yes') : t('no')}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" className="w-full">
            {t('tvetColleges.viewDetails')}
          </Button>
        </CardFooter>
      </Card>

      {showModal && (
        <TVETCollegeModal
          college={college}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default TVETCollegeCard;