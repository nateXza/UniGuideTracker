import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from '@/hooks/useTranslation';
import { University } from '@/lib/types';
import { ExternalLink } from 'lucide-react';

interface UniversityModalProps {
  university: University;
  isOpen: boolean;
  onClose: () => void;
}

const UniversityModal: React.FC<UniversityModalProps> = ({
  university,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            {university.logo && (
              <img 
                src={university.logo} 
                alt={`${university.name} logo`} 
                className="w-16 h-16 object-contain" 
              />
            )}
            <div>
              <DialogTitle className="text-2xl font-bold">{university.name}</DialogTitle>
              <DialogDescription className="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{university.location}, {university.province}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div>
            <img 
              src={university.image} 
              alt={`${university.name} campus`} 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('universities.about', 'About')}</h3>
              <p className="text-gray-700">{university.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('universities.ratings', 'Ratings')}</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">{t('universities.studentSatisfaction', 'Student Satisfaction')}</span>
                    <span className="font-medium">{university.ratings.studentSatisfaction}/5</span>
                  </div>
                  <Progress 
                    value={university.ratings.studentSatisfaction * 20} 
                    className="h-2" 
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">{t('universities.academicExcellence', 'Academic Excellence')}</span>
                    <span className="font-medium">{university.ratings.academicExcellence}/5</span>
                  </div>
                  <Progress 
                    value={university.ratings.academicExcellence * 20} 
                    className="h-2" 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('universities.tags', 'Features')}</h3>
              <div className="flex flex-wrap gap-2">
                {university.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('universities.admissionRequirements', 'Admission Requirements')}</h3>
              <p className="text-gray-700">{university.admissionRequirements}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('universities.programs', 'Programs Offered')}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {university.programsOffered.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{t('universities.importantInfo', 'Important Information')}</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex">
                  <span className="font-medium w-1/3">{t('universities.tuition', 'Tuition Fees')}:</span>
                  <span>{university.tuitionRangeFees}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-1/3">{t('universities.accommodation', 'Accommodation')}:</span>
                  <span>{university.accommodationAvailable ? t('universities.available', 'Available') : t('universities.notAvailable', 'Not Available')}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-1/3">{t('universities.applicationDeadline', 'Application Deadline')}:</span>
                  <span>{university.applicationDeadline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between mt-6">
          <DialogClose asChild>
            <Button variant="outline">
              {t('universities.close', 'Close')}
            </Button>
          </DialogClose>
          
          {university.website && (
            <Button 
              onClick={() => window.open(university.website, '_blank')}
              className="gap-2"
            >
              <ExternalLink size={16} />
              {t('universities.visitWebsite', 'Visit University Website')}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UniversityModal;