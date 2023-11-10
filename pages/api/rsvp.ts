import sendgrid from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from 'utils/logger'
import validator from 'validator'

type FormDataShape = {
  firstName: string
  lastName: string
  email: string
  additionalInfo: string
}

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in the environment')
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const TO_EMAIL = 'marketing@z8a.com'
const FROM_EMAIL = 'marketing@z8a.com'

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

const validateForm = (data: FormDataShape) => {
  const { firstName, lastName, email, additionalInfo } = data
  return firstName && lastName && email && additionalInfo
}

const validateEmail = (email: string) => {
  return validator.isEmail(email)
}

const buildMessageData = (data: FormDataShape) => {
  const { firstName, lastName, email, additionalInfo } = data
  return `
    Subject: ${`Open House Registration`}rn
    First Name: ${firstName}rn
    Last Name: ${lastName}rn
    Email: ${email}rn
    Additional info: ${additionalInfo}
  `
}

const buildConfirmationData = (firstName: string) => {
  return `
    <div style="text-transform: capitalize">${firstName},</div> rn rn
    Thank you for registering to attend the launch of Zeda Technologies' new advanced manufacturing facility! rn rn
    
    <b>Your attendance is confirmed.</b> rn rn

    Here's what you should know: rn rn
    
    <b>Event date:</b> December 7th, 2023 rn rn
    <b>Location:</b> 1120 Strategic Parkway, Suite 300, Springdale, OH 45246 rn rn
    <b>Time:</b> 10AM EST to 1:30PM EST rn rn
    <b>Exclusive Preview:</b> Be among the first to experience our groundbreaking digital manufacturing platform. rn rn
    <b>Keynote Speeches:</b> Gain insights from our leadership and key partners. rn rn
    <b>Networking Opportunities:</b> Connect with other prominent figures and thought leaders. rn rn
    <b>Special Showcase:</b> A unique display of innovative technologies made possible by Additive Manufacturing. rn rn
    <b>Food and refreshments will be provided.</b> rn rn

    If you are flying in and require lodging, we have some great options for you that are close to our facility: rn rn
    <a href="https://maps.app.goo.gl/wthapBDkSd8LnWq5A">Marriot Cincinnati North</a> rn
    <a href="https://maps.app.goo.gl/go6NpqWC9FMqC6K59">TownePlace Suites by Marriot Cincinnati Fairfield</a> rn rn

    We look forward to seeing you! rn rn
    Zeda Technolgies
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

    const { honeypot, firstName, email } = data

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
    const confirmationMessageData = buildConfirmationData(firstName)

    // Send the message to Zeda
    await sendgrid.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `[RSVP from z8a.com] : Open House Registration`,
      text: messageData,
      html: messageData.replace(/rn/g, '<br>'),
    })

    // Send the confirmation to the user
    await sendgrid.send({
      to: email,
      from: FROM_EMAIL,
      subject: `${firstName}, thanks for your RSVP to the Zeda Technologies Open House!`,
      text: confirmationMessageData,
      html: confirmationMessageData.replace(/rn/g, '<br>'),
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
