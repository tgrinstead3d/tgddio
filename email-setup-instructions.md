# Instructions for setting up email functionality

To implement the email functionality for the contact form, follow these steps:

## 1. Install Nodemailer Package

```bash
npm install nodemailer
```

## 2. Set up Environment Variables

Create a `.env` file in the root directory of your project (or add to an existing one):

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, you'll need to use an "App Password" instead of your regular password. To create one:
1. Go to your Google Account
2. Go to Security
3. Under "Signing in to Google," select "App passwords" (you may need to enable 2-Step Verification first)
4. Select "Mail" and your device, then create
5. Use the generated password in your .env file

## 3. Update the API Endpoint

Open the file `server/api/contact.post.ts` and uncomment the email sending code:

1. Add at the top of the file:
```typescript
import nodemailer from 'nodemailer'
```

2. Uncomment the nodemailer code section in the handler function and remove the simulated response.

## 4. Testing the Email Functionality

After implementing these changes:

1. Test the contact form by submitting a test message
2. Check the server console logs for any errors
3. Verify that the email is received at tyler@tgdesign.io

## Security Considerations

- Never commit the `.env` file to your repository
- Add `.env` to your `.gitignore` file
- Consider rate limiting the API endpoint to prevent abuse
- Add CAPTCHA to the form for production use

## Troubleshooting

If emails are not being sent:
- Check that your email credentials are correct
- Some email providers may block sending from less secure apps
- Check server logs for detailed error messages
