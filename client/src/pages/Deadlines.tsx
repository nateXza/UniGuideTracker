import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Calendar, AlertCircle, Search, Filter, ExternalLink } from 'lucide-react';

interface Deadline {
  id: number;
  university: string;
  applicationOpenDate: string;
  applicationCloseDate: string;
  academicYear: string;
  applicationType: string;
  province: string;
  website: string;
  notes?: string;
}

const Deadlines: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [provinceFilter, setProvinceFilter] = useState('all');
  
  // Sample deadline data (in a real app, this would come from an API)
  const deadlinesData: Deadline[] = [
    {
      id: 1,
      university: "University of Cape Town",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Western Cape",
      website: "https://www.uct.ac.za/apply",
      notes: "Medical School applications close earlier on July 31, 2024"
    },
    {
      id: 2,
      university: "University of the Witwatersrand",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Gauteng",
      website: "https://www.wits.ac.za/applications/",
      notes: "Health Sciences applications close on June 30, 2024"
    },
    {
      id: 3,
      university: "University of Pretoria",
      applicationOpenDate: "March 1, 2024",
      applicationCloseDate: "August 31, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Gauteng",
      website: "https://www.up.ac.za/apply",
      notes: "Selection programs (e.g., Medicine, Veterinary Science) close on June 30, 2024"
    },
    {
      id: 4,
      university: "Stellenbosch University",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "June 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Western Cape",
      website: "https://www.sun.ac.za/english/apply",
      notes: "Late applications may be considered depending on space availability"
    },
    {
      id: 5,
      university: "University of KwaZulu-Natal",
      applicationOpenDate: "May 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "KwaZulu-Natal",
      website: "https://applications.ukzn.ac.za/",
      notes: "Medical School applications close on June 30, 2024"
    },
    {
      id: 6,
      university: "Rhodes University",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Eastern Cape",
      website: "https://www.ru.ac.za/apply/",
      notes: "Residence applications close on August 15, 2024"
    },
    {
      id: 7,
      university: "University of Johannesburg",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Gauteng",
      website: "https://www.uj.ac.za/apply/",
      notes: ""
    },
    {
      id: 8,
      university: "North-West University",
      applicationOpenDate: "March 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "North West",
      website: "https://studies.nwu.ac.za/studies/apply",
      notes: "Selection programs have earlier deadlines"
    },
    {
      id: 9,
      university: "University of the Free State",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "September 30, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Free State",
      website: "https://www.ufs.ac.za/apply",
      notes: "Medicine and allied health programs close on May 31, 2024"
    },
    {
      id: 10,
      university: "Nelson Mandela University",
      applicationOpenDate: "April 1, 2024",
      applicationCloseDate: "August 4, 2024",
      academicYear: "2025",
      applicationType: "Undergraduate",
      province: "Eastern Cape",
      website: "https://www.mandela.ac.za/Apply",
      notes: ""
    }
  ];
  
  // Provinces for the filter
  const provinces = [
    'All Provinces',
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Northern Cape',
    'Western Cape'
  ];
  
  // Get the current date
  const currentDate = new Date();
  
  // Calculate days remaining for each deadline
  const deadlinesWithDaysRemaining = deadlinesData.map(deadline => {
    const closeDate = new Date(deadline.applicationCloseDate);
    const timeDiff = closeDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return {
      ...deadline,
      daysRemaining,
      status: daysRemaining < 0 ? 'closed' : daysRemaining <= 30 ? 'closing-soon' : 'open'
    };
  });
  
  // Filter deadlines based on search term and selected province
  const filteredDeadlines = deadlinesWithDaysRemaining.filter(deadline => {
    const matchesSearch = deadline.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = provinceFilter === 'all' || deadline.province === provinceFilter;
    
    return matchesSearch && matchesProvince;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        {t('deadlines.title', 'University Application Deadlines')}
      </h1>
      
      <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        {t('deadlines.subtitle', 'Track important application deadlines for South African universities to ensure you never miss an opportunity')}
      </p>
      
      <Alert className="mb-8 max-w-5xl mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{t('deadlines.important', 'Important Note')}</AlertTitle>
        <AlertDescription>
          {t('deadlines.disclaimer', 'Deadlines may change. Always verify the exact dates on the official university websites before submitting your application.')}
        </AlertDescription>
      </Alert>
      
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t('deadlines.searchPlaceholder', 'Search by university name')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="w-full md:w-64 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <Select
              value={provinceFilter}
              onValueChange={(value) => setProvinceFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('deadlines.provinceFilterPlaceholder', 'Filter by province')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('deadlines.allProvinces', 'All Provinces')}</SelectItem>
                {provinces.map((province, index) => (
                  province !== 'All Provinces' && (
                    <SelectItem key={index} value={province}>
                      {province}
                    </SelectItem>
                  )
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary-600" />
              {t('deadlines.applicationDates', 'Application Dates for 2025 Academic Year')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('deadlines.table.university', 'University')}</TableHead>
                    <TableHead>{t('deadlines.table.province', 'Province')}</TableHead>
                    <TableHead>{t('deadlines.table.opens', 'Opens')}</TableHead>
                    <TableHead>{t('deadlines.table.closes', 'Closes')}</TableHead>
                    <TableHead>{t('deadlines.table.status', 'Status')}</TableHead>
                    <TableHead className="text-right">{t('deadlines.table.actions', 'Actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDeadlines.map((deadline) => (
                    <TableRow key={deadline.id}>
                      <TableCell className="font-medium">
                        {deadline.university}
                        {deadline.notes && (
                          <p className="text-xs text-gray-500 mt-1">{deadline.notes}</p>
                        )}
                      </TableCell>
                      <TableCell>{deadline.province}</TableCell>
                      <TableCell>{deadline.applicationOpenDate}</TableCell>
                      <TableCell>{deadline.applicationCloseDate}</TableCell>
                      <TableCell>
                        {deadline.status === 'closed' ? (
                          <Badge variant="destructive">
                            {t('deadlines.status.closed', 'Closed')}
                          </Badge>
                        ) : deadline.status === 'closing-soon' ? (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                            {t('deadlines.status.closingSoon', 'Closing Soon')}
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            {t('deadlines.status.open', 'Open')}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={deadline.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            {t('deadlines.apply', 'Apply')}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t('deadlines.keyDates.title', 'Key Dates for 2025 Academic Year')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t('deadlines.keyDates.nsfas.title', 'NSFAS Application Period')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <span className="font-semibold">{t('deadlines.keyDates.opens', 'Opens')}:</span> September 1, 2024
              </p>
              <p className="mb-4">
                <span className="font-semibold">{t('deadlines.keyDates.closes', 'Closes')}:</span> January 20, 2025
              </p>
              <Link href="/nsfas">
                <Button variant="link" className="p-0 h-auto text-primary-600">
                  {t('deadlines.keyDates.learnMore', 'Learn more about NSFAS funding')}
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t('deadlines.keyDates.nbts.title', 'National Benchmark Tests (NBTs)')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <span className="font-semibold">{t('deadlines.keyDates.starts', 'Starts')}:</span> May 2024
              </p>
              <p className="mb-4">
                <span className="font-semibold">{t('deadlines.keyDates.ends', 'Ends')}:</span> January 2025
              </p>
              <a href="https://nbt.ac.za/" target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="p-0 h-auto text-primary-600">
                  {t('deadlines.keyDates.register', 'Register for NBTs')}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t('deadlines.tips.title', 'Application Tips')}
        </h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('deadlines.tips.early.title', 'Apply Early')}</h3>
                <p className="text-gray-700">{t('deadlines.tips.early.desc', 'Don\'t wait until the last minute. Early applications often receive priority consideration for both admissions and accommodation.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('deadlines.tips.multiple.title', 'Apply to Multiple Universities')}</h3>
                <p className="text-gray-700">{t('deadlines.tips.multiple.desc', 'Increase your chances by applying to at least 3-5 universities, including a "reach" university, "target" universities, and "safe" options.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('deadlines.tips.documents.title', 'Prepare Documents Early')}</h3>
                <p className="text-gray-700">{t('deadlines.tips.documents.desc', 'Gather all required documents (ID, academic records, proof of residence, etc.) well before the application deadline.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('deadlines.tips.follow.title', 'Follow Up')}</h3>
                <p className="text-gray-700">{t('deadlines.tips.follow.desc', 'After submitting your application, regularly check your application status on the university\'s online portal or contact the admissions office if necessary.')}</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {t('deadlines.needHelp', 'Need more information about a specific university\'s application process?')}
          </p>
          <Link href="/universities">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700">
              {t('deadlines.exploreUniversities', 'Explore Universities')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deadlines;