import { pgTable, text, serial, integer, boolean, jsonb, real, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  province: text("province"),
  language: text("language").default("en"),
  createdAt: text("created_at").notNull().default("NOW()"),
});

// Student profile table
export const studentProfiles = pgTable("student_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  grade: text("grade").notNull(),
  averageMark: real("average_mark"),
  mathMark: real("math_mark"),
  scienceMark: real("science_mark"),
  englishMark: real("english_mark"),
  preferredFieldOfStudy: text("preferred_field_of_study"),
  financialAid: boolean("financial_aid").default(false),
  nsfasFunding: boolean("nsfas_funding").default(false),
  updatedAt: text("updated_at").notNull().default("NOW()"),
});

// Assessment results table
export const assessmentResults = pgTable("assessment_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  hollandCode: jsonb("holland_code").notNull(), // RIASEC model scores
  personalityType: text("personality_type"), // MBTI-inspired type
  learningStyle: text("learning_style"),
  careerRecommendations: jsonb("career_recommendations"),
  completedAt: text("completed_at").notNull().default("NOW()"),
});

// University matches table
export const universityMatches = pgTable("university_matches", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  universityRankings: jsonb("university_rankings").notNull(),
  fieldOfStudy: text("field_of_study"),
  matchDate: text("match_date").notNull().default("NOW()"),
});

// TVET colleges table
export const tvetColleges = pgTable("tvet_colleges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  province: text("province").notNull(),
  location: text("location").notNull(),
  website: text("website"),
  logo: text("logo"),
  description: text("description").notNull(),
  campuses: jsonb("campuses").$type<string[]>(),
  programs: jsonb("programs").$type<{
    name: string;
    duration: string;
    level: string;
    requirements: string;
    description: string;
  }[]>(),
  applicationDeadlines: jsonb("application_deadlines").$type<{
    semester1: string;
    semester2: string;

// Private colleges table
export const privateColleges = pgTable("private_colleges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  locations: jsonb("locations").$type<string[]>(),
  website: text("website"),
  logo: text("logo"),
  description: text("description").notNull(),
  faculties: jsonb("faculties").$type<string[]>(),
  programs: jsonb("programs").$type<{
    name: string;
    duration: string;
    level: string;
    requirements: string;
    description: string;
  }[]>(),
  applicationDeadlines: jsonb("application_deadlines").$type<{
    semester1: string;
    semester2: string;
  }>(),
  studentSupport: jsonb("student_support").$type<string[]>(),
  accommodationAvailable: boolean("accommodation_available").default(false),
  fees: jsonb("fees").$type<{
    annual: string;
    registration: string;
  }>(),
});

export type PrivateCollege = typeof privateColleges.$inferSelect;

  }>(),
  studentSupport: jsonb("student_support").$type<string[]>(),
  accommodationAvailable: boolean("accommodation_available").default(false),
  fees: jsonb("fees").$type<{
    nationalCertificate: string;
    diploma: string;
  }>(),
  artisanPrograms: boolean("artisan_programs").default(false),
  businessPrograms: boolean("business_programs").default(false),
  engineeringPrograms: boolean("engineering_programs").default(false),
  itPrograms: boolean("it_programs").default(false),
  hospitalityPrograms: boolean("hospitality_programs").default(false),
  agriculture: boolean("agriculture").default(false),
  media: boolean("media").default(false),
  safety: boolean("safety").default(false),
  tourism: boolean("tourism").default(false),
});

// Career/job market data table
export const careerJobMarketData = pgTable("career_job_market_data", {
  id: serial("id").primaryKey(),
  career: text("career").notNull(),
  field: text("field").notNull(),
  averageSalary: integer("average_salary"),
  employmentRate: real("employment_rate"),
  growthProjection: text("growth_projection"),
  skillsRequired: jsonb("skills_required"),
  qualificationsRequired: jsonb("qualifications_required"),
  jobOpenings: integer("job_openings"),
  lastUpdated: timestamp("last_updated").notNull().defaultNow(),
});

// Success stories table
export const successStories = pgTable("success_stories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  institution: text("institution").notNull(),
  graduationYear: integer("graduation_year"),
  fieldOfStudy: text("field_of_study").notNull(),
  currentRole: text("current_role").notNull(),
  companyIndustry: text("company_industry").notNull(),
  testimonial: text("testimonial").notNull(),
  image: text("image"),
  featured: boolean("featured").default(false),
});

