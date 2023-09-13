import { useRouter } from 'next/router'

const useActiveLink = (href: string) => {
  const router = useRouter()
  const isActive = router.asPath === href
  return { isActive }
}

export default useActiveLink
