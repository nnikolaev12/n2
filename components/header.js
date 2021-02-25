import Link from 'next/link'

function HomeSubtitle()
{
    return (
        <div className="mt-10">
            <span>/SEO Specialist </span>
            <span>/Web Developer </span>
            <span>/Entrepreneur </span>
        </div>
    )
}

function Breadcrumbs( props )
{
    let name = props.loc.substr( "1" );
    console.log( name )
    return (
        <div className="mt-10">
            <span><Link href="/">home </Link></span>
            <span>/ { name }</span>
        </div>
    )
}

function SubH1( props )
{
    if ( props.loc === "/" )
    {
        return <HomeSubtitle />
    }

    return <Breadcrumbs loc={ props.loc } />
}

function Header( props )
{
    // <li><Link href="/blog">Blog</Link></li>
    
    return (
        <header className="px-4 py-2">
            <div className="flex flex-row justify-between py-4">
                <Link href="/">
                    <picture>
                        <source srcSet="img/logo.webp" type="image/webp" />
                        <source srcSet="img/logo.png" type="image/png" />
                        <img width="40" height="40" src="img/logo.png" alt="N2 logo"/>
                    </picture>
                </Link>
                <nav>
                    <button id="toggleNav" className="lg:hidden">&#9776;</button>
                    <ul id="mainNav" className="hidden lg:flex flex-col lg:flex-row absolute right-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/#about">About</Link></li>
                        <li><Link href="/#portfolio">Portfolio</Link></li>
                        <li><Link href="/#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="h-64 bg-cover text-center">
                <div className="bg-white bg-opacity-80 h-full py-10">
                    <h1 className="text-6xl">{ props.h1 }</h1>
                    <SubH1 loc={ props.loc } />
                </div>
            </div>
        </header>
    )
}

export default Header