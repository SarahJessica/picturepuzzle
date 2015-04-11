'use strict';
$(document).ready(init);

// var easyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var difficulty = $('#difficulty option:selected').val();
// console.log(difficulty);
//var difficulty = 4;

function init(){
  $('#start').click(gridSetup);
  // gridSetup();
  $('td').click(revealImg);
}

console.log($('.1').css('background-image').split('/').pop().slice(0, -1));
// $('td').each(function(){

// function gridSetup(){
//   var $tr = $('<tr>');
//   var $td = $('<td>');
//
//     for (var i = 1; i <=difficulty; i++){
//       $tr +
//         for (var j = 1; j<=difficulty; j++){
//           $td;
//         }
//     };
//   $('td').css('background-color','#d69295');
//   console.log("you're in gameSetup");
// }

function revealImg(){
  var show = Math.floor(Math.random()*9) + 1;
  $(this).css('background-image', 'url("/assets/3/' + show + '.jpg")');
  winCheck();
}

function winCheck(){
  var win = 0;
  $('td').each(function(){
  console.log($('td').css('background-image').split('/').pop().slice(0, -1)) === ($('td').className) + '.jpg' ? win++ : null;
  }
  win === difficulty*difficulty ? console.log("game won") : console.log("not yet");
  // $('td').each(function(){
  //   $('td').className === $('td').css('background-image', ) ? win++ : win;
  // })

}
