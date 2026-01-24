# Email Setup Guide

## Current Status
The contact form is set up and working, but emails are currently only logged to the console. To receive actual emails, you need to configure one of the following options:

## Option 1: Resend (Recommended - Easiest)
1. Sign up at https://resend.com (free up to 3000 emails/month)
2. Get your API key from https://resend.com/api-keys
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
5. Uncomment the Resend code in `app/api/contact/route.ts`
6. Update the `from` email to your verified domain (or use `onboarding@resend.dev` for testing)

## Option 2: Formspree (No Backend Needed)
1. Sign up at https://formspree.io (free plan available)
2. Create a new form and get your form ID
3. Update `components/contact-section.tsx` to use Formspree:
   - Change the form action to: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Remove the fetch call and use native form submission

## Option 3: Gmail SMTP with Nodemailer
1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Enable "Less secure app access" in your Gmail account (or use App Password)
3. Add credentials to `.env.local`:
   ```
   GMAIL_USER=kkouchrad@gmail.com
   GMAIL_PASS=your_app_password
   ```
4. Update `app/api/contact/route.ts` to use nodemailer

## Current Behavior
- Form submissions are logged to the console
- Users see a success message
- You can check server logs to see submissions

## Testing
After configuring, test the form at http://localhost:3001/#contact
