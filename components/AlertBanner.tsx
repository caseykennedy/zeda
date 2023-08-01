/* eslint-disable @next/next/no-html-link-for-pages */
import { cn } from 'utils'

import Container from 'components/BlogContainer'

export default function Alert({
  preview,
  loading,
}: {
  preview?: boolean
  loading?: boolean
}) {
  if (!preview) return null

  return (
    <div
      className={cn(
        loading ? 'animate-pulse' : '',
        'z-50 w-full border-t border-violet-500 bg-violet-500 text-white'
      )}
    >
      <Container>
        <div className="py-10 text-center text-sm">
          {'Previewing draft content. '}
          <a
            href="/api/disable-draft"
            className="hover:text-cyan underline transition-colors duration-200"
          >
            Disable draft mode
          </a>
        </div>
      </Container>
    </div>
  )
}
