// JavaScript Document
$(document).ready(function() {
   $('#music').mouseEnter(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
   $('#music').mouseleave(function() {
       $(this).animate({
           height: '+=10px'
       }); 
   });
   $('#music').click(function() {
       $(this).toggle(1000);
   }); 
});

var divHeight = $('.tile').height(); 

$(window).resize(function(){
    $('.tile').width(divHeight);
});