import {
  FaceIcon,
  LayersIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
  TimerIcon,
} from '@radix-ui/react-icons'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'
import Section from 'components/ui/Section'

import AtGlanceGallery from './AtGlance'

type FeatureShape = {
  type: string
  icon: JSX.Element
  title: string
  description: string
}

const data: FeatureShape[] = [
  {
    type: 'ideas',
    icon: <FaceIcon />,
    title: 'Learn',
    description:
      'Knowledge is power. We offer entry-level courses for clinicians to learn how to generate their own pre-operative surgical models as well as advanced courses for engineers needing training on powder-bed laser and e-beam metal 3D printers.',
  },
  {
    type: 'ideas',
    icon: <RocketIcon />,
    title: 'Accelerate',
    description: `Let Zeda take your concepts to prototypes and take your prototypes to volume production. We understand clinical deadlines and can offer "next build plate priority" service, so we'll get it to you as soon as possible.`,
  },
  {
    type: 'ideas',
    icon: <PersonIcon />,
    title: 'Collaborate',
    description:
      'Academic innovators have access to our team and technology, as well as secure, on-site co-location. Zeda has agreements to collaboratively develop and commercialize novel medical devices with universities. Start-ups focused on related technologies can leverage our accelerator program.',
  },
  {
    type: 'efficiency',
    icon: <RulerSquareIcon />,
    title: 'Prototype',
    description:
      'PLA, ABS, PEEK, 316L, Ti6Al4V-ELI and more. Optional "guaranteed next build plate" priority service.',
  },
  {
    type: 'efficiency',
    icon: <LayersIcon />,
    title: 'Design',
    description: `We offer full contract design services or we can augment your engineering capabilities as a technical consultant.`,
  },
  {
    type: 'efficiency',
    icon: <TimerIcon />,
    title: 'Time',
    description:
      'Design, prototype and manufacture locally. Cut down validation & qualification time by prototyping on the same platforms used for production.',
  },
]

const Intro = () => (
  <Section>
    <h2 className="mx-auto my-24 max-w-[48ch] text-center text-3xl md:my-32 md:text-4xl md:leading-tight">
      Rapid prototyping is more than having fast equipment. You need talented
      engineers and a robust design hardware and software ecosystem. Zeda offers
      all of this.
    </h2>
  </Section>
)

export const Collapse = ({
  id,
  type,
  title,
  desc,
  features,
}: {
  id: number
  type: string
  title: string
  desc: string
  features: FeatureShape[]
}) => (
  <AccordionItem value={type}>
    <AccordionTrigger>
      <div className="flex flex-nowrap items-center gap-4 md:gap-12">
        <div className="text-base">0{id}</div>
        <div className="font-sans text-xl font-medium md:text-3xl">{title}</div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="w-full bg-black text-white">
      <div className="gutter-x gutter-y mx-auto w-full max-w-site">
        <div className="gap grid grid-cols-6">
          <div className="col-span-6 mb-8 md:col-span-4">
            <div
              dangerouslySetInnerHTML={{ __html: desc }}
              className="text-3xl font-normal"
            />
          </div>
        </div>
        <div className="mt-32 grid grid-cols-3 gap-10 lg:mt-64">
          {features.map(({ icon, title, description }, idx) => {
            return (
              <div
                className="col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1"
                key={idx}
              >
                <div className="mb-16 mt-4 [&>svg]:h-8 [&>svg]:w-8">{icon}</div>
                <h4 className="mb-8 font-display text-3xl font-semibold">
                  {title}
                </h4>
                <p className="text-lg text-white">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
)

export const Zeda = () => (
  <>
    <Intro />
    <Accordion type="multiple">
      <Collapse
        id={1}
        type="ideas"
        title="Ideas at the speed of light"
        desc="We accelerate ideas from napkin sketch to production, supporting latticing, predictive simulation, and advanced additive manufacturing. Our expertise spans design, manufacturing, and clinical implementation of medical devices, encompassing powdered titanium creation to surgeon ergonomics, expanding the design envelope."
        features={data.filter(({ type }) => type === 'ideas')}
      />
      <Collapse
        id={2}
        type="efficiency"
        title="Time is of the essence"
        desc="Zeda's end-to-end solutions guide you from concept to production, helping your team finish first. Validate prototypes using volume production equipment. Our open design and manufacturing ecosystem minimizes wasted engineering."
        features={data.filter(({ type }) => type === 'efficiency')}
      />
    </Accordion>
    <AtGlanceGallery />
  </>
)

export default Zeda
