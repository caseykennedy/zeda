import {
  CATEGORY_INSIGHTS,
  CATEGORY_NEWS,
  CATEGORY_VIDEO,
} from 'utils/constants'

import { Pill } from 'components/ui'

const CategoryTag = ({ categories }: { categories: string[] }) => {
  const isPrimary =
    categories.includes(CATEGORY_NEWS) || categories.includes(CATEGORY_INSIGHTS)
  const isVideo =
    categories.includes(CATEGORY_VIDEO) || categories.includes('Featured')

  return categories.map((tag, idx) => (
    <Pill
      variant={isPrimary ? 'primary' : isVideo ? 'tertiary' : 'default'}
      key={idx}
    >
      {tag}
    </Pill>
  ))
}

export default CategoryTag
