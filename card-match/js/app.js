var cards = document.querySelectorAll('.flip-container');


[].forEach.call(cards, function(card){
  card.addEventListener('click', function(ev){
    console.log(ev);
  card.toggleActive()
  })

})
