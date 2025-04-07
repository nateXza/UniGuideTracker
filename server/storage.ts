import { 
  users, User, InsertUser, 
  studentProfiles, StudentProfile, InsertStudentProfile,
  assessmentResults, AssessmentResult, InsertAssessmentResult,
  universityMatches, UniversityMatch, InsertUniversityMatch 
} from "@shared/schema";

// Define the storage interface
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Student profile operations
  getStudentProfile(userId: number): Promise<StudentProfile | undefined>;
  createStudentProfile(profile: InsertStudentProfile): Promise<StudentProfile>;
  updateStudentProfile(userId: number, profile: Partial<InsertStudentProfile>): Promise<StudentProfile | undefined>;
  
  // Assessment results operations
  getAssessmentResult(userId: number): Promise<AssessmentResult | undefined>;
  createAssessmentResult(result: InsertAssessmentResult): Promise<AssessmentResult>;
  
  // University match operations
  getUniversityMatch(userId: number): Promise<UniversityMatch | undefined>;
  createUniversityMatch(match: InsertUniversityMatch): Promise<UniversityMatch>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private studentProfiles: Map<number, StudentProfile>;
  private assessmentResults: Map<number, AssessmentResult>;
  private universityMatches: Map<number, UniversityMatch>;
  private currentUserId: number;
  private currentProfileId: number;
  private currentAssessmentId: number;
  private currentMatchId: number;

  constructor() {
    this.users = new Map();
    this.studentProfiles = new Map();
    this.assessmentResults = new Map();
    this.universityMatches = new Map();
    this.currentUserId = 1;
    this.currentProfileId = 1;
    this.currentAssessmentId = 1;
    this.currentMatchId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date().toISOString();
    const user: User = { ...insertUser, id, createdAt: now };
    this.users.set(id, user);
    return user;
  }

  // Student profile operations
  async getStudentProfile(userId: number): Promise<StudentProfile | undefined> {
    return Array.from(this.studentProfiles.values()).find(
      (profile) => profile.userId === userId
    );
  }

  async createStudentProfile(insertProfile: InsertStudentProfile): Promise<StudentProfile> {
    const id = this.currentProfileId++;
    const now = new Date().toISOString();
    const profile: StudentProfile = { ...insertProfile, id, updatedAt: now };
    this.studentProfiles.set(id, profile);
    return profile;
  }

  async updateStudentProfile(userId: number, updateData: Partial<InsertStudentProfile>): Promise<StudentProfile | undefined> {
    const existingProfile = await this.getStudentProfile(userId);
    
    if (!existingProfile) {
      return undefined;
    }
    
    const now = new Date().toISOString();
    const updatedProfile: StudentProfile = { 
      ...existingProfile, 
      ...updateData, 
      updatedAt: now 
    };
    
    this.studentProfiles.set(existingProfile.id, updatedProfile);
    return updatedProfile;
  }

  // Assessment results operations
  async getAssessmentResult(userId: number): Promise<AssessmentResult | undefined> {
    return Array.from(this.assessmentResults.values()).find(
      (result) => result.userId === userId
    );
  }

  async createAssessmentResult(insertResult: InsertAssessmentResult): Promise<AssessmentResult> {
    const id = this.currentAssessmentId++;
    const now = new Date().toISOString();
    const result: AssessmentResult = { ...insertResult, id, completedAt: now };
    this.assessmentResults.set(id, result);
    return result;
  }

  // University match operations
  async getUniversityMatch(userId: number): Promise<UniversityMatch | undefined> {
    return Array.from(this.universityMatches.values()).find(
      (match) => match.userId === userId
    );
  }

  async createUniversityMatch(insertMatch: InsertUniversityMatch): Promise<UniversityMatch> {
    const id = this.currentMatchId++;
    const now = new Date().toISOString();
    const match: UniversityMatch = { ...insertMatch, id, matchDate: now };
    this.universityMatches.set(id, match);
    return match;
  }
}

// Export the storage instance
export const storage = new MemStorage();
