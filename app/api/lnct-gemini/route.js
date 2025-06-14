// app/api/lnct-gemini/route.js

import lnctSystemPrompt from '@/prompts/lnct-system-prompt'

const apiKey =
  process.env.GEMINI_API_KEY || 'AIzaSyCBIZlmWdWr0n4XiZvS19baTBp8cba2GqI' // Secure in production

export async function POST(req) {
  try {
    const { userMessage } = await req.json()

    const chatHistory = [
      {
        role: 'user',
        parts: [{ text: `${lnctSystemPrompt}\nUser: ${userMessage}` }],
      },
    ]

    const payload = { contents: chatHistory }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Gemini API error response:', errorData)
      throw new Error(
        `Gemini API error: ${response.status} - ${
          errorData.error?.message || 'Unknown error'
        }`
      )
    }

    const result = await response.json()

    let text =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I couldn’t generate a response.'

    return Response.json({ text })
  } catch (err) {
    console.error('Error in /api/lnct-gemini:', err)
    return new Response(
      JSON.stringify({
        error: err.message || 'An unknown error occurred.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
