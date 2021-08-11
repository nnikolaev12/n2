document.addEventListener("DOMContentLoaded", function()
{

// MOBILE MENU
/*
document.getElementById('toggleNav').onclick = function()
{
    let clicked = document.getElementById('mainNav').classList.contains('hidden');
    
    if ( clicked )
    {
        document.getElementById('mainNav').classList.remove('hidden');
    }
    else
    {
        document.getElementById('mainNav').classList.add('hidden');
    }
}
*/

    const typed_intro = new Typed('.intro', {
        strings: ["Hi, I am Nick and I am a web developer and SEO expert. I love to build simple, optimized, and scalable web solutions."],
        typeSpeed: 50
    });
} );