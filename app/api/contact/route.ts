import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_LkAsBahW_LGaK9dT6mnCDmyBCPDpCuefa')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullname, email, company, phone, message } = body

    // Validate required fields
    if (!fullname || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sophisticated editorial-style email template
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Client Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #000000; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; -webkit-font-smoothing: antialiased;">
        
        <div style="max-width: 680px; margin: 0 auto; background-color: #000000;">
          
          <!-- Header -->
          <div style="padding: 60px 40px 40px 40px; border-bottom: 1px solid #1a1a1a;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">
                    New Client Inquiry
                  </h1>
                  <p style="margin: 8px 0 0 0; font-size: 16px; color: #666666; font-weight: 400; letter-spacing: 0.01em;">
                    ${new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric'
                    })} at ${new Date().toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      timeZone: 'Europe/Vienna'
                    })}
                  </p>
                </td>
                <td style="text-align: right; vertical-align: top;">
                  <div style="width: 4px; height: 60px; background: linear-gradient(180deg, #ffffff 0%, #333333 100%);"></div>
                </td>
              </tr>
            </table>
          </div>

          <!-- Content -->
          <div style="padding: 50px 40px;">
            
            <!-- Client Details -->
            <div style="margin-bottom: 50px;">
              <h2 style="margin: 0 0 30px 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: -0.3px;">
                Contact Information
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top; width: 120px;">
                    <span style="font-size: 14px; color: #888888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                  </td>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; padding-left: 30px;">
                    <span style="font-size: 16px; color: #ffffff; font-weight: 500; letter-spacing: -0.1px;">${fullname}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                    <span style="font-size: 14px; color: #888888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                  </td>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; padding-left: 30px;">
                    <a href="mailto:${email}" style="font-size: 16px; color: #ffffff; text-decoration: none; font-weight: 500; letter-spacing: -0.1px; border-bottom: 1px solid #333333; transition: border-color 0.2s;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                    <span style="font-size: 14px; color: #888888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                  </td>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; padding-left: 30px;">
                    <a href="tel:${phone}" style="font-size: 16px; color: #ffffff; text-decoration: none; font-weight: 500; letter-spacing: -0.1px; border-bottom: 1px solid #333333;">${phone}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                    <span style="font-size: 14px; color: #888888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Company</span>
                  </td>
                  <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; padding-left: 30px;">
                    <span style="font-size: 16px; color: #ffffff; font-weight: 500; letter-spacing: -0.1px;">${company}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 50px;">
              <h2 style="margin: 0 0 30px 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: -0.3px;">
                Message
              </h2>
              
              <div style="background-color: #0a0a0a; border: 1px solid #1a1a1a; border-left: 3px solid #ffffff; padding: 30px; border-radius: 0;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #cccccc; font-weight: 400; white-space: pre-wrap; letter-spacing: -0.1px;">${message}</p>
              </div>
            </div>

            <!-- Actions -->
            <div style="margin-top: 60px; text-align: left;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 20px;">
                    <a href="mailto:${email}?subject=Re: Your inquiry about ${company || 'web development services'}" 
                       style="display: inline-block; 
                              background-color: #ffffff; 
                              color: #000000; 
                              padding: 14px 28px; 
                              text-decoration: none; 
                              font-size: 15px; 
                              font-weight: 600; 
                              letter-spacing: -0.1px;
                              border: 1px solid #ffffff;
                              transition: all 0.2s;">
                      Reply to Client
                    </a>
                  </td>
                  <td>
                    <a href="tel:${phone}" 
                       style="display: inline-block; 
                              background-color: transparent; 
                              color: #ffffff; 
                              padding: 14px 28px; 
                              text-decoration: none; 
                              font-size: 15px; 
                              font-weight: 600; 
                              letter-spacing: -0.1px;
                              border: 1px solid #333333;
                              transition: all 0.2s;">
                      Call ${phone.substring(0, 7)}...
                    </a>
                  </td>
                </tr>
              </table>
            </div>

          </div>

          <!-- Footer -->
          <div style="padding: 40px 40px 60px 40px; border-top: 1px solid #1a1a1a;">
            <p style="margin: 0; font-size: 13px; color: #555555; font-weight: 400; letter-spacing: 0.2px;">
              This inquiry was received through your agency website contact form.
            </p>
          </div>

        </div>
      </body>
      </html>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'IT Agency Contact <onboarding@resend.dev>',
      to: ['gantchevkaloyan@proton.me'],
      subject: `New Client Inquiry: ${fullname}${company ? ` from ${company}` : ''}`,
      html: emailContent,
      replyTo: email, // Allow direct replies to the client
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}