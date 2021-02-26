import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

function Success()
{
    return (
        <div>
            <Head>
                <title>Form Submitted successfully</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header h1="Success" loc="/success" />
            <main className="py-2 px-4">
                <div className="w-full lg:w-1/2 mx-auto my-6 text-center">
                    <p>Thank you! Your message was send successfully. I will do my best to contact you shortly.</p>
                    <p>In the meantime, you can head to my <Link href="/"><strong>HOME</strong></Link> page.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Success