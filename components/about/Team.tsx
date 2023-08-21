import { useCallback, useEffect, useState } from 'react'
import { LinkedInLogoIcon, PlusIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { urlForImage } from 'lib/sanity.image'
import { type Person } from 'lib/sanity.queries'
import Link from 'next/link'
import { polyVariant, staggerItems, viewport } from 'utils/variants'

import Img from 'components/Img'
import Button, { buttonVariants } from 'components/ui/Button'
import Section from 'components/ui/Section'

import TeamBio from './TeamBio'

const CATEGORY_ALL = 'all'
const CATEGORY_LEADERSHIP = 'leadership'
const CATEGORY_BOARD_MEMBER = 'board member'
const CATEGORY_BOARD_ADVISOR = 'board advisor'
const CATEGORY_ADVISOR = 'advisor'

const teamCategories = [
  CATEGORY_ALL,
  CATEGORY_LEADERSHIP,
  CATEGORY_BOARD_MEMBER,
  CATEGORY_BOARD_ADVISOR,
  CATEGORY_ADVISOR,
]

const fadeVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

const upVariants = {
  up: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  down: {
    y: 15,
    opacity: 0,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
}

const Team = ({
  people,
}: {
  people: Pick<
    Person,
    '_id' | 'bio' | 'linkedinURL' | 'name' | 'picture' | 'position' | 'seats'
  >[]
}) => {
  const [filteredPosts, setFilteredPosts] = useState(people)
  const [activeBtn, setActiveBtn] = useState(CATEGORY_ALL)

  const handleClick = useCallback(
    (category: string) => {
      if (category === CATEGORY_ALL) {
        setFilteredPosts(people)
        setActiveBtn(CATEGORY_ALL)
      } else {
        setFilteredPosts(
          people.filter((person) => person.seats?.includes(category))
        )
        setActiveBtn(category)
      }
    },
    [people]
  )

  return (
    <Section id="leadership">
      <div className="gap grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            From life-changing medical devices that save lives to pioneering
            advancements in space exploration, we leverage technology to push
            the boundaries of innovation — our team is driven by a shared
            mission to improve lives and make a lasting impact on society.
          </h2>
        </div>
      </div>

      <div className="mt-32 md:mt-48">
        <div className="gutter-b flex flex-wrap gap-1.5">
          {teamCategories.map((category, idx) => (
            <Button
              key={idx}
              variant={activeBtn === category ? 'primary' : 'secondary'}
              onClick={() => handleClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <AnimatePresence>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {filteredPosts.map(
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
                              variant: 'ghost',
                              size: 'icon',
                            })}
                          >
                            <PlusIcon className="h-5 w-5 text-black" />
                          </div>
                        </TeamBio>
                      </motion.div>

                      <div className="absolute bottom-4 right-4 md:hidden">
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
                              variant: 'ghost',
                              size: 'icon',
                            })}
                          >
                            <PlusIcon className="h-5 w-5 text-black" />
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

                    <div className="gap mt-3 flex flex-row flex-nowrap">
                      <div className="flex-1">
                        <div className="font-display text-2xl font-semibold">
                          {name}
                        </div>
                        <p className="text-sm font-medium uppercase text-silver-700">
                          {position}
                        </p>
                      </div>
                      <div>
                        {linkedinURL && (
                          <Link
                            href={linkedinURL}
                            target="_blank"
                            rel="nofollow noreferrer"
                            className="text-silver-500 transition-colors duration-200 hover:text-black"
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

export default Team