// Financial aid options table
export const financialAidOptions = pgTable("financial_aid_options", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), 
  type: text("type").notNull(), // bursary, scholarship, loan, work-study
  provider: text("provider").notNull(),
  description: text("description").notNull(),
  eligibilityCriteria: jsonb("eligibility_criteria"),
  coversTuition: boolean("covers_tuition").default(false),
  coversAccommodation: boolean("covers_accommodation").default(false),
  coversMeals: boolean("covers_meals").default(false),
  coversBooks: boolean("covers_books").default(false),
  coversStipend: boolean("covers_stipend").default(false),
  applicationLink: text("application_link"),
  applicationDeadline: text("application_deadline"),
  documents: jsonb("documents"),
  specificInstitutions: jsonb("specific_institutions"),
  specificFields: jsonb("specific_fields"),
  minimumAcademicRequirements: text("minimum_academic_requirements"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
});

// Academic bridging resources table
export const academicBridgingResources = pgTable("academic_bridging_resources", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // foundation program, online course, private college, etc.
  provider: text("provider").notNull(),
  description: text("description").notNull(),
  website: text("website"),
  targetSubjects: jsonb("target_subjects"), // math, science, english, etc.
  duration: text("duration"),
  cost: text("cost"),
  deliveryMethod: text("delivery_method"), // online, in-person, hybrid
  qualificationEarned: text("qualification_earned"),
  careerOutcomes: jsonb("career_outcomes"),
  universityPathways: jsonb("university_pathways"),
  tvetPathways: jsonb("tvet_pathways"),
  applicationDeadline: text("application_deadline"),
  startDates: jsonb("start_dates"),
  contactDetails: jsonb("contact_details"),
});

// Forum tables
export const forumCategories = pgTable("forum_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  slug: text("slug").notNull().unique(),
  sortOrder: integer("sort_order").default(0),
  parentId: integer("parent_id"),
});

