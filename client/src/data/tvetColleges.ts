import { TvetCollege } from '@shared/schema';

export const tvetColleges: TvetCollege[] = [
  {
    id: 1,
    name: "False Bay TVET College",
    province: "Western Cape",
    location: "Cape Town",
    website: "https://www.falsebaycollege.co.za",
    logo: "/images/tvet-colleges/falsebay-logo.png",
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
    logo: "/images/tvet-colleges/northlink-logo.png",
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
    logo: "/images/tvet-colleges/college-of-cape-town-logo.png",
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
    logo: "/images/tvet-colleges/ekurhuleni-east-logo.png",
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
    logo: "/images/tvet-colleges/umgungundlovu-logo.png",
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
    logo: "/images/tvet-colleges/king-hintsa-logo.png",
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
  }
];