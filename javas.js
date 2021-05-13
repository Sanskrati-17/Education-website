burger=document.querySelector('.bur');
navlist=document.querySelector('.navlist');
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.rightnav');
burger.addEventListener('click', ()=>
{
rightnav.classList.toggle('visi');
navlist.classList.toggle('visi');
navbar.classList.toggle('hnav');


})
