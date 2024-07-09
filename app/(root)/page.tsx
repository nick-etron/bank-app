import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Neeraj", lastName: "Sharma", email: 'nicksharma12@gmail.com' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalCurrentBalance={1250.21}
                        totalBanks={1}
                    />
                </header>
                Recent Transaction
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.59 }, { currentBalance: 500 }]} />
        </section>
    )
}

export default Home
