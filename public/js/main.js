document.addEventListener("DOMContentLoaded", function()
{
    document.querySelector("form").addEventListener("submit", function( e ) {
        e.preventDefault()

        let form = document.getElementById('primaryForm');
        let formData = new FormData(form)
        let formMessage = document.getElementById("formMessage")
        
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then( function() {
            formMessage.textContent = "Your message has been sent.";
        } ).catch( function (error) {
            formMessage.textContent = "Something went wrong. Please, try again later or reach me out at nikolay.nikolaev25@gmail.com";
        } )
    } );
} );