import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ExternalLink } from 'lucide-react';

// Define interface for scholarship data
interface Scholarship {
  id: number;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  fields: string[];
  url: string;
  description: string;
}

const Scholarships: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [fieldFilter, setFieldFilter] = useState('all');
  
  // Sample scholarship data (in a real app, this would come from an API)
  const scholarshipsData: Scholarship[] = [
    {
      id: 1,
      name: "Allan Gray Orbis Foundation Fellowship",
      provider: "Allan Gray Orbis Foundation",
      amount: "Full Cost of Study",
      deadline: "May 30, 2025",
      eligibility: ["Matric students", "First-year students", "South African citizen"],
      fields: ["Business", "Entrepreneurship", "All Fields"],
      url: "https://www.allangrayorbis.org/",
      description: "The Allan Gray Orbis Foundation Fellowship is looking for high-potential individuals with a strong entrepreneurial mindset who are committed to creating positive change in South Africa."
    },
    {
      id: 2,
      name: "Sasol Bursary",
      provider: "Sasol Ltd",
      amount: "Full Cost of Study",
      deadline: "April 15, 2025",
      eligibility: ["Grade 12 students", "Minimum 70% in Mathematics", "Minimum 70% in Physical Science"],
      fields: ["Engineering", "Science", "Technology"],
      url: "https://www.sasol.com/careers/learners-students-and-graduates",
      description: "Sasol offers bursaries to talented students in STEM fields to help develop the next generation of technical professionals and leaders."
    },
    {
      id: 3,
      name: "Investec CSI Bursary",
      provider: "Investec",
      amount: "Full Cost of Study",
      deadline: "September 30, 2025",
      eligibility: ["Grade 12 students", "Financial need", "Academic excellence"],
      fields: ["Finance", "Accounting", "Business Science", "Economics", "All Fields"],
      url: "https://www.investec.com/en_za/welcome-to-investec/corporate-responsibility/our-community/education-and-learnerships.html",
      description: "Investec offers comprehensive bursaries that cover tuition, accommodation, books, and a stipend for high-potential students from disadvantaged backgrounds."
    },
    {
      id: 4,
      name: "Vodacom Bursary",
      provider: "Vodacom",
      amount: "R70,000 - R120,000 per annum",
      deadline: "June 30, 2025",
      eligibility: ["Grade 12 students", "First-year students", "South African citizens"],
      fields: ["Computer Science", "Information Systems", "Engineering", "Mathematics"],
      url: "https://www.vodacom.com/vodacom-bursary-programme.php",
      description: "Vodacom offers bursaries to students interested in pursuing careers in ICT and related fields, with opportunities for vacation work and possible employment."
    },
    {
      id: 5,
      name: "Mandela Rhodes Scholarship",
      provider: "Mandela Rhodes Foundation",
      amount: "Full Cost of Study + Stipend",
      deadline: "April 30, 2025",
      eligibility: ["Final year undergraduate", "Honours students", "African citizens"],
      fields: ["All Fields"],
      url: "https://mandelarhodes.org/",
      description: "The Mandela Rhodes Scholarship provides comprehensive funding for postgraduate studies while developing exceptional young leaders through mentoring and leadership development programs."
    },
    {
      id: 6,
      name: "Nedbank External Bursary",
      provider: "Nedbank",
      amount: "Full Cost of Study",
      deadline: "September 15, 2025",
      eligibility: ["Grade 12 students", "Undergraduate students", "South African citizens"],
      fields: ["Finance", "Accounting", "Economics", "Information Technology", "Data Science"],
      url: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/careers/students-and-graduates.html",
      description: "Nedbank offers bursaries to students pursuing qualifications relevant to the banking sector, with a focus on developing future banking professionals."
    },
    {
      id: 7,
      name: "SAICA Thuthuka Bursary",
      provider: "South African Institute of Chartered Accountants",
      amount: "Full Cost of Study",
      deadline: "August 31, 2025",
      eligibility: ["Grade 12 students", "Minimum 60% in Mathematics", "Financial need", "African or Coloured South Africans"],
      fields: ["Accounting", "Finance"],
      url: "https://www.saica.co.za/learners/support-to-learners/thuthuka-bursary-fund",
      description: "The Thuthuka Bursary Fund aims to increase the number of qualified Black and Coloured Chartered Accountants in South Africa."
    },
    {
      id: 8,
      name: "Michael & Susan Dell Foundation Scholarship",
      provider: "Dell Foundation",
      amount: "Varies",
      deadline: "March 31, 2025",
      eligibility: ["Grade 12 students", "Financial need", "Academic achievement"],
      fields: ["All Fields"],
      url: "https://www.dell.org/our-work/college-success/",
      description: "The Dell Scholarship supports students from disadvantaged backgrounds with financial assistance and mentorship throughout their university journey."
    }
  ];
  
  // Fields of study for the filter
  const fields = [
    'All Fields',
    'Engineering',
    'Science',
    'Technology',
    'Business',
    'Finance',
    'Medicine',
    'Humanities',
    'Arts',
    'Education',
    'Law'
  ];
  
  // Filter scholarships based on search term and selected field
  const filteredScholarships = scholarshipsData.filter(scholarship => {
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesField = fieldFilter === 'all' || 
                         scholarship.fields.some(field => field.toLowerCase() === fieldFilter.toLowerCase()) ||
                         scholarship.fields.includes('All Fields');
    
    return matchesSearch && matchesField;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        {t('scholarships.title', 'Scholarships & Bursaries')}
      </h1>
      
      <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        {t('scholarships.subtitle', 'Discover funding opportunities to support your higher education journey in South Africa')}
      </p>
      
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t('scholarships.searchPlaceholder', 'Search scholarships by name, provider, or description')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="w-full md:w-64 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <Select
              value={fieldFilter}
              onValueChange={(value) => setFieldFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('scholarships.fieldFilterPlaceholder', 'Filter by field of study')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('scholarships.allFields', 'All Fields')}</SelectItem>
                {fields.map((field, index) => (
                  <SelectItem key={index} value={field.toLowerCase()}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredScholarships.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {t('scholarships.noResults', 'No scholarships found')}
            </h3>
            <p className="text-gray-600">
              {t('scholarships.tryAdjusting', 'Try adjusting your search or filter criteria')}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-primary-700">{scholarship.name}</CardTitle>
                      <CardDescription>{scholarship.provider}</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {scholarship.amount}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{scholarship.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('scholarships.eligibility', 'Eligibility')}</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {scholarship.eligibility.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('scholarships.fields', 'Fields of Study')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.fields.map((field, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50">
                            {field}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm">
                    <span className="font-semibold">{t('scholarships.deadline', 'Deadline')}:</span> {scholarship.deadline}
                  </div>
                  <Button asChild variant="outline" className="gap-1">
                    <a href={scholarship.url} target="_blank" rel="noopener noreferrer">
                      {t('scholarships.applyNow', 'Apply Now')}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t('scholarships.tips.title', 'Scholarship Application Tips')}
        </h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('scholarships.tips.start.title', 'Start Early')}</h3>
                <p className="text-gray-700">{t('scholarships.tips.start.desc', 'Begin researching and applying for scholarships at least a year before your studies commence.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('scholarships.tips.requirements.title', 'Meet All Requirements')}</h3>
                <p className="text-gray-700">{t('scholarships.tips.requirements.desc', 'Ensure you meet all eligibility criteria before applying to avoid wasting time on applications that will be rejected.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('scholarships.tips.documents.title', 'Prepare Documents')}</h3>
                <p className="text-gray-700">{t('scholarships.tips.documents.desc', 'Keep certified copies of your ID, academic transcripts, and proof of income ready to streamline multiple applications.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('scholarships.tips.essay.title', 'Craft Compelling Essays')}</h3>
                <p className="text-gray-700">{t('scholarships.tips.essay.desc', 'Take time to write thoughtful, tailored essays that showcase your unique qualities and aspirations.')}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">5</div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('scholarships.tips.deadlines.title', 'Track Deadlines')}</h3>
                <p className="text-gray-700">{t('scholarships.tips.deadlines.desc', 'Create a calendar of application deadlines to ensure you submit all required materials on time.')}</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <p className="italic text-gray-600 mb-4">
            {t('scholarships.disclaimer', 'Disclaimer: The scholarship information provided on this page is for guidance purposes only. For the most up-to-date and official information, please visit each scholarship provider\'s official website.')}
          </p>
          <p className="text-sm text-gray-500">
            {t('scholarships.lastUpdated', 'Last updated: April 2023')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;