import { ArrowRightIcon } from '@radix-ui/react-icons'
import ImgCapabilities from 'public/images/technologies/mfg-capabilities.jpg'

import { SectionSplit } from 'components/ui'

const capabilities = [
  {
    title: 'Advanced CAM programming',
  },
  {
    title: 'In-house full 5-axis advanced CNC machining',
  },
  {
    title: 'Metal additive manufacturing',
  },
  // {
  //   title: 'Polymer 3D printing',
  // },
  {
    title: 'Complete dimensional inspection',
  },
  {
    title: 'Extrude honing',
  },
  {
    title: 'EDM Wire',
  },
]

const Capabilities = () => (
  <SectionSplit
    title="Capabilities"
    description="We believe that leveraging our past experience with a variety of
    processes, combined with our strong sourcing relationships, we can provide
    a more complete value by managing complete project steps."
    image={ImgCapabilities}
    alt="Zeda Inc. manufacturing capabilities"
    id="capabilities"
    reverse={true}
  >
    <ul className="flex flex-col">
      {capabilities.map(({ title }, idx) => (
        <li
          className="flex items-center gap-4 border-t border-silver-900 py-5 font-display text-xl font-semibold capitalize last:pb-0"
          key={idx}
        >
          <span>
            <ArrowRightIcon className="h-5 w-5 shrink-0 text-blue-500" />
          </span>
          {title}
        </li>
      ))}
    </ul>
  </SectionSplit>
)

export default Capabilities
