import { cn } from 'utils'
import { type LayoutTheme, LayoutThemes } from 'utils/constants'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  theme?: LayoutTheme
}

const PageTitle = ({
  children,
  className,
  theme = LayoutThemes.DARK,
  ...props
}: Props) => {
  return (
    <section className={cn(theme)}>
      <div
        className={cn(
          `gutter-b overflow-hidden bg-white pt-18 dark:bg-black dark:text-white md:pt-header`,
          className
        )}
        {...props}
      >
        <div className="gutter-x mx-auto mt-52 max-w-site md:mt-64">
          {children}
        </div>
      </div>
    </section>
  )
}

export default PageTitle
