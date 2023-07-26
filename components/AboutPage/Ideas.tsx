import { FaceIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'

const data = [
  {
    icon: <FaceIcon />,
    title: 'Learn',
    description:
      'Knowledge is power. We offer entry-level courses for clinicians to learn how to generate their own pre-operative surgical models as well as advanced courses for engineers needing training on powder-bed laser and e-beam metal 3D printers.',
  },
  {
    icon: <RocketIcon />,
    title: 'Accelerate',
    description: `Let Zeda take your concepts to prototypes and take your prototypes to volume production. We understand clinical deadlines and can offer "next build plate priority" service, so we'll get it to you as soon as possible.`,
  },
  {
    icon: <PersonIcon />,
    title: 'Collaborate',
    description:
      'Academic innovators have access to our team and technology, as well as secure, on-site co-location. Zeda has agreements to collaboratively develop and commercialize novel medical devices with universities. Start-ups focused on related technologies can leverage our accelerator program.',
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
            <div className="flex flex-nowrap items-center gap-4 md:gap-12">
              <div className="text-base">01</div>
              <div className="font-sans text-xl font-medium md:text-3xl">
                Ideas at the speed of light
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="w-full bg-black text-white">
            <div className="gutter-x gutter-y mx-auto w-full max-w-site">
              <div className="gap grid grid-cols-6">
                <div className="col-span-6 mb-8 lg:col-span-4">
                  <p className="text-xl font-normal md:text-3xl">
                    We accelerate ideas from napkin sketch to production,
                    supporting latticing, predictive simulation, and advanced
                    additive manufacturing. Our expertise spans design,
                    manufacturing, and clinical implementation of medical
                    devices, encompassing powdered titanium creation to surgeon
                    ergonomics, expanding the design envelope.
                  </p>
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

export default Zeda
