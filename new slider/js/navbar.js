Element.prototype.Navbar = function(){

  var navbar = this;
  var container = navbar.parentElement;
  var btn = navbar.querySelector('.toggle');

  btn.addEventListener('click', function(ev){

    if(container.className === 'active'){
      container.className = '';
    } else {
      container.className = 'active'
    }
    
  });

}
