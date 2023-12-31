import {
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  GlobeIcon,
} from '@radix-ui/react-icons'
import type { Settings } from 'lib/sanity.queries'
import { LayoutThemes } from 'utils/constants'

import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { Heading1FadeIn } from 'components/PageTitle'
import PageTitle from 'components/PageTitle'
import { Button, Section, Separator } from 'components/ui'

import ContactForm from './ContactForm'

const emailAddress = 'info@z8a.com'

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
        <PageTitle theme={LayoutThemes.DARK} className="[&>div]:md:mt-48">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="flex-[2]">
              <Heading1FadeIn>
                <h1 className="mb-2">Contact</h1>
                <p className="max-w-[44ch] font-medium text-silver-500">
                  Whether you have questions, feedback, or want to explore
                  partnership opportunities, we&apos;re here to assist.
                </p>
              </Heading1FadeIn>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`mailto:${emailAddress}?subject=Zeda, Inc. | Contact request`}
                >
                  <EnvelopeClosedIcon className="relative -translate-x-1 transition-all group-hover:translate-x-1" />
                  {emailAddress}
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>
        <Section pt="pt-0" pr="pr-0" pb="pb-0" pl="pl-0">
          <div className="relative grid grid-cols-1 bg-background-500 md:grid-cols-5">
            <div className="border-b px-6 py-10 md:col-span-3 md:border-b-0 md:border-r md:p-14 lg:p-20">
              <div className="mb-5">
                <EnvelopeOpenIcon className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl md:tracking-wide">
                Send us a message
              </h2>
              <p className="max-w-[42ch]">
                Feel free to{' '}
                <a
                  href={`mailto:${emailAddress}?subject=Zeda, Inc. | Contact request`}
                  className="font-medium decoration-2 hover:underline"
                >
                  email us
                </a>{' '}
                or use the form below to send us a message. We will get back to
                you as soon as possible.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="bg-white px-6 py-10 text-black md:col-span-2 md:p-14 lg:p-20">
              <div className="mb-5">
                <GlobeIcon className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl md:tracking-wide">Headquarters</h2>
              <p className="">
                <b>Zeda Holdings, Inc.</b>
                <br />
                4026 Clipper Court,
                <br />
                Fremont, CA 94538
              </p>

              <Separator className="my-10 bg-silver-200" />

              <p className="text-base">
                <b>Zeda SG Pte Ltd</b>
                <br />
                10 Hospital Boulevard
                <br />
                The Innovation Center 02-02
                <br />
                168582, Singapore
              </p>

              <p className="text-base">
                <b>Zeda Technologies</b>
                <br />
                1120 Strategic Parkway
                <br />
                Suite 300
                <br />
                Springdale, OH, 45246
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export default ContactPage
