import Section from 'components/ui/Section'

type Props = {
  title: string
  description?: string
}

const PageTitle = ({ title, description }: Props) => {
  return (
    <div className="gutter-b overflow-hidden bg-black pt-header text-white">
      <div className="gutter-x mx-auto mt-32 max-w-site">
        <h1 className="max-w-[18ch] text-4xl">{title}</h1>
        <p className="text-silver-500">{description}</p>
      </div>
    </div>
  )
}

export default PageTitle
