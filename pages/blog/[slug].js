import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'

function Single_Post( { data } )
{
    const post = data[0];

    return (
        <div>
            <Head>
                <title>{ post.title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header loc="/blog" post={ post.title } />
            <main className="py-2 px-4">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row py-4">
                    <div className="lg:w-2/3 blog-content">
                    { post.content }
                    </div>
                    <div className="lg:w-1/3">
                        <div className="pl-8">
                            <span className="inline-block text-xl border-b border-black pb-1 px-2">Categories</span>
                            <ul className="pl-2 pt-2 sidebar-list">
                                <li><a href="#">WordPress</a></li>
                                <li><a href="#">Web Hosting</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        
    )
}

export async function getStaticPaths()
{
    // Call an external API endpoint to get posts
    const res = await fetch( 'https://n2blog-1229.restdb.io/rest/posts', {
        cache: 'no-cache',
        headers: {
            'x-apikey': process.env.apikey,
        }
    } )
    const posts = await res.json()
    
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps( { params } )
{
    // Call an external API endpoint to get single post
    const res = await fetch( `https://n2blog-1229.restdb.io/rest/posts?q={%22slug%22:%22${params.slug}%22}`, {
        cache: 'no-cache',
        headers: {
            'x-apikey': process.env.apikey,
        }
    } )
    const data = await res.json()

    if ( ! data )
    {
        return {
            notFound: true,
        }
    }

    return {
      props: { data },
    }
}

export default Single_Post