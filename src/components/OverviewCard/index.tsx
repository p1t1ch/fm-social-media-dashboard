import React from 'react'
import { ReactComponent as IconFacebook } from '@/icons/icon-facebook.svg'
import { ReactComponent as IconTwitter } from '@/icons/icon-twitter.svg'
import { ReactComponent as IconInstagram } from '@/icons/icon-instagram.svg'
import { ReactComponent as IconYoutube } from '@/icons/icon-youtube.svg'
import { ReactComponent as IconUp } from '@/icons/icon-up.svg'
import { ReactComponent as IconDown } from '@/icons/icon-down.svg'

interface OverviewCardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  type: 'facebook' | 'twitter' | 'instagram' | 'youtube'
  name: string
  trends: number
}

function OverviewCard({ children, type, name, trends, className = '', ...props }: OverviewCardProps) {
  return (
    <article
      className={`grid grid-cols-2 gap-6 items-end p-6 bg-light-blue-grayish-light rounded-card ${className}`}
      {...props}
    >
      <div className="text-light-blue-grayish-dark text-sm font-bold">{name}</div>
      <div className="justify-self-end">
        {type === 'facebook' && <IconFacebook title="facebook" />}
        {type === 'twitter' && <IconTwitter title="twitter" />}
        {type === 'instagram' && <IconInstagram title="instagram" />}
        {type === 'youtube' && <IconYoutube title="youtube" />}
      </div>
      <div className="text-light-blue-dark text-big font-bold">{children}</div>
      <div
        className={`justify-self-end flex justify-center items-center text-xs font-bold ${
          trends >= 0 ? 'text-primary-green' : 'text-primary-red'
        }`}
      >
        {trends >= 0 ? <IconUp title="plus" /> : <IconDown title="down" />}{' '}
        <span className="ml-1">{Math.abs(trends)} %</span>
      </div>
    </article>
  )
}

export default OverviewCard
