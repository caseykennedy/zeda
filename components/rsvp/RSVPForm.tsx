import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import * as z from 'zod'

import { Button, Input, Textarea } from 'components/ui'
import { Alert, AlertDescription, AlertTitle } from 'components/ui/Alert'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/ui/Form'

export const formSchema = z.object({
  honeypot: z.string().optional(),
  firstName: z.string().min(2).max(50).nonempty('First name is required'),
  lastName: z.string().min(2).max(50).nonempty('Last name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  additionalInfo: z.string().min(10).max(500).nonempty('Message is required'),
})

export type FormSchemaType = z.ZodType<typeof formSchema>

const RSVPForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(false)
    setIsSubmitSuccessful(false)

    try {
      setIsSubmitting(true)
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`)
      }

      setTimeout(() => {
        setIsSubmitSuccessful(true)
      }, 1000)
    } catch (error) {
      console.error(error)

      alert('Something went wrong, please try sending your message again.')
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 1000)
    }
  }

  const manualReset = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    form.reset()
    setIsSubmitSuccessful(false)
  }

  return isSubmitSuccessful ? (
    <Alert>
      <CheckCircledIcon className="mt-1 h-5 w-5" />
      <AlertTitle className="text-white">Thanks for registering!</AlertTitle>
      <AlertDescription>
        <p>
          Your message has been received. We will reach out soon!{' '}
          {/* <a
            href="#"
            onClick={manualReset}
            className="text-white underline hover:no-underline"
          >
            Send another message
          </a> */}
        </p>
      </AlertDescription>
    </Alert>
  ) : (
    <Form {...form}>
      <form method="post" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel className="sr-only">Leave this field blank</FormLabel>
              <FormControl>
                <Input placeholder="Leave blank" {...field} />
              </FormControl>
              {/* <FormDescription>
                Name is required and must be at least 2 characters long.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">First name</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Last name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Additional info</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Additional info (food allergies, etc.)"
                  {...field}
                  rows={6}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5">
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : <>Register</>}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default RSVPForm