export const forumTopics = pgTable("forum_topics", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").notNull().references(() => forumCategories.id),
  userId: integer("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  pinned: boolean("pinned").default(false),
  locked: boolean("locked").default(false),
  views: integer("views").default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const forumPosts = pgTable("forum_posts", {
  id: serial("id").primaryKey(),
  topicId: integer("topic_id").notNull().references(() => forumTopics.id),
  userId: integer("user_id").notNull().references(() => users.id),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  isAnswer: boolean("is_answer").default(false),
  upvotes: integer("upvotes").default(0),
  downvotes: integer("downvotes").default(0),
});

// Mentorship program tables
export const mentors = pgTable("mentors", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  institution: text("institution").notNull(),
  fieldOfStudy: text("field_of_study").notNull(),
  yearOfStudy: integer("year_of_study"),
  graduationYear: integer("graduation_year"),
  bio: text("bio").notNull(),
  expertise: jsonb("expertise"),
  maxMentees: integer("max_mentees").default(3),
  currentMentees: integer("current_mentees").default(0),
  status: text("status").default("active"), // active, inactive, pending
  mentorScore: real("mentor_score"),
  availableHoursPerWeek: integer("available_hours_per_week"),
  approved: boolean("approved").default(false),
});

export const mentorships = pgTable("mentorships", {
  id: serial("id").primaryKey(),
  mentorId: integer("mentor_id").notNull().references(() => mentors.id),
  menteeId: integer("mentee_id").notNull().references(() => users.id),
  status: text("status").default("pending"), // pending, active, completed, cancelled
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  goals: jsonb("goals"),
  notes: text("notes"),
  mentorFeedback: text("mentor_feedback"),
  menteeFeedback: text("mentee_feedback"),
  lastInteraction: timestamp("last_interaction"),
});

// Personalized roadmap features
export const applicationTimelines = pgTable("application_timelines", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  description: text("description"),
  targetYear: integer("target_year").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const applicationMilestones = pgTable("application_milestones", {
  id: serial("id").primaryKey(),
  timelineId: integer("timeline_id").notNull().references(() => applicationTimelines.id),
  name: text("name").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date").notNull(),
  completed: boolean("completed").default(false),
  completedDate: timestamp("completed_date"),
  priority: text("priority").default("medium"), // high, medium, low
  notificationSent: boolean("notification_sent").default(false),
  category: text("category"), // documents, tests, applications, etc.
  documentsList: jsonb("documents_list"), // Required documents for this milestone
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertStudentProfileSchema = createInsertSchema(studentProfiles).omit({
  id: true,
  updatedAt: true,
});

export const insertAssessmentResultSchema = createInsertSchema(assessmentResults).omit({
  id: true,
  completedAt: true,
});

export const insertUniversityMatchSchema = createInsertSchema(universityMatches).omit({
  id: true,
  matchDate: true,
});

export const insertTvetCollegeSchema = createInsertSchema(tvetColleges).omit({
  id: true,
});

export const insertCareerJobMarketDataSchema = createInsertSchema(careerJobMarketData).omit({
  id: true,
  lastUpdated: true,
});

export const insertSuccessStorySchema = createInsertSchema(successStories).omit({
  id: true,
});

export const insertFinancialAidOptionSchema = createInsertSchema(financialAidOptions).omit({
  id: true,
});

export const insertAcademicBridgingResourceSchema = createInsertSchema(academicBridgingResources).omit({
  id: true,
});

export const insertForumCategorySchema = createInsertSchema(forumCategories).omit({
  id: true,
});

export const insertForumTopicSchema = createInsertSchema(forumTopics).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  views: true,
});

export const insertForumPostSchema = createInsertSchema(forumPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  upvotes: true,
  downvotes: true,
});

export const insertMentorSchema = createInsertSchema(mentors).omit({
  id: true,
  currentMentees: true,
  mentorScore: true,
  approved: true,
});

export const insertMentorshipSchema = createInsertSchema(mentorships).omit({
  id: true,
  lastInteraction: true,
});

export const insertApplicationTimelineSchema = createInsertSchema(applicationTimelines).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertApplicationMilestoneSchema = createInsertSchema(applicationMilestones).omit({
  id: true,
  completedDate: true,
  notificationSent: true,
});

// Define types based on schemas
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertStudentProfile = z.infer<typeof insertStudentProfileSchema>;
export type StudentProfile = typeof studentProfiles.$inferSelect;

export type InsertAssessmentResult = z.infer<typeof insertAssessmentResultSchema>;
export type AssessmentResult = typeof assessmentResults.$inferSelect;

export type InsertUniversityMatch = z.infer<typeof insertUniversityMatchSchema>;
export type UniversityMatch = typeof universityMatches.$inferSelect;

export type InsertTvetCollege = z.infer<typeof insertTvetCollegeSchema>;
export type TvetCollege = typeof tvetColleges.$inferSelect;

export type InsertCareerJobMarketData = z.infer<typeof insertCareerJobMarketDataSchema>;
export type CareerJobMarketData = typeof careerJobMarketData.$inferSelect;

export type InsertSuccessStory = z.infer<typeof insertSuccessStorySchema>;
export type SuccessStory = typeof successStories.$inferSelect;

export type InsertFinancialAidOption = z.infer<typeof insertFinancialAidOptionSchema>;
export type FinancialAidOption = typeof financialAidOptions.$inferSelect;

export type InsertAcademicBridgingResource = z.infer<typeof insertAcademicBridgingResourceSchema>;
export type AcademicBridgingResource = typeof academicBridgingResources.$inferSelect;

export type InsertForumCategory = z.infer<typeof insertForumCategorySchema>;
export type ForumCategory = typeof forumCategories.$inferSelect;

export type InsertForumTopic = z.infer<typeof insertForumTopicSchema>;
export type ForumTopic = typeof forumTopics.$inferSelect;

export type InsertForumPost = z.infer<typeof insertForumPostSchema>;
export type ForumPost = typeof forumPosts.$inferSelect;

export type InsertMentor = z.infer<typeof insertMentorSchema>;
export type Mentor = typeof mentors.$inferSelect;

export type InsertMentorship = z.infer<typeof insertMentorshipSchema>;
export type Mentorship = typeof mentorships.$inferSelect;

export type InsertApplicationTimeline = z.infer<typeof insertApplicationTimelineSchema>;
export type ApplicationTimeline = typeof applicationTimelines.$inferSelect;

export type InsertApplicationMilestone = z.infer<typeof insertApplicationMilestoneSchema>;
export type ApplicationMilestone = typeof applicationMilestones.$inferSelect;

// Extended validation schemas for forms
export const registerUserSchema = insertUserSchema
  .extend({
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});
