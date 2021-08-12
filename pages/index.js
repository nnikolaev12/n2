// next.js
import Head from 'next/head'
import Link from 'next/link'

// components
import Header from '../components/header'
import Footer from '../components/footer'
import PortfolioItem from '../components/portfolio-item'
import ProjectItem from '../components/project-item'

// data
import portfolio from '../data/portfolio'
import projects from '../data/projects'

function Home()
{
    const portfolioItems = portfolio.slice(0, 6).map( (item) => <PortfolioItem key={item.id} data={item.data} /> );
    const projectsItems = projects.map( (item) => <ProjectItem key={item.id} data={item.data} /> );

    return (
        <div>
            <Head>
                <title>Nikolay Nikolaev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header h1="NIKOLAY NIKOLAEV" loc="/" />
            <main className="mt-48 py-10">
                <section id="about">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
                        <h2 className="text-3xl uppercase tracking-widest mb-4 heading">About me</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
                            <div className="mx-4 my-4 md:my-0">
                                <p className="h-40 rounded p-4 bg-black text-white">
                                    <span className="text-xl font-extrabold">&gt; </span>
                                    <span className="intro"></span>
                                </p>
                            </div>
                            <div className="mx-4 my-4 md:my-0 text-center">
                                <p className="italic mb-4">Check me up here and there</p>
                                <a className="inline-block mr-2 p-2 border border-black" href="https://www.linkedin.com/in/nikolay-nikolaev-78992268/" rel="nofollow noopener noreferrer">
                                    <picture>
                                        <source srcSet="img/linkedin-icon.webp" type="image/webp" />
                                        <source srcSet="img/linkedin-icon.png" type="image/png" />
                                        <img width="30" height="30" src="img/linkedin-icon.png" alt="Linked In icon" />
                                    </picture>
                                </a>
                                <a className="inline-block mr-2 p-2 border border-black" href="https://twitter.com/nnikolaev12" rel="nofollow noopener noreferrer">
                                    <picture>
                                        <source srcSet="img/twitter-icon.webp" type="image/webp" />
                                        <source srcSet="img/twitter-icon.png" type="image/png" />
                                        <img width="30" height="30" src="img/twitter-icon.png" alt="Twitter icon" />
                                    </picture>
                                </a>
                                <a className="inline-block mr-2 p-2 border border-black" href="https://github.com/hitmanbg" rel="nofollow noopener noreferrer">
                                    <picture>
                                        <source srcSet="img/github-icon.webp" type="image/webp" />
                                        <source srcSet="img/github-icon.png" type="image/png" />
                                        <img width="30" height="30" src="img/github-icon.png" alt="Github icon" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
                        <h2 className="text-3xl uppercase tracking-widest mb-4 heading">My projects</h2>
                        <div className="py-10">
                            { projectsItems }
                        </div>
                    </div>
                </section>
                <section id="work">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
                        <h2 className="text-3xl uppercase tracking-widest mb-4 heading">My work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                            { portfolioItems }
                        </div>
                        <div className="text-center">
                            <Link href="/portfolio"><button className="button">See all</button></Link>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
                        <h2 className="text-2xl uppercase tracking-widest mb-4 heading">Contact me</h2>
                        <div className="form">
                            <form id="primaryForm" name="contact" method="POST" data-netlify="true">
                                <div className="flex flex-row">
                                    <div className="w-full pr-2">
                                        <label htmlFor="contactName">Your Name</label>
                                        <input type="text" name="name" id="contactName" placeholder="Your Name" required />
                                    </div>
                                    <div className="w-full pl-2">
                                        <label htmlFor="contactEmail">Your Email</label>
                                        <input type="email" name="email" id="contactEmail" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Your Message</label>
                                    <textarea name="message" id="contactMessage" rows="7" placeholder="Your Message" required></textarea>
                                </div>
                                <input type="hidden" name="form-name" value="contact"/>
                                <button type="submit" className="button">SEND</button>
                            </form>
                        </div>
                        <p id="formMessage" className="italic p-2 mt-6"></p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
        
    )
}

export default Home