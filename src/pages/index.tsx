import React, { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '@/styles/toggle.css'
import Seo from '@/components/Seo'
import Grid from '@/components/Grid'
import AccountCard from '@/components/AccountCard'
import OverviewCard from '@/components/OverviewCard'

function IndexPage() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className="min-h-screen">
      <Seo title="Frontend Mentor: Social media dashboard with theme switcher" />
      <header className="grid place-items-center pt-9 px-6 pb-header-mobile sm:pb-header bg-light-blue-pale dark:bg-dark-blue-dark">
        <div className="w-full max-w-container flex justify-between flex-col sm:flex-row">
          <div className="pb-6 sm:pb-0 mb-4 sm:mb-0 border-b border-light-gray dark:border-dark-gray sm:border-none">
            <h1 className="font-bold text-2xl sm:text-heading text-light-blue-dark dark:text-white mb-1">
              Social Media Dashboard
            </h1>
            <div className="dark:text-dark-blue-desaturated font-bold text-sm">Total Followers: 23,004</div>
          </div>
          <div className="flex items-center justify-between sm:justify-start">
            <label htmlFor="dark-mode" className="dark:text-white font-bold text-sm text-gray mr-3">
              Dark Mode
            </label>
            <Toggle checked={darkTheme} icons={false} id="dark-mode" onChange={() => setDarkTheme(!darkTheme)} />
          </div>
        </div>
      </header>
      <main className="grid place-items-center px-6 pb-11 transform -translate-y-11 sm:translate-y-card">
        <div className="w-full max-w-container">
          <section className="mb-12">
            <h2 className="sr-only">Your accounts</h2>
            <Grid>
              <AccountCard type="facebook" name="@nathanf" link="https://www.facebook.com" trends={12}>
                1987
              </AccountCard>
              <AccountCard type="twitter" name="@nathanf" link="https://www.twitter.com" trends={99}>
                1044
              </AccountCard>
              <AccountCard type="instagram" name="@realnathanf" link="https://www.instagram.com" trends={1099}>
                11k
              </AccountCard>
              <AccountCard type="youtube" name="Nathan F." link="https://www.youtube.com" trends={-144}>
                8239
              </AccountCard>
            </Grid>
          </section>
          <section>
            <h2 className="font-bold text-2xl mb-6">Overview - Today</h2>
            <Grid>
              <OverviewCard type="facebook" name="Page Views" link="https://www.facebook.com" trends={3}>
                87
              </OverviewCard>
              <OverviewCard type="facebook" name="Likes" link="https://www.facebook.com" trends={-2}>
                52
              </OverviewCard>
              <OverviewCard type="instagram" name="Likes" link="https://www.instagram.com" trends={2257}>
                5462
              </OverviewCard>
              <OverviewCard type="instagram" name="Profile Views" link="https://www.instagram.com" trends={1375}>
                52k
              </OverviewCard>
              <OverviewCard type="twitter" name="Retweets" link="https://www.twitter.com" trends={303}>
                117
              </OverviewCard>
              <OverviewCard type="twitter" name="Likes" link="https://www.twitter.com" trends={553}>
                507
              </OverviewCard>
              <OverviewCard type="youtube" name="Likes" link="https://www.youtube.com" trends={-19}>
                107
              </OverviewCard>
              <OverviewCard type="youtube" name="Total Views" link="https://www.youtube.com" trends={-12}>
                1407
              </OverviewCard>
            </Grid>
          </section>
        </div>
      </main>
    </div>
  )
}

export default IndexPage
