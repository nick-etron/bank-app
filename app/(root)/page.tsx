import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Neeraj" }
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
            </div>
        </section>
    )
}

export default Home
