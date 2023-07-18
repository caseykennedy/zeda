import { useCallback, useEffect, useState } from 'react'

import Icon from 'components/Icon'
import Section from 'components/Section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/Tabs'

type Props = {
  children: React.ReactNode
}

const SectionHeader = ({ children }: Props) => (
  <div className="mb-8 border-b border-black pb-4 uppercase leading-3">
    {children}
  </div>
)

const Mission = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentTab, setCurrentTab] = useState(data[0])

  const handleTabClick = useCallback(async (currentTab: number) => {
    const currentTabContent = data.filter(
      (item: { id: number }) => item.id === currentTab
    )

    setActiveTab(currentTab)
    setCurrentTab(currentTabContent[0])
  }, [])

  useEffect(() => {
    console.log('currentTab', currentTab)
  }, [currentTab])

  return (
    <Section className="">
      <div className="">
        <SectionHeader>Mission</SectionHeader>

        <Tabs defaultValue="additive" orientation="vertical">
          <div className="gap grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="max-w-[69ch]">
                <h2 className="mb-6">
                  We combine experience and expertise from diverse tech
                  industries
                </h2>
                <p>
                  From life-changing medical devices to the foremost
                  advancements in space, we use technology to better humanity.
                </p>
              </div>

              <div className="mt-24">
                <TabsList className="">
                  {data.map((item) => (
                    <TabsTrigger
                      value={item.value}
                      className="w-full py-6"
                      onClick={() => handleTabClick(item.id)}
                      key={item.id}
                    >
                      <div className="grid w-full grid-cols-8">
                        <div className="col-start-1 self-center justify-self-start">
                          01.
                        </div>
                        <div className="col-span-6 col-start-2 self-center justify-self-start">
                          <h4>{item.title}</h4>
                        </div>
                        <div className="col-start-8 self-center justify-self-end">
                          <Icon name="arrow-right" />
                        </div>
                      </div>

                      {activeTab === item.id && (
                        <div className="grid w-full grid-cols-8">
                          <div className="col-span-6 col-start-2 self-center justify-self-start break-all">
                            <p className="break-all">{item.details}</p>
                          </div>
                        </div>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {currentTab && (
                <TabsContent value={currentTab.value}>
                  {currentTab.figure}
                </TabsContent>
              )}
            </div>
          </div>
        </Tabs>
      </div>
    </Section>
  )
}

export default Mission

const data = [
  {
    id: 0,
    value: 'additive',
    title: 'Additive manufacturing',
    details: 'Including processes such as rapid prototyping.',
    figure: 'Additive manufacturing',
  },
  {
    id: 1,
    value: 'precision',
    title: 'Precision manufacturing',
    details: 'Including processes such as rapid prototyping.',
    figure: 'Precision manufacturing',
  },
  {
    id: 2,
    value: 'nanotech',
    title: 'Nanotech',
    details: 'Including processes such as rapid prototyping.',
    figure: 'Nanotech',
  },
  {
    id: 3,
    value: 'semiconductor',
    title: 'Semiconductor technologies',
    details: 'Including processes such as rapid prototyping.',
    figure: 'Semiconductor',
  },
]
