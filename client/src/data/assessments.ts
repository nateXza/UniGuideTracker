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

export const assessmentQuestions: AssessmentSection[] = [
  {
    id: 'cognitive',
    title: 'Cognitive Aptitude Assessment',
    description: 'Evaluate your analytical and problem-solving abilities',
    questions: [
      {
        id: 'cog_1',
        text: 'When solving problems, I prefer to:',
        options: [
          { text: 'Follow established procedures and methods', value: 'conventional' },
          { text: 'Find new and innovative solutions', value: 'innovative' },
          { text: 'Analyze all possible approaches methodically', value: 'analytical' },
          { text: 'Collaborate with others to find solutions', value: 'collaborative' }
        ]
      },
      {
        id: 'cog_2',
        text: 'When learning something new, I prefer to:',
        options: [
          { text: 'Read detailed explanations and instructions', value: 'verbal' },
          { text: 'See visual demonstrations or diagrams', value: 'visual' },
          { text: 'Try it out hands-on and learn from experience', value: 'kinesthetic' },
          { text: 'Discuss concepts and ask questions', value: 'auditory' }
        ]
      },
      {
        id: 'cog_3',
        text: 'When working on a project, I focus most on:',
        options: [
          { text: 'Meeting deadlines and achieving goals', value: 'practical' },
          { text: 'Understanding the underlying principles', value: 'theoretical' },
          { text: 'Finding creative and unique approaches', value: 'creative' },
          { text: 'Ensuring all details are correct and thorough', value: 'detail-oriented' }
        ]
      },
      {
        id: 'cog_4',
        text: 'I find it easier to remember:',
        options: [
          { text: 'Facts, names, and specific details', value: 'factual' },
          { text: 'Connections between concepts and the big picture', value: 'conceptual' },
          { text: 'Visual information like images and diagrams', value: 'visual-spatial' },
          { text: 'Steps in a process or sequence of events', value: 'sequential' }
        ]
      },
      {
        id: 'cog_5',
        text: 'When making decisions, I typically:',
        options: [
          { text: 'Analyze data and facts objectively', value: 'analytical' },
          { text: 'Consider how it will affect people involved', value: 'empathetic' },
          { text: 'Trust my instincts and intuition', value: 'intuitive' },
          { text: 'Weigh pros and cons methodically', value: 'logical' }
        ]
      }
    ]
  },
  {
    id: 'personality',
    title: 'Personality Assessment',
    description: 'Understand your personality type and work preferences',
    questions: [
      {
        id: 'per_1',
        text: 'In social situations, I tend to:',
        options: [
          { text: 'Feel energized by interacting with many people', value: 'extraverted' },
          { text: 'Prefer deeper conversations with fewer people', value: 'introverted' },
          { text: 'Enjoy being the center of attention', value: 'expressive' },
          { text: 'Observe and listen more than speak', value: 'reflective' }
        ]
      },
      {
        id: 'per_2',
        text: 'When approaching a task, I prefer to:',
        options: [
          { text: 'Follow a detailed plan with clear steps', value: 'structured' },
          { text: 'Adapt as I go and keep options open', value: 'flexible' },
          { text: 'Work intensively until completion', value: 'focused' },
          { text: 'Take breaks and work in bursts of energy', value: 'varied' }
        ]
      },
      {
        id: 'per_3',
        text: 'When facing a challenge, I typically:',
        options: [
          { text: 'Find practical, real-world solutions', value: 'realistic' },
          { text: 'Consider new possibilities and theories', value: 'innovative' },
          { text: 'Rely on what has worked in the past', value: 'traditional' },
          { text: 'Look for the most efficient approach', value: 'efficient' }
        ]
      },
      {
        id: 'per_4',
        text: 'In group projects, I usually take the role of:',
        options: [
          { text: 'Leader or coordinator', value: 'leading' },
          { text: 'Idea generator or innovator', value: 'creative' },
          { text: 'Detail checker or quality controller', value: 'analytical' },
          { text: 'Mediator or harmonizer', value: 'supportive' }
        ]
      },
      {
        id: 'per_5',
        text: 'My approach to rules and guidelines is:',
        options: [
          { text: 'Follow them carefully and consistently', value: 'conventional' },
          { text: 'Question them and suggest improvements', value: 'questioning' },
          { text: 'Adapt them to the specific situation', value: 'adaptable' },
          { text: 'Understand the reasoning behind them first', value: 'analytical' }
        ]
      }
    ]
  },
  {
    id: 'interests',
    title: 'Interest Mapping',
    description: 'Discover your academic and career interests',
    questions: [
      {
        id: 'int_1',
        text: 'I enjoy activities that involve:',
        options: [
          { text: 'Working with my hands and physical skills', value: 'realistic' },
          { text: 'Research, analysis, and solving complex problems', value: 'investigative' },
          { text: 'Creative expression and artistic pursuits', value: 'artistic' },
          { text: 'Helping, teaching, or providing care for others', value: 'social' }
        ]
      },
      {
        id: 'int_2',
        text: 'I am most interested in subjects related to:',
        options: [
          { text: 'Science, mathematics, and technology', value: 'stem' },
          { text: 'Language, history, and cultural studies', value: 'humanities' },
          { text: 'Business, economics, and management', value: 'commerce' },
          { text: 'Health, medicine, and wellness', value: 'health' }
        ]
      },
      {
        id: 'int_3',
        text: 'In my spare time, I prefer to:',
        options: [
          { text: 'Read, write, or engage in intellectual activities', value: 'intellectual' },
          { text: 'Create things or express myself artistically', value: 'creative' },
          { text: 'Socialize and participate in community events', value: 'social' },
          { text: 'Engage in sports or outdoor activities', value: 'physical' }
        ]
      },
      {
        id: 'int_4',
        text: 'I would find it most satisfying to work in an environment that:',
        options: [
          { text: 'Is structured and organized', value: 'conventional' },
          { text: 'Encourages innovation and creative thinking', value: 'innovative' },
          { text: 'Focuses on helping people directly', value: 'service-oriented' },
          { text: 'Offers leadership and influence opportunities', value: 'enterprising' }
        ]
      },
      {
        id: 'int_5',
        text: 'I am motivated by work that:',
        options: [
          { text: 'Makes a positive difference in society', value: 'social-impact' },
          { text: 'Offers financial stability and security', value: 'security' },
          { text: 'Provides constant learning and growth', value: 'growth' },
          { text: 'Allows for independence and self-direction', value: 'autonomy' }
        ]
      }
    ]
  },
  {
    id: 'career',
    title: 'Career Aspirations',
    description: 'Explore your professional goals and values',
    questions: [
      {
        id: 'car_1',
        text: 'My ideal work environment is:',
        options: [
          { text: 'Fast-paced with variety and challenges', value: 'dynamic' },
          { text: 'Stable and predictable with clear expectations', value: 'structured' },
          { text: 'Collaborative with plenty of teamwork', value: 'collaborative' },
          { text: 'Independent with autonomy to make decisions', value: 'autonomous' }
        ]
      },
      {
        id: 'car_2',
        text: 'In my career, I prioritize:',
        options: [
          { text: 'Making a positive impact on society', value: 'impact' },
          { text: 'Achieving financial success and stability', value: 'financial' },
          { text: 'Continuous learning and intellectual growth', value: 'growth' },
          { text: 'Work-life balance and personal fulfillment', value: 'balance' }
        ]
      },
      {
        id: 'car_3',
        text: 'I would prefer a career that involves:',
        options: [
          { text: 'Analysis, research, and problem-solving', value: 'analytical' },
          { text: 'Leadership, management, and strategic planning', value: 'leadership' },
          { text: 'Creativity, design, and innovation', value: 'creative' },
          { text: 'Teaching, counseling, or supporting others', value: 'supportive' }
        ]
      },
      {
        id: 'car_4',
        text: 'My approach to career advancement is:',
        options: [
          { text: 'Climbing the corporate ladder in an organization', value: 'traditional' },
          { text: 'Becoming an expert or specialist in my field', value: 'specialist' },
          { text: 'Building my own business or practice', value: 'entrepreneurial' },
          { text: 'Finding a role that aligns with my values and interests', value: 'values-driven' }
        ]
      },
      {
        id: 'car_5',
        text: 'When considering future career options, I am most concerned about:',
        options: [
          { text: 'Job security and stability in the industry', value: 'security' },
          { text: 'Opportunities for growth and advancement', value: 'advancement' },
          { text: 'Doing work that feels meaningful and important', value: 'meaning' },
          { text: 'Having flexibility and control over my schedule', value: 'flexibility' }
        ]
      }
    ]
  }
];
