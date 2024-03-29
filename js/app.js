

var time = 0; 
var started ;
var moves = 0;
var win = 0;
var timeWin ;
var star = document.getElementsByClassName("stars")[0];
var starNum = 0;
var deks = document.getElementsByClassName("deck")[0];


var click = true;
var cards = ['fa-diamond','fa-diamond','fa-paper-plane-o','fa-paper-plane-o','fa-anchor','fa-anchor','fa-bolt','fa-bolt','fa-cube','fa-cube','fa-leaf','fa-leaf','fa-bicycle','fa-bicycle','fa-bomb','fa-bomb'];

function generateCard(card){
    return '<li class="card"><i class="fa '+card+'"></i></li>';
}




function counting() {
    time++;
    document.getElementById('time').innerHTML = time;
    timer();
}

function timer() {
    if(win != 16 )
    started = setTimeout(counting, 1000);
}



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 function initGame(){
    var deck = document.querySelector('.deck');
    var cardHTML = shuffle(cards).map(function(card) {
        return generateCard(card);
    })
    deck.innerHTML = cardHTML.join('');
 }

 function wein(){
    timeWin = time;
    alert("Congratulations time:"+timeWin+"moves:"+moves);
    restartGame();
 }

 initGame();

 var allCards = document.querySelectorAll('.card');
 var openCard = [];
 

 allCards.forEach(function(card){
     card.addEventListener('click',function(e){
        var list = document.getElementsByClassName("stars")[0];
         if(click){
            timer();
            click = false;
         }

         if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
            openCard.push(card);
            card.classList.add('open','show');

            if(openCard.length ==  2) {
                moves++;
                if(openCard[0].innerHTML == openCard[1].innerHTML) {

                    openCard[0].classList.add('match');
                    openCard[0].classList.add('open');
                    openCard[0].classList.add('show');

                    openCard[1].classList.add('match');
                    openCard[1].classList.add('open');
                    openCard[1].classList.add('show'); 
                    
                    openCard = [];
                    win+=2;
                    if( win >= 16){
                    setTimeout(wein,2000);}
                    
                } else {
                    setTimeout(function(){
                        openCard.forEach(function(card){
                            card.classList.remove('open','show');
                        });

                        openCard = [];
                    },400);
                }
                document.getElementById('moves').innerHTML = moves;
                if(moves == 2){
                    list.getElementsByClassName("fa fa-star")[0].className ="s";
                    starNum++;
                 }
                 if(moves == 3){
                    list.getElementsByClassName("fa fa-star")[0].className ="s";
                    starNum++;
                 }

                 
                 
                 

            }
           
        }

     });
     
 });

 function restartGame(){
    initGame();
    var allCards = document.querySelectorAll('.card');
    var openCard = [];
    allCards.forEach(function(card){
        card.addEventListener('click',function(e){
           var list = document.getElementsByClassName("stars")[0];
   
            if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
               openCard.push(card);
               card.classList.add('open','show');
   
               if(openCard.length ==  2) {
                   moves++;
                   if(openCard[0].innerHTML == openCard[1].innerHTML) {
   
                       openCard[0].classList.add('match');
                       openCard[0].classList.add('open');
                       openCard[0].classList.add('show');
   
                       openCard[1].classList.add('match');
                       openCard[1].classList.add('open');
                       openCard[1].classList.add('show'); 
                       
                       openCard = [];
                       win+=2;
                       if( win >= 16){
                       setTimeout(wein,2000);}
                       
                   } else {
                       setTimeout(function(){
                           openCard.forEach(function(card){
                               card.classList.remove('open','show');
                           });
   
                           openCard = [];
                       },400);
                   }
                   document.getElementById('moves').innerHTML = moves;
                   if(moves == 9){
                       list.getElementsByClassName("fa fa-star")[0].className ="s";
                       starNum++;
                    }
                    if(moves == 15){
                       list.getElementsByClassName("fa fa-star")[0].className ="s";
                       starNum++;
                    }
   
                    
                    
                    
   
               }
              
           }
   
        });
        
    });
    for(var i=0;i<starNum;i++){
        star.getElementsByClassName("s")[0].className ="fa fa-star";
    }
    starNum=0;
    moves=0;
    document.getElementById('moves').innerHTML = moves;
    win=0;
    document.getElementById('time').innerHTML = 0;
    time=0;
    
    
 

 }