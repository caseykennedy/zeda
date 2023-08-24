import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'components/ui/Sheet'

interface Props {
  children: React.ReactNode
}

const MobileNavigation = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation
