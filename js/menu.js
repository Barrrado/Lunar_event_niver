const menuMobile = document.getElementById('menu-mobile')
const menuprincipal = document.getElementById('Menu-1')


menuMobile.addEventListener('click', function() {
   if (menuprincipal.classList.contains('active1')){
        menuprincipal.classList.remove('active1');
        menuprincipal.classList.add('fechar1');
   } else {
        menuprincipal.classList.add('active1');
        menuprincipal.classList.remove('fechar1');
    }
});


