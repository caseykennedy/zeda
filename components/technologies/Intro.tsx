import {
  ChevronDownIcon,
  FaceIcon,
  LayersIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
  TimerIcon,
} from '@radix-ui/react-icons'

import FeatureGridItem, { type FeatureShape } from 'components/FeatureGridItem'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'
import Section from 'components/ui/Section'

enum FeatureTypes {
  usFirst = 'us-first',
  process = 'proccess',
}

interface AccordionFeatureShape extends FeatureShape {
  type: string
}

const data: AccordionFeatureShape[] = [
  {
    type: FeatureTypes.usFirst,
    icon: <FaceIcon />,
    title: 'Learn',
    desc: 'Knowledge is power. We offer entry-level courses for clinicians to learn how to generate their own pre-operative surgical models as well as advanced courses for engineers needing training on powder-bed laser and e-beam metal 3D printers.',
  },
  {
    type: FeatureTypes.usFirst,
    icon: <RocketIcon />,
    title: 'Accelerate',
    desc: `Let Zeda take your concepts to prototypes and take your prototypes to volume production. We understand clinical deadlines and can offer "next build plate priority" service, so we'll get it to you as soon as possible.`,
  },
  {
    type: FeatureTypes.usFirst,
    icon: <PersonIcon />,
    title: 'Collaborate',
    desc: 'Academic innovators have access to our team and technology, as well as secure, on-site co-location. Zeda has agreements to collaboratively develop and commercialize novel medical devices with universities. Start-ups focused on related technologies can leverage our accelerator program.',
  },
  {
    type: FeatureTypes.process,
    icon: <RulerSquareIcon />,
    title: 'Prototype',
    desc: 'PLA, ABS, PEEK, 316L, Ti6Al4V-ELI and more. Optional "guaranteed next build plate" priority service.',
  },
  {
    type: FeatureTypes.process,
    icon: <LayersIcon />,
    title: 'Design',
    desc: `We offer full contract design services or we can augment your engineering capabilities as a technical consultant.`,
  },
  {
    type: FeatureTypes.process,
    icon: <TimerIcon />,
    title: 'Time',
    desc: 'Design, prototype and manufacture locally. Cut down validation & qualification time by prototyping on the same platforms used for production.',
  },
]

const Lead = () => (
  <Section>
    <h2 className="mx-auto my-16 max-w-[54ch] text-center text-3xl md:my-28 md:text-4xl md:leading-tight">
      Vertex Manufacturing (now Zeda, Inc.), a Cincinnati-based business, was
      born out of the desire of a select group of individuals to leverage their
      advanced manufacturing and technology backgrounds to help companies solve
      some of their most difficult problems.
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
    <AccordionTrigger className="hover:bg-blue-500 hover:text-black data-[state=open]:bg-black data-[state=open]:text-blue-500 [&[data-state=open]>div>div>svg]:rotate-180">
      <div className="gutter-x flex flex-nowrap items-center gap-4 md:gap-12">
        <div className="text-base">0{id}</div>
        <h2 className="font-sans text-xl font-medium md:text-3xl">{title}</h2>
      </div>
      <div className="gutter-r">
        <ChevronDownIcon className="text-muted-foreground h-8 w-8 shrink-0 transition-transform duration-200" />
      </div>
    </AccordionTrigger>
    <AccordionContent className="w-full bg-black text-white">
      <div className="gutter-x gutter-y mx-auto w-full max-w-site">
        <div className="gap grid grid-cols-6">
          <div className="col-span-6 mb-8 lg:col-span-4">
            <p
              dangerouslySetInnerHTML={{ __html: desc }}
              className="font-display text-2xl font-medium leading-tight tracking-wide md:text-3xl"
            />
          </div>
        </div>
        <div className="mt-32 grid grid-cols-3 gap-10 lg:mt-64">
          {features.map(({ icon, title, desc }, idx) => (
            <FeatureGridItem icon={icon} title={title} desc={desc} key={idx} />
          ))}
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
)

export const Intro = () => (
  <>
    <Lead />
    <Accordion type="multiple">
      <Collapse
        id={1}
        type={FeatureTypes.usFirst}
        title="U.S. First Manufacturing"
        desc="Zeda is a proud vendor of advanced manufacturing processes and is working hard to promote the domestic manufacturing renaissance."
        features={data.filter(({ type }) => type === FeatureTypes.usFirst)}
      />
      <Collapse
        id={2}
        type={FeatureTypes.process}
        title="Rapid Prototyping"
        desc="We take great ideas and move them through complex hurdles in a short period of time. Innovations that once took years can now be accomplished in months, weeks or even days."
        features={data.filter(({ type }) => type === FeatureTypes.process)}
      />
    </Accordion>
  </>
)

export default Intro
