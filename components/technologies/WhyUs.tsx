import stats from 'config/tech-stats.json'
import ImgBigMachine from 'public/images/technologies/big-machine.jpg'
import ImgHandsOn from 'public/images/technologies/hands-on.jpg'
// import HandsScrew from 'public/images/technologies/hands-screw.jpg'
import LatticeStructure from 'public/images/technologies/lattice-structure.jpg'
import MfgJumpsuit from 'public/images/technologies/mfg-jumpsuit.jpg'

import Countup from 'components/Countup'
import Img from 'components/Img'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const WhyUs = () => {
  return (
    <Section className="dark border-t border-silver-900 bg-black text-white">
      <SectionTitle dark>Why us?</SectionTitle>
      <div className="grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            Zeda is where ideas
            <br />
            meet reality
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
    </Section>
  )
}

export default WhyUs
