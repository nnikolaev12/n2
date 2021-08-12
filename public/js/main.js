document.addEventListener("DOMContentLoaded", function()
{
    const typed_intro = new Typed('.intro', {
        strings: ["Hi, I am Nick and I am a web developer and SEO expert. I love to build simple, optimized, and scalable web solutions."],
        typeSpeed: 50
    });

    document.querySelector("form").addEventListener("submit", function( e ) {
        e.preventDefault()
        let form = document.getElementById('contact');
        let formData = new FormData(form)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
    } );
} );