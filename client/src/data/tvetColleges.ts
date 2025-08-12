import { TvetCollege } from '@shared/schema';

export const tvetColleges: TvetCollege[] = [
  {
    id: 1,
    name: "False Bay TVET College",
    province: "Western Cape",
    location: "Cape Town",
    website: "https://www.falsebaycollege.co.za",
    logo: "/images/tvet-colleges/falsebay-logo.svg",
    description: "False Bay TVET College is a leading Technical and Vocational Education and Training institution committed to quality skills development in South Africa. With five campuses across the Western Cape, the college offers a wide range of accredited programs and courses.",
    campuses: [
      "Muizenberg",
      "Khayelitsha",
      "Mitchell's Plain",
      "Westlake",
      "Fishoek"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Engineering & Related Design",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "This program prepares students for careers in various engineering fields, including fitting and turning, automotive repair, and fabrication."
      },
      {
        name: "National Certificate (Vocational) in Office Administration",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and English",
        description: "This program provides comprehensive training in office management, business communication, and computer applications."
      },
      {
        name: "National Certificate (Vocational) in Information Technology & Computer Science",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and English",
        description: "This program covers essential IT skills including programming, systems development, and network administration."
      },
      {
        name: "National Diploma in Business Management",
        duration: "18 months",
        level: "NQF 6",
        requirements: "National Certificate or equivalent",
        description: "The diploma in Business Management equips students with essential business skills and knowledge for career advancement."
      }
    ],
    applicationDeadlines: {
      semester1: "November 30",
      semester2: "May 31"
    },
    studentSupport: ["Career Guidance", "Academic Support", "Financial Aid Assistance", "Work Placement"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R12,000 - R18,000 per year",
      diploma: "R18,000 - R25,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: true,
    hospitalityPrograms: true,
    agriculture: false,
    media: false,
    safety: false,
    tourism: true,
  },
  {
    id: 2,
    name: "Northlink TVET College",
    province: "Western Cape",
    location: "Cape Town",
    website: "https://www.northlink.co.za",
    logo: "/images/tvet-colleges/northlink-logo.svg",
    description: "Northlink TVET College is a multi-campus technical and vocational education institution in the Western Cape. The college specializes in offering quality technical and occupational education that prepares students for the world of work.",
    campuses: [
      "Belhar",
      "Bellville",
      "Goodwood",
      "Parow",
      "Protea",
      "Tygerberg",
      "Wingfield"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Civil Engineering & Building Construction",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Physical Science",
        description: "This program focuses on construction techniques, building materials, and design principles for civil engineering projects."
      },
      {
        name: "National Certificate (Vocational) in Electrical Infrastructure Construction",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Physical Science",
        description: "Students learn about electrical systems, power distribution, and electronic control systems."
      },
      {
        name: "National Certificate (Vocational) in Automotive Repair and Maintenance",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Physical Science",
        description: "This program covers vehicle systems diagnosis, repair techniques, and automotive technology."
      }
    ],
    applicationDeadlines: {
      semester1: "October 31",
      semester2: "April 30"
    },
    studentSupport: ["Academic Support", "Career Counseling", "Job Placement Assistance", "Student Development"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R11,000 - R16,000 per year",
      diploma: "R15,000 - R22,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: true,
    hospitalityPrograms: true,
    agriculture: false,
    media: false,
    safety: true,
    tourism: true,
  },
  {
    id: 3,
    name: "College of Cape Town",
    province: "Western Cape",
    location: "Cape Town",
    website: "https://www.cct.edu.za",
    logo: "/images/tvet-colleges/college-of-cape-town-logo.svg",
    description: "The College of Cape Town is a leading TVET institution with multiple campuses across Cape Town. The college offers a diverse range of programs designed to meet the skills demands of various industries.",
    campuses: [
      "Athlone",
      "City",
      "Crawford",
      "Gardens",
      "Gugulethu",
      "Pinelands",
      "Thornton"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Tourism",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "This program prepares students for careers in the tourism and hospitality industry, covering guest relations, tourism operations, and event management."
      },
      {
        name: "National Certificate (Vocational) in Marketing",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "Students learn about marketing principles, consumer behavior, and advertising strategies."
      },
      {
        name: "National Certificate (Vocational) in Finance, Economics & Accounting",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics",
        description: "This program focuses on financial principles, accounting practices, and economic concepts."
      }
    ],
    applicationDeadlines: {
      semester1: "November 15",
      semester2: "May 15"
    },
    studentSupport: ["Financial Aid Office", "Career Guidance", "Counseling Services", "Work-Integrated Learning"],
    accommodationAvailable: false,
    fees: {
      nationalCertificate: "R10,500 - R15,000 per year",
      diploma: "R16,000 - R22,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: true,
    hospitalityPrograms: true,
    agriculture: false,
    media: true,
    safety: false,
    tourism: true,
  },
  {
    id: 4,
    name: "Ekurhuleni East TVET College",
    province: "Gauteng",
    location: "Johannesburg",
    website: "https://www.eec.edu.za",
    logo: "/images/tvet-colleges/ekurhuleni-east-logo.svg",
    description: "Ekurhuleni East TVET College is a public TVET college located in the Eastern region of Gauteng. The college focuses on developing technical and vocational skills to address the skills shortage in South Africa.",
    campuses: [
      "Benoni",
      "Brakpan",
      "Daveyton",
      "Kwa-Thema",
      "Springs"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Office Administration",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "This program prepares students for administrative roles, teaching business communication, office practice, and computer skills."
      },
      {
        name: "National Certificate (Vocational) in Engineering & Related Design",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Students learn engineering principles, technical drawing, and workshop practices."
      },
      {
        name: "National Certificate (Vocational) in Information Technology & Computer Science",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics",
        description: "This program focuses on computer programming, systems analysis, and network technologies."
      }
    ],
    applicationDeadlines: {
      semester1: "November 30",
      semester2: "June 15"
    },
    studentSupport: ["Academic Support", "Student Development", "Financial Aid", "Job Placement"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R9,000 - R14,000 per year",
      diploma: "R15,000 - R20,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: true,
    hospitalityPrograms: false,
    agriculture: false,
    media: false,
    safety: true,
    tourism: false,
  },
  {
    id: 5,
    name: "Umgungundlovu TVET College",
    province: "KwaZulu-Natal",
    location: "Pietermaritzburg",
    website: "https://www.umgungundlovu.edu.za",
    logo: "/images/tvet-colleges/umgungundlovu-logo.svg",
    description: "Umgungundlovu TVET College is a public technical and vocational education and training college located in KwaZulu-Natal. The college is committed to providing quality education and training to develop skilled professionals.",
    campuses: [
      "Midlands",
      "Msunduzi",
      "Edendale",
      "Plessislaer",
      "Richmond",
      "Imbali"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Primary Agriculture",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "This program covers crop production, animal husbandry, and agricultural management practices."
      },
      {
        name: "National Certificate (Vocational) in Hospitality",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "Students learn culinary skills, hospitality management, and customer service."
      },
      {
        name: "National Certificate (Vocational) in Safety in Society",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "This program prepares students for careers in law enforcement, security management, and criminology."
      }
    ],
    applicationDeadlines: {
      semester1: "October 31",
      semester2: "April 30"
    },
    studentSupport: ["Career Guidance", "Financial Aid Assistance", "Work-Integrated Learning", "Academic Support"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R8,500 - R13,500 per year",
      diploma: "R14,000 - R19,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: true,
    hospitalityPrograms: true,
    agriculture: true,
    media: false,
    safety: true,
    tourism: true,
  },
  {
    id: 6,
    name: "King Hintsa TVET College",
    province: "Eastern Cape",
    location: "Butterworth",
    website: "https://www.kinghintsacollege.edu.za",
    logo: "/images/tvet-colleges/king-hintsa-logo.svg",
    description: "King Hintsa TVET College is a public technical and vocational education institution in the Eastern Cape. The college focuses on skills development in rural communities and preparing students for employment or entrepreneurship.",
    campuses: [
      "Butterworth",
      "Dutywa",
      "Teko",
      "Willowvale",
      "Centane"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Primary Agriculture",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "This program provides comprehensive training in agricultural principles and practices relevant to rural development."
      },
      {
        name: "National Certificate (Vocational) in Office Administration",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "Students learn essential administrative skills, business communication, and office technology."
      },
      {
        name: "National Certificate (Vocational) in Engineering & Related Design",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "This program focuses on engineering principles, technical drawing, and fabrication techniques."
      }
    ],
    applicationDeadlines: {
      semester1: "November 15",
      semester2: "May 15"
    },
    studentSupport: ["Academic Support", "Financial Aid Office", "Student Development", "Career Guidance"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R7,500 - R12,000 per year",
      diploma: "R12,000 - R18,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: false,
    hospitalityPrograms: false,
    agriculture: true,
    media: false,
    safety: false,
    tourism: false,
  },
  {
    id: 7,
    name: "Central Johannesburg TVET College",
    province: "Gauteng",
    location: "Johannesburg",
    website: "https://www.cjc.edu.za",
    logo: "/images/tvet-colleges/central-johannesburg-logo.svg",
    description: "Central Johannesburg TVET College serves the vibrant heart of Johannesburg, offering industry-relevant programs designed to meet the skills demands of South Africa's economic hub.",
    campuses: [
      "Alexandra",
      "Braamfontein",
      "Johannesburg CBD",
      "Roodepoort",
      "Soweto"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Information Technology & Computer Science",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and English",
        description: "Comprehensive IT training covering programming, networking, and systems administration for the digital economy."
      },
      {
        name: "National Certificate (Vocational) in Business Studies",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Business Studies",
        description: "Business fundamentals, entrepreneurship, and management skills for modern commerce."
      },
      {
        name: "National Certificate (Vocational) in Engineering & Related Design",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Engineering design, manufacturing processes, and technical drawing for industrial careers."
      },
      {
        name: "National Certificate (Vocational) in Tourism",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Geography and English",
        description: "Tourism operations, travel services, and hospitality management for the growing tourism sector."
      }
    ],
    applicationDeadlines: {
      semester1: "December 31",
      semester2: "June 30"
    },
    studentSupport: ["Career Services", "Academic Mentoring", "Financial Aid", "Industry Partnerships"],
    accommodationAvailable: false,
    fees: {
      nationalCertificate: "R15,000 - R22,000 per year",
      diploma: "R22,000 - R30,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: true,
    hospitalityPrograms: false,
    agriculture: false,
    media: false,
    safety: false,
    tourism: true,
  },
  {
    id: 8,
    name: "Coastal KZN TVET College",
    province: "KwaZulu-Natal",
    location: "Durban",
    website: "https://www.coastalkzn.edu.za",
    logo: "/images/tvet-colleges/coastal-kzn-logo.svg",
    description: "Coastal KZN TVET College leverages the strategic coastal location to offer specialized maritime, logistics, and traditional technical programs serving the Port of Durban and surrounding industries.",
    campuses: [
      "Durban Central",
      "Umlazi",
      "Pinetown",
      "Chatsworth",
      "Isipingo"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Maritime Studies",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Specialized training for maritime careers including port operations, shipping, and marine engineering."
      },
      {
        name: "National Certificate (Vocational) in Logistics",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Business Studies",
        description: "Supply chain management, warehousing, and transportation logistics for the freight industry."
      },
      {
        name: "National Certificate (Vocational) in Hospitality & Catering",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with good communication skills",
        description: "Culinary arts, hotel management, and food service operations for the tourism industry."
      },
      {
        name: "National Certificate (Vocational) in Electrical Infrastructure Construction",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Electrical installation, maintenance, and infrastructure development for industrial applications."
      }
    ],
    applicationDeadlines: {
      semester1: "November 30",
      semester2: "May 31"
    },
    studentSupport: ["Career Placement", "Skills Development", "Industry Training", "Port Internships"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R13,000 - R19,000 per year",
      diploma: "R19,000 - R26,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: true,
    itPrograms: false,
    hospitalityPrograms: true,
    agriculture: false,
    media: false,
    safety: true,
    tourism: true,
  },
  {
    id: 9,
    name: "Eastcape Midlands TVET College",
    province: "Eastern Cape",
    location: "Graaff-Reinet",
    website: "https://www.emcollege.edu.za",
    logo: "/images/tvet-colleges/eastcape-midlands-logo.svg",
    description: "Eastcape Midlands TVET College serves the rural heartland of the Eastern Cape, focusing on agricultural development, renewable energy, and community-based technical education.",
    campuses: [
      "Graaff-Reinet",
      "Cradock",
      "Somerset East",
      "Pearston",
      "Aberdeen"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Agriculture",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Life Sciences and Mathematics",
        description: "Sustainable farming practices, livestock management, and agricultural technology for rural development."
      },
      {
        name: "National Certificate (Vocational) in Renewable Energy",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Solar energy systems, wind power technology, and sustainable energy solutions."
      },
      {
        name: "National Certificate (Vocational) in Civil Engineering & Building Construction",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Construction techniques, project management, and infrastructure development."
      },
      {
        name: "National Certificate (Vocational) in Automotive Repair & Maintenance",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Vehicle maintenance, diagnostic techniques, and automotive technology for rural transport needs."
      }
    ],
    applicationDeadlines: {
      semester1: "November 15",
      semester2: "May 15"
    },
    studentSupport: ["Rural Development Programs", "Agricultural Extension", "Entrepreneurship Support", "Community Outreach"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R8,000 - R14,000 per year",
      diploma: "R14,000 - R20,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: false,
    engineeringPrograms: true,
    itPrograms: false,
    hospitalityPrograms: false,
    agriculture: true,
    media: false,
    safety: false,
    tourism: false,
  },
  {
    id: 10,
    name: "Capricorn TVET College",
    province: "Limpopo",
    location: "Polokwane",
    website: "https://www.capricorncollege.edu.za",
    logo: "/images/tvet-colleges/capricorn-logo.svg",
    description: "Capricorn TVET College serves the Limpopo province with programs focused on mining, agriculture, and rural development, preparing students for careers in key regional industries.",
    campuses: [
      "Polokwane",
      "Seshego",
      "Mankweng",
      "Tzaneen",
      "Giyani"
    ],
    programs: [
      {
        name: "National Certificate (Vocational) in Mining",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Mathematics and Science",
        description: "Mining operations, safety procedures, and mineral processing for the platinum and other mining industries."
      },
      {
        name: "National Certificate (Vocational) in Agriculture",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Life Sciences",
        description: "Crop production, irrigation systems, and farm management for commercial and subsistence agriculture."
      },
      {
        name: "National Certificate (Vocational) in Primary Health Care",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with Life Sciences and English",
        description: "Community health care, basic nursing skills, and health promotion for rural communities."
      },
      {
        name: "National Certificate (Vocational) in Office Administration",
        duration: "3 years full-time",
        level: "NQF 4",
        requirements: "Grade 9 with English and Mathematics",
        description: "Administrative skills, computer literacy, and business communication for government and private sector."
      }
    ],
    applicationDeadlines: {
      semester1: "November 30",
      semester2: "May 31"
    },
    studentSupport: ["Mining Industry Partnerships", "Health Care Placements", "Agricultural Extension", "Language Support"],
    accommodationAvailable: true,
    fees: {
      nationalCertificate: "R9,000 - R15,000 per year",
      diploma: "R15,000 - R22,000 per year"
    },
    artisanPrograms: true,
    businessPrograms: true,
    engineeringPrograms: false,
    itPrograms: false,
    hospitalityPrograms: false,
    agriculture: true,
    media: false,
    safety: true,
    tourism: false,
  }
];