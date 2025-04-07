import { pgTable, text, serial, integer, boolean, jsonb, real } from "drizzle-orm/pg-core";
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

// Define types based on schemas
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertStudentProfile = z.infer<typeof insertStudentProfileSchema>;
export type StudentProfile = typeof studentProfiles.$inferSelect;

export type InsertAssessmentResult = z.infer<typeof insertAssessmentResultSchema>;
export type AssessmentResult = typeof assessmentResults.$inferSelect;

export type InsertUniversityMatch = z.infer<typeof insertUniversityMatchSchema>;
export type UniversityMatch = typeof universityMatches.$inferSelect;

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
