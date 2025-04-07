import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import ProgressSteps from '@/components/ProgressSteps';
import { useTranslation } from '@/hooks/useTranslation';
import { useProfile } from '@/context/ProfileContext';
import { assessmentQuestions } from '@/data/assessments';

const Assessment: React.FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useLocation();
  const { assessment, updateAssessment } = useProfile();
  
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(assessment.answers || {});

  const sections = assessmentQuestions;
  const questions = sections[currentSection]?.questions || [];
  const question = questions[currentQuestion];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      // Assessment completed, save results and navigate to results page
      updateAssessment({ answers });
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };

  // Calculate overall progress
  const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  // Calculate current position
  let questionNumber = 0;
  for (let i = 0; i < currentSection; i++) {
    questionNumber += sections[i].questions.length;
  }
  questionNumber += currentQuestion + 1;

  return (
    <section className="bg-primary-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('assessment.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('assessment.subtitle')}
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps currentStep={2} />

        {/* Assessment form */}
        <div className="bg-white shadow rounded-lg max-w-3xl mx-auto p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {sections[currentSection].title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {t('assessment.progressLabel', { current: questionNumber, total: totalQuestions })}
            </p>
            <Progress value={progressPercentage} className="mt-4" />
          </div>

          {question && (
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">{question.text}</h4>
              
              <RadioGroup
                value={answers[question.id] || ''}
                onValueChange={(value) => handleAnswer(question.id, value)}
                className="space-y-3"
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`option-${question.id}-${index}`} />
                    <Label htmlFor={`option-${question.id}-${index}`}>{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentSection === 0 && currentQuestion === 0}
            >
              {t('assessment.previous')}
            </Button>
            <Button 
              onClick={handleNext}
              disabled={!answers[question?.id || '']}
            >
              {currentSection === sections.length - 1 && currentQuestion === questions.length - 1
                ? t('assessment.complete')
                : t('assessment.next')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
