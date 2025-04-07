import React, { useState, useMemo } from 'react';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Map } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TVETCollegeCard from '@/components/TVETCollegeCard';
import { useTranslation } from '@/hooks/useTranslation';
import { TvetCollege } from '@shared/schema';
import { tvetColleges } from '@/data/tvetColleges';

const TVETColleges: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [filters, setFilters] = useState({
    engineering: false,
    business: false,
    it: false,
    hospitality: false,
    artisan: false,
    agriculture: false,
    tourism: false,
    media: false,
    safety: false,
    accommodation: false,
  });
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const handleFilterChange = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredColleges = useMemo(() => {
    return tvetColleges.filter((college) => {
      // Search query filter
      if (
        searchQuery &&
        !college.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !college.location.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Province filter
      if (selectedProvince && college.province !== selectedProvince) {
        return false;
      }

      // Program filters
      if (filters.engineering && !college.engineeringPrograms) return false;
      if (filters.business && !college.businessPrograms) return false;
      if (filters.it && !college.itPrograms) return false;
      if (filters.hospitality && !college.hospitalityPrograms) return false;
      if (filters.artisan && !college.artisanPrograms) return false;
      if (filters.agriculture && !college.agriculture) return false;
      if (filters.tourism && !college.tourism) return false;
      if (filters.media && !college.media) return false;
      if (filters.safety && !college.safety) return false;

      // Accommodation filter
      if (filters.accommodation && !college.accommodationAvailable) return false;

      return true;
    });
  }, [searchQuery, selectedProvince, filters]);

  const provinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Northern Cape',
    'Western Cape',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                {t('tvetColleges.pageTitle')}
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                {t('tvetColleges.pageDescription')}
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder={t('tvetColleges.searchPlaceholder')}
                  className="pl-10 py-6 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  {t('tvetColleges.filters')}
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedProvince('');
                    setFilters({
                      engineering: false,
                      business: false,
                      it: false,
                      hospitality: false,
                      artisan: false,
                      agriculture: false,
                      tourism: false,
                      media: false,
                      safety: false,
                      accommodation: false,
                    });
                  }}
                >
                  {t('reset')}
                </Button>
              </div>

              {/* Province Filter */}
              <div className="mb-6">
                <Label htmlFor="province" className="text-sm font-medium block mb-2">
                  {t('tvetColleges.province')}
                </Label>
                <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('tvetColleges.selectProvince')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">{t('tvetColleges.allProvinces')}</SelectItem>
                    {provinces.map((province) => (
                      <SelectItem key={province} value={province}>
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Program Filters */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">{t('tvetColleges.programTypes')}</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="engineering" 
                      checked={filters.engineering}
                      onCheckedChange={() => handleFilterChange('engineering')}
                    />
                    <Label htmlFor="engineering">{t('tvetColleges.engineering')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="business" 
                      checked={filters.business}
                      onCheckedChange={() => handleFilterChange('business')}
                    />
                    <Label htmlFor="business">{t('tvetColleges.business')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="it" 
                      checked={filters.it}
                      onCheckedChange={() => handleFilterChange('it')}
                    />
                    <Label htmlFor="it">{t('tvetColleges.it')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hospitality" 
                      checked={filters.hospitality}
                      onCheckedChange={() => handleFilterChange('hospitality')}
                    />
                    <Label htmlFor="hospitality">{t('tvetColleges.hospitality')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="artisan" 
                      checked={filters.artisan}
                      onCheckedChange={() => handleFilterChange('artisan')}
                    />
                    <Label htmlFor="artisan">{t('tvetColleges.artisan')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="agriculture" 
                      checked={filters.agriculture}
                      onCheckedChange={() => handleFilterChange('agriculture')}
                    />
                    <Label htmlFor="agriculture">{t('tvetColleges.agriculture')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="tourism" 
                      checked={filters.tourism}
                      onCheckedChange={() => handleFilterChange('tourism')}
                    />
                    <Label htmlFor="tourism">{t('tvetColleges.tourism')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="media" 
                      checked={filters.media}
                      onCheckedChange={() => handleFilterChange('media')}
                    />
                    <Label htmlFor="media">{t('tvetColleges.media')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="safety" 
                      checked={filters.safety}
                      onCheckedChange={() => handleFilterChange('safety')}
                    />
                    <Label htmlFor="safety">{t('tvetColleges.safety')}</Label>
                  </div>
                </div>
              </div>

              {/* Accommodation Filter */}
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="accommodation" 
                    checked={filters.accommodation}
                    onCheckedChange={() => handleFilterChange('accommodation')}
                  />
                  <Label htmlFor="accommodation">{t('tvetColleges.hasAccommodation')}</Label>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {filteredColleges.length} {t('tvetColleges.resultsFound')}
                </h2>
                <Tabs defaultValue="grid" onValueChange={(value) => setViewMode(value as 'grid' | 'map')}>
                  <TabsList>
                    <TabsTrigger value="grid">{t('tvetColleges.gridView')}</TabsTrigger>
                    <TabsTrigger value="map">{t('tvetColleges.mapView')}</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredColleges.map((college) => (
                    <TVETCollegeCard key={college.id} college={college} />
                  ))}
                </div>
              ) : (
                <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2 text-gray-600">{t('tvetColleges.mapViewComingSoon')}</p>
                  </div>
                </div>
              )}

              {filteredColleges.length === 0 && (
                <div className="py-16 text-center">
                  <p className="text-gray-500 mb-4">{t('tvetColleges.noResults')}</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedProvince('');
                      setFilters({
                        engineering: false,
                        business: false,
                        it: false,
                        hospitality: false,
                        artisan: false,
                        agriculture: false,
                        tourism: false,
                        media: false,
                        safety: false,
                        accommodation: false,
                      });
                    }}
                  >
                    {t('tvetColleges.resetFilters')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>

        <Container className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t('tvetColleges.whyTVET')}</h2>
            <p className="text-gray-600 mb-8">
              {t('tvetColleges.whyTVETDescription')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{t('tvetColleges.practical')}</h3>
                <p className="text-sm text-gray-600">
                  {t('tvetColleges.practicalDescription')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{t('tvetColleges.affordable')}</h3>
                <p className="text-sm text-gray-600">
                  {t('tvetColleges.affordableDescription')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{t('tvetColleges.inDemand')}</h3>
                <p className="text-sm text-gray-600">
                  {t('tvetColleges.inDemandDescription')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default TVETColleges;