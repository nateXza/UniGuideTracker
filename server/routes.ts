import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertUserSchema, 
  insertStudentProfileSchema, 
  insertAssessmentResultSchema, 
  insertUniversityMatchSchema, 
  loginSchema
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Helper function to handle validation errors
  const validateRequest = (schema: any, data: any) => {
    try {
      return { data: schema.parse(data), error: null };
    } catch (error) {
      if (error instanceof ZodError) {
        return { data: null, error: fromZodError(error).message };
      }
      return { data: null, error: 'Invalid data' };
    }
  };

  // User routes
  app.post('/api/auth/register', async (req: Request, res: Response) => {
    try {
      const { data, error } = validateRequest(insertUserSchema, req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByUsername(data.username);
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      const existingEmail = await storage.getUserByEmail(data.email);
      if (existingEmail) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      // Create user
      const user = await storage.createUser(data);
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: 'Server error during registration' });
    }
  });

  app.post('/api/auth/login', async (req: Request, res: Response) => {
    try {
      const { data, error } = validateRequest(loginSchema, req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }

      const user = await storage.getUserByUsername(data.username);
      if (!user || user.password !== data.password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: 'Server error during login' });
    }
  });

  // Student profile routes
  app.post('/api/profiles', async (req: Request, res: Response) => {
    try {
      const { data, error } = validateRequest(insertStudentProfileSchema, req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }

      // Check if user exists
      const user = await storage.getUser(data.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if profile already exists
      const existingProfile = await storage.getStudentProfile(data.userId);
      if (existingProfile) {
        return res.status(400).json({ message: 'Profile already exists for this user' });
      }

      const profile = await storage.createStudentProfile(data);
      res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ message: 'Server error creating profile' });
    }
  });

  app.get('/api/profiles/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      const profile = await storage.getStudentProfile(userId);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }

      res.json(profile);
    } catch (error) {
      res.status(500).json({ message: 'Server error retrieving profile' });
    }
  });

  app.put('/api/profiles/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      // Allow partial updates
      const updateData = req.body;
      
      const updatedProfile = await storage.updateStudentProfile(userId, updateData);
      if (!updatedProfile) {
        return res.status(404).json({ message: 'Profile not found' });
      }

      res.json(updatedProfile);
    } catch (error) {
      res.status(500).json({ message: 'Server error updating profile' });
    }
  });

  // Assessment routes
  app.post('/api/assessments', async (req: Request, res: Response) => {
    try {
      const { data, error } = validateRequest(insertAssessmentResultSchema, req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }

      // Check if user exists
      const user = await storage.getUser(data.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if assessment already exists
      const existingAssessment = await storage.getAssessmentResult(data.userId);
      if (existingAssessment) {
        return res.status(400).json({ message: 'Assessment already exists for this user' });
      }

      const assessment = await storage.createAssessmentResult(data);
      res.status(201).json(assessment);
    } catch (error) {
      res.status(500).json({ message: 'Server error creating assessment' });
    }
  });

  app.get('/api/assessments/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      const assessment = await storage.getAssessmentResult(userId);
      if (!assessment) {
        return res.status(404).json({ message: 'Assessment not found' });
      }

      res.json(assessment);
    } catch (error) {
      res.status(500).json({ message: 'Server error retrieving assessment' });
    }
  });

  // University match routes
  app.post('/api/matches', async (req: Request, res: Response) => {
    try {
      const { data, error } = validateRequest(insertUniversityMatchSchema, req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }

      // Check if user exists
      const user = await storage.getUser(data.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const match = await storage.createUniversityMatch(data);
      res.status(201).json(match);
    } catch (error) {
      res.status(500).json({ message: 'Server error creating match' });
    }
  });

  app.get('/api/matches/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      const match = await storage.getUniversityMatch(userId);
      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }

      res.json(match);
    } catch (error) {
      res.status(500).json({ message: 'Server error retrieving match' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
