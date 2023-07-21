function useInViewport(ref) {
  const [isInViewport, setIsInViewport] = useState(false)

  const handleScroll = () => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight

    setIsInViewport(rect.top < viewportHeight && rect.bottom >= 0)
  }

  useEffect(() => {
    handleScroll()

    // Attach the event listener
    window.addEventListener('scroll', handleScroll)
    return () => {
      // Detach the event listener on component unmount
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])

  return isInViewport
}
