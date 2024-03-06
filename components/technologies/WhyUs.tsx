import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import ImgBigMachine from 'public/images/technologies/big-machine-2.jpg'
import LatticeStructure from 'public/images/technologies/lattice-structure.jpg'
import MfgJumpsuit from 'public/images/technologies/mfg-jumpsuit.jpg'
import ZedaEngines from 'public/images/technologies/zeda-engines.png'

import Countup from 'components/Countup'
import Img from 'components/Img'
import { Button } from 'components/ui'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const stats = [
  {
    value: 30,
    description: 'Years of advanced manufacturing experience',
  },
  {
    value: 150,
    suffix: 'k',
    description: 'Square feet of advanced manufacturing facilities',
  },
  {
    value: 5,
    description: 'Regulated industries served',
  },
  {
    value: 1,
    description: 'Mission: to better lives by building it all better together',
  },
]

const WhyUs = () => {
  const certBadges = [
    { image: 'badge-as.png', alt: 'as9100d certification' },
    { image: 'badge-itar.png', alt: 'International Traffic in Arms Compliant' },
    { image: 'badge-iso.png', alt: 'Medical Devices Quality Management' },
    { image: 'badge-firearms-cert.png', alt: 'USA Firearms Dealer' },
  ]

  return (
    <Section className="dark overflow-visible border-t border-silver-900 bg-black text-white">
      <SectionTitle dark>Why us?</SectionTitle>
      <div className="grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            Zeda Technologies is where
            <br />
            ideas meet reality
          </h2>
        </div>
        <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
          <p className="max-w-[40ch] text-lg text-silver-400">
            We leverage advanced manufacturing and technology to help companies
            solve some of their most difficult challenges.
          </p>
        </div>
      </div>
      <div className="mt-32 grid grid-cols-4 gap-16 md:mt-64 md:gap-10">
        {stats.map(({ value, suffix, description }, idx) => (
          <div
            className="col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1"
            key={idx}
          >
            <h3 className="mb-8 font-display text-5xl font-medium md:text-7xl">
              <Countup end={value} suffix={suffix && suffix} />
            </h3>
            <p className="text-lg">{description}</p>
          </div>
        ))}
      </div>
      <div className="gutter-t gap grid grid-cols-3 grid-rows-3">
        <figure className="relative col-span-3 overflow-hidden rounded sm:col-span-2 sm:row-span-3">
          <Img
            src={ImgBigMachine}
            alt="Zeda Inc. manufacturing facility"
            placeholder="blur"
            fill={false}
            width={1440}
            height={658}
            className="object-cover object-top"
          />
        </figure>
        <figure className="relative col-span-3 overflow-hidden rounded sm:col-span-1 sm:row-span-1">
          <Img
            src={LatticeStructure}
            alt="Zeda Inc. manufacturing facility"
            fill={true}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          />
        </figure>
        <figure className="relative col-span-3 overflow-hidden rounded sm:col-span-1 sm:row-span-2">
          <Img
            src={MfgJumpsuit}
            alt="Zeda Inc. manufacturing facility"
            fill={true}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          />
        </figure>
      </div>

      <div className="gutter-t relative">
        <div>
          <h2 className="relative z-20 mb-12 max-w-[37ch]">
            Our objective is to better lives through investing in cutting-edge
            tech, innovative companies, and groundbreaking ideas.
          </h2>

          <div className="relative z-20">
            <Button variant="outline" size="lg" asChild>
              <Link href="/certifications">
                <ArrowRightIcon className="relative -translate-x-1 transition-all group-hover:translate-x-1" />
                Certifications
              </Link>
            </Button>
          </div>

          <div className="relative z-20 mt-64 flex w-fit -translate-x-6 flex-row flex-nowrap justify-end gap-2 rounded-br-full rounded-tr-full border border-l-0 border-silver-900 bg-black/60 p-4 backdrop-blur-sm md:-translate-x-10 md:p-8">
            {certBadges.map(({ image, alt }, i) => (
              <figure
                key={i}
                className="inline-block rounded-full border border-silver-800 bg-black"
              >
                <Img
                  src={`/images/${image}`}
                  blurDataURL={`/images/${image}`}
                  alt={alt}
                  height={130}
                  width={130}
                  quality={100}
                />
              </figure>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 top-32 flex h-full w-full justify-end lg:top-16">
          <Img
            src={ZedaEngines}
            alt="Zeda spaceship engine prototype illustration"
            fill={false}
            width={787}
            height={637}
            className="relative -right-6 z-10 object-contain object-right md:-right-8 lg:-right-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          />
        </div>
      </div>
    </Section>
  )
}

export default WhyUs
