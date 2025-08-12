
import { PrivateCollege } from '@shared/schema';

export const privateColleges: PrivateCollege[] = [
  {
    id: 1,
    name: "Varsity College",
    locations: ["Sandton", "Pretoria", "Cape Town", "Durban North", "Westville", "Pietermaritzburg", "Port Elizabeth", "East London"],
    website: "https://www.varsitycollege.co.za",
    logo: "/images/private-colleges/varsity-college-logo.svg",
    description: "Varsity College is an educational brand of The Independent Institute of Education (The IIE), providing quality private higher education in South Africa.",
    faculties: [
      "Commerce",
      "Law",
      "Humanities & Social Sciences",
      "Applied Science",
      "Information Technology"
    ],
    programs: [
      {
        name: "Bachelor of Commerce",
        duration: "3 years",
        level: "NQF 7",
        requirements: "Bachelor's Degree Pass with Mathematics",
        description: "A comprehensive commerce degree covering business, economics, and management"
      },
      {
        name: "Bachelor of Laws (LLB)",
        duration: "4 years",
        level: "NQF 8",
        requirements: "Bachelor's Degree Pass",
        description: "Professional law degree preparing students for legal practice"
      }
    ],
    applicationDeadlines: {
      semester1: "December 15",
      semester2: "June 15"
    },
    studentSupport: [
      "Career Centre",
      "Academic Support",
      "Student Wellness",
      "Study Skills Centre"
    ],
    accommodationAvailable: true,
    fees: {
      annual: "R65,000 - R85,000",
      registration: "R5,000"
    }
  }
];
