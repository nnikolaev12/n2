function Footer()
{
    const year = new Date().getFullYear()

    return (
        <footer className="text-center mt-10">
            <div className="py-4">
                <p className="text-center">Nikolay Nikolaev &copy; { year }. All Right Reserved.</p>
            </div>
            <script src="js/main.js" type="text/javascript"></script>
        </footer>
    )
}

export default Footer