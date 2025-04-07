import { Profile, AssessmentSection, UniversityMatch, CareerMatches, University } from '@/lib/types';
import { universities } from '@/data/universities';
import { fieldsOfStudy } from '@/data/fieldsOfStudy';

/**
 * Calculate the match percentage between a student and a university
 */
const calculateMatchPercentage = (
  profile: Profile,
  answers: Record<string, string>,
  university: University
): number => {
  let score = 0;
  let totalFactors = 0;

  // Academic factors (40% weight)
  if (profile.averageMark) {
    totalFactors++;
    // Higher scores for students with marks above university expectations
    const avgMarkScore = profile.averageMark >= 80 ? 1 : 
                          profile.averageMark >= 70 ? 0.9 :
                          profile.averageMark >= 60 ? 0.7 :
                          profile.averageMark >= 50 ? 0.5 : 0.3;
    score += avgMarkScore;
  }

  // Location preference (10% weight)
  if (profile.province) {
    totalFactors++;
    // Bonus for matching province
    score += (profile.province === university.province) ? 1 : 0.3;
  }

  // Field of study (30% weight)
  if (profile.fieldOfStudy) {
    totalFactors++;
    // Check if university offers programs in the student's field of interest
    const fieldOfStudy = fieldsOfStudy.find(f => f.name === profile.fieldOfStudy);
    if (fieldOfStudy) {
      // Look for related programs in university offerings
      const relatedPrograms = university.programsOffered.filter(program => 
        fieldOfStudy.careers.some(career => program.toLowerCase().includes(career.toLowerCase()) ||
        program.toLowerCase().includes(fieldOfStudy.name.toLowerCase()))
      );
      
      score += relatedPrograms.length > 0 ? 1 : 0.2;
    }
  }

  // Career alignment (20% weight)
  if (answers && Object.keys(answers).length > 0) {
    totalFactors++;
    
    // Simple personality match based on selected answers
    const personalityTraits = analyzePersonalityFromAnswers(answers);
    
    // Map personality traits to university characteristics
    let personalityScore = 0;
    
    // Analytical people may prefer research-focused universities
    if (personalityTraits.analytical > 0.6) {
      personalityScore += university.tags.includes('Research Focus') ? 1 : 0.5;
    }
    
    // Social people may value community aspects
    if (personalityTraits.social > 0.6) {
      personalityScore += university.tags.includes('Community Focused') ? 1 : 0.5;
    }
    
    // Conventional people may prefer structured environments
    if (personalityTraits.conventional > 0.6) {
      personalityScore += (university.ratings.academicExcellence > 4.5) ? 1 : 0.5;
    }
    
    // Average the personality score
    score += personalityScore / 3;
  }

  // Financial alignment
  if (profile.financialAid || profile.nsfasFunding) {
    totalFactors++;
    // Bonus for universities with financial aid tags
    score += (university.tags.includes('Financial Aid') || 
              university.tags.includes('Scholarships') || 
              university.tags.includes('NSFAS Approved')) ? 1 : 0.3;
  }

  // Calculate final percentage, ensuring we have at least one factor
  const finalScore = totalFactors > 0 ? (score / totalFactors) * 100 : 50;
  
  // Round to nearest integer
  return Math.round(finalScore);
};

/**
 * Get university matches for a student based on their profile and assessment
 */
export const getUniversityMatches = (
  profile: Profile,
  answers: Record<string, string>
): UniversityMatch[] => {
  // Determine program recommendation based on field of study and personality
  const getRecommendedProgram = (university: University, fieldOfStudy?: string): string => {
    if (!fieldOfStudy) return university.programsOffered[0];
    
    const field = fieldsOfStudy.find(f => f.name === fieldOfStudy);
    if (!field) return university.programsOffered[0];
    
    // Find matching program from university offerings
    for (const program of university.programsOffered) {
      if (program.toLowerCase().includes(fieldOfStudy.toLowerCase())) {
        return program;
      }
    }
    
    // If no direct match, return first program
    return university.programsOffered[0];
  };

  // Calculate match percentage for each university
  const matches = universities.map(university => {
    const matchPercentage = calculateMatchPercentage(profile, answers, university);
    const program = getRecommendedProgram(university, profile.fieldOfStudy);
    
    return {
      university,
      program,
      matchPercentage
    };
  });

  // Sort by match percentage descending
  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
};

/**
 * Analyze personality traits from assessment answers
 */
