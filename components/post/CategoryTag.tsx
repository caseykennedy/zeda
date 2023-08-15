import { Pill } from 'components/ui'

const CategoryTag = ({ categories }: { categories: string[] }) => {
  const isPrimary =
    categories.includes('News') || categories.includes('Insights')
  const isVideo = categories.includes('Video')

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
