# EmailJS Template Setup - Step by Step

## Why You Need This

The contact form sends messages via EmailJS. But if the template doesn't exist or isn't set up correctly, you'll get a 404 error.

## Step 1: Log Into EmailJS

1. Go to https://www.emailjs.com/
2. Click "Sign In" (top right)
3. Log in with your account

## Step 2: Create Email Service (if not already done)

1. Click "Email Services" in left sidebar
2. Look for "Gmail" or email service
3. If you don't see one, click "Add Service" and select Gmail
4. Click "Connect Account" and authorize
5. Copy the **Service ID** - Should be: `service_dxqp4pi`

## Step 3: Create Email Template ⭐ THIS IS IMPORTANT

1. Click "Email Templates" in left sidebar
2. Click "Create New Template"
3. Fill in the form:
   - **Template Name**: `Contact Form`
   - **Subject**: `New Contact from {{from_name}}`
   
4. In the **Email Body**, add this:
```
Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

5. Click "Save" button

6. **Copy the Template ID!** (It should look like `template_xxxxx`)
   - You'll see it at the top of the template

## Step 4: Get Your Public Key

1. Click "Account" in top right corner
2. Click "API Keys"
3. Copy the **Public Key** (starts with letters/numbers)

## Step 5: Update Your .env.local File

File: `client/.env.local`

Replace the values with YOUR actual credentials:

```dotenv
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_dxqp4pi
VITE_EMAILJS_TEMPLATE_ID=template_YOUR_NEW_ID_HERE
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
```

Example after filling in:
```dotenv
VITE_EMAILJS_SERVICE_ID=service_dxqp4pi
VITE_EMAILJS_TEMPLATE_ID=template_s7tecju
VITE_EMAILJS_PUBLIC_KEY=dY7Bv6VvjiA11VdQD
```

## Step 6: Test It Works

1. Restart dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5000

3. Go to Contact page

4. Fill out the form:
   - Name: Your name
   - Email: your@email.com
   - Subject: Test
   - Message: Test message

5. Click "Send Message"

6. You should receive an email within seconds!

## What Each Template Variable Does

| Variable | Maps To | Example |
|----------|---------|---------|
| `{{from_name}}` | Name field | "John Smith" |
| `{{from_email}}` | Email field | "john@example.com" |
| `{{subject}}` | Subject dropdown | "Web Development" |
| `{{message}}` | Message textarea | "Hello! I'm interested..." |

## If It Still Doesn't Work

### Error: "Template not found"
- Template ID is wrong
- Create a NEW template
- Copy ID again carefully
- Update `.env.local`
- Restart dev server

### Error: "Service not found"
- Service ID is wrong
- Go to "Email Services"
- Copy Service ID again
- Make sure it starts with `service_`

### Error: "Public Key invalid"
- Public Key is wrong
- Go to "Account" → "API Keys"
- Copy again (whole key, no spaces)

### Email not received
- Check spam folder
- Make sure EmailJS template is saved
- Try sending from EmailJS dashboard directly:
  1. Click your template
  2. Click "Test it" button
  3. Fill in template variables
  4. Click "Send Test Email"

## Important: Don't Commit .env.local

The `.env.local` file contains sensitive credentials!

Make sure it's in `.gitignore`:

```
# .gitignore
client/.env.local
.env.local
*.local.env
```

## Verifying Setup

You can test directly from EmailJS dashboard:

1. Go to your Email Template
2. Click the "Test" button (email icon)
3. Fill in the variables
4. Click "Send"
5. Check your email inbox

If test email works but form doesn't:
- Check browser console (F12)
- Look for specific error messages
- Verify `.env.local` credentials match EmailJS

## Quick Verification Checklist

- [ ] EmailJS account created (https://www.emailjs.com/)
- [ ] Email service added (Gmail or other)
- [ ] Email template created with variables
- [ ] Service ID copied: `service_dxqp4pi`
- [ ] Template ID copied and updated in `.env.local`
- [ ] Public Key copied and updated in `.env.local`
- [ ] `.env.local` is in `.gitignore`
- [ ] Dev server restarted after changes
- [ ] Test email sent successfully via EmailJS dashboard
- [ ] Contact form tested locally

## Support

If stuck:
1. Open browser console (F12 → Console)
2. Submit contact form
3. Copy the error message
4. Check the error matches one of the solutions above
5. Follow the steps to fix

The most common issue is the **template not existing** or **wrong template ID**. Make sure you:
1. Created the template on EmailJS
2. Copied the correct Template ID
3. Updated `.env.local`
4. Restarted the dev server
