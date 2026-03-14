# M1 Media Website

A modern Next.js website for M1 Media, featuring a contact form with email functionality.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your SMTP credentials

3. Run the development server:
   ```bash
   npm run dev
   ```

## Email Configuration

The contact form uses nodemailer to send emails. You'll need to configure SMTP settings in your `.env.local` file:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

### Gmail Setup

For Gmail, you'll need to:

1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password as `SMTP_PASS`

### Other Email Providers

The configuration should work with most SMTP providers. Adjust the host, port, and security settings as needed.

## Features

- Responsive design with Tailwind CSS
- Contact form with validation
- Email notifications via nodemailer
- Toast notifications for user feedback
- Modern UI components with Radix UI
