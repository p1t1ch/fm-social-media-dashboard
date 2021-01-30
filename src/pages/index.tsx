import React from 'react'
import Seo from '@/components/Seo'
import Grid from '@/components/Grid'
import AccountCard from '@/components/AccountCard'
import OverviewCard from '@/components/OverviewCard'

function IndexPage() {
  return (
    <div className="min-h-screen">
      <Seo title="Frontend Mentor: Social media dashboard with theme switcher" />
      <header className="grid place-items-center pt-9 px-6 pb-header-mobile sm:pb-header bg-light-blue-pale">
        <div className="w-full max-w-container flex justify-between">
          <div>
            <h1 className="font-bold text-heading text-light-blue-dark mb-1">Social Media Dashboard</h1>
            <div className="font-bold text-sm text-light-blue-grayish-dark">Total Followers: 23,004</div>
          </div>
          <div className="flex items-center">
            <div className="font-bold text-sm text-gray mr-3">Dark Mode</div>
            <button>Toggle</button>
          </div>
        </div>
      </header>
      <main className="grid place-items-center px-6 pb-11 transform translate-y-card">
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
            <h2 className="text-light-blue-grayish-dark font-bold text-2xl mb-6">Overview - Today</h2>
            <Grid>
              <OverviewCard type="facebook" name="Page Views" trends={3}>
                87
              </OverviewCard>
              <OverviewCard type="facebook" name="Likes" trends={-2}>
                52
              </OverviewCard>
              <OverviewCard type="instagram" name="Likes" trends={2257}>
                5462
              </OverviewCard>
              <OverviewCard type="instagram" name="Profile Views" trends={1375}>
                52k
              </OverviewCard>
              <OverviewCard type="twitter" name="Retweets" trends={303}>
                117
              </OverviewCard>
              <OverviewCard type="twitter" name="Likes" trends={553}>
                507
              </OverviewCard>
              <OverviewCard type="youtube" name="Likes" trends={-19}>
                107
              </OverviewCard>
              <OverviewCard type="youtube" name="Total Views" trends={-12}>
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
