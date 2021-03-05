function PortfolioItem( props )
{
    const projects_dir = process.env.projectsDir
    const jpg = projects_dir + props.data.thumbnail
    const webp = jpg.slice(0,-3) + "webp"

    return (
        <div className="my-8 relative">
            <a href={props.data.url} title={ props.data.title }>
                <picture>
                    <source srcSet={ webp } type="image/webp" />
                    <source srcSet={ jpg } type="image/jpg" /> 
                    <img width="900" height="450" srcSet={ jpg } alt={ props.data.title } />
                </picture>
            </a>
            <a href={props.data.url} className="inline-block p-4 text-xl bg-white bg-opacity-70 border border-black absolute bottom-0">{ props.data.title }</a>
            
        </div>
    )
}

export default PortfolioItem