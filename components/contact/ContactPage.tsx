import { EnvelopeOpenIcon, GlobeIcon } from '@radix-ui/react-icons'
import type { Settings } from 'lib/sanity.queries'
import { LayoutThemes } from 'utils/constants'

import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { Button, Icon, PageTitle, Section } from 'components/ui'

import ContactForm from './ContactForm'

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
      <Layout theme={LayoutThemes.DARK}>
        <PageTitle theme={LayoutThemes.DARK}>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="flex-[2]">
              <h1 className="mb-2">Contact</h1>
              <p className="max-w-[44ch] font-medium text-silver-500">
                Whether you have questions, feedback, or want to explore
                partnership opportunities, we&apos;re here to assist.
              </p>
            </div>
            {/* <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="outline" asChild>
                <a href="#open-positions">
                  <Icon
                    name="arrow-right"
                    className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                  />
                  Email us
                </a>
              </Button>
            </div> */}
          </div>
        </PageTitle>
        <Section pt="pt-0" pr="pr-0" pb="pb-0" pl="pl-0" className="">
          <div className="relative grid grid-cols-1 bg-background-500 md:grid-cols-5">
            <div className="px-6 py-10 md:col-span-3 md:p-14 lg:p-20">
              <div className="mb-6">
                <EnvelopeOpenIcon className="h-8 w-8" />
              </div>
              <h2 className="mb-3 text-xl md:text-2xl md:tracking-wide">
                Email us
              </h2>
              <p className="max-w-[36ch]">
                Send us an email using the contact form below. It is the
                simplest way to connect with us.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="bg-white px-6 py-10 text-black md:col-span-2 md:p-14 lg:p-20">
              <div className="mb-6">
                <GlobeIcon className="h-8 w-8" />
              </div>
              <h2 className="mb-3 text-xl md:text-2xl md:tracking-wide">
                Address
              </h2>
              <p className="max-w-[36ch]">
                47929 Fremont Blvd.
                <br />
                Fremont, CA 94538
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export default ContactPage
