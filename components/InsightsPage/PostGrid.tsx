import { AnimatePresence, motion } from 'framer-motion'
import type { Post, WhitePaper } from 'lib/sanity.queries'
import { polyVariant, staggerItems, viewport } from 'utils/variants'

import { PostCard } from 'components/post'
import { WhitePaperCard } from 'components/whitePaper'

const PostGrid = ({
  posts,
  whitePaper = false,
}: {
  posts: Post[]
  whitePaper: boolean
}) => {
  return (
    <AnimatePresence>
      <div className="gap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            variants={polyVariant}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {whitePaper ? (
              <WhitePaperCard
                date={post.date}
                estimatedReadingTime={post.estimatedReadingTime}
                slug={post.slug}
                title={post.title}
                tags={post.tags}
                excerpt={post.excerpt}
              />
            ) : (
              <PostCard
                coverImage={post.coverImage}
                date={post.date}
                estimatedReadingTime={post.estimatedReadingTime}
                slug={post.slug}
                title={post.title}
                categories={post.categories}
                tags={post.tags}
              />
            )}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}

export default PostGrid
