import { LayoutThemes } from 'lib/constants'
import type { Settings } from 'lib/sanity.queries'

import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { Button, Icon, PageTitle } from 'components/ui'

interface Props {
  settings: Settings
}

export const ContactPage = ({ settings }: Props) => {
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'Contact',
        }}
      />
      <Layout theme={LayoutThemes.LIGHT}>
        <PageTitle theme={LayoutThemes.LIGHT}>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="flex-[2]">
              <h1 className="max-w-[24ch]">Contact</h1>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="primary" asChild>
                <a href="#open-positions">
                  <Icon
                    name="arrow-right"
                    className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                  />
                  Email us
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>
      </Layout>
    </>
  )
}

export default ContactPage
