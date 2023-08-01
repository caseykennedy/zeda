/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'

import { SanityImage } from 'components/SanityImage'

import styles from './PostBody.module.css'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default function PostBody({ content }: any) {
  return (
    <div className={`gutter-x gutter-y w-full ${styles.portableText}`}>
      <div className="mx-auto max-w-2xl">
        <PortableText value={content} components={myPortableTextComponents} />
      </div>
    </div>
  )
}
