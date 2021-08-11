function Footer()
{
    const year = new Date().getFullYear()

    return (
        <footer className="text-center mt-10">
            <div className="py-4">
                <p className="text-center">Nikolay Nikolaev &copy; { year }. All Right Reserved.</p>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" type="text/javascript"></script>
            <script src="js/main.js" type="text/javascript"></script>
        </footer>
    )
}

export default Footer