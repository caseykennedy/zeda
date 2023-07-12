import { useEffect, useState } from 'react'

const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = [
  'the future',
  'medical devices',
  'rocket parts',
  'solutions',
  'trust',
  'relationships',
  'supply chains',
  'better outcomes',
  'tools',
  'tomorrow',
  'security',
  'equality',
  'planes',
  'cars',
  'machines',
]

type FadeProp = { fade: 'fade-in' | 'fade-out' }

export const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in'
        ? setFadeProp({ fade: 'fade-out' })
        : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      )
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>
}

export default AnimatedText
