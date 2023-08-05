import Pill from 'components/ui/Pill'

const CategoryTag = ({ categories }: { categories: string[] }) => {
  const isPrimary =
    categories.includes('News') || categories.includes('Insights')

  return categories.map((tag, idx) => (
    <Pill variant={isPrimary ? 'primary' : 'default'} key={idx}>
      {tag}
    </Pill>
  ))
}

export default CategoryTag