const analyzePersonalityFromAnswers = (answers: Record<string, string>): Record<string, number> => {
  // Initialize personality dimensions with default values
  const traits = {
    analytical: 0,
    creative: 0,
    social: 0,
    conventional: 0,
    enterprising: 0,
    realistic: 0,
    investigative: 0
  };
  
  // Count occurrences of each trait value
  const counts: Record<string, number> = {};
  let total = 0;
  
  Object.values(answers).forEach(value => {
    if (traits.hasOwnProperty(value)) {
      counts[value] = (counts[value] || 0) + 1;
    } else if (value === 'analytical') {
      counts['analytical'] = (counts['analytical'] || 0) + 1;
    } else if (value === 'innovative' || value === 'creative' || value === 'artistic') {
      counts['creative'] = (counts['creative'] || 0) + 1;
    } else if (value === 'collaborative' || value === 'supportive' || value === 'social' || value === 'empathetic') {
      counts['social'] = (counts['social'] || 0) + 1;
    } else if (value === 'conventional' || value === 'structured' || value === 'detail-oriented') {
      counts['conventional'] = (counts['conventional'] || 0) + 1;
    } else if (value === 'leading' || value === 'enterprising') {
      counts['enterprising'] = (counts['enterprising'] || 0) + 1;
    } else if (value === 'realistic' || value === 'practical') {
      counts['realistic'] = (counts['realistic'] || 0) + 1;
    } else if (value === 'investigative' || value === 'theoretical') {
      counts['investigative'] = (counts['investigative'] || 0) + 1;
    }
    total++;
  });
  
  // Convert counts to proportions
  Object.keys(traits).forEach(trait => {
    traits[trait as keyof typeof traits] = total > 0 ? (counts[trait] || 0) / total : 0;
  });
  
  return traits;
};

/**
 * Calculate career matches based on assessment answers
 */
export const calculateCareerMatches = (answers: Record<string, string>): CareerMatches => {
  // Analyze personality traits
  const traits = analyzePersonalityFromAnswers(answers);
  
  // Convert to sorted array of personality traits
  const personalityTraits = Object.entries(traits)
    .map(([trait, score]) => ({
      trait: trait.charAt(0).toUpperCase() + trait.slice(1),
      score: Math.round(score * 100)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); // Top 3 traits
  
  // Determine primary field of study based on top traits
  let primaryField = '';
  const topTrait = personalityTraits[0]?.trait.toLowerCase();
  
  if (topTrait === 'analytical' || topTrait === 'investigative') {
    primaryField = 'Natural Sciences';
  } else if (topTrait === 'creative' || topTrait === 'artistic') {
    primaryField = 'Humanities & Social Sciences';
  } else if (topTrait === 'social') {
    primaryField = 'Medicine & Health Sciences';
  } else if (topTrait === 'conventional') {
    primaryField = 'Business & Commerce';
  } else if (topTrait === 'enterprising') {
    primaryField = 'Business & Commerce';
  } else if (topTrait === 'realistic') {
    primaryField = 'Engineering & Technology';
  }
  
  // Get career recommendations based on primary field
  const field = fieldsOfStudy.find(f => f.name === primaryField);
  const recommendedCareers = field ? field.careers : [];
  
  // Get backup recommendations if primary field didn't match
  if (recommendedCareers.length === 0) {
    // Find top two traits and look for fields matching either
    const topTwoTraits = personalityTraits.slice(0, 2).map(t => t.trait.toLowerCase());
    
    for (const trait of topTwoTraits) {
      let matchField;
      
      if (trait === 'analytical' || trait === 'investigative') {
        matchField = fieldsOfStudy.find(f => f.name === 'Natural Sciences' || f.name === 'Engineering & Technology');
      } else if (trait === 'creative' || trait === 'artistic') {
        matchField = fieldsOfStudy.find(f => f.name === 'Humanities & Social Sciences');
      } else if (trait === 'social') {
        matchField = fieldsOfStudy.find(f => f.name === 'Medicine & Health Sciences' || f.name === 'Humanities & Social Sciences');
      } else if (trait === 'conventional' || trait === 'enterprising') {
        matchField = fieldsOfStudy.find(f => f.name === 'Business & Commerce' || f.name === 'Law');
      } else if (trait === 'realistic') {
        matchField = fieldsOfStudy.find(f => f.name === 'Engineering & Technology');
      }
      
      if (matchField && matchField.careers.length > 0) {
        primaryField = matchField.name;
        return {
          personalityTraits,
          recommendedCareers: matchField.careers,
          primaryCareer: matchField.careers[0]
        };
      }
    }
    
    // If still no matches, return a default set
    return {
      personalityTraits,
      recommendedCareers: ['Career Counselor', 'Human Resources Specialist', 'Education Consultant', 'Training Coordinator']
    };
  }
  
  return {
    personalityTraits,
    recommendedCareers,
    primaryCareer: recommendedCareers[0]
  };
};
