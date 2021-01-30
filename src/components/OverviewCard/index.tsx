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
  link: string
  trends: number
}

function OverviewCard({ children, type, name, link, trends, className = '', ...props }: OverviewCardProps) {
  return (
    <article
      className={`bg-light-blue-grayish-light dark:bg-dark-blue-desaturated-dark hover:bg-light-gray-dark dark:hover:bg-dark-gray  focus-within:bg-light-gray-dark dark:focus-within:bg-dark-gray transition-colors rounded-card ${className}`}
      {...props}
    >
      <a
        href={link}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="grid grid-cols-2 gap-y-6 items-end p-6"
      >
        <div className="text-light-blue-grayish-dark dark:text-dark-blue-desaturated text-sm font-bold">{name}</div>
        <div className="justify-self-end">
          {type === 'facebook' && <IconFacebook title="facebook" />}
          {type === 'twitter' && <IconTwitter title="twitter" />}
          {type === 'instagram' && <IconInstagram title="instagram" />}
          {type === 'youtube' && <IconYoutube title="youtube" />}
        </div>
        <div className="text-light-blue-dark dark:text-white text-big font-bold">{children}</div>
        <div
          className={`justify-self-end flex justify-center items-center text-xs font-bold ${
            trends >= 0 ? 'text-primary-green' : 'text-primary-red'
          }`}
        >
          {trends >= 0 ? <IconUp title="plus" /> : <IconDown title="down" />}{' '}
          <span className="ml-1">{Math.abs(trends)} %</span>
        </div>
      </a>
    </article>
  )
}

export default OverviewCard
