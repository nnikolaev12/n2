function PortfolioItem( props )
{
    const images_dir = process.env.imagesDir
    const jpg = images_dir + "work/" + props.data.thumbnail
    const webp = jpg.slice(0,-3) + "webp"

    return (
        <div className="relative m-2">
            <picture>
                <source srcSet={ webp } type="image/webp" />
                <source srcSet={ jpg } type="image/jpg" /> 
                <img width="700" height="700" srcSet={ jpg } alt={ props.data.title } />
            </picture>
            <a className="bg-black bg-opacity-80 p-6 text-white uppercase tracking-wider absolute bottom-0 w-full" target="_blank" rel="nofollow noopener noreferrer" href={props.data.url} title={ props.data.title }>{ props.data.title } <span className="text-2xl">&#10132;</span></a>
        </div>
    )
}

export default PortfolioItem