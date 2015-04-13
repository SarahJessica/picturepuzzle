'use strict';
$(document).ready(init);

// var easyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var difficulty = $('#difficulty option:selected').val();
// console.log(difficulty);
var difficulty;
var tries =0;
var img = 0;

function init(){
  // $('#start').click(gridSetup);
  $('#start').click(gameStart);
  // $('#start').click($('td').css('background-color', 'pink'));
  // $('td').click(revealImg);
  $('#puzzle').on('click', 'td', revealImg);
}

// console.log($('.1').css('background-image').split('/').pop().slice(0, -1));
// $('td').each(function(){
function clear() {
  $('#puzzle').empty();
  $('#tableWinCover').css('display', 'none').css('background-color', '').css('background-image', '');
}

function gameStart(){
  difficulty = $('#difficulty').val()*1;
  console.log(difficulty);
    img = Math.ceil(Math.random()*2);
  gridSetup();
}

function gridSetup(){
  clear();
  var counter = 1;

  for (var i = 1; i <=difficulty; i++){
    var $tr = $('<tr>');
    for (var j = 1; j<=difficulty; j++){
      var $td = $('<td>');
      $td.attr('id', counter);
      counter++;
      $tr.append($td);
    }
    console.log('$tr', $tr);
    $('#puzzle').append($tr);
  }
  $('td').css('background-color','#d69295');
  // console.log("you're in gameSetup");
}

function revealImg(){
  var show = Math.floor(Math.random()*(difficulty*difficulty)) + 1;
  $(this).css('background-image', 'url("/assets/' + img + '/' + difficulty + '/' + show + '.jpg")');
  winCheck();
}

function winCheck() {
  var matchCount = 0;


  for (var i = (difficulty*difficulty); i > 0; i--){
    if ( $('td#' + i).css('background-image').split('/').pop() === (i + '.jpg)')){
      matchCount++;
    } else {
      break;
    }
  }

  if (matchCount === (difficulty*difficulty)){
  $('#tableWinCover').css('display', 'inline').css('background-image', "url('/assets/" + img + "/" + img + ".jpg')");
  // debugger;
  // alert('you won');
  } else {
    tries++;
  }
}
  // var win = 0;
  // $('td').each(function(){
  // console.log($('td').css('background-image').split('/').pop().slice(0, -1)) === ($('td').className) + '.jpg' ? win++ : null;
  // }
  // win === difficulty*difficulty ? console.log("game won") : console.log("not yet ");
  // $('td').each(function(){
  //   $('td').className === $('td').css('background-image', ) ? win++ : win;
  // })
 //  console.log('this function is called');
 //  if(
 //    $('#1').css('background-image') === "url(http://localhost:3000/assets/3/1.jpg)" &&
 //    $('#2').css('background-image') === "url(http://localhost:3000/assets/3/2.jpg)" &&
 //    $('#3').css('background-image') === "url(http://localhost:3000/assets/3/3.jpg)" &&
 //    $('#4').css('background-image') === "url(http://localhost:3000/assets/3/4.jpg)" &&
 //    $('#5').css('background-image') === "url(http://localhost:3000/assets/3/5.jpg)" &&
 //    $('#6').css('background-image') === "url(http://localhost:3000/assets/3/6.jpg)" &&
 //    $('#7').css('background-image') === "url(http://localhost:3000/assets/3/7.jpg)" &&
 //    $('#8').css('background-image') === "url(http://localhost:3000/assets/3/8.jpg)" &&
 //    $('#9').css('background-image') === "url(http://localhost:3000/assets/3/9.jpg)"
 //  ) {
 //    alert('you won!');
 //    }
 // }
