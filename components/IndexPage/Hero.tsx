import { useRef } from 'react'
import { useEventListener } from 'usehooks-ts'

import TextFader from 'components/TextFader'
import Section from 'components/ui/Section'

const Hero = () => {
  // const documentRef = useRef<Document>(document)

  // const onVisibilityChange = (event: Event) => {
  //   console.log('doc visibility changed!', {
  //     isVisible: !document.hidden,
  //     event,
  //   })
  // }

  // example with document based event
  // useEventListener('visibilitychange', onVisibilityChange, documentRef)
  return (
    <Section className="dark h-[100vh] max-h-[1080px] min-h-[600px] overflow-hidden bg-black text-white">
      <div className="gap grid h-full grid-cols-1 content-end md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-end">
          <p className=" max-w-[29ch] border-l border-white pl-6">
            <strong>Building together</strong>
            <br />
            We use technology to better lives—built using trust.
          </p>
        </div>
        <div className="relative z-10">
          <h1 className="dark:text-white">
            Building <TextFader />
            <br />
            together.
          </h1>
        </div>
      </div>

      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <video
          autoPlay
          disablePictureInPicture
          loop
          muted
          preload="auto"
          tabIndex={-1}
          src="/video/b-roll.mp4"
          className="h-full w-full object-cover brightness-50"
        ></video>
      </div>
    </Section>
  )
}

export default Hero
