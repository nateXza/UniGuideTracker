import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Separator } from '@/components/ui/separator';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          {t('about.title', 'About UniGuide')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8 text-center">
            {t('about.mission', 'Empowering South African students to make informed decisions about their educational future through personalized guidance and comprehensive resources.')}
          </p>
          
          <Separator className="my-10" />
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.ourStory.title', 'Our Story')}</h2>
              <p>
                {t('about.ourStory.content', 'UniGuide was founded with a simple vision: to bridge the gap between South African students and higher education opportunities. We recognized the challenges many students face when navigating university applications, field of study selections, and career paths. Our platform addresses these challenges by providing personalized recommendations and comprehensive information about universities across South Africa.')}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.ourMission.title', 'Our Mission')}</h2>
              <p>
                {t('about.ourMission.content', 'Our mission is to democratize access to higher education information and guidance for all South African students, regardless of their background or resources. We believe every student deserves the opportunity to make informed decisions about their academic future, and we are committed to providing the tools and information necessary to navigate this important life choice.')}
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.whatWeDo.title', 'What We Do')}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">{t('about.whatWeDo.assessment', 'Personality Assessment')}</h3>
              <p>
                {t('about.whatWeDo.assessmentDesc', 'Our scientifically validated assessments help identify your strengths, preferences, and aptitudes to suggest compatible fields of study and careers.')}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">{t('about.whatWeDo.matching', 'University Matching')}</h3>
              <p>
                {t('about.whatWeDo.matchingDesc', 'We match you with universities that offer programs aligned with your academic performance, interests, and career goals, using our comprehensive database of South African institutions.')}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">{t('about.whatWeDo.resources', 'Educational Resources')}</h3>
              <p>
                {t('about.whatWeDo.resourcesDesc', 'We provide up-to-date information about NSFAS funding, scholarships, application deadlines, and career guides to support your educational journey every step of the way.')}
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.team.title', 'Our Team')}</h2>
          <p className="mb-6">
            {t('about.team.description', 'UniGuide brings together a diverse team of education specialists, career counselors, data scientists, and technology experts united by a passion for education and student success.')}
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-muted-foreground text-2xl font-semibold">JM</div>
              <h3 className="font-semibold">{t('about.team.member1.name', 'Dr. John Mokoena')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.team.member1.role', 'Founder & Education Director')}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-muted-foreground text-2xl font-semibold">SP</div>
              <h3 className="font-semibold">{t('about.team.member2.name', 'Sarah Patel')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.team.member2.role', 'Career Assessment Specialist')}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-muted-foreground text-2xl font-semibold">TN</div>
              <h3 className="font-semibold">{t('about.team.member3.name', 'Thabo Ndlovu')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.team.member3.role', 'Data Science Lead')}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-muted-foreground text-2xl font-semibold">LB</div>
              <h3 className="font-semibold">{t('about.team.member4.name', 'Lerato Botha')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.team.member4.role', 'University Relations Manager')}</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.values.title', 'Our Values')}</h2>
          <ul className="list-disc pl-6 mb-12 space-y-2">
            <li>
              <span className="font-semibold">{t('about.values.access.title', 'Accessibility:')}</span> {t('about.values.access.desc', 'Making higher education information available to all South African students.')}
            </li>
            <li>
              <span className="font-semibold">{t('about.values.integrity.title', 'Integrity:')}</span> {t('about.values.integrity.desc', 'Providing accurate, up-to-date information you can trust.')}
            </li>
            <li>
              <span className="font-semibold">{t('about.values.inclusion.title', 'Inclusion:')}</span> {t('about.values.inclusion.desc', 'Supporting students from all backgrounds, provinces, and circumstances.')}
            </li>
            <li>
              <span className="font-semibold">{t('about.values.innovation.title', 'Innovation:')}</span> {t('about.values.innovation.desc', 'Continuously improving our tools and resources to better serve students.')}
            </li>
            <li>
              <span className="font-semibold">{t('about.values.empowerment.title', 'Empowerment:')}</span> {t('about.values.empowerment.desc', 'Equipping students with the knowledge to make confident decisions about their future.')}
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.contact.title', 'Contact Us')}</h2>
          <p>
            {t('about.contact.content', 'Have questions or feedback? We would love to hear from you! Visit our Contact page or reach out to us at info@uniguide.co.za.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;