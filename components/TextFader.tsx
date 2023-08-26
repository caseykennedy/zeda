import { useEffect, useState } from 'react'

const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = [
  'the future',
  // 'medical devices',
  // 'rocket parts',
  'solutions',
  'trust',
  'relationships',
  // 'supply chains',
  // 'better outcomes',
  'tools',
  'tomorrow',
  'security',
  'equality',
  'planes',
  'cars',
  'machines',
]

const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState('fade-in')
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp((prevFadeProp) =>
        prevFadeProp === 'fade-in' ? 'fade-out' : 'fade-in'
      )
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      )
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return <span className={fadeProp}>{WORDS_TO_ANIMATE[wordOrder]}</span>
}

export default AnimatedText
