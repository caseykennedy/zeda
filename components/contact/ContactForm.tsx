import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircledIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'components/ui/Select'

const selectOptions = [
  'General contact',
  'Press inquiry',
  'I am an investor',
  'Zeda Technologies',
  'Zeda Health',
]

const selectSchema = z
  .string()
  .refine((value) => selectOptions.includes(value), {
    message: 'Invalid select option',
  })

const formSchema = z.object({
  honeypot: z.string().optional(),
  subject: selectSchema,
  name: z.string().min(2).max(50).nonempty('Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  message: z.string().min(10).max(500).nonempty('Message is required'),
})

const ContactForm = () => {
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
      const response = await fetch('/api/contact', {
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
      <AlertTitle className="text-white">Thanks for contacting us!</AlertTitle>
      <AlertDescription>
        <p>
          Your message has been received. We will reach out soon!{' '}
          <a
            href="#"
            onClick={manualReset}
            className="text-white underline hover:no-underline"
          >
            Send another message
          </a>
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please choose a subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Subject</SelectLabel>
                    {selectOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} rows={6} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5">
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <PaperPlaneIcon className="relative -translate-x-1 transition-all group-hover:translate-x-1" />
                Send message
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
