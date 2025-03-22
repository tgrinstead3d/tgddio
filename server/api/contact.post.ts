import { useRuntimeConfig } from '#imports'
import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

// This is a placeholder for the actual email sending functionality
// To implement email sending, you need to:
// 1. Install nodemailer: npm install nodemailer
// 2. Import and configure it here

export default defineEventHandler(async (event) => {
    // Get the runtime config to access environment variables
    const config = useRuntimeConfig()

    try {
        // Get the form data from the request body
        const body = await readBody(event)
        const { name, email, message } = body

        // Validate inputs
        if (!name || !email || !message) {
            return {
                success: false,
                message: 'Name, email, and message are required'
            }
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return {
                success: false,
                message: 'Please provide a valid email address'
            }
        }

        // Log the request for debugging
        console.log('Form submission:', { name, email, message })

        // Create a nodemailer transporter
        // Using explicit SMTP configuration for Google Workspace
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: config.emailUser,
                pass: config.emailPassword // App Password generated from Google Account
            }
        })

        // Setup email data
        const mailOptions = {
            from: `"TG Design Website" <${config.emailUser}>`,
            to: config.emailUser, // Your email where you want to receive quotes
            replyTo: email, // So you can reply directly to the person
            subject: `Quote Request from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                    <h2 style="color: #2bbf60; margin-top: 0;">New Quote Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                    <p style="color: #777; font-size: 12px; margin-top: 20px;">This message was sent from the contact form on tgdesign.io</p>
                </div>
            `
        }

        // Send the email
        try {
            await transporter.sendMail(mailOptions)
            return {
                success: true,
                message: 'Your message has been sent. Thank you for contacting us!'
            }
        } catch (emailError) {
            console.error('Error sending email:', emailError)
            return {
                success: false,
                message: 'There was an error sending your message. Please try again later.'
            }
        }
    } catch (error) {
        console.error('Error processing contact form:', error)
        return {
            success: false,
            message: 'An error occurred while processing your request. Please try again later.'
        }
    }
}) 