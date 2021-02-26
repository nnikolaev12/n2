import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'

function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header h1="Blog" loc="/blog" />
      <main className="py-2 px-4">
        <div className="w-full lg:w-2/3 mx-auto my-6">
            <div>
                <div className="flex flex-col lg:flex-row border-t border-black py-6">
                    <picture>
                        <source srcSet="img/nikolay-nikolaev.webp" type="image/webp" />
                        <source srcSet="img/nikolay-nikolaev.png" type="image/png" />
                        <img className="mx-auto" width="350" height="350" src="img/nikolay-nikolaev.png" alt="Nikolay Nikolaev" />
                    </picture>
                    <div className="ml-6">
                        <h2 className="text-3xl"><a href="#">Reach your 2021 goals with custom apps — no coding required</a></h2>
                        <time dateTime="2021-01-12" className="italic">12 Jan 2021</time>
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi temporibus fugiat hic expedita incidunt soluta architecto, blanditiis rerum minus voluptatum libero vitae recusandae dolorem! Tempore aspernatur quis suscipit provident.</p>
                        <a className="inline-block px-4 py-2 border-black border hover:bg-black hover:text-white" href="">READ MORE</a>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row border-t border-black py-6">
                    <picture>
                        <source srcSet="img/nikolay-nikolaev.webp" type="image/webp" />
                        <source srcSet="img/nikolay-nikolaev.png" type="image/png" />
                        <img className="mx-auto" width="350" height="350" src="img/nikolay-nikolaev.png" alt="N2 logo" />
                    </picture>
                    <div className="ml-6">
                        <h2 className="text-3xl">Reach your 2021 goals with custom apps — no coding required</h2>
                        <time dateTime="2021-01-12" className="italic">12 Jan 2021</time>
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi temporibus fugiat hic expedita incidunt soluta architecto, blanditiis rerum minus voluptatum libero vitae recusandae dolorem! Tempore aspernatur quis suscipit provident.</p>
                        <a className="inline-block px-4 py-2 border-black border hover:bg-black hover:text-white">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
    
  )
}

export default Blog