import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  connectionTimeout?: number;
  greetingTimeout?: number;
}

interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// HTML escape helper function
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Create and cache the transporter
let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    const emailConfig: EmailConfig = {
      host: process.env.SMTP_HOST || '',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
    };

    if (!emailConfig.host || !emailConfig.auth.user || !emailConfig.auth.pass) {
      throw new Error('Missing required SMTP configuration');
    }

    transporter = nodemailer.createTransport(emailConfig);
  }
  return transporter;
}

export async function sendContactEmail(contactData: ContactEmailData): Promise<boolean> {
  try {
    const emailTransporter = getTransporter();

    // Escape user input for HTML safety
    const safeName = escapeHtml(contactData.name);
    const safeEmail = escapeHtml(contactData.email);
    const safeSubject = escapeHtml(contactData.subject);
    const safeMessage = escapeHtml(contactData.message).replace(/\n/g, '<br>');

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Send to your email
      replyTo: contactData.email, // Allow replying directly to the sender
      subject: `New Contact Form Message: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${safeMessage}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #777; font-size: 14px;">
              This message was sent from your portfolio contact form
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}

Message:
${contactData.message}

---
This message was sent from your portfolio contact form
      `,
    };

    // Send email
    await emailTransporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
    return true;

  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}