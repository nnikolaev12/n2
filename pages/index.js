import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import PortfolioItem from '../components/portfolio-item'

function Home( { data } )
{
    const portfolioItems = data.map( (item) => 
        <PortfolioItem key={item._id} data={item} />
    );

    return (
        <div>
            <Head>
                <title>N2</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header h1="NIKOLAY NIKOLAEV" loc="/" />
            <main className="py-2 px-4">
                <div id="about" className="w-full lg:w-1/2 mx-auto my-6">
                    <h2 className="text-4xl py-6 text-center"><span className="border-b border-black p-2">About me</span></h2>
                    <div className="flex flex-col lg:flex-row justify-center py-6">
                        <div className="lg:w-1/2">
                            <picture>
                                <source srcSet="img/nikolay-nikolaev.webp" type="image/webp" />
                                <source srcSet="img/nikolay-nikolaev.png" type="image/png" /> 
                                <img className="mx-auto" width="300" height="300" src="img/nikolay-nikolaev.png" alt="N2 logo" />
                            </picture>
                        </div>
                        <div className="lg:w-1/2 px-4 lg:px-0">
                            <h3 className="text-2xl py-4">Hi, my name is Nikolay Nikolaev</h3>
                            <p>Nikolay Nikolaev is an SEO expert and Web Developer experienced in building and optimizing websites for businesses and individuals. His strong background in SEO and self-taught web development skills have helped him push successful web projects for years now.</p>
                            <a className="inline-block px-4 py-2 mt-4 border-black border hover:bg-black hover:text-white" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mx-auto my-6">
                    <h2 className="text-4xl py-6 text-center"><span className="border-b border-black p-2">How Can I Help</span></h2>
                    <div className="grid grid-cols-1 lg:grid-cols-6">
                        <div className="col-span-3 border border-black m-4 text-center bg-gray-100 py-12">
                            <h3 className="text-3xl">SEO</h3>
                            <p className="text-lg mt-2">Technical, On-site</p>
                        </div>
                        <div className="col-span-3 border border-black m-4 text-center bg-gray-100 py-12">
                            <h3 className="text-3xl">Web Development</h3>
                            <p className="text-lg mt-2">HTML, CSS, PHP, JavaScript, SQL</p>
                        </div>
                        <div className="col-span-2 border border-black m-4 text-center bg-gray-100 py-12">
                            <h3 className="text-3xl">Specialization</h3>
                            <p className="text-lg mt-2">WordPress, Laravel, React</p>
                        </div>
                        <div className="col-span-2 border border-black m-4 text-center bg-gray-100 py-12">
                            <h3 className="text-3xl">Automation</h3>
                            <p className="text-lg mt-2">Python, Spreadsheets</p>
                        </div>
                        <div className="col-span-2 border border-black m-4 text-center bg-gray-100 py-12">
                            <h3 className="text-3xl">Consultation</h3>
                            <p className="text-lg mt-2">Long-term strategy, Advice</p>
                        </div>
                    </div>
                </div>
                <div id="portfolio" className="w-full lg:w-1/2 mx-auto my-6">
                    <h2 className="text-4xl py-6 text-center"><span className="border-b border-black p-2">My Portfolio</span></h2>
                    <div>
                        { portfolioItems }
                        <div className="text-center mt-10">
                            <Link href="/portfolio"><button className="inline-block px-4 py-2 border-black border hover:bg-black hover:text-white">SEE ALL</button></Link>
                        </div>
                    </div>
                </div>
                <div id="contact" className="w-full lg:w-1/2 mx-auto my-6">
                    <h2 className="text-4xl py-6 text-center"><span className="border-b border-black p-2">Contact Me</span></h2>
                    <div className="form">
                        <form name="contact" method="POST" data-netlify="true">
                        <div className="flex flex-row">
                            <div className="w-full pr-2">
                                <label htmlFor="contactName">Your Name</label>
                                <input name="name" id="contactName" type="text" placeholder="Your Name" />
                            </div>
                            <div className="w-full pl-2">
                                <label htmlFor="contactEmail">Your Email</label>
                                <input name="email" id="contactEmail" type="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contactMessage">Your Message</label>
                            <textarea name="message" id="contactMessage" rows="7" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="inline-block px-4 py-2 border-black border hover:bg-black hover:text-white">SEND</button>
                        </form>
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
    const res = await fetch( `https://n2blog-1229.restdb.io/rest/portfolio?q={}&max=3`, {
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

export default Home