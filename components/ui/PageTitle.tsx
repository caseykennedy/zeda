import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const PageTitle = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        `gutter-b overflow-hidden bg-white pt-header dark:bg-black dark:text-white`,
        className
      )}
      {...props}
    >
      <div className="gutter-x mx-auto mt-60 max-w-site md:mt-80">
        {children}
      </div>
    </div>
  )
}

export default PageTitle
