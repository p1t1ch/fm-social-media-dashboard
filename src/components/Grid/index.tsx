import React from 'react'

interface GridProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Grid({ children, className = '', ...props }: GridProps) {
  return (
    <ul className={`grid grid-cols-cards gap-6 sm:gap-8 ${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Grid
