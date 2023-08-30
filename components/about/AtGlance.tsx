import stats from 'config/stats.json'
import HandTurbine from 'public/images/about/hand-turbine.jpg'
import WorkGroup from 'public/images/about/work-group.jpg'
import WorkMask from 'public/images/about/work-mask.jpg'

import Countup from 'components/Countup'
import Img from 'components/Img'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const AtGlance = () => {
  return (
    <Section className="dark border-t border-silver-900 bg-black text-white">
      <SectionTitle dark>At a glance</SectionTitle>

      <div className="grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            We build it better
            <br />
            together
          </h2>
        </div>

        <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
          <p className="max-w-[40ch] text-lg text-silver-500">
            Zeda&apos;s objective is to better lives by investing in
            cutting-edge tech, innovative companies, and groundbreaking ideas.
          </p>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-4 gap-16 md:mt-64 md:gap-10">
        {stats.map(({ value, prefix, suffix, description }, idx) => (
          <div
            className="col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1"
            key={idx}
          >
            <h3 className="mb-8 font-display text-7xl font-medium">
              <Countup
                end={value}
                prefix={prefix ?? prefix}
                suffix={suffix ?? suffix}
              />
            </h3>
            <p className="text-lg">{description}</p>
          </div>
        ))}
      </div>

      <div className="gutter-t gap grid grid-cols-3 grid-rows-3">
        <figure className="relative col-span-3 overflow-hidden rounded sm:col-span-2 sm:row-span-3">
          <Img
            src={WorkMask}
            alt="Zeda Inc. manufacturing facility"
            placeholder="blur"
            fill={false}
            width={1440}
            height={658}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              transform: 'scaleX(-1)',
            }}
          />
        </figure>
        <figure className="relative col-span-3 overflow-hidden rounded sm:col-span-1 sm:row-span-1">
          <Img
            src={HandTurbine}
            alt="Zeda Inc. manufacturing facility"
            fill={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <figure className="relative col-span-3 overflow-hidden rounded sm:col-span-1 sm:row-span-2">
          <Img
            src={WorkGroup}
            alt="Zeda Inc. manufacturing facility"
            fill={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
      </div>
    </Section>
  )
}

export default AtGlance
