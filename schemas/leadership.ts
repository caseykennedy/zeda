import { RobotIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import person from './person'

export default defineType({
  name: 'leadership',
  title: 'Leadership',
  icon: RobotIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'reference', to: [person] }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
