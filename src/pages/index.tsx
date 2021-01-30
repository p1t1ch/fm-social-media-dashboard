import React from 'react'
import Seo from '@/components/Seo'
import Accounts from '@/components/Accounts'
import AccountCard from '@/components/AccountCard'
import Overview from '@/components/Overview'
import OverviewCard from '@/components/OverviewCard'

function IndexPage() {
  return (
    <div>
      <Seo title="Frontend Mentor: Social media dashboard with theme switcher" />
      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <div>Total Followers: 23,004</div>
        </div>
        <div>
          <div>Dark Mode</div>
          <button>Toggle</button>
        </div>
      </header>
      <main>
        <section>
          <h2 className="sr-only">Your accounts</h2>
          <Accounts>
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
          </Accounts>
        </section>
        <section>
          <h2>Overview - Today</h2>
          <Overview>
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
          </Overview>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
