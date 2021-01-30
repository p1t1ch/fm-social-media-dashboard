import React from 'react'

interface OverviewProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Overview({ children, className = '', ...props }: OverviewProps) {
  return (
    <ul className={`${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Overview
