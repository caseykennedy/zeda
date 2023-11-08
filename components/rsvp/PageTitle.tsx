import { motion } from 'framer-motion'
import HeroImg from 'public/images/big-machine.jpg'
import { cn } from 'utils'
import { type LayoutTheme, LayoutThemes } from 'utils/constants'
import { polyVariant } from 'utils/variants'

import Img from 'components/Img'

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
    <section className={cn(`relative mt-[73px] md:mt-header`, theme)}>
      <div
        className={cn(
          `gutter-y absolute left-0 top-0 z-10 h-full w-full overflow-hidden text-white`,
          className
        )}
        {...props}
      >
        <div className="gutter-x mx-auto flex h-full max-w-site flex-col justify-end lg:justify-center">
          {children}
        </div>
      </div>

      <div className="z-0">
        <div className="relative h-[500px] max-h-[800px] bg-blue-600 md:h-[70vh]">
          <Img
            src={HeroImg}
            alt="alt"
            fill={true}
            priority={true}
            className="object-cover object-top mix-blend-multiply grayscale"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      </div>
    </section>
  )
}

export default PageTitle
