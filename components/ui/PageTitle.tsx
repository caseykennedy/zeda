import { cn } from 'utils'

interface Props {
  children: React.ReactNode
  className?: string
}

const PageTitle = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        `gutter-b overflow-hidden bg-black pt-header text-white`,
        className
      )}
    >
      <div className="gutter-x mx-auto mt-80 max-w-site">{children}</div>
    </div>
  )
}

export default PageTitle
