import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  CaretUpIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import { cn } from 'utils'

type IconProps = {
  name:
    | 'arrow-right'
    | 'arrow-top-right'
    | 'carat-up'
    | 'chevron-up'
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | string
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  const iconClassNames = 'icon | h-4 w-4'

  switch (name) {
    case 'arrow-right':
      return <ArrowRightIcon className={cn(iconClassNames, className)} />
    case 'arrow-top-right':
      return <ArrowTopRightIcon className={cn(iconClassNames, className)} />
    case 'carat-up':
      return <CaretUpIcon className={cn(iconClassNames, className)} />
    case 'chevron-up':
      return <ChevronUpIcon className={cn(iconClassNames, className)} />
    case 'instagram':
      return (
        <span className={cn('icon', className)}>
          <Instagram size={20} />
        </span>
      )
    case 'linkedin':
      return (
        <span className={cn('icon', className)}>
          <LinkedIn size={20} />
        </span>
      )
    case 'twitter':
      return (
        <span className={cn('icon', className)}>
          <Twitter size={20} />
        </span>
      )
  }
}

type SVGProps = {
  size: number
}

function Instagram({ size }: SVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9 1C2.74609 1 1 2.74609 1 4.9V10.1C1 12.2539 2.74609 14 4.9 14H10.1C12.2539 14 14 12.2539 14 10.1V4.9C14 2.74609 12.2539 1 10.1 1H4.9ZM11.1562 5.0625C11.8293 5.0625 12.375 4.51685 12.375 3.84375C12.375 3.17065 11.8293 2.625 11.1562 2.625C10.4832 2.625 9.9375 3.17065 9.9375 3.84375C9.9375 4.51685 10.4832 5.0625 11.1562 5.0625ZM7.5 10.75C9.29493 10.75 10.75 9.29493 10.75 7.5C10.75 5.70507 9.29493 4.25 7.5 4.25C5.70507 4.25 4.25 5.70507 4.25 7.5C4.25 9.29493 5.70507 10.75 7.5 10.75Z"
        />
      </svg>
    </svg>
  )
}

function LinkedIn({ size }: SVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
        />
      </svg>
    </svg>
  )
}

function Twitter({ size }: SVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4865 4.73154C12.4865 4.87919 12.4865 4.95302 12.4865 5.10067C12.4865 8.79195 9.61081 13 4.38919 13C2.8 13 1.28649 12.557 0 11.745C0.227027 11.745 0.454054 11.8188 0.681081 11.8188C2.04324 11.8188 3.25405 11.3758 4.23784 10.6376C2.95135 10.6376 1.96757 9.8255 1.58919 8.71812C1.74054 8.71812 1.96757 8.79195 2.11892 8.79195C2.34595 8.79195 2.64865 8.79195 2.87568 8.71812C1.58919 8.49664 0.605405 7.31544 0.605405 5.98658C0.908108 6.13423 1.36216 6.20805 1.81622 6.28188C1.05946 5.7651 0.52973 4.95302 0.52973 3.99329C0.52973 3.47651 0.681081 3.03356 0.908108 2.5906C2.34595 4.21477 4.46486 5.32215 6.88649 5.4698C6.81081 5.24832 6.81081 5.02685 6.81081 4.80537C6.81081 3.25503 8.0973 2 9.68649 2C10.5189 2 11.2757 2.36913 11.8054 2.88591C12.4865 2.73826 13.0919 2.51678 13.6216 2.22148C13.3946 2.88591 12.9405 3.40268 12.3351 3.77181C12.9405 3.69799 13.4703 3.55034 14 3.32886C13.5459 3.91946 13.0919 4.36242 12.4865 4.73154Z"
        />
      </svg>
    </svg>
  )
}
