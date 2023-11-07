import sendgrid from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from 'utils/logger'
import validator from 'validator'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in the environment')
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const TO_EMAIL = [`${process.env.SENDGRID_TO_EMAIL}`] || ''
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || ''

const parseRequestBody = (body: string) => {
  try {
    return JSON.parse(body)
  } catch (error) {
    return null
  }
}

const handleSpamDetection = (honeypot: string) => {
  return honeypot && honeypot.length > 0
}

const validateForm = (data: any) => {
  const { subject, name, email, message } = data
  return subject && name && email && message
}

const validateEmail = (email: string) => {
  return validator.isEmail(email)
}

const buildMessageData = (data: any) => {
  const { subject, name, email, message } = data
  return `
    Subject: ${subject}rn
    Name: ${name}rn
    Email: ${email}rn
    Message: ${message}
  `
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end() // Method Not Allowed
    return
  }

  try {
    const data = parseRequestBody(req.body)

    if (!data || typeof data !== 'object') {
      res.status(400).json({ error: 'Invalid data format' }) // Bad Request
      return
    }

    const { honeypot, subject, email } = data

    if (handleSpamDetection(honeypot)) {
      res
        .status(400)
        .json({ error: 'Spam detected. Your submission has been blocked.' }) // Bad Request
      return
    }

    if (!validateForm(data)) {
      res.status(400).json({ error: 'Incomplete data' }) // Bad Request
      return
    }

    if (!validateEmail(email)) {
      res.status(400).json({ error: 'Invalid email address' }) // Bad Request
      return
    }

    const messageData = buildMessageData(data)

    await sendgrid.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `[Contact from z8a.com] : ${subject}`,
      text: messageData,
      html: messageData.replace(/rn/g, '<br>'),
    })

    logger.info('Contact request processed successfully.')
    console.log(messageData)

    res.status(200).json({ message: 'Form data submitted successfully' })
  } catch (error: any) {
    logger.error('Error processing contact request:', error)
    if (error.response) {
      logger.error(error.response.body)
    }
    res.status(500).json({ error: 'Internal Server Error' }) // Internal Server Error
  }
}
