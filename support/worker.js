addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const data = await request.json()
  const { reason, name, email, message } = data

  if (!reason || !name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
  }

  // Send email using a service like SendGrid or Mailgun
  // Placeholder: just log for now
  console.log('Support Form Submission:', data)

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
