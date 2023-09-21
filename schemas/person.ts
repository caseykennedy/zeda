import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'person',
  title: 'People',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Postition',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seats',
      title: 'Seats',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Leadership', value: 'leadership' },
          { title: 'Board Member', value: 'board member' },
          { title: 'Board Advisor', value: 'board advisor' },
          { title: 'Advisor', value: 'advisor' },
        ],
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkedinURL',
      title: 'LinkedIn URL',
      type: 'url',
      description:
        'MUST include "https://" eg: https://www.linkedin.com/in/michelle-thai-md-67a90311/',
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: { hotspot: true, metadata: ['lqip'] },
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'picture',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
