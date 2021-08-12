import Link from 'next/link'

/*
function Breadcrumbs( props )
{
    let name = props.loc.substr( "1" );

    return (
        <div className="mt-10">
            <span><Link href="/">home </Link></span>
            <span>/ { name }</span>
        </div>
    )
}


function SubH1( props )
{
    return <Breadcrumbs loc={ props.loc } />
}
*/

function Header( props )
{
    return (
        <header>
            <div className="bg-black tile">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-14">
                    <div className="flex flex-row relative">
                        <h1 className="flex flex-col text-xl text-white pl-6">
                            <span>Nikolay Nikolaev</span>
                            <span className="text-gray-300">// Web Developer</span>
                            <span className="text-gray-300">// SEO Expert</span>
                        </h1>
                        <div className="bg-white rounded-full absolute top-24 sm:top-0 right-0">
                            <picture>
                                <source srcSet="img/nikolay-nikolaev.webp" type="image/webp" />
                                <source srcSet="img/nikolay-nikolaev.png" type="image/png" />
                                <img width="200" height="200" src="img/nikolay-nikolaev.png" alt="Nikolay Nikolaev" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header