import { useCallback, useEffect, useState } from 'react'
import { id } from 'date-fns/locale'
import Image from 'next/image'

import Icon from 'components/ui/Icon'
import { Progress } from 'components/ui/Progress'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/Tabs'

const INTERVAL_TIME = 7000

const Mission = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentTab, setCurrentTab] = useState(data[0])
  const [progress, setProgress] = useState(0)

  const handleTabClick = useCallback(async (currentTab: number) => {
    const currentTabContent = data.filter(
      (item: { id: number }) => item.id === currentTab
    )
    setActiveTab(currentTab)
    setCurrentTab(currentTabContent[0])
  }, [])

  const animateProgress = useCallback(() => {
    let startTimestamp: any
    const step = (timestamp: any) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progressValue = Math.min(
        (timestamp - startTimestamp) / INTERVAL_TIME,
        1
      )

      setProgress(progressValue * 100)

      if (progressValue < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    const next = (activeTab + 1) % data.length
    const id = setTimeout(() => {
      setActiveTab(next)
      setCurrentTab(data[next])
    }, INTERVAL_TIME)

    animateProgress()

    return () => {
      clearTimeout(id)
    }
  }, [activeTab, animateProgress, currentTab])

  useEffect(() => {
    console.log('currentTab', currentTab)
  }, [currentTab])

  return (
    <Section className="">
      <div className="">
        <SectionTitle>Mission</SectionTitle>

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
                  {data.map(({ value, id, title, details }, idx) => (
                    <>
                      <TabsTrigger
                        value={value}
                        className="w-full border-b border-silver-200 py-6"
                        onClick={() => handleTabClick(id)}
                        key={idx}
                        data-state={activeTab === id ? 'active' : 'inactive'}
                      >
                        <div className="grid w-full grid-cols-8">
                          <div className="col-start-1 self-center justify-self-start">
                            0{id + 1}.
                          </div>
                          <div className="col-span-6 col-start-2 self-center justify-self-start">
                            <h4>{title}</h4>
                          </div>
                          <div className="col-start-8 self-center justify-self-end">
                            {activeTab === id && <Icon name="arrow-right" />}
                          </div>
                        </div>

                        {activeTab === id && (
                          <div className="mt-2 grid w-full grid-cols-8">
                            <div className="col-span-6 col-start-2">
                              <p className="justify-self-start text-left text-silver-800">
                                {details}
                              </p>
                            </div>
                          </div>
                        )}
                      </TabsTrigger>
                      {activeTab === id && (
                        <Progress value={progress} className="top-[-1px]" />
                      )}
                    </>
                  ))}
                </TabsList>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {currentTab && (
                <TabsContent value={currentTab.value} forceMount>
                  <figure>
                    <Image
                      src={`/images/${currentTab.figure.src}`}
                      alt={currentTab.figure.alt}
                      width={900}
                      height={900}
                      // style={{ objectFit: 'fill' }}
                    />
                  </figure>
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
    details:
      'Including processes such as rapid prototyping, rapid tooling and mass customization',
    figure: {
      src: 'hero-test.png',
      alt: 'Zeda Inc. manufacturing facility',
    },
  },
  {
    id: 1,
    value: 'precision',
    title: 'Precision manufacturing',
    details:
      'Including processes such as rapid prototyping, rapid tooling and mass customization',
    figure: {
      src: 'solutions-tech.jpg',
      alt: 'Zeda Inc. manufacturing facility',
    },
  },
  {
    id: 2,
    value: 'nanotech',
    title: 'Nanotech',
    details:
      'Including processes such as rapid prototyping, rapid tooling and mass customization',
    figure: {
      src: 'wormhole.png',
      alt: 'Zeda Inc. manufacturing facility',
    },
  },
  {
    id: 3,
    value: 'semiconductor',
    title: 'Semiconductor technologies',
    details:
      'Including processes such as rapid prototyping, rapid tooling and mass customization',
    figure: {
      src: 'hero-test.png',
      alt: 'Zeda Inc. manufacturing facility',
    },
  },
]
