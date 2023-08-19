/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'

import styles from './VideoPostBody.module.css'

const PostNotes = ({ content }: any) => {
  return (
    <div className={`my-6 w-full ${styles.portableText}`}>
      <PortableText value={content} />
    </div>
  )
}

export default PostNotes
