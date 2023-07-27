import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/ui/Button'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

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
        <div className="gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.map(({ imageSrc, name, position, bio, linkedin }, idx) => (
            <div key={idx}>
              <figure className="mb-4 overflow-hidden rounded bg-silver-100">
                <Image
                  src={`/images/${imageSrc}`}
                  alt="Zeda Inc. manufacturing facility"
                  fill={false}
                  width={1920}
                  height={986}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transform: 'scaleX(-1)',
                  }}
                  quality={100}
                />
              </figure>
              <div className="gap flex flex-row flex-nowrap">
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

const data = [
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Co-founder & CHIEF Executive OFFICER',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Co-founder & CHIEF Executive OFFICER',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Co-founder & CHIEF Executive OFFICER',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Co-founder & CHIEF Executive OFFICER',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Co-founder & CHIEF Executive OFFICER',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
  {
    imageSrc: 'michelle-thai.jpg',
    name: 'Shri Shetty',
    position: 'Co-founder & CHIEF Executive OFFICER',
    bio: 'Shri Shetty led an advanced technology group at Applied Materials, reporting directly to the Office of the CTO, before starting Zeda. Prior to his time at Applied Materials, he was Vice President at Ultratech. He brings extensive expertise from the semiconductor industry and advanced additive manufacturing.',
    linkedin: 'shri-shetty',
  },
]
