import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'

const data = [
  {
    value: '4',
    description: 'Globally operated advanced manufacturing businesses',
  },
  {
    value: '5',
    description: 'Established geographical locations around the world',
  },
  {
    value: '$68m',
    description: 'Total equity and financing capital raise as of 2023',
  },
  {
    value: '150k',
    description: 'Square ft. of advanced manufacturing facilities',
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
            <div className="flex flex-nowrap items-center gap-12">
              <div className="text-base">02</div>
              <div className="font-sans text-3xl font-medium">
                Time is of the essence
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full bg-black text-white">
            <div className="gutter-x gutter-y mx-auto w-full max-w-site">
              <div className="gap grid grid-cols-6">
                <div className="col-span-6 mb-8 md:col-span-4">
                  <div className="text-3xl font-normal">
                    Zeda offers end-to-end solutions which will guide you from
                    concept to production, getting your team to the finish line
                    first. Prototype and validate on the same equipment used in
                    volume production. Our open design and manufacturing
                    ecosystem reduces wasted engineering considerably.
                  </div>
                </div>
              </div>
              <div className="mt-48 grid grid-cols-4 gap-8 md:mt-72">
                {data.map(({ value, description }, idx) => (
                  <div
                    className="col-span-4 border-l border-silver-700 pl-5 sm:col-span-2 lg:col-span-1"
                    key={idx}
                  >
                    <h3 className="mb-8 font-display text-6xl font-semibold">
                      {value}
                    </h3>
                    <p className="text-base">{description}</p>
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
