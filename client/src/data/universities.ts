import { University } from '@/lib/types';

export const universities: University[] = [
  {
    id: 1,
    name: 'University of Cape Town',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d977758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/University_of_Cape_Town_logo.svg/1200px-University_of_Cape_Town_logo.svg.png',
    location: 'Cape Town',
    province: 'Western Cape',
    ratings: {
      studentSatisfaction: 4.5,
      academicExcellence: 4.8
    },
    tags: ['Top Ranked', 'Financial Aid', 'Research Excellence'],
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Logo_for_the_University_of_the_Witwatersrand%2C_Johannesburg_%28new_logo_as_of_2015%29.jpg',
    location: 'Johannesburg',
    province: 'Gauteng',
    ratings: {
      studentSatisfaction: 4.3,
      academicExcellence: 4.7
    },
    tags: ['Research Focus', 'Scholarships', 'Urban Campus'],
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SU_Logo_Centered.svg/1200px-SU_Logo_Centered.svg.png',
    location: 'Stellenbosch',
    province: 'Western Cape',
    ratings: {
      studentSatisfaction: 4.6,
      academicExcellence: 4.5
    },
    tags: ['Historic', 'NSFAS Approved', 'Scenic Campus'],
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/University_of_Pretoria_seal.svg/1200px-University_of_Pretoria_seal.svg.png',
    location: 'Pretoria',
    province: 'Gauteng',
    ratings: {
      studentSatisfaction: 4.2,
      academicExcellence: 4.4
    },
    tags: ['Research Intensive', 'Sports Excellence', 'Diverse Programs'],
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/University_of_KwaZulu-Natal_logo.svg/1200px-University_of_KwaZulu-Natal_logo.svg.png',
    location: 'Durban',
    province: 'KwaZulu-Natal',
    ratings: {
      studentSatisfaction: 4.0,
      academicExcellence: 4.1
    },
    tags: ['Multi-campus', 'NSFAS Approved', 'Cultural Diversity'],
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Rhodes_University_Logo.jpg',
    location: 'Grahamstown',
    province: 'Eastern Cape',
    ratings: {
      studentSatisfaction: 4.7,
      academicExcellence: 4.3
    },
    tags: ['Small Classes', 'Community Focused', 'High Pass Rates'],
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
  },
  {
    id: 7,
    name: 'University of Johannesburg',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/University_of_Johannesburg_Logo.svg/1200px-University_of_Johannesburg_Logo.svg.png',
    location: 'Johannesburg',
    province: 'Gauteng',
    ratings: {
      studentSatisfaction: 4.1,
      academicExcellence: 4.0
    },
    tags: ['Technology Focus', 'NSFAS Approved', 'Industry Connections'],
    programsOffered: [
      'Art, Design and Architecture',
      'Business and Economics',
      'Education',
      'Engineering and the Built Environment',
      'Health Sciences',
      'Humanities',
      'Law',
      'Science'
    ],
    description: 'UJ is a comprehensive university that embraces the 4th Industrial Revolution, offering industry-relevant programs.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 26-34 depending on the faculty.',
    tuitionRangeFees: 'R35,000 - R55,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 8,
    name: 'North-West University',
    image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/North-West_University_logo.svg/1200px-North-West_University_logo.svg.png',
    location: 'Potchefstroom',
    province: 'North West',
    ratings: {
      studentSatisfaction: 4.2,
      academicExcellence: 4.0
    },
    tags: ['Multilingual', 'Affordability', 'NSFAS Approved'],
    programsOffered: [
      'Commerce and Administration',
      'Education',
      'Engineering',
      'Health Sciences',
      'Humanities',
      'Law',
      'Natural and Agricultural Sciences',
      'Theology'
    ],
    description: 'NWU is known for its multilingual approach to education, with campuses in Potchefstroom, Vanderbijlpark, and Mahikeng.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 25-30 depending on the program.',
    tuitionRangeFees: 'R30,000 - R50,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 9,
    name: 'University of the Free State',
    image: 'https://images.unsplash.com/photo-1576834967753-06b2018937d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/University_of_the_Free_State_crest.svg/1200px-University_of_the_Free_State_crest.svg.png',
    location: 'Bloemfontein',
    province: 'Free State',
    ratings: {
      studentSatisfaction: 4.0,
      academicExcellence: 3.9
    },
    tags: ['Affordable Tuition', 'NSFAS Approved', 'Student Support'],
    programsOffered: [
      'Economic and Management Sciences',
      'Education',
      'Health Sciences',
      'Humanities',
      'Law',
      'Natural and Agricultural Sciences',
      'Theology and Religion'
    ],
    description: 'UFS provides quality education in a supportive environment with a focus on academic excellence and student success.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 30 points.',
    tuitionRangeFees: 'R25,000 - R45,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 10,
    name: 'Nelson Mandela University',
    image: 'https://images.unsplash.com/photo-1571057505848-8a8a55d9293b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Nelson_Mandela_University_logo.png',
    location: 'Port Elizabeth',
    province: 'Eastern Cape',
    ratings: {
      studentSatisfaction: 4.2,
      academicExcellence: 3.9
    },
    tags: ['Ocean Sciences', 'NSFAS Approved', 'Environmental Focus'],
    programsOffered: [
      'Arts',
      'Business and Economic Sciences',
      'Education',
      'Engineering, the Built Environment and Technology',
      'Health Sciences',
      'Law',
      'Science'
    ],
    description: 'Named after Nelson Mandela, this university is committed to creating sustainable futures, with a strong focus on marine and coastal studies.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 26-34 depending on the qualification.',
    tuitionRangeFees: 'R30,000 - R50,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'August 1'
  },
  {
    id: 11,
    name: 'University of the Western Cape',
    image: 'https://images.unsplash.com/photo-1557425529-a7a6d83dc78e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/49/UWC_Logo.png',
    location: 'Cape Town',
    province: 'Western Cape',
    ratings: {
      studentSatisfaction: 3.9,
      academicExcellence: 4.0
    },
    tags: ['Inclusive Education', 'NSFAS Approved', 'Research Innovation'],
    programsOffered: [
      'Arts',
      'Community and Health Sciences',
      'Dentistry',
      'Economic and Management Sciences',
      'Education',
      'Law',
      'Natural Sciences'
    ],
    description: 'UWC has a history of creative struggle against oppression, discrimination, and disadvantage, with a commitment to diversity and inclusion.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 27-30 depending on the faculty.',
    tuitionRangeFees: 'R30,000 - R45,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 12,
    name: 'University of Fort Hare',
    image: 'https://images.unsplash.com/photo-1560440021-33f9b67f75b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3d/University_of_Fort_Hare_logo.png',
    location: 'Alice',
    province: 'Eastern Cape',
    ratings: {
      studentSatisfaction: 3.7,
      academicExcellence: 3.8
    },
    tags: ['Historic Legacy', 'NSFAS Approved', 'Rural Development'],
    programsOffered: [
      'Education',
      'Health Sciences',
      'Humanities and Social Sciences',
      'Law',
      'Management and Commerce',
      'Science and Agriculture'
    ],
    description: 'With a rich history of producing African leaders, UFH is one of the oldest historically black universities in South Africa.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 25-30 depending on the program.',
    tuitionRangeFees: 'R25,000 - R40,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'October 31'
  },
  {
    id: 13,
    name: 'Cape Peninsula University of Technology',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/CPUT_Logo.svg/1200px-CPUT_Logo.svg.png',
    location: 'Cape Town',
    province: 'Western Cape',
    ratings: {
      studentSatisfaction: 3.8,
      academicExcellence: 3.7
    },
    tags: ['Technology Focus', 'NSFAS Approved', 'Practical Training'],
    programsOffered: [
      'Applied Sciences',
      'Business and Management Sciences',
      'Education',
      'Engineering',
      'Health and Wellness Sciences',
      'Informatics and Design'
    ],
    description: 'CPUT is the only university of technology in the Western Cape, emphasizing hands-on, career-focused education.',
    admissionRequirements: 'Diploma Pass or Bachelor\'s Pass with specific subject requirements.',
    tuitionRangeFees: 'R25,000 - R45,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  },
  {
    id: 14,
    name: 'Durban University of Technology',
    image: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Durban_University_of_Technology_logo.svg/800px-Durban_University_of_Technology_logo.svg.png',
    location: 'Durban',
    province: 'KwaZulu-Natal',
    ratings: {
      studentSatisfaction: 3.7,
      academicExcellence: 3.6
    },
    tags: ['Industry Partnerships', 'NSFAS Approved', 'Urban Campus'],
    programsOffered: [
      'Accounting and Informatics',
      'Applied Sciences',
      'Arts and Design',
      'Engineering and the Built Environment',
      'Health Sciences',
      'Management Sciences'
    ],
    description: 'DUT focuses on developing career-ready graduates with strong industry connections and practical training.',
    admissionRequirements: 'Diploma Pass or Bachelor\'s Pass with an APS score of at least 20-30 depending on the program.',
    tuitionRangeFees: 'R20,000 - R40,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 24'
  },
  {
    id: 15,
    name: 'University of Limpopo',
    image: 'https://images.unsplash.com/photo-1571260854488-70db8a8479a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/University_of_Limpopo_logo.svg/1200px-University_of_Limpopo_logo.svg.png',
    location: 'Polokwane',
    province: 'Limpopo',
    ratings: {
      studentSatisfaction: 3.6,
      academicExcellence: 3.5
    },
    tags: ['Rural Development', 'NSFAS Approved', 'Affordable'],
    programsOffered: [
      'Health Sciences',
      'Humanities',
      'Management and Law',
      'Science and Agriculture'
    ],
    description: 'UL is committed to finding solutions to rural development through innovative teaching and research.',
    admissionRequirements: 'Bachelor\'s Pass with an APS score of at least 26-30 depending on the program.',
    tuitionRangeFees: 'R20,000 - R40,000 per year',
    accommodationAvailable: true,
    applicationDeadline: 'September 30'
  }
];
