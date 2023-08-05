import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Post, PostCategory } from 'lib/sanity.queries'
import { polyVariant } from 'utils/variants'

import { PostCard } from 'components/post'
import Button from 'components/ui/Button'
import Section from 'components/ui/Section'

const CATEGORY_ALL = 'All'

const PostGrid = ({
  posts,
  postCategories,
}: {
  posts: Post[]
  postCategories: PostCategory[]
}) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [activeBtn, setActiveBtn] = useState(CATEGORY_ALL)

  const handleClick = useCallback(
    (category: string) => {
      if (category === CATEGORY_ALL) {
        setFilteredPosts(posts)
        setActiveBtn(CATEGORY_ALL)
      } else {
        setFilteredPosts(
          posts.filter((post) => post.categories.includes(category))
        )
        setActiveBtn(category)
      }
    },
    [posts]
  )

  return (
    <Section>
      <div className="gutter-b flex gap-1.5">
        <Button
          variant={activeBtn === CATEGORY_ALL ? 'primary' : 'secondary'}
          onClick={() => handleClick(CATEGORY_ALL)}
        >
          {CATEGORY_ALL}
        </Button>
        {postCategories.map((category) => (
          <Button
            key={category._id}
            variant={activeBtn === category.name ? 'primary' : 'secondary'}
            onClick={() => handleClick(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <AnimatePresence>
        <div className="gap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <motion.div
              key={post._id}
              variants={polyVariant}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
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
          ))}
        </div>
      </AnimatePresence>
    </Section>
  )
}

export default PostGrid
