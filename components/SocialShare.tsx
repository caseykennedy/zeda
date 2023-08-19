import { Link2Icon } from '@radix-ui/react-icons'
import { cn } from 'utils'

import { Button, Icon } from 'components/ui'

const ButtonLink = ({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => (
  <Button variant="ghost" size="icon" asChild>
    <a
      href={href}
      target="_blank noreferrer noopener"
      className={cn(`text-silver-500 hover:text-white`, className)}
    >
      {children}
    </a>
  </Button>
)

const SocialShare = ({
  name,
  slug,
}: {
  name: 'facebook' | 'linkedin' | 'twitter' | 'share'
  slug?: string
}) => {
  const shareSlug = `https://z8a.com/${slug}`

  switch (name) {
    case 'facebook':
      return (
        <ButtonLink href={`//www.facebook.com/sharer.php?u=${shareSlug}`}>
          <Icon name={name} size={20} />
        </ButtonLink>
      )
    case 'linkedin':
      return (
        <ButtonLink
          href={`//www.linkedin.com/shareArticle?mini=true&url=${shareSlug}`}
        >
          <Icon name={name} size={20} />
        </ButtonLink>
      )
    case 'twitter':
      return (
        <ButtonLink href={`//twitter.com/share?url=${shareSlug}`}>
          <Icon name={name} size={20} />
        </ButtonLink>
      )
    case 'share':
      return (
        <ButtonLink
          href={`//www.linkedin.com/shareArticle?mini=true&url=${shareSlug}`}
        >
          <Link2Icon name={name} className="h-5 w-5 shrink-0" />
        </ButtonLink>
      )
    default:
      return null
  }
}

export default SocialShare
