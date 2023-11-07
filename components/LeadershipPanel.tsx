import { LinkedInLogoIcon, PlusIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { urlForImage } from 'lib/sanity.image'
import { type Person } from 'lib/sanity.queries'
import Link from 'next/link'
import { cn } from 'utils'
import { polyVariant, upVariants } from 'utils/variants'

import TeamBio from 'components/about/TeamBio'
import Img from 'components/Img'
import { buttonVariants } from 'components/ui/Button'
import Section from 'components/ui/Section'

const LeadershipPanel = ({
  people,
  title,
  className,
}: {
  people: Person[]
  title: string
  className?: string
}) => {
  return (
    <Section
      id="leadership"
      className={cn(`border-t border-silver-200 bg-background-600`, className)}
    >
      <div className="gap grid grid-cols-6">
        <div className="col-span-6 lg:col-span-5">
          <h2 className="max-w-[50ch] dark:text-white">{title}</h2>
        </div>
      </div>

      <div className="mt-32 md:mt-48">
        {/* <SectionTitle>Leadership</SectionTitle> */}
        <AnimatePresence>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
            {people.map(
              ({ _id, bio, linkedinURL, name, picture, position, seats }) => (
                <motion.div
                  key={_id}
                  variants={polyVariant}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.div
                    initial={['hidden', 'down']}
                    whileHover={['visible', 'up']}
                    animate={['hidden', 'down']}
                  >
                    <figure className="relative overflow-hidden rounded bg-silver-100">
                      <motion.div
                        variants={upVariants}
                        className="absolute bottom-4 right-4 hidden md:block"
                      >
                        <TeamBio
                          bio={bio}
                          linkedinURL={linkedinURL}
                          name={name}
                          picture={picture}
                          position={position}
                          seats={seats}
                        >
                          <div
                            className={buttonVariants({
                              variant: 'outline',
                              size: 'icon',
                            })}
                          >
                            <PlusIcon className="h-5 w-5" />
                          </div>
                        </TeamBio>
                      </motion.div>

                      <div className="absolute bottom-2 right-2 md:hidden">
                        <TeamBio
                          bio={bio}
                          linkedinURL={linkedinURL}
                          name={name}
                          picture={picture}
                          position={position}
                          seats={seats}
                        >
                          <div
                            className={buttonVariants({
                              variant: 'outline',
                              size: 'icon',
                            })}
                            role="button"
                            aria-label={`Read more about ${name}`}
                          >
                            <PlusIcon className="h-5 w-5" />
                          </div>
                        </TeamBio>
                      </div>

                      <Img
                        src={urlForImage(picture).height(600).width(493).url()}
                        alt={name}
                        blurDataURL={picture.metadata.lqip}
                        fill={false}
                        width={693}
                        height={800}
                      />
                    </figure>

                    <div className="mt-3 flex flex-row flex-nowrap gap-4">
                      <div className="flex-1">
                        <div className="mb-2 font-display text-xl font-semibold dark:text-white md:text-2xl">
                          {name}
                        </div>
                        <p className="text-sm font-medium uppercase text-silver-700 dark:text-silver-400">
                          {position}
                        </p>
                      </div>
                      <div>
                        {linkedinURL && (
                          <Link
                            href={linkedinURL}
                            target="_blank"
                            rel="nofollow noreferrer"
                            className="text-silver-500 transition-colors duration-200 hover:text-black dark:text-silver-400"
                          >
                            <LinkedInLogoIcon className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            )}
          </div>
        </AnimatePresence>
      </div>
    </Section>
  )
}

export default LeadershipPanel
