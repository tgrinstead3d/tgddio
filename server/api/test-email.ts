import nodemailer from 'nodemailer';

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default defineEventHandler(async (event) => {
    const testMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Test Email from Contact Form',
        text: 'This is a test email to verify the contact form email functionality is working.',
        html: '<h3>Test Email</h3><p>This is a test email to verify the contact form email functionality is working.</p>'
    };

    try {
        // First verify the connection
        await transporter.verify();
        console.log('SMTP connection verified successfully');

        // Then try to send a test email
        await transporter.sendMail(testMailOptions);
        return {
            message: 'Test email sent successfully',
            smtp_config: {
                host: 'smtp.gmail.com',
                port: 465,
                user: process.env.EMAIL_USER,
                auth_present: !!process.env.EMAIL_PASSWORD
            }
        };
    } catch (error) {
        console.error('Email test failed:', error);
        throw createError({
            statusCode: 500,
            message: 'Email test failed',
            data: {
                error: error.message,
                smtp_config: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    user: process.env.EMAIL_USER,
                    auth_present: !!process.env.EMAIL_PASSWORD
                }
            }
        });
    }
}); 