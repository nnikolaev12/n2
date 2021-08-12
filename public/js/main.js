document.addEventListener("DOMContentLoaded", function()
{
    const typed_intro = new Typed('.intro', {
        strings: ["Hi, I am Nick and I am a web developer and SEO expert. I love to build simple, optimized, and scalable web solutions."],
        typeSpeed: 50
    });

    document.querySelector("form").addEventListener("submit", function( e ) {
        e.preventDefault()

        let form = document.getElementById('primaryForm');
        let formData = new FormData(form)
        let text = "Something went wrong. Please, try again later or reach me out at nikolay.nikolaev25@gmail.com"

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => text = "Your message has been sent." )
        // .catch( (error) =>  )

        document.getElementById("formMessage").textContent = text
    } );
} );