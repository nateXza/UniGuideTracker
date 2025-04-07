import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Profile, Assessment, Results, ProfileContextType } from '@/lib/types';

// Create context with default values
const ProfileContext = createContext<ProfileContextType>({
  profile: {},
  assessment: { answers: {} },
  results: {},
  updateProfile: () => {},
  updateAssessment: () => {},
  updateResults: () => {},
});

// Provider component
export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get stored data from localStorage if available
  const getStoredData = <T extends object>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue;
    
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultValue;
    } catch (error) {
      console.error(`Error retrieving ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  // Initialize state with stored values or defaults
  const [profile, setProfile] = useState<Profile>(getStoredData('uniguide-profile', {}));
  const [assessment, setAssessment] = useState<Assessment>(getStoredData('uniguide-assessment', { answers: {} }));
  const [results, setResults] = useState<Results>(getStoredData('uniguide-results', {}));

  // Update functions
  const updateProfile = (data: Partial<Profile>) => {
    const updatedProfile = { ...profile, ...data };
    setProfile(updatedProfile);
    localStorage.setItem('uniguide-profile', JSON.stringify(updatedProfile));
  };

  const updateAssessment = (data: Partial<Assessment>) => {
    const updatedAssessment = { 
      ...assessment, 
      ...data,
      answers: { ...assessment.answers, ...(data.answers || {}) }
    };
    setAssessment(updatedAssessment);
    localStorage.setItem('uniguide-assessment', JSON.stringify(updatedAssessment));
  };

  const updateResults = (data: Partial<Results>) => {
    const updatedResults = { ...results, ...data };
    setResults(updatedResults);
    localStorage.setItem('uniguide-results', JSON.stringify(updatedResults));
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        assessment,
        results,
        updateProfile,
        updateAssessment,
        updateResults,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook for using the profile context
export const useProfile = () => useContext(ProfileContext);
