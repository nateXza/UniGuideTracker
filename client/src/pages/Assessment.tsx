import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import ProgressSteps from '@/components/ProgressSteps';
import { useTranslation } from '@/hooks/useTranslation';
import { useProfile } from '@/context/ProfileContext';
import { assessmentQuestions, testDescriptions } from '@/data/assessments';

// Type for test selection phase
type AssessmentPhase = 'selection' | 'questions' | 'summary';

const Assessment: React.FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useLocation();
  const { assessment, updateAssessment } = useProfile();
  
  const [phase, setPhase] = useState<AssessmentPhase>('selection');
  const [currentSection, setCurrentSection] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(assessment.answers || {});
  const [selectedTests, setSelectedTests] = useState<string[]>([]);

  const sections = assessmentQuestions;
  const questions = currentSection !== null ? sections[currentSection]?.questions || [] : [];
  const question = questions[currentQuestion];

  // Initialize the test selection with some defaults if no tests selected
  useEffect(() => {
    if (selectedTests.length === 0) {
      // Pre-select Holland and MBTI tests as good defaults
      setSelectedTests(['holland', 'personality']);
    }
  }, []);

  const handleTestSelection = (testId: string) => {
    if (selectedTests.includes(testId)) {
      setSelectedTests(selectedTests.filter(id => id !== testId));
    } else {
      setSelectedTests([...selectedTests, testId]);
    }
  };

  const handleStartAssessment = () => {
    // Find the index of the first selected test
    if (selectedTests.length === 0) {
      // If no tests selected, prompt user to select at least one
      return;
    }
    
    const firstTestIndex = sections.findIndex(section => 
      selectedTests.includes(section.id)
    );
    
    if (firstTestIndex >= 0) {
      setCurrentSection(firstTestIndex);
      setCurrentQuestion(0);
      setPhase('questions');
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSection === null) return;
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find next selected test
      let nextSection = -1;
      for (let i = currentSection + 1; i < sections.length; i++) {
        if (selectedTests.includes(sections[i].id)) {
          nextSection = i;
          break;
        }
      }
      
      if (nextSection >= 0) {
        setCurrentSection(nextSection);
        setCurrentQuestion(0);
      } else {
        // All tests completed
        updateAssessment({ answers });
        setPhase('summary');
      }
    }
  };

  const handlePrevious = () => {
    if (currentSection === null) return;
    
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // Find previous selected test
      let prevSection = -1;
      for (let i = currentSection - 1; i >= 0; i--) {
        if (selectedTests.includes(sections[i].id)) {
          prevSection = i;
          break;
        }
      }
      
      if (prevSection >= 0) {
        setCurrentSection(prevSection);
        setCurrentQuestion(sections[prevSection].questions.length - 1);
      }
    }
  };

  const handleFinishAssessment = () => {
    updateAssessment({ answers });
    navigate('/results');
  };

  // Calculate overall progress for selected tests
  const calculateProgress = () => {
    if (currentSection === null) return 0;
    
    let totalSelectedQuestions = 0;
    let completedQuestions = 0;
    let currentCount = 0;
    
    sections.forEach((section, sectionIndex) => {
      if (selectedTests.includes(section.id)) {
        const sectionQuestions = section.questions.length;
        totalSelectedQuestions += sectionQuestions;
        
        if (sectionIndex < currentSection) {
          completedQuestions += sectionQuestions;
        } else if (sectionIndex === currentSection) {
          completedQuestions += currentQuestion;
          currentCount = sectionQuestions;
        }
      }
    });
    
    return {
      progressPercentage: (completedQuestions / totalSelectedQuestions) * 100,
      questionNumber: completedQuestions + 1,
      totalQuestions: totalSelectedQuestions,
      currentSectionQuestions: currentCount
    };
  };

  const progress = calculateProgress();

  // Render functions for different phases
  const renderTestSelection = () => (
    <div className="bg-white shadow rounded-lg max-w-4xl mx-auto p-6 sm:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Select Assessment Tests
        </h3>
        <p className="text-gray-600">
          Choose the assessments that best match your guidance needs. We recommend taking at least two different assessments for the most comprehensive results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Aptitude Test Card */}
        <Card className={`cursor-pointer transition ${selectedTests.includes('aptitude') ? 'ring-2 ring-primary-500' : 'hover:shadow-md'}`}
              onClick={() => handleTestSelection('aptitude')}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{testDescriptions.dat.name}</CardTitle>
              {selectedTests.includes('aptitude') && (
                <Badge variant="default" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                  Selected
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm">
              Recommended for: {testDescriptions.dat.recommendedFor}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{testDescriptions.dat.description}</p>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-gray-500">
            Duration: {testDescriptions.dat.duration}
          </CardFooter>
        </Card>
        
        {/* Holland Code Card */}
        <Card className={`cursor-pointer transition ${selectedTests.includes('holland') ? 'ring-2 ring-primary-500' : 'hover:shadow-md'}`}
              onClick={() => handleTestSelection('holland')}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{testDescriptions.holland.name}</CardTitle>
              {selectedTests.includes('holland') && (
                <Badge variant="default" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                  Selected
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm">
              Recommended for: {testDescriptions.holland.recommendedFor}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{testDescriptions.holland.description}</p>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-gray-500">
            Duration: {testDescriptions.holland.duration}
          </CardFooter>
        </Card>
        
        {/* MBTI Card */}
        <Card className={`cursor-pointer transition ${selectedTests.includes('personality') ? 'ring-2 ring-primary-500' : 'hover:shadow-md'}`}
              onClick={() => handleTestSelection('personality')}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{testDescriptions.mbti.name}</CardTitle>
              {selectedTests.includes('personality') && (
                <Badge variant="default" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                  Selected
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm">
              Recommended for: {testDescriptions.mbti.recommendedFor}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{testDescriptions.mbti.description}</p>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-gray-500">
            Duration: {testDescriptions.mbti.duration}
          </CardFooter>
        </Card>
        
        {/* Academic Assessment Card */}
        <Card className={`cursor-pointer transition ${selectedTests.includes('academic') ? 'ring-2 ring-primary-500' : 'hover:shadow-md'}`}
              onClick={() => handleTestSelection('academic')}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{testDescriptions.academic.name}</CardTitle>
              {selectedTests.includes('academic') && (
                <Badge variant="default" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                  Selected
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm">
              Recommended for: {testDescriptions.academic.recommendedFor}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{testDescriptions.academic.description}</p>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-gray-500">
            Duration: {testDescriptions.academic.duration}
          </CardFooter>
        </Card>
        
        {/* Career Values Card */}
        <Card className={`cursor-pointer transition ${selectedTests.includes('career') ? 'ring-2 ring-primary-500' : 'hover:shadow-md'}`}
              onClick={() => handleTestSelection('career')}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Career Values Assessment</CardTitle>
              {selectedTests.includes('career') && (
                <Badge variant="default" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                  Selected
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm">
              Recommended for: All students exploring career directions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Explore your professional goals and values to help align your academic path with future career aspirations in South Africa.
            </p>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-gray-500">
            Duration: 15-20 minutes
          </CardFooter>
        </Card>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {selectedTests.length} test{selectedTests.length !== 1 ? 's' : ''} selected
        </div>
        <div className="space-x-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleStartAssessment}
            disabled={selectedTests.length === 0}
          >
            Begin Assessment
          </Button>
        </div>
      </div>
    </div>
  );

  const renderQuestions = () => {
    if (currentSection === null || !question) return null;
    
    return (
      <div className="bg-white shadow rounded-lg max-w-3xl mx-auto p-6 sm:p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {sections[currentSection].title}
            </h3>
            <Badge variant="outline" className="bg-primary-50">
              {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
          
          <p className="text-sm text-gray-500 mt-1">
            {sections[currentSection].description}
          </p>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Overall Progress</span>
              <span>{Math.round(progress.progressPercentage)}%</span>
            </div>
            <Progress value={progress.progressPercentage} className="h-2" />
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-4">{question.text}</h4>
          
          <RadioGroup
            value={answers[question.id] || ''}
            onValueChange={(value) => handleAnswer(question.id, value)}
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-md hover:bg-white">
                <RadioGroupItem value={option.value} id={`option-${question.id}-${index}`} />
                <Label className="flex-1" htmlFor={`option-${question.id}-${index}`}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

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
            {t('assessment.next')}
          </Button>
        </div>
      </div>
    );
  };

  const renderSummary = () => (
    <div className="bg-white shadow rounded-lg max-w-3xl mx-auto p-6 sm:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Assessment Complete!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          You've completed all selected assessments. Your results are ready to be analyzed to find your perfect university match.
        </p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <h4 className="font-medium text-gray-900 mb-2">Tests Completed:</h4>
        <ul className="space-y-2">
          {selectedTests.map(testId => {
            const section = sections.find(s => s.id === testId);
            if (!section) return null;
            
            // Count how many questions were answered for this test
            const questionCount = section.questions.length;
            const answeredCount = section.questions.filter(q => answers[q.id]).length;
            
            return (
              <li key={testId} className="flex items-center justify-between">
                <span>{section.title}</span>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  {answeredCount}/{questionCount} Complete
                </Badge>
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className="text-center">
        <Button 
          size="lg"
          onClick={handleFinishAssessment}
        >
          View My Results
        </Button>
        <p className="text-xs text-gray-500 mt-4">
          Your answers are saved and can be revisited later if needed.
        </p>
      </div>
    </div>
  );

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

        {/* Assessment Phases */}
        {phase === 'selection' && renderTestSelection()}
        {phase === 'questions' && renderQuestions()}
        {phase === 'summary' && renderSummary()}
      </div>
    </section>
  );
};

export default Assessment;
