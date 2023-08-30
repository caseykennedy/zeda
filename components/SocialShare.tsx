import { useState } from 'react'
import { CheckIcon, Link2Icon } from '@radix-ui/react-icons'
import { useCopyToClipboard } from 'hooks'
import { cn, getBaseUrl } from 'utils'

import { Button, Icon } from 'components/ui'

interface ButtonLinkProps {
  className?: string
  children: React.ReactNode
  href: string
  name: string
  share?: boolean
}

const ButtonLink = ({
  className,
  children,
  href,
  name,
  share,
}: ButtonLinkProps): JSX.Element => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        `border-white text-black hover:border-black hover:text-white`,
        className
      )}
      asChild
    >
      {share ? (
        <button aria-label={`Copy this article's URL`}>{children}</button>
      ) : (
        <a
          href={href}
          target="_blank noreferrer noopener"
          aria-label={`Share this article on ${name}`}
        >
          {children}
        </a>
      )}
    </Button>
  )
}

interface SocialShareProps {
  name: 'facebook' | 'linkedin' | 'twitter' | 'share'
  slug?: string
}

const SocialShare = ({ name, slug }: SocialShareProps): JSX.Element | null => {
  const [isCopied, setIsCopied] = useState(false)
  const [, copy] = useCopyToClipboard()

  const shareSlug = `${getBaseUrl()}/posts/${slug}`

  const handleCopy = (href: string) => {
    console.log('copied:', href)

    copy(href)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  switch (name) {
    case 'facebook':
      return (
        <ButtonLink
          href={`//www.facebook.com/sharer.php?u=${shareSlug}`}
          name={name}
        >
          <Icon name={name} size={20} />
        </ButtonLink>
      )
    case 'linkedin':
      return (
        <ButtonLink
          href={`//www.linkedin.com/shareArticle?mini=true&url=${shareSlug}`}
          name={name}
        >
          <Icon name={name} size={20} />
        </ButtonLink>
      )
    case 'twitter':
      return (
        <ButtonLink href={`//twitter.com/share?url=${shareSlug}`} name={name}>
          <Icon name={name} size={20} />
        </ButtonLink>
      )
    case 'share':
      return (
        <div onClick={() => handleCopy(shareSlug)}>
          <ButtonLink href={shareSlug} share={true} name={name}>
            {isCopied ? (
              <CheckIcon name={name} className="h-5 w-5 shrink-0" />
            ) : (
              <Link2Icon name={name} className="h-5 w-5 shrink-0" />
            )}
          </ButtonLink>
        </div>
      )
    default:
      return null
  }
}

export default SocialShare
