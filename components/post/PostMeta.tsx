import type { Post } from 'lib/sanity.queries'

import SocialShare from 'components/SocialShare'
import Pill from 'components/ui/Pill'
import Separator from 'components/ui/Separator'

import PostNotes from './PostNotes'

const PostMeta = ({
  slug,
  tags,
  notes,
}: Pick<Post, 'slug' | 'tags' | 'notes'>) => (
  <div className={`gutter-x gutter-y w-full`}>
    <div className="mx-auto max-w-2xl">
      <Separator className="bg-silver-100" />
      {notes && (
        <>
          <PostNotes content={notes} />
          <Separator className="bg-silver-100" />
        </>
      )}
      <div className="my-6">
        <div className="flex flex-nowrap gap-2">
          <SocialShare name="linkedin" slug={slug} />
          <SocialShare name="twitter" slug={slug} />
          <SocialShare name="share" slug={slug} />
        </div>
      </div>
      <Separator className="bg-silver-100" />
      {tags && (
        <>
          <div className="my-6 flex flex-wrap gap-1.5 ">
            {tags.map((tag, idx) => (
              <Pill key={idx}>{tag}</Pill>
            ))}
          </div>
          <Separator className="bg-silver-100" />
        </>
      )}
    </div>
  </div>
)

export default PostMeta
