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
    // Only allow POST requests
    if (event.method !== 'POST') {
        throw createError({
            statusCode: 405,
            message: 'Method not allowed'
        });
    }

    // Get the request body
    const body = await readBody(event);
    const { name, email, message } = body;

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            message: 'Missing required fields'
        });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `,
        html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong><br>${message}</p>
        `,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        return { message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw createError({
            statusCode: 500,
            message: 'Error sending email',
            data: { error: error.message }
        });
    }
}); 