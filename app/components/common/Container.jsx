import React from 'react'

function Container({ children, className='', containBreakpoint = '' }) {
  const breakpoints = {
    sm: 'sm:container',
    md: 'md:container',
    lg: 'lg:container',
    xl: 'xl:container',
    '2xl': '2xl:container'
  }
  return (
    <div className={`${breakpoints[containBreakpoint] || 'container'} ${className}`}>
      {children}
    </div>
  )
}

export default Container
