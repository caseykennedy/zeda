import { DownloadIcon } from '@radix-ui/react-icons'
import type { Settings } from 'lib/sanity.queries'
import certAs from 'public/images/certificates/as-9100d.png'
import certIso from 'public/images/certificates/iso-13485.png'
import certIsoVertex from 'public/images/certificates/iso-13485-vertex.png'
import { LayoutThemes } from 'utils/constants'

import Img from 'components/Img'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { Heading1FadeIn } from 'components/PageTitle'
import PageTitle from 'components/PageTitle'
import { Button, Section } from 'components/ui'

interface Props {
  settings: Settings
}

export const CertificationsPage = ({ settings }: Props) => {
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'Certifications',
        }}
      />
      <Layout theme={LayoutThemes.DARK}>
        <PageTitle theme={LayoutThemes.DARK} className="[&>div]:md:mt-48">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="flex-[2]">
              <Heading1FadeIn>
                <h1 className="mb-2">We&apos;re certified</h1>
                <p className="max-w-[54ch] font-medium text-silver-500">
                  These are to certify the quality management systems of Zeda,
                  Inc.
                </p>
              </Heading1FadeIn>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="outline" size="sm" asChild>
                <a href="/supplier-manual-policy.pdf" target="_blank">
                  <DownloadIcon className="relative -translate-x-1 transition-all group-hover:translate-x-1" />
                  Supplier Manual Policy
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>
        <Section>
          <div className="gap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="">
              <Img
                src={certAs}
                alt="AS9100D"
                fill={false}
                width={743}
                height={963}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="">
              <Img
                src={certIso}
                alt="ISO 13485:2016"
                fill={false}
                width={743}
                height={963}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="">
              <Img
                src={certIsoVertex}
                alt="ISO 13485:2016"
                fill={false}
                width={743}
                height={963}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export default CertificationsPage
