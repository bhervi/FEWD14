(function(){

var suites = ['heart', 'diamond', 'club', 'spade'];

var cardhistory = {
  '0': 0,
  '1': 0,
  '2': 0,
  '3': 0
}
var cardSuits = [];

var findSuite = function(){
  if(cardSuits.length==16) return;

  var suiteno = Math.floor(Math.random()*4);
  if(cardhistory[suiteno]<4){
    cardhistory[suiteno]++;
    cardSuits.push(suites[suiteno]);
  }
  findSuite();
}
findSuite();

var pointer = 0;

Element.prototype.assignSuite = function (){
  this.classList.add(cardSuits[pointer]);
  this.suit = cardSuits[pointer];
  pointer++;
}

var compareSuite;
var matches = 0;
Element.prototype.toggleActive = function (){
  var self = this;

  if(this.classList.contains('matched')) return;
  if(this.classList.contains('active')) return;
  this.classList.add('active');

  if(compareSuite){
    if(compareSuite.suit == this.suit){
      compareSuite.classList.add('matched');
      this.classList.add('matched');
      matches++;
      compareSuite = null;
      
      if(matches==8){
        document.getElementById('game-title').innerHTML = 'You Won';
        setTimeout(function(){
          location.reload();
        }, 3000);
      }
    } else {
      setTimeout(function () {
        compareSuite.classList.remove('active');
        self.classList.remove('active');
        compareSuite = null;
      }, 500);
    }
  } else {
    compareSuite = this;
  }
}

})();
