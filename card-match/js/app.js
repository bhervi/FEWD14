var cards = document.querySelectorAll('.flip-container');


[].forEach.call(cards, function(card){
  card.assignSuite();
  card.addEventListener('click', function(ev){
    card.toggleActive()
  });

})
