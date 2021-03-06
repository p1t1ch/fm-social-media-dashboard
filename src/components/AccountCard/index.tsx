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
    <article
      className={`bg-light-blue-grayish-light dark:bg-dark-blue-desaturated-dark hover:bg-light-gray-dark  dark:hover:bg-dark-gray focus-within:bg-light-gray-dark dark:focus-within:bg-dark-gray transition-colors rounded-card overflow-hidden ${className}`}
      {...props}
    >
      <a href={link} target="_blank" rel="nofollow noopener noreferrer">
        <div
          className={`h-1 ${
            type === 'facebook'
              ? 'bg-socials-facebook'
              : type === 'twitter'
              ? 'bg-socials-twitter'
              : type === 'youtube'
              ? 'bg-socials-youtube'
              : 'bg-gradient-to-bl from-socials-instagram-start to-socials-instagram-end'
          }`}
        />
        <div className="p-6 pt-7 text-center">
          <h3 className="flex justify-center items-center mb-7">
            {type === 'facebook' && <IconFacebook title="facebook" />}
            {type === 'twitter' && <IconTwitter title="twitter" />}
            {type === 'instagram' && <IconInstagram title="instagram" />}
            {type === 'youtube' && <IconYoutube title="youtube" />}
            <span className="text-light-blue-grayish-dark dark:text-dark-blue-desaturated text-xs font-bold ml-2">
              {name}
            </span>
          </h3>
          <div className="font-bold text-light-blue-dark dark:text-white text-large tracking-tight mb-1">
            {children}
          </div>
          <div className="text-light-blue-grayish-dark dark:text-dark-blue-desaturated text-xs uppercase tracking-widest mb-6">
            {type === 'youtube' ? 'Subscribers' : 'Followers'}
          </div>
          <div
            className={`flex justify-center items-center text-xs font-bold ${
              trends >= 0 ? 'text-primary-green' : 'text-primary-red'
            }`}
          >
            {trends >= 0 ? <IconUp title="plus" /> : <IconDown title="down" />}
            <span className="ml-1">{Math.abs(trends)} Today</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default AccountCard
