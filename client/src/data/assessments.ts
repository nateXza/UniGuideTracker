interface AssessmentOption {
  text: string;
  value: string;
}

interface AssessmentQuestion {
  id: string;
  text: string;
  options: AssessmentOption[];
}

interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
}

// Test types and descriptions based on South African academic and career guidance systems
export const testDescriptions = {
  dat: {
    name: 'Differential Aptitude Test (DAT)',
    description: 'Evaluates various cognitive abilities including verbal reasoning, numerical ability, abstract reasoning, and spatial relations to help identify academic and career strengths.',
    recommendedFor: 'Grade 9-12 students choosing subjects or considering career paths',
    duration: '30-45 minutes'
  },
  holland: {
    name: 'Holland Code (RIASEC) Assessment',
    description: 'Identifies your personality type as Realistic, Investigative, Artistic, Social, Enterprising, or Conventional, mapping these traits to suitable career fields.',
    recommendedFor: 'Students of all ages considering career options',
    duration: '20-30 minutes'
  },
  mbti: {
    name: 'Myers-Briggs Type Indicator',
    description: 'Explores personality preferences across four dimensions to understand how you perceive the world and make decisions.',
    recommendedFor: 'Older students refining career choices',
    duration: '25-35 minutes'
  },
  academic: {
    name: 'South African University Subject Choice Assessment',
    description: 'Evaluates specific academic readiness for university modules and helps align subject choices with degree requirements at South African universities.',
    recommendedFor: 'Grade 11-12 students preparing for university applications',
    duration: '30-40 minutes'
  }
};

