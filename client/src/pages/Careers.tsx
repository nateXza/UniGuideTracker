import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Filter, TrendingUp, BookOpen, Briefcase } from 'lucide-react';

// Interfaces for career data
interface CareerSkill {
  name: string;
  description: string;
}

interface CareerPathway {
  title: string;
  description: string;
  timeframe: string;
}

interface CareerField {
  id: number;
  name: string;
  description: string;
  keySubjects: string[];
  salaryRange: string;
  jobGrowth: string;
  skills: CareerSkill[];
  education: string[];
  careers: {
    title: string;
    description: string;
    salary: string;
    requirements: string;
  }[];
  pathways: CareerPathway[];
}

const Careers: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [growthFilter, setGrowthFilter] = useState('all');
  
  // Sample career fields data (in a real app, this would come from an API)
  const careerFieldsData: CareerField[] = [
    {
      id: 1,
      name: "Information Technology",
      description: "The IT field encompasses the design, development, management, and support of computer systems, software applications, and networks that businesses and organizations depend on to function in the digital age.",
      keySubjects: ["Mathematics", "Computer Science", "Physical Science"],
      salaryRange: "R280,000 - R800,000+",
      jobGrowth: "high",
      skills: [
        {
          name: "Programming",
          description: "Ability to write code in languages like Python, Java, JavaScript, etc."
        },
        {
          name: "Problem-solving",
          description: "Ability to identify issues and develop effective solutions."
        },
        {
          name: "Systems thinking",
          description: "Understanding how different components interact within a larger system."
        }
      ],
      education: [
        "BSc in Computer Science",
        "BSc in Information Systems",
        "BSc in Software Engineering",
        "Diploma in Information Technology",
        "Industry certifications (e.g., AWS, Microsoft, Cisco)"
      ],
      careers: [
        {
          title: "Software Developer",
          description: "Designs, codes, tests, and maintains software applications to meet user needs.",
          salary: "R350,000 - R750,000",
          requirements: "Bachelor's degree in Computer Science or related field, programming skills in languages like Java, Python, or JavaScript."
        },
        {
          title: "Data Scientist",
          description: "Analyzes large datasets to extract valuable insights and inform business decisions.",
          salary: "R400,000 - R900,000",
          requirements: "Advanced degree in Computer Science, Statistics, or Mathematics; expertise in Python, R, and machine learning."
        },
        {
          title: "Cybersecurity Analyst",
          description: "Protects computer systems and networks from security breaches and cyber threats.",
          salary: "R400,000 - R800,000",
          requirements: "Degree in Cybersecurity or IT; security certifications such as CISSP, CompTIA Security+."
        }
      ],
      pathways: [
        {
          title: "Junior Developer to Senior Developer",
          description: "Starting with coding tasks, gradually taking on more complex projects and mentoring junior developers.",
          timeframe: "3-5 years"
        },
        {
          title: "Senior Developer to Technical Lead/Architect",
          description: "Moving from hands-on development to designing systems and leading technical decisions.",
          timeframe: "5-8 years"
        },
        {
          title: "Technical Lead to CTO",
          description: "Transitioning from technical leadership to executive decision-making about technology direction.",
          timeframe: "8-15 years"
        }
      ]
    },
    {
      id: 2,
      name: "Healthcare",
      description: "The healthcare field includes the prevention, diagnosis, treatment, and management of illness and the preservation of mental and physical well-being through the services offered by medical and allied health professions.",
      keySubjects: ["Life Sciences", "Physical Science", "Mathematics"],
      salaryRange: "R240,000 - R1,200,000+",
      jobGrowth: "high",
      skills: [
        {
          name: "Critical thinking",
          description: "Ability to analyze information and make sound clinical judgments."
        },
        {
          name: "Empathy",
          description: "Understanding and sharing the feelings of patients."
        },
        {
          name: "Communication",
          description: "Clearly conveying complex medical information to patients and colleagues."
        }
      ],
      education: [
        "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
        "Bachelor of Nursing Science",
        "BSc in Physiotherapy",
        "BSc in Occupational Therapy",
        "Bachelor of Pharmacy"
      ],
      careers: [
        {
          title: "Medical Doctor",
          description: "Diagnoses and treats injuries and illnesses in patients.",
          salary: "R600,000 - R1,500,000+",
          requirements: "MBChB degree, internship, community service, and registration with the Health Professions Council of South Africa (HPCSA)."
        },
        {
          title: "Registered Nurse",
          description: "Provides and coordinates patient care, educates patients about health conditions.",
          salary: "R250,000 - R450,000",
          requirements: "Bachelor of Nursing Science degree and registration with the South African Nursing Council (SANC)."
        },
        {
          title: "Pharmacist",
          description: "Prepares and dispenses medications, advises on their safe use.",
          salary: "R400,000 - R700,000",
          requirements: "Bachelor of Pharmacy degree, internship, and registration with the South African Pharmacy Council."
        }
      ],
      pathways: [
        {
          title: "Medical Intern to Specialist",
          description: "Starting with internship and community service, then specializing in a specific field of medicine.",
          timeframe: "6-10 years"
        },
        {
          title: "Staff Nurse to Nurse Manager",
          description: "Progressing from direct patient care to managing nursing units and staff.",
          timeframe: "5-8 years"
        },
        {
          title: "Clinical Pharmacist to Pharmacy Director",
          description: "Moving from dispensing medications to overseeing pharmacy operations for a healthcare facility.",
          timeframe: "8-12 years"
        }
      ]
    },
    {
      id: 3,
      name: "Finance and Accounting",
      description: "The finance and accounting field involves managing money, assets, and investments for individuals, businesses, and organizations to achieve financial objectives and ensure compliance with financial regulations.",
      keySubjects: ["Mathematics", "Accounting", "Economics"],
      salaryRange: "R250,000 - R1,000,000+",
      jobGrowth: "medium",
      skills: [
        {
          name: "Analytical thinking",
          description: "Ability to examine financial data and identify patterns and trends."
        },
        {
          name: "Attention to detail",
          description: "Ensuring accuracy in financial records and calculations."
        },
        {
          name: "Financial modeling",
          description: "Creating mathematical representations of financial situations for analysis and forecasting."
        }
      ],
      education: [
        "Bachelor of Commerce in Accounting",
        "Bachelor of Commerce in Finance",
        "Chartered Accountant (CA) qualification",
        "Certified Financial Planner (CFP) designation",
        "Master of Business Administration (MBA)"
      ],
      careers: [
        {
          title: "Chartered Accountant",
          description: "Prepares and examines financial records, ensures accuracy of financial statements and tax compliance.",
          salary: "R500,000 - R1,200,000",
          requirements: "BCom in Accounting, SAICA articles, and passing the SAICA board exams."
        },
        {
          title: "Financial Analyst",
          description: "Analyzes financial data to help businesses make investment decisions.",
          salary: "R350,000 - R700,000",
          requirements: "Bachelor's degree in Finance, Economics, or Accounting; sometimes an MBA or CFA designation."
        },
        {
          title: "Investment Banker",
          description: "Helps companies and governments raise capital by issuing securities and providing financial advice.",
          salary: "R600,000 - R1,500,000+",
          requirements: "Bachelor's degree in Finance or Economics, often an MBA; strong analytical and interpersonal skills."
        }
      ],
      pathways: [
        {
          title: "Trainee Accountant to Chartered Accountant",
          description: "Completing articles while studying for professional exams to become a qualified CA.",
          timeframe: "3-5 years"
        },
        {
          title: "Financial Analyst to Investment Manager",
          description: "Starting with analyzing investments to managing investment portfolios for clients.",
          timeframe: "5-8 years"
        },
        {
          title: "Management Accountant to CFO",
          description: "Moving from operational financial analysis to executive financial leadership.",
          timeframe: "10-15 years"
        }
      ]
    },
    {
      id: 4,
      name: "Engineering",
      description: "Engineering is the application of scientific principles to design, build, and optimize solutions to technical problems in various fields including mechanical, electrical, civil, and chemical domains.",
      keySubjects: ["Mathematics", "Physical Science", "Technical Drawing"],
      salaryRange: "R300,000 - R900,000+",
      jobGrowth: "medium",
      skills: [
        {
          name: "Technical knowledge",
          description: "Understanding of engineering principles and applications in a specific domain."
        },
        {
          name: "Problem-solving",
          description: "Ability to identify and solve complex technical challenges."
        },
        {
          name: "Project management",
          description: "Planning, executing, and completing engineering projects within constraints."
        }
      ],
      education: [
        "Bachelor of Engineering (BEng)",
        "Bachelor of Science in Engineering (BSc Eng)",
        "National Diploma in Engineering",
        "Master of Engineering (MEng)",
        "PhD in Engineering"
      ],
      careers: [
        {
          title: "Civil Engineer",
          description: "Designs and oversees construction of infrastructure projects like roads, bridges, and buildings.",
          salary: "R350,000 - R800,000",
          requirements: "Bachelor's degree in Civil Engineering and registration with the Engineering Council of South Africa (ECSA)."
        },
        {
          title: "Mechanical Engineer",
          description: "Designs, develops, and maintains mechanical systems and machinery.",
          salary: "R350,000 - R850,000",
          requirements: "Bachelor's degree in Mechanical Engineering and ECSA registration."
        },
        {
          title: "Electrical Engineer",
          description: "Works with electrical systems for power generation, transmission, and application.",
          salary: "R400,000 - R900,000",
          requirements: "Bachelor's degree in Electrical Engineering and ECSA registration."
        }
      ],
      pathways: [
        {
          title: "Graduate Engineer to Professional Engineer",
          description: "Working under supervision until gaining enough experience to register as a Professional Engineer.",
          timeframe: "3-5 years"
        },
        {
          title: "Project Engineer to Project Manager",
          description: "Moving from managing technical aspects to overseeing entire projects, including budgets and teams.",
          timeframe: "5-8 years"
        },
        {
          title: "Engineering Manager to Director",
          description: "Progressing from managing engineering departments to directing company-wide technical strategy.",
          timeframe: "10-15 years"
        }
      ]
    },
    {
      id: 5,
      name: "Education",
      description: "The education field involves the facilitation of learning, teaching, and development of knowledge and skills from early childhood through higher education, adult learning, and specialized training.",
      keySubjects: ["Languages", "Social Sciences", "Mathematics/Science (for those subjects)"],
      salaryRange: "R200,000 - R600,000+",
      jobGrowth: "stable",
      skills: [
        {
          name: "Communication",
          description: "Ability to clearly convey information and concepts to diverse audiences."
        },
        {
          name: "Adaptability",
          description: "Flexibility to adjust teaching methods to different learning styles and situations."
        },
        {
          name: "Patience",
          description: "Understanding that learning takes time and maintaining composure during challenges."
        }
      ],
      education: [
        "Bachelor of Education (BEd)",
        "Postgraduate Certificate in Education (PGCE)",
        "Bachelor's degree + PGCE",
        "Master of Education (MEd)",
        "PhD in Education"
      ],
      careers: [
        {
          title: "School Teacher",
          description: "Educates students in primary or secondary schools in specific subject areas.",
          salary: "R220,000 - R450,000",
          requirements: "Bachelor of Education degree or PGCE and registration with the South African Council for Educators (SACE)."
        },
        {
          title: "University Lecturer",
          description: "Teaches and conducts research at higher education institutions.",
          salary: "R400,000 - R800,000",
          requirements: "Master's or PhD in the relevant field; teaching experience often required."
        },
        {
          title: "Educational Psychologist",
          description: "Assesses and supports learners with educational, developmental, and behavioral challenges.",
          salary: "R350,000 - R700,000",
          requirements: "Master's degree in Educational Psychology and registration with the Health Professions Council of South Africa (HPCSA)."
        }
      ],
      pathways: [
        {
          title: "Teacher to Department Head",
          description: "Moving from classroom teaching to leading a subject department within a school.",
          timeframe: "5-8 years"
        },
        {
          title: "Department Head to School Principal",
          description: "Advancing from department leadership to overall school leadership.",
          timeframe: "8-15 years"
        },
        {
          title: "Lecturer to Professor",
          description: "Progressing through academic ranks from junior lecturer to full professor through teaching, research, and publications.",
          timeframe: "10-20 years"
        }
      ]
    }
  ];
  
  // Growth options for filtering
  const growthOptions = [
    { value: 'all', label: t('careers.filter.allGrowth', 'All Growth Rates') },
    { value: 'high', label: t('careers.filter.high', 'High Growth') },
    { value: 'medium', label: t('careers.filter.medium', 'Medium Growth') },
    { value: 'stable', label: t('careers.filter.stable', 'Stable Growth') },
    { value: 'low', label: t('careers.filter.low', 'Low Growth') }
  ];
  
  // Filter career fields based on search term and growth filter
  const filteredCareerFields = careerFieldsData.filter(field => {
    const matchesSearch = field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          field.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          field.careers.some(career => career.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesGrowth = growthFilter === 'all' || field.jobGrowth === growthFilter;
    
    return matchesSearch && matchesGrowth;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        {t('careers.title', 'Career Guides')}
      </h1>
      
      <p className="text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
        {t('careers.subtitle', 'Explore different career paths, required qualifications, and job opportunities in South Africa')}
      </p>
      
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t('careers.searchPlaceholder', 'Search career fields or job titles')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="w-full md:w-64 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <Select
              value={growthFilter}
              onValueChange={(value) => setGrowthFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('careers.growthFilterPlaceholder', 'Filter by job growth')} />
              </SelectTrigger>
              <SelectContent>
                {growthOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredCareerFields.length === 0 ? (
          <div className="text-center py-12 bg-background rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t('careers.noResults', 'No career fields found')}
            </h3>
            <p className="text-muted-foreground">
              {t('careers.tryAdjusting', 'Try adjusting your search or filter criteria')}
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredCareerFields.map((field) => (
              <Card key={field.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl text-primary-700">{field.name}</CardTitle>
                    <Badge 
                      className={
                        field.jobGrowth === 'high' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                          : field.jobGrowth === 'medium'
                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                      }
                    >
                      {field.jobGrowth === 'high' 
                        ? t('careers.growth.high', 'High Growth') 
                        : field.jobGrowth === 'medium'
                          ? t('careers.growth.medium', 'Medium Growth')
                          : t('careers.growth.stable', 'Stable Growth')}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">{field.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <Tabs defaultValue="overview">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="overview" className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {t('careers.tabs.overview', 'Overview')}
                      </TabsTrigger>
                      <TabsTrigger value="education" className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {t('careers.tabs.education', 'Education')}
                      </TabsTrigger>
                      <TabsTrigger value="jobs" className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {t('careers.tabs.jobs', 'Jobs')}
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t('careers.keySubjects', 'Key High School Subjects')}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {field.keySubjects.map((subject, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t('careers.salaryRange', 'Typical Salary Range')}</h3>
                        <p className="text-foreground">{field.salaryRange} {t('careers.perYear', 'per year')}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t('careers.keySkills', 'Key Skills')}</h3>
                        <div className="space-y-2">
                          {field.skills.map((skill, index) => (
                            <div key={index}>
                              <h4 className="font-medium text-foreground">{skill.name}</h4>
                              <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="education">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">{t('careers.qualifications', 'Common Qualifications')}</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {field.education.map((edu, index) => (
                            <li key={index} className="text-foreground">{edu}</li>
                          ))}
                        </ul>
                        
                        <h3 className="text-lg font-semibold mb-2 mt-6">{t('careers.careerPathways', 'Career Progression Pathways')}</h3>
                        <div className="space-y-4">
                          {field.pathways.map((pathway, index) => (
                            <div key={index} className="bg-background p-4 rounded-lg">
                              <h4 className="font-medium text-foreground">{pathway.title}</h4>
                              <p className="text-sm text-muted-foreground mb-1">{pathway.description}</p>
                              <p className="text-xs text-muted-foreground">{t('careers.timeframe', 'Typical timeframe')}: {pathway.timeframe}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="jobs">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">{t('careers.commonJobs', 'Common Jobs in This Field')}</h3>
                        
                        <Accordion type="single" collapsible className="w-full">
                          {field.careers.map((career, index) => (
                            <AccordionItem key={index} value={`job-${index}`}>
                              <AccordionTrigger className="text-left font-medium text-primary-700">
                                {career.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-3 pt-2">
                                  <p className="text-foreground">{career.description}</p>
                                  
                                  <div>
                                    <h4 className="text-sm font-semibold text-foreground">{t('careers.typicalSalary', 'Typical Salary Range')}</h4>
                                    <p className="text-sm text-muted-foreground">{career.salary} {t('careers.perYear', 'per year')}</p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-sm font-semibold text-foreground">{t('careers.requirements', 'Requirements')}</h4>
                                    <p className="text-sm text-muted-foreground">{career.requirements}</p>
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="pt-0">
                  <p className="text-sm text-muted-foreground italic">
                    {t('careers.dataNote', 'Note: Salary ranges and job growth information are approximations based on current market trends in South Africa.')}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          {t('careers.matchingTitle', 'Find Your Perfect Career Match')}
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl text-center">
          <p className="text-lg text-foreground mb-6">
            {t('careers.matchingDesc', 'Take our comprehensive assessment to discover careers that align with your unique personality, interests, and strengths.')}
          </p>
          
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700">
            <a href="/assessment">
              {t('careers.takeAssessment', 'Take Career Assessment')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;