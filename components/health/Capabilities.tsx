import { ArrowRightIcon } from '@radix-ui/react-icons'
import imgInspect from 'public/images/health/device-inspect.jpg'

import { SectionSplit } from 'components/ui'

const capabilities = [
  {
    title: 'list',
  },
  {
    title: 'list',
  },
  {
    title: 'list',
  },
  {
    title: 'list',
  },
  {
    title: 'list',
  },
  {
    title: 'list',
  },
]

const Capabilities = () => (
  <SectionSplit
    title="Title"
    description="description"
    image={imgInspect}
    alt="Zeda Inc. manufacturing capabilities"
    id="capabilities"
    reverse={true}
  >
    <ul className="flex flex-col">
      {capabilities.map(({ title }, idx) => (
        <li
          className="flex items-center gap-4 border-t border-silver-800 py-4 font-display text-xl font-semibold capitalize last:pb-0"
          key={idx}
        >
          <span>
            <ArrowRightIcon className="h-5 w-5 shrink-0 text-yellow-500" />
          </span>
          {title}
        </li>
      ))}
    </ul>
  </SectionSplit>
)

export default Capabilities
