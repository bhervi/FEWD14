Element.prototype.Search = function(){
    var search = this,
        gallery = document.getElementById('gallery');
        gallery.getFilterList()
// when the user focuses on the input, clear its contents
// after the user presses 'enter/return', filter the gallery <li> using the tags from the JSON model.

  document.getElementById('search').onkeydown = function activate(e, message)
  {
    if (isNotEnter(e))
    {
        return true;
    }
    else
        if (message.length >= 1)
        {
            search();
        }
        return false;
    }
  console.log(onkeydown);

this.connect = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./models/popular-photos.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          tags = response.tags;
          gallery.layoutPhotos();

      }
    }
    xhr.send();
  };

  this.init = function() {
    go.addEventListener('click', function(ev){
        ev.preventDefault();
        search.send();
      });

  };

  this.init();

};
