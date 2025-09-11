import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: result.error.issues 
        });
      }

      const contact = await storage.createContact(result.data);
      
      // Send email notification
      const emailSent = await sendContactEmail(result.data);
      if (!emailSent) {
        console.warn('Failed to send email notification, but contact was saved');
      }
      
      res.status(201).json({ message: "Message sent successfully!", contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
