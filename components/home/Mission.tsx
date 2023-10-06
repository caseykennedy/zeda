import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { polyVariant } from 'utils/variants'

import Icon from 'components/ui/Icon'
import { Progress } from 'components/ui/Progress'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/Tabs'

const INTERVAL_TIME = 9000

const data = [
  {
    id: 0,
    value: 'additive',
    title: 'Additive manufacturing',
    details:
      'Including processes such as rapid prototyping and mass customization, enabling the production of complex shapes and structures.',
    figure: {
      src: 'additive-mfg.jpg',
      alt: 'Zeda Inc. manufacturing facility',
    },
  },
  {
    id: 1,
    value: 'precision',
    title: 'Secondary process',
    details:
      'Our end-to-end solution covers the entire process, from powder materials to the finished part.',
    figure: {
      src: 'precision-manufacturing.jpg',
      alt: 'Zeda Inc. manufacturing facility',
    },
  },
  {
    id: 2,
    value: 'nanotech',
    title: 'Nanotech',
    details:
      'We apply nano technology, using atomic layer deposition (ALD), to surfaces in order to improve patient outcomes.',
    figure: {
      src: 'nanotech.jpg',
      alt: 'Zeda Inc. nanotechnology',
    },
  },
  {
    id: 3,
    value: 'semiconductor',
    title: 'Semiconductor technologies',
    details:
      'Applying semiconductor technologies on top of additive manufacturing to reduce costs in production at scale.',
    figure: {
      src: 'semiconductors.jpg',
      alt: 'Zeda Inc. semiconductor manufacturing facility',
    },
  },
]

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

  return (
    <Section>
      <div>
        <SectionTitle>Mission</SectionTitle>

        <Tabs defaultValue="additive" orientation="vertical">
          <div className="gap grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="max-w-[69ch]">
                <h2 className="mb-6">
                  Zeda is a leading global technology solutions company.
                </h2>
                <p className="max-w-[54ch] text-lg">
                  Our foundation combines expertise from diverse industries,
                  including additive manufacturing, nanotech, precision
                  machining and regulatory know-how.
                </p>
                {/* <p className="max-w-[54ch] text-lg">
                  From life-changing medical devices to the foremost
                  advancements in space, we use technology to better humanity.
                </p> */}
              </div>

              <div className="mt-10">
                <TabsList>
                  {data.map(({ value, id, title, details, figure }, idx) => (
                    <div key={idx}>
                      <TabsTrigger
                        value={value}
                        className="w-full border-b border-silver-100 py-6"
                        onClick={() => handleTabClick(id)}
                        data-state={activeTab === id ? 'active' : 'inactive'}
                      >
                        <div className="grid w-full grid-cols-1 sm:grid-cols-8">
                          <div className="self-center justify-self-start sm:col-start-1">
                            0{id + 1}.
                          </div>
                          <div className="self-center justify-self-start text-left sm:col-span-6 sm:col-start-2">
                            <h3 className="text-2xl">{title}</h3>
                          </div>
                          <div className="col-start-8 hidden self-center justify-self-end sm:block">
                            {activeTab === id && <Icon name="arrow-right" />}
                          </div>
                        </div>

                        {activeTab === id && (
                          <AnimatePresence>
                            <div className="mt-2 grid w-full sm:grid-cols-8">
                              <motion.div
                                variants={polyVariant}
                                layout
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="sm:col-span-8 sm:col-start-2"
                              >
                                <motion.figure
                                  initial={['hidden', 'down']}
                                  whileHover={['visible', 'up']}
                                  animate={['hidden', 'down']}
                                  className="relative mb-6 mt-4 aspect-video overflow-hidden rounded sm:hidden"
                                >
                                  <Image
                                    src={`/images/${figure.src}`}
                                    alt={figure.alt}
                                    fill={true}
                                    placeholder="blur"
                                    blurDataURL={`/images/${figure.src}`}
                                    quality={60}
                                    sizes="(max-width: 800px) 33vw, 10vw"
                                    priority={true}
                                    className="aspect-video object-cover object-[center_-200px]"
                                  />
                                </motion.figure>
                                <p className="max-w-[54ch] justify-self-start text-left text-base text-silver-800">
                                  {details}
                                </p>
                              </motion.div>
                            </div>
                          </AnimatePresence>
                        )}
                      </TabsTrigger>
                      {activeTab === id && (
                        <Progress value={progress} className="top-[-1px]" />
                      )}
                    </div>
                  ))}
                </TabsList>
              </div>
            </div>

            <div className="relative hidden sm:block">
              {currentTab && (
                <TabsContent
                  value={currentTab.value}
                  className="relative"
                  forceMount
                  asChild
                >
                  <figure className="relative h-full w-full overflow-hidden rounded">
                    <Image
                      src={`/images/${currentTab.figure.src}`}
                      alt={currentTab.figure.alt}
                      placeholder="blur"
                      blurDataURL={`/images/${currentTab.figure.src}`}
                      quality={80}
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1200px) 33vw, 25vw"
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
