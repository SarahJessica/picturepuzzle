'use strict';
$(document).ready(init);

//var easyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function init(){
  gameSetup();
  $('td').click(revealImg);
}

function gameSetup(){
  $('td').css('background-color','#d69295');
  console.log("you're in gameSetup");
}

function revealImg(){
  var show = Math.floor(Math.random()*9) + 1;
  $(this).css('background-image', 'url("/assets/1/' + show + '.jpg")');
  winCheck();
}

function winCheck(){
  console.log("you're in win check");
}
