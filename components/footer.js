function Footer()
{
    const year = new Date().getFullYear()

    return (
        <footer className="text-center mt-10">
            <div>
                <a className="inline-block mx-1 p-2 border border-black" href="https://www.linkedin.com/in/nikolay-nikolaev-78992268/" rel="nofollow noopener noreferrer">
                    <picture>
                        <source srcSet="img/linkedin-icon.webp" type="image/webp" />
                        <source srcSet="img/linkedin-icon.png" type="image/png" /> 
                        <img width="30" height="30" src="img/linkedin-icon.png" alt="Linked In icon" />
                    </picture>
                </a>
                <a className="inline-block mx-1 p-2 border border-black" href="https://twitter.com/nnikolaev12" rel="nofollow noopener noreferrer">
                    <picture>
                        <source srcSet="img/twitter-icon.webp" type="image/webp" />
                        <source srcSet="img/twitter-icon.png" type="image/png" /> 
                        <img width="30" height="30" src="img/twitter-icon.png" alt="Twitter icon" />
                    </picture>
                </a>
                <a className="inline-block mx-1 p-2 border border-black" href="https://github.com/hitmanbg" rel="nofollow noopener noreferrer">
                    <picture>
                        <source srcSet="img/github-icon.webp" type="image/webp" />
                        <source srcSet="img/github-icon.png" type="image/png" /> 
                        <img width="30" height="30" src="img/github-icon.png" alt="Github icon" />
                    </picture>
                </a>
                <a className="inline-block mx-1 p-2 border border-black" href="https://stackoverflow.com/users/6769598/nikolay-nikolaev" rel="nofollow noopener noreferrer">
                    <picture>
                        <source srcSet="img/stackoverflow-icon.webp" type="image/webp" />
                        <source srcSet="img/stackoverflow-icon.png" type="image/png" /> 
                        <img width="30" height="30" src="img/stackoverflow-icon.png" alt="Stack Overflow icon" />
                    </picture>
                </a>
            </div>
            <div className="py-4">
                <p className="text-center">Nikolay Nikolaev &copy; { year }. All Right Reserved.</p>
            </div>
            <script src="js/main.js" type="text/javascript"></script>
        </footer>
    )
}

export default Footer