export const assessmentQuestions: AssessmentSection[] = [
  // Differential Aptitude Test (DAT) - Inspired assessment
  {
    id: 'aptitude',
    title: 'Differential Aptitude Test (DAT)',
    description: 'This assessment evaluates various cognitive abilities to help identify your academic and career strengths.',
    questions: [
      {
        id: 'apt_1',
        text: 'When solving mathematical problems, I:',
        options: [
          { text: 'Quickly grasp numerical patterns and relationships', value: 'analytical' },
          { text: 'Can work through them step-by-step but need time', value: 'methodical' },
          { text: 'Often prefer to use visual methods like graphs or diagrams', value: 'visual' },
          { text: 'Find them challenging and prefer other types of problems', value: 'non-numerical' }
        ]
      },
      {
        id: 'apt_2',
        text: 'When reading complex text or instructions:',
        options: [
          { text: 'I easily understand and remember the main ideas and details', value: 'verbal-high' },
          { text: 'I grasp the main ideas but might miss some details', value: 'verbal-medium' },
          { text: 'I need to read multiple times to fully understand', value: 'verbal-developing' },
          { text: 'I prefer information presented visually or through demonstration', value: 'non-verbal' }
        ]
      },
      {
        id: 'apt_3',
        text: 'When looking at a mechanical diagram or exploded view:',
        options: [
          { text: 'I can easily visualize how the parts fit together in 3D', value: 'spatial-high' },
          { text: 'I can understand the basic structure but might miss some relationships', value: 'spatial-medium' },
          { text: 'I find it challenging to mentally visualize the complete assembly', value: 'spatial-developing' },
          { text: 'I strongly prefer written explanations to technical diagrams', value: 'verbal-preference' }
        ]
      },
      {
        id: 'apt_4',
        text: 'When faced with a logic puzzle or abstract pattern:',
        options: [
          { text: 'I quickly recognize patterns and can predict what comes next', value: 'abstract-high' },
          { text: 'With some time, I can usually figure out the underlying pattern', value: 'abstract-medium' },
          { text: 'I find abstract patterns challenging but can solve with effort', value: 'abstract-developing' },
          { text: 'I prefer concrete problems to abstract patterns', value: 'concrete-preference' }
        ]
      },
      {
        id: 'apt_5',
        text: 'When checking detailed work for errors:',
        options: [
          { text: 'I notice even small inconsistencies and details that others miss', value: 'detail-oriented' },
          { text: 'I can spot major errors but might miss minor details', value: 'balanced' },
          { text: 'I sometimes overlook details in favor of the big picture', value: 'big-picture' },
          { text: 'I find detail checking tedious and prefer creative tasks', value: 'creative-preference' }
        ]
      }
    ]
  },
  
  // Holland Code (RIASEC) Assessment
  {
    id: 'holland',
    title: 'Holland Code (RIASEC) Assessment',
    description: 'Discover your personality type and how it relates to different career paths. This assessment identifies your personality as Realistic, Investigative, Artistic, Social, Enterprising, or Conventional.',
    questions: [
      {
        id: 'hol_1',
        text: 'I would enjoy a job that involves:',
        options: [
          { text: 'Working with tools, machines, or outdoor activities', value: 'realistic' },
          { text: 'Research, analysis, and solving complex problems', value: 'investigative' },
          { text: 'Creative expression through art, music, or writing', value: 'artistic' },
          { text: 'Teaching, counseling, or helping others', value: 'social' }
        ]
      },
      {
        id: 'hol_2',
        text: 'I would prefer a work environment that:',
        options: [
          { text: 'Allows me to take charge and influence others', value: 'enterprising' },
          { text: 'Has clear structure, procedures, and expectations', value: 'conventional' },
          { text: 'Allows me to work with physical objects or outdoors', value: 'realistic' },
          { text: 'Encourages scientific thinking or theoretical analysis', value: 'investigative' }
        ]
      },
      {
        id: 'hol_3',
        text: 'I feel most satisfied when I can:',
        options: [
          { text: 'Create something new or express myself artistically', value: 'artistic' },
          { text: 'Help others or contribute to their wellbeing', value: 'social' },
          { text: 'Lead a project, persuade others, or achieve business goals', value: 'enterprising' },
          { text: 'Organize information or create efficient systems', value: 'conventional' }
        ]
      },
      {
        id: 'hol_4',
        text: 'In high school, I enjoy/enjoyed classes like:',
        options: [
          { text: 'Physical Education, Workshop, or Agriculture', value: 'realistic' },
          { text: 'Science, Mathematics, or Computer Studies', value: 'investigative' },
          { text: 'Art, Music, Drama, or Creative Writing', value: 'artistic' },
          { text: 'Life Orientation, Languages, or History', value: 'social' }
        ]
      },
      {
        id: 'hol_5',
        text: 'My friends and family would describe me as:',
        options: [
          { text: 'Practical, hands-on, and straightforward', value: 'realistic' },
          { text: 'Analytical, curious, and intellectual', value: 'investigative' },
          { text: 'Creative, expressive, and original', value: 'artistic' },
          { text: 'Helpful, friendly, and understanding', value: 'social' }
        ]
      },
      {
        id: 'hol_6',
        text: 'I would feel most comfortable in a career that involves:',
        options: [
          { text: 'Selling, persuading, or managing others', value: 'enterprising' },
          { text: 'Working with data, details, and systematic processes', value: 'conventional' },
          { text: 'Building, repairing, or working outdoors', value: 'realistic' },
          { text: 'Solving complex problems or conducting research', value: 'investigative' }
        ]
      }
    ]
  },
  
  // Myers-Briggs Type Indicator Inspired Assessment
  {
    id: 'personality',
    title: 'Personality Type Assessment',
    description: 'Based on the Myers-Briggs Type Indicator (MBTI), this assessment explores your personality preferences to help identify suitable academic and career paths.',
    questions: [
      {
        id: 'mbti_1',
        text: 'When meeting new people, I tend to:',
        options: [
          { text: 'Feel energized and enjoy expanding my social circle', value: 'extraverted' },
          { text: 'Prefer deeper connections with a smaller group of people', value: 'introverted' },
          { text: 'Be outgoing at first but need alone time to recharge afterward', value: 'ambivert-e' },
          { text: 'Take time to warm up but enjoy socializing once comfortable', value: 'ambivert-i' }
        ]
      },
      {
        id: 'mbti_2',
        text: 'When processing information, I prefer to focus on:',
        options: [
          { text: 'Facts, details, and concrete information', value: 'sensing' },
          { text: 'Patterns, possibilities, and theoretical concepts', value: 'intuitive' },
          { text: 'Practical applications with some consideration of future potential', value: 'sensing-some-intuitive' },
          { text: 'The big picture with attention to relevant details', value: 'intuitive-some-sensing' }
        ]
      },
      {
        id: 'mbti_3',
        text: 'When making important decisions, I typically:',
        options: [
          { text: 'Consider how choices affect people and maintain harmony', value: 'feeling' },
          { text: 'Analyze logically and objectively weigh pros and cons', value: 'thinking' },
          { text: 'Use logical analysis while considering the human element', value: 'thinking-some-feeling' },
          { text: 'Consider people\'s needs while looking for the most rational choice', value: 'feeling-some-thinking' }
        ]
      },
      {
        id: 'mbti_4',
        text: 'In my approach to work and planning, I prefer to:',
        options: [
          { text: 'Have clear structure, schedules, and closure on tasks', value: 'judging' },
          { text: 'Stay flexible, keep options open, and adapt as needed', value: 'perceiving' },
          { text: 'Plan ahead but remain open to last-minute changes', value: 'judging-some-perceiving' },
          { text: 'Go with the flow but appreciate some organization', value: 'perceiving-some-judging' }
        ]
      },
      {
        id: 'mbti_5',
        text: 'When learning something new, I prefer:',
        options: [
          { text: 'Practical examples and step-by-step instructions', value: 'sensing' },
          { text: 'Understanding underlying concepts and exploring possibilities', value: 'intuitive' },
          { text: 'A mix of theory and practical application', value: 'balanced-sn' },
          { text: 'Connecting new information to existing knowledge', value: 'intuitive-pattern' }
        ]
      }
    ]
  },
  
  // South African University Subject Choice Assessment
  {
    id: 'academic',
    title: 'University Academic Preparation Assessment',
    description: 'This assessment helps align your skills and preferences with specific academic programs at South African universities.',
    questions: [
      {
        id: 'acad_1',
        text: 'Which of these university learning environments would you prefer?',
        options: [
          { text: 'Laboratory or workshop with hands-on experiments', value: 'practical' },
          { text: 'Lecture hall with theoretical discussions', value: 'theoretical' },
          { text: 'Studio environment for creative work', value: 'creative' },
          { text: 'Combination of classroom learning and field experience', value: 'mixed' }
        ]
      },
      {
        id: 'acad_2',
        text: 'In your matric/high school studies, where do you/did you excel most?',
        options: [
          { text: 'Mathematics and Physical Sciences', value: 'stem' },
          { text: 'Languages, History, or Social Studies', value: 'humanities' },
          { text: 'Life Sciences or Geography', value: 'natural-sciences' },
          { text: 'Business Studies, Economics, or Accounting', value: 'commerce' }
        ]
      },
      {
        id: 'acad_3',
        text: 'When writing academic papers or completing projects, I:',
        options: [
          { text: 'Excel at research and analyzing information', value: 'research' },
          { text: 'Am good at organizing and presenting information clearly', value: 'organization' },
          { text: 'Bring creative or innovative perspectives', value: 'creative-thinking' },
          { text: 'Focus on practical applications and solutions', value: 'application' }
        ]
      },
      {
        id: 'acad_4',
        text: 'Regarding financial considerations for university:',
        options: [
          { text: 'I intend to apply for NSFAS funding', value: 'nsfas' },
          { text: 'I\'m interested in scholarships or bursaries', value: 'scholarship' },
          { text: 'I plan to work part-time while studying', value: 'work-study' },
          { text: 'Financial aid is not a major concern for me', value: 'self-funded' }
        ]
      },
      {
        id: 'acad_5',
        text: 'My preferred university location would be:',
        options: [
          { text: 'Urban area with access to industry connections', value: 'urban' },
          { text: 'Campus with strong community and cultural activities', value: 'community' },
          { text: 'Institution with top academic reputation regardless of location', value: 'reputation' },
          { text: 'Close to home to reduce living expenses', value: 'local' }
        ]
      },
      {
        id: 'acad_6',
        text: 'My approach to academic workload and studies is:',
        options: [
          { text: 'Highly disciplined with consistent study habits', value: 'disciplined' },
          { text: 'Able to handle pressure and deadline-driven work', value: 'pressure-driven' },
          { text: 'Prefer collaborative learning with study groups', value: 'collaborative' },
          { text: 'Independent learner who likes self-paced study', value: 'independent' }
        ]
      }
    ]
  },
  
  // Career Values and Aspirations 
  {
    id: 'career',
    title: 'Career Values and Aspirations',
    description: 'Explore your professional goals and values to help align your academic path with future career aspirations.',
    questions: [
      {
        id: 'car_1',
        text: 'What type of career impact is most important to you?',
        options: [
          { text: 'Contributing to social development and helping communities', value: 'social-impact' },
          { text: 'Advancing technology or scientific knowledge', value: 'innovation' },
          { text: 'Creating economic opportunities and business growth', value: 'economic' },
          { text: 'Preserving culture, education, or environmental sustainability', value: 'preservation' }
        ]
      },
      {
        id: 'car_2',
        text: 'Which South African industry sector interests you most?',
        options: [
          { text: 'Mining, Engineering, or Manufacturing', value: 'industrial' },
          { text: 'Healthcare, Education, or Social Services', value: 'service' },
          { text: 'Finance, Business, or Information Technology', value: 'commercial' },
          { text: 'Arts, Media, Tourism, or Creative Industries', value: 'creative-industries' }
        ]
      },
      {
        id: 'car_3',
        text: 'In your career, which of these is most important to you?',
        options: [
          { text: 'Job security and stable income', value: 'security' },
          { text: 'Opportunities for advancement and leadership', value: 'advancement' },
          { text: 'Work-life balance and personal fulfillment', value: 'balance' },
          { text: 'Continuous learning and professional development', value: 'growth' }
        ]
      },
      {
        id: 'car_4',
        text: 'Which workplace environment would you thrive in?',
        options: [
          { text: 'Corporate structure with clear advancement paths', value: 'corporate' },
          { text: 'Public service or government institution', value: 'public' },
          { text: 'Entrepreneurial or startup environment', value: 'entrepreneurial' },
          { text: 'Non-profit or community-based organization', value: 'non-profit' }
        ]
      },
      {
        id: 'car_5',
        text: 'How important is international experience in your career plan?',
        options: [
          { text: 'Very important - I hope to work globally', value: 'international' },
          { text: 'Somewhat important - I\'d like some international exposure', value: 'some-international' },
          { text: 'Not very important - I prefer focusing on South African opportunities', value: 'local-focus' },
          { text: 'Undecided - I\'m open to whatever opportunities arise', value: 'flexible' }
        ]
      }
    ]
  }
];
