import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      // Still log the submission for debugging
      console.log("Contact form submission:", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
      return NextResponse.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 }
      )
    }

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const emailResult = await resend.emails.send({
      from: "Mont Ussy <onboarding@resend.dev>", // You can change this to your verified domain later
      to: "kkouchrad@gmail.com",
      replyTo: email, // So you can reply directly to the person
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request - Mont Ussy Coliving</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from the Mont Ussy contact form.</p>
      `,
    })

    console.log("Email sent successfully:", emailResult)

    return NextResponse.json(
      { message: "Request sent successfully! We'll get back to you soon." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    )
  }
}
