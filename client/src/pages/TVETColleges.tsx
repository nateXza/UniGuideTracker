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
import TVETCollegeModal from '@/components/TVETCollegeModal';
import { useTranslation } from '@/hooks/useTranslation';
import { TvetCollege } from '@shared/schema';
import { tvetColleges } from '@/data/tvetColleges';

const TVETColleges: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
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
  const [selectedCollege, setSelectedCollege] = useState<TvetCollege | null>(null);
  const [showModal, setShowModal] = useState(false);

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
      if (selectedProvince && selectedProvince !== "all" && college.province !== selectedProvince) {
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
              <p className="text-muted-foreground mb-8 text-lg">
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
            <div className="w-full md:w-64 bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  {t('tvetColleges.filters')}
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedProvince('all');
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
                    <SelectItem value="all">{t('tvetColleges.allProvinces')}</SelectItem>
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
                <h2 className="text-xl font-semibold text-foreground">
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
                <div className="h-[600px] bg-muted rounded-lg p-4">
                  <div className="relative w-full h-full">
                    {/* Interactive Map Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                      {/* Map Background Grid */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                          <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>
                      
                      {/* South Africa Map Outline */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-80 h-80 text-blue-300 opacity-30" viewBox="0 0 400 300" fill="currentColor">
                          <path d="M50,150 Q60,120 100,120 Q140,110 180,115 Q220,120 260,130 Q300,140 330,160 Q340,180 330,200 Q300,220 260,210 Q220,200 180,195 Q140,190 100,185 Q60,180 50,150 Z" />
                          <path d="M180,195 Q200,210 240,215 Q270,220 290,200 Q280,240 250,250 Q220,255 190,245 Q170,235 165,215 Q170,205 180,195 Z" />
                        </svg>
                      </div>
                      
                      {/* College Location Markers */}
                      {filteredColleges.map((college, index) => {
                        const positions = [
                          { x: 25, y: 30 }, // Western Cape
                          { x: 35, y: 45 }, // Northern Cape  
                          { x: 45, y: 25 }, // Eastern Cape
                          { x: 55, y: 20 }, // KZN
                          { x: 65, y: 35 }, // Free State
                          { x: 70, y: 15 }, // Gauteng
                          { x: 80, y: 10 }, // Mpumalanga
                          { x: 75, y: 5 },  // Limpopo
                          { x: 60, y: 30 }, // North West
                          { x: 50, y: 40 }  // Additional position
                        ];
                        const pos = positions[index % positions.length];
                        
                        return (
                          <div
                            key={college.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                            onClick={() => {
                              setSelectedCollege(college);
                              setShowModal(true);
                            }}
                          >
                            {/* Marker */}
                            <div className="relative">
                              <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg group-hover:bg-red-600 transition-colors">
                                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                              </div>
                              
                              {/* College Info Popup */}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="bg-card border border-border rounded-lg shadow-lg p-3 min-w-[200px]">
                                  <h4 className="font-semibold text-foreground text-sm">{college.name}</h4>
                                  <p className="text-muted-foreground text-xs mt-1">{college.location}</p>
                                  <p className="text-muted-foreground text-xs">{college.programs?.length || 0} programs</p>
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                    <div className="w-2 h-2 bg-card border-r border-b border-border rotate-45"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Map Legend */}
                      <div className="absolute bottom-4 left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                        <h4 className="font-semibold text-foreground text-sm mb-2">Legend</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-muted-foreground text-xs">TVET College</span>
                        </div>
                        <p className="text-muted-foreground text-xs mt-2">Click markers for details</p>
                      </div>
                      
                      {/* Map Controls */}
                      <div className="absolute top-4 right-4 bg-card border border-border rounded-lg p-2 shadow-lg">
                        <div className="text-muted-foreground text-xs text-center">
                          South Africa
                        </div>
                        <div className="text-muted-foreground text-xs text-center mt-1">
                          {filteredColleges.length} Colleges
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {filteredColleges.length === 0 && (
                <div className="py-16 text-center">
                  <p className="text-muted-foreground mb-4">{t('tvetColleges.noResults')}</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedProvince('all');
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

        <Container className="py-12 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t('tvetColleges.whyTVET')}</h2>
            <p className="text-muted-foreground mb-8">
              {t('tvetColleges.whyTVETDescription')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{t('tvetColleges.practical')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tvetColleges.practicalDescription')}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{t('tvetColleges.affordable')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tvetColleges.affordableDescription')}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{t('tvetColleges.inDemand')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tvetColleges.inDemandDescription')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      
      {/* TVET College Modal */}
      {selectedCollege && (
        <TVETCollegeModal
          college={selectedCollege}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedCollege(null);
          }}
        />
      )}
    </div>
  );
};

export default TVETColleges;