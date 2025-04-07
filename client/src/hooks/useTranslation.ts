import { useTranslation as useI18nTranslation } from 'react-i18next';

// Re-export the hook with a more convenient name and without duplicating functionality
export const useTranslation = () => {
  return useI18nTranslation();
};
