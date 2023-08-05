import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { urlForImage } from 'lib/sanity.image'
import { type Person } from 'lib/sanity.queries'
import Link from 'next/link'
import { polyVariant, staggerItems, viewport } from 'utils/variants'

import Img from 'components/Img'
import Button from 'components/ui/Button'
import Section from 'components/ui/Section'

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

const Team = ({ people }: { people: Person[] }) => {
  console.log('people:::', people[0].picture.metadata)
  return (
    <Section>
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
        <motion.div
          variants={staggerItems}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {people.map(({ picture, name, position, bio, linkedinURL }, idx) => (
            <motion.div variants={polyVariant} key={idx}>
              <motion.figure
                initial={['hidden', 'down']}
                whileHover={['visible', 'up']}
                animate={['hidden', 'down']}
                className="group relative overflow-hidden rounded bg-silver-100"
              >
                <Img
                  src={urlForImage(picture).height(600).width(493).url()}
                  alt="Zeda Inc. manufacturing facility"
                  blurDataURL={picture.metadata.lqip}
                  fill={false}
                  width={693}
                  height={800}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transform: 'scaleX(-1)',
                  }}
                />
                <motion.div
                  variants={fadeVariants}
                  className="absolute inset-0 bg-violet-500/90 p-6 backdrop-blur"
                >
                  <motion.p
                    variants={upVariants}
                    className="text-lg font-medium text-white"
                  >
                    {bio}
                  </motion.p>
                </motion.div>
              </motion.figure>

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
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Team
