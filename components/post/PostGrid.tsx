import { useCallback, useState } from 'react'
import { CardStackPlusIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useLoadMore } from 'hooks'
import type { Post, PostCategory } from 'lib/sanity.queries'
import { PostCategories } from 'utils/constants'
import { polyVariant } from 'utils/variants'

import { PostCard } from 'components/post'
import Button from 'components/ui/Button'
import Section from 'components/ui/Section'

const PostGrid = ({
  posts,
  postCategories,
}: {
  posts: Post[]
  postCategories: PostCategory[]
}) => {
  const { list, handleLoadMore, hasMore } = useLoadMore(posts.slice(2, 99), 6)

  // const [filteredPosts, setFilteredPosts] = useState(list)
  // const [activeBtn, setActiveBtn] = useState(PostCategories.ALL)

  // const handleClick = useCallback(
  //   (category: string) => {
  //     if (category === PostCategories.ALL) {
  //       setFilteredPosts(list)
  //       setActiveBtn(PostCategories.ALL)
  //     } else {
  //       setFilteredPosts(
  //         list.filter((post) => post.categories?.includes(category))
  //       )
  //       setActiveBtn(category)
  //     }
  //   },
  //   [list]
  // )

  // const postCategoriesWithAll = [
  //   PostCategories.ALL,
  //   ...postCategories.map((category) => category.name),
  // ]

  return (
    <Section className="border-t border-silver-100">
      {/* <div className="gutter-b flex gap-1.5">
        {postCategoriesWithAll.map((category) => (
          <Button
            key={category}
            variant={activeBtn === category ? 'primary' : 'default'}
            onClick={() => handleClick(category)}
          >
            {category}
          </Button>
        ))}
      </div> */}
      <AnimatePresence>
        <div className="gap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {list.map((post) => (
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

      <div className="gutter-t flex justify-center">
        {hasMore && (
          <Button
            variant="outline"
            onClick={handleLoadMore}
            className="load-more"
          >
            <CardStackPlusIcon className="h-5 w-5 shrink-0 transition-transform duration-200" />
            Load More
          </Button>
        )}
      </div>
    </Section>
  )
}

export default PostGrid
