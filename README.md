# Lutions-site

# Lutions Lab Website

This is the official website for Lutions Lab, showcasing the Lutions Predictor product. It is built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### 1. Installation

First, clone the repository and install the dependencies:

```bash
git clone [https://github.com/your-github-username/lution-site.git](https://github.com/your-github-username/lution-site.git)
cd lution-site
npm install
```

### 2. Setting Up Environment Variables
This project requires environment variables to function correctly, particularly for the feedback form.

Create a file named .env.local in the root of the project and add the following variables:

```
# URL for the Google Form submission endpoint
NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL="YOUR_GOOGLE_FORM_ACTION_URL"

# Field IDs from your Google Form
NEXT_PUBLIC_GOOGLE_FORM_FIRST_NAME_ID="entry.xxxx"
NEXT_PUBLIC_GOOGLE_FORM_LAST_NAME_ID="entry.xxxx"
NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ID="entry.xxxx"
NEXT_PUBLIC_GOOGLE_FORM_PHONE_ID="entry.xxxx"
NEXT_PUBLIC_GOOGLE_FORM_COUNTRY_ID="entry.xxxx"
NEXT_PUBLIC_GOOGLE_FORM_FEEDBACK_ID="entry.xxxx"
```
How to get Google Form Variables:
Go to the Google Sheet you provided: https://docs.google.com/spreadsheets/d/1O17qCfUxXbGwA9EDvEpECEj-HD3KkFjDRTEY-7C-iis/edit
Go to Tools > Create a new form. This will create a Google Form linked to your sheet.
Add the required fields to the form: First Name, Last Name, Email, Phone Number, Country, Feedback.
Click the "Send" button in the top right, go to the "link" tab (🔗), and click "Get pre-filled link".
Fill in some dummy data for every field and click "Get link" at the bottom.
Copy the generated link. It will look something like this: https://docs.google.com/forms/d/e/LONG_ID/viewform?usp=pp_url&entry.123=John&entry.456=Doe...
To get NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL: Replace viewform in the URL with formResponse. The result is your action URL. https://docs.google.com/forms/d/e/LONG_ID/formResponse
To get Field IDs: The entry.xxxx parts in the pre-filled link are your field IDs. Match them to the correct fields and add them to your .env.local file.

### 3. Running the Development Server
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

### 4. Running Tests
This project uses Jest for component tests and Playwright for end-to-end tests.

```bash
# Run Jest tests
npm test

# Run Playwright E2E tests
npx playwright test
```

### 5. Customizing Assets
Logo: Replace public/assets/logo-placeholder.svg with your actual SVG logo.
Partner Logos: Replace the placeholder images in public/assets/partner-logos/.
User Manual: Replace public/Lutions-Predictor-Manual.pdf with your final PDF manual.
Illustrations: AI-generated illustrations are used as CSS backgrounds. You can replace the styles in src/app/globals.css (look for .hero-gradient-bg) or swap out components with your own `<img>` tags.

## Deployment
The easiest way to deploy this Next.js app is to use the Vercel Platform.

Alternatively, the included .github/workflows/ci.yml file can be adapted for deployment to other services like Netlify, AWS, or GitHub Pages.

---
