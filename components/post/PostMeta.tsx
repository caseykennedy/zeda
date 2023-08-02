import type { Post } from 'lib/sanity.queries'

import Pill from 'components/ui/Pill'
import Separator from 'components/ui/Separator'

const PostMeta = ({
  slug,
  tags,
  notes,
}: Pick<Post, 'slug' | 'tags' | 'notes'>) => (
  <div className={`gutter-x gutter-y w-full`}>
    <div className="mx-auto max-w-2xl">
      <Separator className="bg-silver-100" />
      <p className="mt-6 text-sm text-silver-500">{notes}</p>
      <Separator className="bg-silver-100" />
      <p className="mt-6 text-sm text-silver-500">
        https://www.z8a.com/posts/{slug}
      </p>
      <Separator className="bg-silver-100" />
      <div className="my-6 flex flex-wrap gap-1.5 ">
        {tags.map((tag, idx) => (
          <Pill key={idx}>{tag}</Pill>
        ))}
      </div>
      <Separator className="bg-silver-100" />
    </div>
  </div>
)

export default PostMeta
