// import { useEventListener } from 'usehooks-ts'
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
    <Section className="dark h-[100svh] max-h-[1080px] min-h-[600px] overflow-hidden bg-black text-white">
      <div className="gap grid h-full grid-cols-1 content-end md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-end">
          <p className=" max-w-[29ch] border-l border-white pl-4">
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
          poster="/public/images/hero-careers.jpg"
          preload="metadata"
          tabIndex={-1}
          className="h-full w-full object-cover brightness-50"
        >
          <source src="/video/b-roll-hd.mp4" type="video/mp4" />
          {/* <source src="video.ogg" type="video/ogg" /> */}
          {/* <source src="video.webm" type="video/webm" /> */}
          {/* <object data="video.mp4" width="470" height="255">
            <embed src="video.swf" width="470" height="255" />
          </object> */}
        </video>
      </div>
    </Section>
  )
}

export default Hero
