import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const PageTitle = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        `gutter-b gutter-x overflow-hidden bg-black pt-header text-white`,
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-80 max-w-site">{children}</div>
    </div>
  )
}

export default PageTitle
