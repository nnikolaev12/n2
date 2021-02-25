document.addEventListener("DOMContentLoaded", function()
{

// MOBILE MENU
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

} );