# Contact Form 404 Error - Quick Fix Checklist ✅

## 🔴 Error: "404 - Page not found" on Contact Form

### Step 1: Verify EmailJS Setup (5 minutes)

Go to https://www.emailjs.com/ and complete this checklist:

- [ ] **Service ID Correct?**
  - Click "Email Services" in left menu
  - Should see `service_dxqp4pi`
  - If different, update `.env.local`

- [ ] **Template Exists?**
  - Click "Email Templates" in left menu
  - Look for `template_s7tecju`
  - If NOT there, you must CREATE it:
    1. Click "Create New Template"
    2. Name: `Contact Form`
    3. Add these variables in the template:
       ```
       From: {{from_name}} ({{from_email}})
       Subject: {{subject}}
       
       Message:
       {{message}}
       ```
    4. Copy the Template ID
    5. Update `.env.local` with the new Template ID

- [ ] **Public Key Correct?**
  - Click "Account" → "API Keys" (top right)
  - Copy the "Public Key"
  - Update `.env.local`:
    ```
    VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
    ```

### Step 2: Update .env.local

File location: `client/.env.local`

```dotenv
VITE_EMAILJS_SERVICE_ID=service_dxqp4pi
VITE_EMAILJS_TEMPLATE_ID=template_s7tecju
VITE_EMAILJS_PUBLIC_KEY=dY7Bv6VvjiA11VdQD
```

**Important:** Do NOT commit `.env.local` to git!

### Step 3: Test Locally

```bash
# From project root
npm run dev

# Open http://localhost:5000
# Go to Contact page
# Fill out form and submit
# Check browser console (F12) for logs
```

Expected logs:
```
"Attempting to send via backend API..."
"Backend API success: ..."
```

Or if using EmailJS:
```
"Attempting to send via EmailJS..."
"EmailJS response: ..."
```

### Step 4: Deploy to Netlify

1. **Make sure `.env.local` is in `.gitignore`:**
   ```
   # .gitignore
   client/.env.local
   .env.local
   ```

2. **Push to GitHub:**
   ```bash
   git add -A
   git commit -m "Update contact form configuration"
   git push origin main
   ```

3. **Netlify will auto-deploy!**
   - Go to https://app.netlify.com
   - Select your site
   - Check "Deploys" tab
   - Wait for build to complete

4. **After deployment, test contact form on live site:**
   - Open your Netlify site URL
   - Go to Contact page
   - Submit form
   - Should work OR see specific error

### Step 5: If Still Not Working

Open browser console (F12 → Console tab) and look for:

**✅ Success message:**
```
"Backend API success: {message: "Message sent successfully!"}"
```

**❌ EmailJS 404 error:**
```
Error: Failed to fetch 'https://api.emailjs.com/api/v1.0/email/send'
```

**Solution:** Your EmailJS credentials are wrong
- Go to EmailJS dashboard
- Copy credentials again (carefully, no spaces)
- Update `.env.local`

**❌ Invalid template:**
```
EmailJS Error: Template with ID 'template_s7tecju' not found
```

**Solution:** Template doesn't exist
- Create template on EmailJS dashboard
- Copy new Template ID
- Update `.env.local`

## 🚀 For Netlify Deployment

Since Netlify is static hosting, the backend API won't run there.

**Options:**
1. ✅ **Use EmailJS Only** (Recommended)
   - Simplest solution
   - Just make sure template is created

2. ✅ **Use Netlify Functions** (Advanced)
   - See `NETLIFY_DEPLOYMENT.md`

3. ✅ **Use Formspree** (Alternative)
   - Update contact form to POST to Formspree
   - No backend needed

## 📋 Current Configuration

Your setup:
- ✅ Backend API at `/api/contacts`
- ✅ EmailJS fallback enabled
- ✅ Dual-mode error handling
- ✅ Detailed console logging

## 🆘 Still Stuck?

1. **Did you create the EmailJS template?**
   - Log into EmailJS
   - Go to "Email Templates"
   - Is `template_s7tecju` there?

2. **Are credentials exactly correct?**
   - Copy from EmailJS again
   - No spaces at beginning/end
   - Check for typos

3. **Did you rebuild?**
   ```bash
   npm run build
   ```

4. **Did you clear browser cache?**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

5. **What does the console say?**
   - Submit form
   - Open DevTools (F12)
   - Look for detailed error messages
   - Share the exact error message if stuck

## ✨ Summary

Contact form now has:
- ✅ Backend API fallback (works locally)
- ✅ EmailJS fallback (works everywhere)
- ✅ Detailed error messages
- ✅ Console logging for debugging
- ✅ Proper error handling

Just ensure EmailJS template exists and credentials are correct!
