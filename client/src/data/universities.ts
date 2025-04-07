import { University } from '@/lib/types';

export const universities: University[] = [
  {
    id: 1,
    name: 'University of Cape Town',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d977758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Cape Town',
    province: 'Western Cape',
    ratings: {
      studentSatisfaction: 4.5,
      academicExcellence: 4.8
    },
    tags: ['Top Ranked', 'Financial Aid'],
    programsOffered: [
      'Medicine and Health Sciences',
      'Engineering and Technology',
      'Commerce',
      'Humanities',
      'Law',
      'Science'
    ],
    description: 'UCT is South Africa\'s oldest university with a strong emphasis on research and academic excellence, consistently ranking as Africa\'s top university.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 36-42 depending on the degree program.',
    tuitionRangeFees: 'R60,000 - R80,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 2,
    name: 'University of Witwatersrand',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Johannesburg',
    province: 'Gauteng',
    ratings: {
      studentSatisfaction: 4.3,
      academicExcellence: 4.7
    },
    tags: ['Research Focus', 'Scholarships'],
    programsOffered: [
      'Engineering',
      'Medicine',
      'Science',
      'Commerce',
      'Humanities',
      'Law'
    ],
    description: 'Wits University is a leading research-intensive university located in the economic heartland of South Africa.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 34-42 depending on the faculty.',
    tuitionRangeFees: 'R45,000 - R70,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 3,
    name: 'Stellenbosch University',
    image: 'https://images.unsplash.com/photo-1534009502677-4c9c27408025?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Stellenbosch',
    province: 'Western Cape',
    ratings: {
      studentSatisfaction: 4.6,
      academicExcellence: 4.5
    },
    tags: ['Historic', 'NSFAS Approved'],
    programsOffered: [
      'Agriculture',
      'Arts and Social Sciences',
      'Economic and Management Sciences',
      'Engineering',
      'Medicine and Health Sciences',
      'Science'
    ],
    description: 'Stellenbosch University is a research-intensive university with a beautiful campus in the heart of the wine country.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 32-38 depending on the program.',
    tuitionRangeFees: 'R40,000 - R60,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'June 30'
  },
  {
    id: 4,
    name: 'University of Pretoria',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Pretoria',
    province: 'Gauteng',
    ratings: {
      studentSatisfaction: 4.2,
      academicExcellence: 4.4
    },
    tags: ['Research Intensive', 'Sports Excellence'],
    programsOffered: [
      'Economic and Management Sciences',
      'Engineering',
      'Built Environment and IT',
      'Education',
      'Health Sciences',
      'Humanities',
      'Law',
      'Natural and Agricultural Sciences',
      'Theology and Religion',
      'Veterinary Science'
    ],
    description: 'The University of Pretoria is one of South Africa\'s largest research universities known for academic excellence and international standing.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 30-35 depending on the faculty.',
    tuitionRangeFees: 'R36,000 - R65,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'August 31'
  },
  {
    id: 5,
    name: 'University of KwaZulu-Natal',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Durban',
    province: 'KwaZulu-Natal',
    ratings: {
      studentSatisfaction: 4.0,
      academicExcellence: 4.1
    },
    tags: ['Multi-campus', 'NSFAS Approved'],
    programsOffered: [
      'Agriculture, Engineering and Science',
      'Health Sciences',
      'Humanities',
      'Law and Management Studies'
    ],
    description: 'UKZN is a multi-campus university offering a wide range of undergraduate and postgraduate programs.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 28-33 depending on the program.',
    tuitionRangeFees: 'R30,000 - R50,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 6,
    name: 'Rhodes University',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Grahamstown',
    province: 'Eastern Cape',
    ratings: {
      studentSatisfaction: 4.7,
      academicExcellence: 4.3
    },
    tags: ['Small Classes', 'Community Focused'],
    programsOffered: [
      'Commerce',
      'Education',
      'Humanities',
      'Law',
      'Pharmacy',
      'Science'
    ],
    description: 'Rhodes University is a small university that enjoys a distinguished reputation for its academic excellence, commitment to scholarship, and high pass rates.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 40 points.',
    tuitionRangeFees: 'R40,000 - R55,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'August 1'
  }
];
