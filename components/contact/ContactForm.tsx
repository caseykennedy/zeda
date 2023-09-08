import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`)
      }

      console.log('response', response)

      console.log('Thanks for contacting us, we will get back to you soon!')
    } catch (error) {
      console.error(error)

      alert("We can't submit the form, try again later")
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col">
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <>
              <input id="name" type="text" {...field} />
              {errors.name && (
                <div className="error">{errors.name.message}</div>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <>
              <input id="email" type="email" {...field} />
              {errors.email && (
                <div className="error">{errors.email.message}</div>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="message">Message</label>
        <Controller
          name="message"
          control={control}
          rules={{ required: 'Message is required' }}
          render={({ field }) => (
            <>
              <textarea id="message" {...field} />
              {errors.message && (
                <div className="error">{errors.message.message}</div>
              )}
            </>
          )}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ContactForm
