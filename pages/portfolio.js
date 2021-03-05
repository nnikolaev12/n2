// next.js
import Head from 'next/head'

// components
import Header from '../components/header'
import Footer from '../components/footer'
import PortfolioItem from '../components/portfolio-item'

// data
import content from '../data/portfolio'

function Portfolio()
{
    const portfolioItems = content.map( (item) => <PortfolioItem key={item.id} data={item.data} /> );

    return (
        <div>
            <Head>
                <title>My Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header h1="Portfolio" loc="/portfolio" />
            <main className="py-2 px-4">
                <div  className="w-full lg:w-1/2 mx-auto my-6">
                    <div className="px-4">
                        { portfolioItems }
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio