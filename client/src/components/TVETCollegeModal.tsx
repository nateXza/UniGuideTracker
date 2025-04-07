import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, MapPin, Calendar, BookOpen, Home, BarChart } from 'lucide-react';
import { TvetCollege } from '@shared/schema';
import { useTranslation } from '@/hooks/useTranslation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface TVETCollegeModalProps {
  college: TvetCollege;
  isOpen: boolean;
  onClose: () => void;
}

const TVETCollegeModal: React.FC<TVETCollegeModalProps> = ({ college, isOpen, onClose }) => {
  const { t } = useTranslation();

  // Safe getters for potental undefined properties
  const getFees = () => college.fees || { nationalCertificate: '', diploma: '' };
  const getCampuses = () => college.campuses || [];
  const getPrograms = () => college.programs || [];
  const getStudentSupport = () => college.studentSupport || [];
  const getApplicationDeadlines = () => college.applicationDeadlines || { semester1: '', semester2: '' };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-bold">{college.name}</DialogTitle>
              <DialogDescription className="flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4" />
                {college.location}, {college.province}
              </DialogDescription>
            </div>
            {college.logo && (
              <div className="h-16 w-16 rounded-md overflow-hidden bg-white shadow-sm">
                <img
                  src={college.logo}
                  alt={`${college.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview">{t('tvetColleges.overview')}</TabsTrigger>
            <TabsTrigger value="programs">{t('tvetColleges.programs')}</TabsTrigger>
            <TabsTrigger value="campuses">{t('tvetColleges.campuses')}</TabsTrigger>
            <TabsTrigger value="application">{t('tvetColleges.application')}</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1">
            <TabsContent value="overview" className="mt-0 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.about')}</h3>
                <p className="text-gray-700">{college.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.programCategories')}</h3>
                <div className="flex flex-wrap gap-2">
                  {college.engineeringPrograms && <Badge variant="secondary">Engineering</Badge>}
                  {college.businessPrograms && <Badge variant="secondary">Business</Badge>}
                  {college.itPrograms && <Badge variant="secondary">IT</Badge>}
                  {college.hospitalityPrograms && <Badge variant="secondary">Hospitality</Badge>}
                  {college.artisanPrograms && <Badge variant="secondary">Artisan</Badge>}
                  {college.agriculture && <Badge variant="secondary">Agriculture</Badge>}
                  {college.tourism && <Badge variant="secondary">Tourism</Badge>}
                  {college.media && <Badge variant="secondary">Media</Badge>}
                  {college.safety && <Badge variant="secondary">Safety</Badge>}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.fees')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{t('tvetColleges.nationalCertificate')}:</span>
                    <span>{getFees().nationalCertificate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t('tvetColleges.diploma')}:</span>
                    <span>{getFees().diploma}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.studentSupport')}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {getStudentSupport().map((support, index) => (
                    <li key={index}>{support}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-gray-500" />
                <span>
                  {t('tvetColleges.accommodation')}: {college.accommodationAvailable ? t('yes') : t('no')}
                </span>
              </div>
            </TabsContent>

            <TabsContent value="programs" className="mt-0">
              <div className="space-y-6">
                {getPrograms().map((program, index) => (
                  <div key={index} className="border rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-1">{program.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{program.level}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{program.description}</p>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm">
                        <strong>{t('tvetColleges.requirements')}:</strong> {program.requirements}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="campuses" className="mt-0">
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t('tvetColleges.campusesIntro', { collegeName: college.name })}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {getCampuses().map((campus, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-1">{campus} {t('tvetColleges.campus')}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{campus}, {college.province}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="application" className="mt-0 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.applicationDeadlines')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{t('tvetColleges.semester1')}:</span>
                    <span>{getApplicationDeadlines().semester1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t('tvetColleges.semester2')}:</span>
                    <span>{getApplicationDeadlines().semester2}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.applicationProcess')}</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>{t('tvetColleges.applicationStep1')}</li>
                  <li>{t('tvetColleges.applicationStep2')}</li>
                  <li>{t('tvetColleges.applicationStep3')}</li>
                  <li>{t('tvetColleges.applicationStep4')}</li>
                  <li>{t('tvetColleges.applicationStep5')}</li>
                </ol>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('tvetColleges.requiredDocuments')}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t('tvetColleges.idDocument')}</li>
                  <li>{t('tvetColleges.latestResults')}</li>
                  <li>{t('tvetColleges.proofOfResidence')}</li>
                  <li>{t('tvetColleges.additionalRequirements')}</li>
                </ul>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter className="sm:justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-700">
              {t('tvetColleges.programsCount', { count: getPrograms().length })}
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              {t('close')}
            </Button>
            <Button onClick={() => college.website ? window.open(college.website, '_blank') : null}>
              {t('tvetColleges.visitWebsite')}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TVETCollegeModal;