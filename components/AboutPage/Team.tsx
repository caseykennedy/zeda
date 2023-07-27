import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/ui/Button'
import Section from 'components/ui/Section'

const data = [
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Chief Strategy Officer',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
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

const Team = () => {
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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.map(({ imageSrc, name, position, bio, linkedin }, idx) => (
            <div key={idx}>
              <motion.figure
                initial={['hidden', 'down']}
                whileHover={['visible', 'up']}
                animate={['hidden', 'down']}
                className="group relative overflow-hidden rounded bg-silver-100"
              >
                <Image
                  src={`/images/${imageSrc}`}
                  alt="Zeda Inc. manufacturing facility"
                  placeholder="blur"
                  blurDataURL={`/images/${imageSrc}`}
                  quality={100}
                  fill={false}
                  width={493}
                  height={600}
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
                  <Link
                    href={`//www.linkedin.com/${linkedin}`}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="text-silver-500 transition-colors duration-200 hover:text-black"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Team
