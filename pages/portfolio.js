import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import PortfolioItem from '../components/portfolio-item'

function Portfolio( { data } )
{
    const portfolioItems = data.map( (item) => 
        <PortfolioItem key={item._id} data={item} />
    );

    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header h1="Portfolio" loc="/portfolio" />
            <main className="py-2 px-4">
                <div  className="w-full lg:w-1/2 mx-auto my-6">
                    <h2 className="text-4xl py-6 text-center"><span className="border-b border-black p-2">My Portfolio</span></h2>
                    <div className="px-4">
                        { portfolioItems }
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticProps()
{
    // Call an external API endpoint to portfolio
    const res = await fetch( `https://n2blog-1229.restdb.io/rest/portfolio`, {
        cache: 'no-cache',
        headers: {
            'x-apikey': process.env.apikey,
        }
    } )
    const data = await res.json()

    return {
        props: { data },
    }
}

export default Portfolio