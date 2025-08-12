# UniGuide - South African University & Career Matching Platform

## Project Overview
A comprehensive digital platform designed to guide South African students through personalized university and career matching, with enhanced interface and data-driven career exploration tools.

## Key Components
- Personalized matching algorithm
- Career guidance system  
- Student-centric interface
- Advanced recommendation engine
- University comparison features
- TVET college integration
- Private college options
- Financial aid matching
- Academic bridging resources
- Community forums
- Mentorship programs
- Application timeline management

## Technology Stack
- **Frontend**: React with Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (React)
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation

## Project Architecture
The application follows a full-stack JavaScript architecture:

### Database Schema
- **Users & Profiles**: User authentication and student profile management
- **Educational Institutions**: TVET colleges, private colleges, and university data
- **Career Data**: Job market information, career recommendations
- **Assessment System**: Holland Code (RIASEC) personality assessments
- **Community Features**: Forums, mentorship, success stories
- **Financial Aid**: Comprehensive aid options and eligibility matching
- **Academic Support**: Bridging programs and pathways
- **Application Management**: Timeline tracking and milestone management

### Key Features
1. **Student Assessment**: RIASEC-based career matching
2. **Institution Matching**: Comprehensive database of educational options
3. **Financial Aid Guidance**: Personalized funding recommendations
4. **Career Exploration**: Data-driven career insights and projections
5. **Community Support**: Peer forums and mentorship programs
6. **Application Management**: Guided application timelines and milestones

## Recent Changes
- **2025-01-12**: Major fixes and improvements to UniGuide platform
  - Fixed syntax error in schema.ts preventing app startup
  - Resolved Select component runtime error in TVET Colleges page (empty value issue)
  - Replaced broken home page hero image with custom SVG illustration
  - Improved TVET college modal scrollability and layout
  - Added 4 new TVET colleges: Central Johannesburg, Coastal KZN, Eastcape Midlands, Capricorn
  - Created custom SVG logos for all new TVET colleges
  - Fixed broken Unsplash image URLs in university and blog data
  - Enhanced database from 6 to 10 TVET colleges with comprehensive program information
  - **FIXED DARK MODE**: Systematically replaced all hardcoded colors (text-gray-900, bg-white, bg-gray-50, etc.) with theme-aware CSS classes (text-foreground, bg-card, bg-background, text-muted-foreground) across all pages and components
  - Dark mode now applies consistently across the entire website
  - **IMPLEMENTED TVET MAP VIEW**: Created interactive South Africa map showing TVET college locations with clickable markers, hover effects, and college information popups
  - Added missing TVET Colleges link to Website Map page
  - Application running successfully on port 5000 with all features functional

## User Preferences
*To be documented based on user interactions*

## Development Notes
- Uses Drizzle ORM for database operations
- Schema migrations handled via `npm run db:push`
- All secret keys should be managed through environment variables
- Frontend-heavy architecture with minimal backend API surface