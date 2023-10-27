
$(function(){

// Avec une functions on peux cacher une balise
// function hideBalsie(item){
// $(item).hide();
// }

// hideBalsie($("#hello"))




// $( "p" ).hover(
//     function() {
//       $( this ).hide();
//     }, function() {
//       $( this ).show();
//     }
//   );


$("button").click(function(){

    $("p:first").hide();
    $("p:second").hide();
    $("p:three").hide();
  });

});

