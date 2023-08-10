// useLoadMore hook
// Hook for slicing and loading more items from an array
import { useEffect, useState } from 'react'

const useLoadMore = (posts: any[], maxPosts = 4) => {
  // State for the list
  const [list, setList] = useState([...posts.slice(0, maxPosts)])
  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > maxPosts)
  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + maxPosts)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [list, maxPosts, posts, loadMore, hasMore])

  // Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list, posts])

  return { list, handleLoadMore, hasMore }
}

export default useLoadMore
