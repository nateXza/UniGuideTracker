// User and profile related types
export interface Profile {
  firstName?: string;
  lastName?: string;
  email?: string;
  grade?: string;
  province?: string;
  averageMark?: number;
  mathMark?: number;
  scienceMark?: number;
  englishMark?: number;
  fieldOfStudy?: string;
  financialAid?: boolean;
  nsfasFunding?: boolean;
}

export interface Assessment {
  answers: Record<string, string>;
}

export interface PersonalityTrait {
  trait: string;
  score: number;
}

export interface CareerMatches {
  personalityTraits: PersonalityTrait[];
  recommendedCareers: string[];
  primaryCareer?: string;
}

export interface UniversityMatch {
  university: University;
  program: string;
  matchPercentage: number;
}

export interface Results {
  universityMatches?: UniversityMatch[];
  careerMatches?: CareerMatches;
  matchDate?: string;
}

// University related types
export interface UniversityRating {
  studentSatisfaction: number;
  academicExcellence: number;
}

export interface University {
  id: number;
  name: string;
  image: string;
  logo?: string; // Official university logo
  location: string;
  province: string;
  ratings: UniversityRating;
  tags: string[];
  programsOffered: string[];
  description: string;
  admissionRequirements: string;
  tuitionRangeFees: string;
  accommodationAvailable: boolean;
  applicationDeadline: string;
}

// Testimonial related types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  initials: string;
  rating: number;
}

// Assessment question types
export interface AssessmentOption {
  text: string;
  value: string;
}

export interface AssessmentQuestion {
  id: string;
  text: string;
  options: AssessmentOption[];
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
}

// Study field types
export interface FieldOfStudy {
  id: number;
  name: string;
  careers: string[];
}

// Context related types
export interface ProfileContextType {
  profile: Profile;
  assessment: Assessment;
  results: Results;
  updateProfile: (data: Partial<Profile>) => void;
  updateAssessment: (data: Partial<Assessment>) => void;
  updateResults: (data: Partial<Results>) => void;
}
