Element.prototype.Search = function(){
    var search = this;
    var gallery = document.getElementById('gallery');
    var input = this.children[0];
      

    this.init = function(){
        input.addEventListener('focus', function(){
            this.value = '';
        });

        input.addEventListener('keyup', function(ev){

            if(ev.keyCode === 13){
              console.log(ev.keyCode)
                var query = input.value;
                gallery.filterPhotos(query);

            }

        });

    };

    this.init();

};
