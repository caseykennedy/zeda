import { PostCategories } from 'lib/constants'

import { Pill } from 'components/ui'

const CategoryTag = ({
  categories,
  variant,
}: {
  categories: string[]
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outline'
    | 'ghost'
    | null
    | undefined
}): JSX.Element[] => {
  const isPrimary =
    categories.includes(PostCategories.CATEGORY_NEWS) ||
    categories.includes(PostCategories.CATEGORY_INSIGHTS)
  const isVideo =
    categories.includes(PostCategories.CATEGORY_VIDEO) ||
    categories.includes('Featured')

  return categories.map((tag, idx) => (
    <Pill
      variant={
        isPrimary
          ? 'primary'
          : isVideo
          ? 'tertiary'
          : variant
          ? variant
          : 'default'
      }
      key={idx}
    >
      {tag}
    </Pill>
  ))
}

export default CategoryTag
