import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, FileText, Calendar, DollarSign, GraduationCap } from 'lucide-react';

const NSFAS: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          {t('nsfas.title', 'NSFAS Funding Information')}
        </h1>
        
        <p className="text-xl text-muted-foreground text-center mb-10">
          {t('nsfas.subtitle', 'Everything you need to know about National Student Financial Aid Scheme (NSFAS) funding for South African students')}
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                {t('nsfas.introduction.title', 'What is NSFAS?')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t('nsfas.introduction.content', 'The National Student Financial Aid Scheme (NSFAS) is a government-funded financial aid program designed to support academically capable but financially needy South African students in pursuing higher education at public universities and TVET colleges.')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                {t('nsfas.coverage.title', 'What NSFAS Covers')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('nsfas.coverage.tuition', 'Tuition fees')}</li>
                <li>{t('nsfas.coverage.accommodation', 'Accommodation (on or off campus)')}</li>
                <li>{t('nsfas.coverage.meals', 'Meals and food allowance')}</li>
                <li>{t('nsfas.coverage.books', 'Books and learning materials')}</li>
                <li>{t('nsfas.coverage.transport', 'Transport allowance')}</li>
                <li>{t('nsfas.coverage.personal', 'Personal care allowance')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-10" />
        
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t('nsfas.eligibility.title', 'Eligibility Criteria')}
        </h2>
        
        <Card className="mb-10">
          <CardContent className="pt-6">
            <p className="mb-4">
              {t('nsfas.eligibility.intro', 'To qualify for NSFAS funding, you must meet the following requirements:')}
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <span className="font-semibold">{t('nsfas.eligibility.citizenship', 'South African Citizenship:')}</span>
                {' '}{t('nsfas.eligibility.citizenshipDesc', 'You must be a South African citizen.')}
              </li>
              <li>
                <span className="font-semibold">{t('nsfas.eligibility.financial', 'Financial Need:')}</span>
                {' '}{t('nsfas.eligibility.financialDesc', 'Your combined household income must not exceed R350,000 per annum (approximately R29,167 per month).')}
              </li>
              <li>
                <span className="font-semibold">{t('nsfas.eligibility.institution', 'Accepted at an Institution:')}</span>
                {' '}{t('nsfas.eligibility.institutionDesc', 'You must be accepted for an undergraduate qualification at a public university or TVET college.')}
              </li>
              <li>
                <span className="font-semibold">{t('nsfas.eligibility.firstTime', 'First-Time Applicants:')}</span>
                {' '}{t('nsfas.eligibility.firstTimeDesc', 'Priority is given to first-time entering students and students who have never received NSFAS funding before.')}
              </li>
              <li>
                <span className="font-semibold">{t('nsfas.eligibility.academic', 'Academic Progression:')}</span>
                {' '}{t('nsfas.eligibility.academicDesc', 'Continuing students must have passed at least 50% of their modules in the previous academic year.')}
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t('nsfas.application.title', 'Application Process')}
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary-600" />
                {t('nsfas.application.step1.title', 'Check Deadlines')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('nsfas.application.step1.desc', 'Applications typically open in September and close in January. Check the NSFAS website for the most current application cycle.')}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary-600" />
                {t('nsfas.application.step2.title', 'Prepare Documents')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('nsfas.application.step2.desc', 'Gather your ID, parent/guardian IDs, proof of income, and academic records. Orphaned or disabled applicants need additional documentation.')}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary-600" />
                {t('nsfas.application.step3.title', 'Apply Online')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t('nsfas.application.step3.desc', 'Submit your application through the NSFAS website or the myNSFAS portal. Track your application status regularly after submission.')}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-12">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-700">
            <a href="https://www.nsfas.org.za" target="_blank" rel="noopener noreferrer">
              {t('nsfas.application.officialSite', 'Visit Official NSFAS Website')}
            </a>
          </Button>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t('nsfas.faq.title', 'Frequently Asked Questions')}
        </h2>
        
        <Accordion type="single" collapsible className="mb-10">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {t('nsfas.faq.q1', 'Do I need to repay NSFAS funding?')}
            </AccordionTrigger>
            <AccordionContent>
              {t('nsfas.faq.a1', 'NSFAS provides bursaries (not loans) to qualifying students, which means you do not need to repay the funding. However, you must meet academic progression requirements to continue receiving funding.')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {t('nsfas.faq.q2', 'Can I apply for NSFAS if I\'ve already started my studies?')}
            </AccordionTrigger>
            <AccordionContent>
              {t('nsfas.faq.a2', 'Yes, continuing students can apply for NSFAS funding. You must have passed at least 50% of your modules in the previous academic year to qualify.')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {t('nsfas.faq.q3', 'What happens if my NSFAS application is rejected?')}
            </AccordionTrigger>
            <AccordionContent>
              {t('nsfas.faq.a3', 'If your application is rejected, you can submit an appeal through the myNSFAS portal within the specified appeal period. Make sure to provide additional supporting documentation to strengthen your case.')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>
              {t('nsfas.faq.q4', 'Can I change my course or institution after receiving NSFAS funding?')}
            </AccordionTrigger>
            <AccordionContent>
              {t('nsfas.faq.a4', 'Yes, but you must notify NSFAS of any changes to your enrollment status. Transfers between institutions may require additional administrative processes.')}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>
              {t('nsfas.faq.q5', 'How are NSFAS allowances disbursed?')}
            </AccordionTrigger>
            <AccordionContent>
              {t('nsfas.faq.a5', 'Allowances are typically disbursed monthly through the NSFAS Wallet or direct bank transfers. The specific method depends on your institution\'s agreement with NSFAS.')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Card className="bg-blue-50 mb-10">
          <CardHeader>
            <CardTitle>
              {t('nsfas.tips.title', 'Tips for a Successful NSFAS Application')}
            </CardTitle>
            <CardDescription>
              {t('nsfas.tips.subtitle', 'Maximize your chances of approval with these helpful tips')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('nsfas.tips.early', 'Apply early to avoid last-minute technical issues.')}</li>
              <li>{t('nsfas.tips.documents', 'Ensure all submitted documents are clear and legible.')}</li>
              <li>{t('nsfas.tips.accurate', 'Double-check all information for accuracy before submission.')}</li>
              <li>{t('nsfas.tips.contact', 'Keep your contact information updated for communication about your application.')}</li>
              <li>{t('nsfas.tips.follow', 'Follow up regularly on your application status through the myNSFAS portal.')}</li>
              <li>{t('nsfas.tips.appeal', 'Don\'t hesitate to appeal if your initial application is unsuccessful.')}</li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <p className="italic text-muted-foreground mb-4">
            {t('nsfas.disclaimer', 'Disclaimer: The information provided on this page is for guidance purposes only. For the most up-to-date and official information, please visit the official NSFAS website.')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('nsfas.lastUpdated', 'Last updated: April 2023')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NSFAS;