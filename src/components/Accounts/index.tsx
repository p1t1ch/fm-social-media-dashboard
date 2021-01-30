import React from 'react'

interface AccountsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Accounts({ children, className = '', ...props }: AccountsProps) {
  return (
    <ul className={`${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Accounts
