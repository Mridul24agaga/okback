import { NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '3', 10)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 })
    }

    // Check if the email already exists in Brevo
    const checkEmailResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY!
      }
    })

    if (checkEmailResponse.ok) {
      const contactData = await checkEmailResponse.json()
      
      // Check if the contact is already in the newsletter list
      if (contactData.listIds.includes(BREVO_LIST_ID)) {
        return NextResponse.json({ message: 'Email already subscribed' }, { status: 400 })
      }
    }

    // Add or update contact in Brevo and add to the list
    const addContactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY!
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true
      })
    })

    if (!addContactResponse.ok) {
      const error = await addContactResponse.json()
      throw new Error(error.message || 'Failed to add contact')
    }

    return NextResponse.json({ message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ message: 'Failed to subscribe. Please try again later.' }, { status: 500 })
  }
}

