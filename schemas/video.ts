import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: '',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ title, date }) {
      const subTitles = [date && format(parseISO(date), 'LLL d, yyyy')].filter(
        Boolean
      )

      return { title, subtitle: subTitles.join(' ') }
    },
  },
})
