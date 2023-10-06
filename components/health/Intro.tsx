import {
  ChevronDownIcon,
  GlobeIcon,
  HandIcon,
  LayersIcon,
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
    icon: <GlobeIcon />,
    title: 'Global contribution',
    desc: 'Zeda Health takes pride in actively contributing to the Global Healthcare Innovation Community. Our mission is to use technology to produce cutting edge devices and therapies that are accessible to every patient globally. ',
  },
  {
    type: FeatureTypes.usFirst,
    icon: <HandIcon />,
    title: 'Z-to-A approach',
    desc: `Our name reflects our Z-to-A approach, emphasizing a patient-centric methodology that starts with understanding the patient's needs and ends with innovative products.`,
  },
  {
    type: FeatureTypes.usFirst,
    icon: <LayersIcon />,
    title: 'Tech expertise',
    desc: 'We have successfully integrated deep tech manufacturing capabilities with regulatory know-how, resulting in over 30 FDA-approved devices and a portfolio that includes 12 patents.',
  },
]

const Lead = () => (
  <Section>
    <h2 className="mx-auto my-16 max-w-[56ch] text-center text-3xl md:my-28 md:text-4xl md:leading-tight">
      Zeda Health, a medical technology company, pioneers solutions to global
      healthcare challenges by integrating 3D printing and nanotechnologies.
      Focused on accessibility, we imagine and create innovative devices and
      therapies, ensuring better healthcare products for all.
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
    <AccordionTrigger className="hover:bg-yellow-500 hover:text-black data-[state=open]:bg-black data-[state=open]:text-yellow-500 [&[data-state=open]>div>div>svg]:rotate-180">
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
        title="Build together"
        desc="We're a deep technology company based in Singapore focused on advanced manufacturing. We bring healthcare ideas from concept to commercialization."
        features={data.filter(({ type }) => type === FeatureTypes.usFirst)}
      />
      {/* <Collapse
        id={2}
        type={FeatureTypes.process}
        title="Rapid Prototyping"
        desc="We take great ideas and move them through complex hurdles in a short period of time. Innovations that once took years can now be accomplished in months, weeks or even days."
        features={data.filter(({ type }) => type === FeatureTypes.process)}
      /> */}
    </Accordion>
  </>
)

export default Intro
