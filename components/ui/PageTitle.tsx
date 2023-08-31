import { type LayoutTheme, LayoutThemes } from 'lib/constants'
import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  theme: LayoutTheme
}

const PageTitle = ({
  children,
  className,
  theme = LayoutThemes.dark,
  ...props
}: Props) => {
  return (
    <section className={cn(theme)}>
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
    </section>
  )
}

export default PageTitle
