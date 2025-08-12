import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UniversityCard from '@/components/UniversityCard';
import UniversityModal from '@/components/UniversityModal';
import { useTranslation } from '@/hooks/useTranslation';
import { universities } from '@/data/universities';
import { University } from '@/lib/types';

const Universities: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle university selection and modal open
  const handleUniversitySelect = (university: University) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  // Filter universities based on search term and province
  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          university.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = selectedProvince === 'all' || university.province === selectedProvince;
    return matchesSearch && matchesProvince;
  });

  const provinceOptions = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape'
  ];

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            {t('universities.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            {t('universities.subtitle')}
          </p>
        </div>

        {/* University Search and Filter */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <Input
                type="text"
                className="pl-10"
                placeholder={t('universities.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="sm:w-1/3">
              <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                <SelectTrigger>
                  <SelectValue placeholder={t('universities.allProvinces')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('universities.allProvinces')}</SelectItem>
                  {provinceOptions.map((province) => (
                    <SelectItem key={province} value={province}>{province}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* University Cards */}
        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((university) => (
              <UniversityCard 
                key={university.id} 
                university={university} 
                onClick={() => handleUniversitySelect(university)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">{t('universities.noResults')}</p>
          </div>
        )}
        
        {/* University Detail Modal */}
        {selectedUniversity && (
          <UniversityModal
            university={selectedUniversity}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Universities;
