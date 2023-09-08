import sendgrid from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from 'utils/logger'
import validator from 'validator'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in the environment')
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end() // Method Not Allowed
    return
  }

  try {
    // Parse the JSON data from the request body
    const data = JSON.parse(req.body)

    if (!data || typeof data !== 'object') {
      res.status(400).json({ error: 'Invalid data format' }) // Bad Request
      return
    }

    const { subject, name, email, message } = data

    // Basic input validation
    if (!subject || !name || !email || !message) {
      res.status(400).json({ error: 'Incomplete data' }) // Bad Request
      return
    }

    // More specific email validation
    if (!validator.isEmail(email)) {
      res.status(400).json({ error: 'Invalid email address' }) // Bad Request
      return
    }

    const messageData = `
      Subject: ${subject}rn
      Name: ${name}rn
      Email: ${email}rn
      Message: ${message}
    `

    // // Perform your data processing here (e.g., send email, save to database)
    // await sendgrid.send({
    //   to: 'youremail@gmail.com', // Your email where you'll receive emails
    //   from: 'youremail@gmail.com', // your website email address here
    //   subject: `[Contact from z8a.com] : ${subject}`,
    //   text: messageData,
    //   html: messageData.replace(/rn/g, '<br>'),
    // })

    // Assuming the data processing is successful
    logger.info('Contact request processed successfully.')
    console.log(messageData)
    res.send(200)
    // res.status(201).json({ message: 'Form data submitted successfully' })
  } catch (error) {
    logger.error('Error processing contact request:', error)
    res.status(500).json({ error: 'Internal Server Error' }) // Internal Server Error
  }
}
