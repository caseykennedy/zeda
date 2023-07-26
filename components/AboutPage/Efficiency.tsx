import { LayersIcon, RulerSquareIcon, TimerIcon } from '@radix-ui/react-icons'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'

const data = [
  {
    icon: <TimerIcon />,
    title: 'Time',
    description:
      'Design, prototype and manufacture locally. Cut down validation & qualification time by prototyping on the same platforms used for production.',
  },
  {
    icon: <RulerSquareIcon />,
    title: 'Prototype',
    description:
      'PLA, ABS, PEEK, 316L, Ti6Al4V-ELI and more. Optional "guaranteed next build plate" priority service.',
  },
  {
    icon: <LayersIcon />,
    title: 'Design',
    description: `We offer full contract design services or we can augment your engineering capabilities as a technical consultant.`,
  },
]

export const Efficiency = () => {
  // const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <section>
      <Accordion type="single" collapsible>
        <AccordionItem value="efficiency">
          <AccordionTrigger>
            <div className="flex flex-nowrap items-center gap-4 md:gap-12">
              <div className="text-base">02</div>
              <div className="font-sans text-xl font-medium md:text-3xl">
                Time is of the essence
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full bg-black text-white">
            <div className="gutter-x gutter-y mx-auto w-full max-w-site">
              <div className="gap grid grid-cols-6">
                <div className="col-span-6 mb-8 md:col-span-4">
                  <div className="text-3xl font-normal">
                    Zeda&apos;s end-to-end solutions guide you from concept to
                    production, helping your team finish first. Validate
                    prototypes using volume production equipment. Our open
                    design and manufacturing ecosystem minimizes wasted
                    engineering.
                  </div>
                </div>
              </div>
              <div className="mt-32 grid grid-cols-3 gap-10 lg:mt-48">
                {data.map(({ icon, title, description }, idx) => (
                  <div
                    className="col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1"
                    key={idx}
                  >
                    <div className="mb-12 mt-4 [&>svg]:h-8 [&>svg]:w-8">
                      {icon}
                    </div>
                    <h4 className="mb-8 font-display text-3xl font-semibold">
                      {title}
                    </h4>
                    <p className="text-lg text-silver-300">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Efficiency
