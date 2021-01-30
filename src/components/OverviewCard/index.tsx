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
    <article className={`${className}`} {...props}>
      <div>{name}</div>
      <div>
        {type === 'facebook' && <IconFacebook title="facebook" />}
        {type === 'twitter' && <IconTwitter title="twitter" />}
        {type === 'instagram' && <IconInstagram title="instagram" />}
        {type === 'youtube' && <IconYoutube title="youtube" />}
      </div>
      <div>{children}</div>
      <div>
        {trends >= 0 ? <IconUp title="plus" /> : <IconDown title="down" />} {Math.abs(trends)} %
      </div>
    </article>
  )
}

export default OverviewCard
