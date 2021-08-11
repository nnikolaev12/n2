function ProjectItem( props )
{
    const images_dir = process.env.imagesDir
    const png = images_dir + "projects/" + props.data.thumbnail
    const webp = png.slice(0,-3) + "webp"

    return (
        <div className="flex flex-col md:flex-row mb-10">
            <div className="w-full lg:w-1/4">
                <picture>
                    <source srcSet={ webp } type="image/webp" />
                    <source srcSet={ png } type="image/png" /> 
                    <img className="mx-auto lg:mx-0" width="250" height="250" srcSet={ png } alt={ props.data.title }  />                            
                </picture>
            </div>
            <div className="w-full lg:w-3/4 text-center lg:text-left flex flex-col justify-between">
                <h2 className="uppercase text-2xl tracking-wider my-4 lg:my-0">{ props.data.title }</h2>
                <p>{ props.data.description }</p>
                <div>
                    { props.data.tech.map( (item) => (
                        <span key={ item } className="inline-block rounded p-2 bg-black text-green-400 italic m-4">{ item }</span>
                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default ProjectItem