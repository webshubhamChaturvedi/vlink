import React from "react"

export default function Sticky({ children, position = 'top',shadowless }) {
  const pos = {
    top: 'top-0',
    bottom: 'bottom-0',
    right: 'right-0',
    left: 'left-0',
    'left-center': 'left-0 top-1/2 -translate-y-1/2',
    'right-center': 'right-0 top-1/2 -translate-y-1/2',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    'top-left': 'left-0 top-0',
    'top-right': 'right-0 top-0',
    'bottom-left': 'left-0 bottom-0',
    'bottom-right': 'right-0 bottom-0'
  }
  const [sticky, setSticky] = React.useState(false)
  const ref = React.useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])
  return (
    <div className={`hidden md:block fixed ${pos[position]}`} ref={ref}>
      <div className={`flex justify-center items-center ${shadowless?'':'shadow-md'}`}>
        {children}
      </div>
    </div>
  )
}
