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
                <title>My work</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header h1="Portfolio" loc="/portfolio" />
            <main className="mt-48 py-10">
                <section id="work">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
                        <h2 className="text-3xl uppercase tracking-widest mb-4 heading">My work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                            { portfolioItems }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio