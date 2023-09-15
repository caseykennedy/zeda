import { motion } from 'framer-motion'
import { cn } from 'utils'
import { type LayoutTheme, LayoutThemes } from 'utils/constants'
import { polyVariant } from 'utils/variants'

export const Heading1FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={polyVariant} initial="hidden" animate="visible">
    {children}
  </motion.div>
)

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
        <div className="gutter-x mx-auto mt-44 max-w-site md:mt-64">
          {children}
        </div>
      </div>
    </section>
  )
}

export default PageTitle
