import { db } from './db';
import { eq } from 'drizzle-orm';
import { 
  users, User, InsertUser, 
  studentProfiles, StudentProfile, InsertStudentProfile,
  assessmentResults, AssessmentResult, InsertAssessmentResult,
  universityMatches, UniversityMatch, InsertUniversityMatch 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getStudentProfile(userId: number): Promise<StudentProfile | undefined>;
  createStudentProfile(profile: InsertStudentProfile): Promise<StudentProfile>;
  updateStudentProfile(userId: number, profile: Partial<InsertStudentProfile>): Promise<StudentProfile | undefined>;

  getAssessmentResult(userId: number): Promise<AssessmentResult | undefined>;
  createAssessmentResult(result: InsertAssessmentResult): Promise<AssessmentResult>;

  getUniversityMatch(userId: number): Promise<UniversityMatch | undefined>;
  createUniversityMatch(match: InsertUniversityMatch): Promise<UniversityMatch>;
}

export class DBStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getStudentProfile(userId: number): Promise<StudentProfile | undefined> {
    const result = await db.select().from(studentProfiles).where(eq(studentProfiles.userId, userId));
    return result[0];
  }

  async createStudentProfile(profile: InsertStudentProfile): Promise<StudentProfile> {
    const result = await db.insert(studentProfiles).values(profile).returning();
    return result[0];
  }

  async updateStudentProfile(userId: number, profile: Partial<InsertStudentProfile>): Promise<StudentProfile | undefined> {
    const result = await db
      .update(studentProfiles)
      .set(profile)
      .where(eq(studentProfiles.userId, userId))
      .returning();
    return result[0];
  }

  async getAssessmentResult(userId: number): Promise<AssessmentResult | undefined> {
    const result = await db.select().from(assessmentResults).where(eq(assessmentResults.userId, userId));
    return result[0];
  }

  async createAssessmentResult(result: InsertAssessmentResult): Promise<AssessmentResult> {
    const dbResult = await db.insert(assessmentResults).values(result).returning();
    return dbResult[0];
  }

  async getUniversityMatch(userId: number): Promise<UniversityMatch | undefined> {
    const result = await db.select().from(universityMatches).where(eq(universityMatches.userId, userId));
    return result[0];
  }

  async createUniversityMatch(match: InsertUniversityMatch): Promise<UniversityMatch> {
    const result = await db.insert(universityMatches).values(match).returning();
    return result[0];
  }
}

// Export the storage instance
export const storage = new DBStorage();