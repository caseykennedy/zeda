import { useEffect, useState } from 'react'

// Define a custom hook to access network information
function useNetworkInfo() {
  // Define the network information properties
  interface NetworkInformation {
    type: string
    effectiveType: string
    metered: boolean
  }

  // Initialize state to store network information
  const [networkInfo, setNetworkInfo] = useState<NetworkInformation | null>(
    'connection' in navigator
      ? (navigator.connection as NetworkInformation)
      : null
  )

  // Function to update network information when it changes
  const handleNetworkChange = () => {
    setNetworkInfo(
      'connection' in navigator
        ? (navigator.connection as NetworkInformation)
        : null
    )
  }

  // Effect to add event listener for network changes when the component mounts
  useEffect(() => {
    // Check if the Network Information API is supported
    if ('connection' in navigator) {
      // Add event listener for changes in network conditions
      navigator.connection.addEventListener('change', handleNetworkChange)

      // Clean up the event listener when the component unmounts
      return () => {
        navigator.connection.removeEventListener('change', handleNetworkChange)
      }
    }
  }, [])

  // Return the network information
  return networkInfo
}

export default useNetworkInfo
