import React from 'react'
import { ReactComponent as IconFacebook } from '@/icons/icon-facebook.svg'
import { ReactComponent as IconTwitter } from '@/icons/icon-twitter.svg'
import { ReactComponent as IconInstagram } from '@/icons/icon-instagram.svg'
import { ReactComponent as IconYoutube } from '@/icons/icon-youtube.svg'
import { ReactComponent as IconUp } from '@/icons/icon-up.svg'
import { ReactComponent as IconDown } from '@/icons/icon-down.svg'

interface AccountCardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  type: 'facebook' | 'twitter' | 'instagram' | 'youtube'
  name: string
  link: string
  trends: number
}

function AccountCard({ children, type, name, link, trends, className = '', ...props }: AccountCardProps) {
  return (
    <article className={`${className}`} {...props}>
      <a href={link} target="_blank" rel="nofollow noindex noreferrer">
        <div>
          {type === 'facebook' && <IconFacebook title="facebook" />}
          {type === 'twitter' && <IconTwitter title="twitter" />}
          {type === 'instagram' && <IconInstagram title="instagram" />}
          {type === 'youtube' && <IconYoutube title="youtube" />}
          <span>{name}</span>
        </div>
        <div>{children}</div>
        <div>{type === 'youtube' ? 'Subscribers' : 'Followers'}</div>
        <div>
          {trends >= 0 ? <IconUp title="plus" /> : <IconDown title="down" />} {Math.abs(trends)} Today
        </div>
      </a>
    </article>
  )
}

export default AccountCard
