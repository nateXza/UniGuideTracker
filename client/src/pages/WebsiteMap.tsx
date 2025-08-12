import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebsiteMap: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        {t('sitemap.title', 'UniGuide Website Map')}
      </h1>
      
      <p className="text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
        {t('sitemap.subtitle', 'Complete navigation structure and content organization of the UniGuide platform')}
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Main navigation structure diagram */}
        <div className="mb-16 overflow-auto">
          <div className="min-w-[1200px]">
            <div className="flex flex-col items-center">
              {/* Home node (root) */}
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-lg mb-4">
                <Link href="/">Home</Link>
              </div>
              
              {/* Primary navigation level */}
              <div className="w-0.5 h-8 bg-gray-300"></div>
              
              <div className="flex justify-center mb-8">
                <div className="w-[1000px] h-0.5 bg-gray-300"></div>
              </div>
              
              <div className="flex justify-between w-full mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-md mb-2">
                    <Link href="/about">About</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-md mb-2">
                    <Link href="/universities">Universities</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-md mb-2">
                    <Link href="/assessment">Assessment</Link>
                  </div>
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="flex">
                    <div className="w-24 h-0.5 bg-gray-300"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center mx-4">
                      <div className="w-0.5 h-4 bg-gray-300"></div>
                      <div className="p-2 bg-indigo-50 text-indigo-800 rounded-lg shadow-sm">
                        <Link href="/results">Results</Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-md mb-2">
                    <Link href="/careers">Careers</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-md mb-2">
                    <Link href="/profile">Profile</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-md mb-2">
                    <Link href="/login">Login</Link>
                  </div>
                </div>
              </div>
              
              {/* Secondary navigation level */}
              <div className="flex justify-between w-full mb-8">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-gray-100 text-foreground rounded-lg shadow-sm">
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-foreground rounded-lg shadow-sm">
                    <Link href="/scholarships">Scholarships</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-foreground rounded-lg shadow-sm">
                    <Link href="/nsfas">NSFAS</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-foreground rounded-lg shadow-sm">
                    <Link href="/deadlines">Deadlines</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-foreground rounded-lg shadow-sm">
                    <Link href="/blog">Blog</Link>
                  </div>
                </div>
              </div>
              
              {/* Footer links */}
              <div className="flex justify-center mb-2">
                <div className="w-[500px] h-0.5 bg-gray-300"></div>
              </div>
              
              <div className="w-0.5 h-4 bg-gray-300"></div>
              <div className="p-3 bg-gray-200 text-foreground rounded-lg shadow-md mb-4 text-center">
                Footer Links
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="w-[700px] h-0.5 bg-gray-300"></div>
              </div>
              
              <div className="flex justify-between w-[700px]">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-muted-foreground rounded-lg shadow-sm text-sm">
                    <Link href="/privacy">Privacy Policy</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-muted-foreground rounded-lg shadow-sm text-sm">
                    <Link href="/terms">Terms of Service</Link>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="p-2 bg-gray-100 text-muted-foreground rounded-lg shadow-sm text-sm">
                    <Link href="/cookies">Cookie Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Information structure */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('sitemap.mainPages', 'Main Pages')}</CardTitle>
              <CardDescription>{t('sitemap.mainPagesDesc', 'Primary navigation elements accessible from the navbar')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><strong>Home</strong> - Platform introduction, key features, testimonials</li>
                <li><strong>About</strong> - Mission, team, values, story</li>
                <li><strong>Universities</strong> - Searchable/filterable university listings</li>
                <li><strong>Assessment</strong> - Personality and aptitude tests</li>
                <li><strong>Results</strong> - University and career recommendations</li>
                <li><strong>Careers</strong> - Career field information and guidance</li>
                <li><strong>Profile</strong> - User information and preferences</li>
                <li><strong>Login</strong> - User authentication</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('sitemap.secondaryPages', 'Secondary Pages')}</CardTitle>
              <CardDescription>{t('sitemap.secondaryPagesDesc', 'Supporting content and resources')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><strong>Contact</strong> - Contact form and information</li>
                <li><strong>Scholarships</strong> - Scholarship and bursary listings</li>
                <li><strong>NSFAS</strong> - Information about NSFAS funding</li>
                <li><strong>Deadlines</strong> - Application deadlines for universities</li>
                <li><strong>Blog</strong> - Articles and educational resources</li>
                <li><strong>Privacy Policy</strong> - Data privacy information</li>
                <li><strong>Terms of Service</strong> - Usage terms and conditions</li>
                <li><strong>Cookie Policy</strong> - Information about cookie usage</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* User flow diagrams */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t('sitemap.userFlows', 'Key User Flows')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-xl">{t('sitemap.assessmentFlow', 'Assessment Flow')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="p-2 bg-blue-100 rounded-lg mb-2 w-40 text-center">Profile Creation</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-blue-100 rounded-lg mb-2 w-40 text-center">Select Assessment</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-blue-100 rounded-lg mb-2 w-40 text-center">Complete Questions</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-blue-100 rounded-lg mb-2 w-40 text-center">View Results</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-blue-100 rounded-lg w-40 text-center">University Matches</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader className="bg-indigo-50">
              <CardTitle className="text-xl">{t('sitemap.universityFlow', 'University Search Flow')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="p-2 bg-indigo-100 rounded-lg mb-2 w-40 text-center">Universities Page</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-indigo-100 rounded-lg mb-2 w-40 text-center">Filter/Search</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-indigo-100 rounded-lg mb-2 w-40 text-center">View University Card</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-indigo-100 rounded-lg mb-2 w-40 text-center">Modal Details</div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="p-2 bg-indigo-100 rounded-lg w-40 text-center">Official Website</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            {t('sitemap.note', 'This diagram represents the complete navigational structure of the UniGuide platform, showing how pages are interconnected and accessible.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMap;