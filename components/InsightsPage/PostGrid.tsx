import { motion } from 'framer-motion'
import type { Post, WhitePaper } from 'lib/sanity.queries'
import { polyVariant, staggerItems, viewport } from 'utils/variants'

import { PostCard } from 'components/post'
import { WhitePaperCard } from 'components/whitePaper'

const PostGrid = ({
  posts,
  whitePapers,
}: {
  posts?: Post[]
  whitePapers?: WhitePaper[]
}) => {
  return (
    <motion.div
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="gap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {posts
          ? posts.map((post) => (
              <motion.div key={post._id} variants={polyVariant}>
                <PostCard
                  coverImage={post.coverImage}
                  date={post.date}
                  estimatedReadingTime={post.estimatedReadingTime}
                  slug={post.slug}
                  title={post.title}
                  categories={post.categories}
                  tags={post.tags}
                />
              </motion.div>
            ))
          : whitePapers?.map((post) => (
              <motion.div key={post._id} variants={polyVariant}>
                <WhitePaperCard
                  date={post.date}
                  estimatedReadingTime={post.estimatedReadingTime}
                  slug={post.slug}
                  title={post.title}
                  tags={post.tags}
                  excerpt={post.excerpt}
                />
              </motion.div>
            ))}
      </div>
    </motion.div>
  )
}

export default PostGrid
