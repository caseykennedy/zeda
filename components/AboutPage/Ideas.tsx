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

export const Zeda = () => {
  // const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <section>
      <Accordion type="single" collapsible>
        <AccordionItem value="ideas">
          <AccordionTrigger>
            <div className="flex flex-nowrap items-center gap-12">
              <div className="text-base">01</div>
              <div className="font-sans text-3xl font-medium">
                Ideas at the speed of light
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full bg-black text-white">
            <div className="gutter-x gutter-y mx-auto w-full max-w-site">
              <div className="gap grid grid-cols-6">
                <div className="col-span-6 mb-8 md:col-span-4">
                  <div className="text-3xl font-normal">
                    Rapid prototyping is more than having fast equipment. You
                    need talented engineers and a robust design hardware and
                    software ecosystem. Zeda offers all of this. We accelerate
                    innovative ideas at every level, whether you are a
                    multi-national corporation needing advanced design
                    consultation, or an individual looking to develop an initial
                    medical device prototype.
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

export default Zeda
