$(function(){


  var availableTags = [
    "ActionScript",
    "AppleScript"
  ];
  $( "#autocomplete" ).autocomplete({
    source: availableTags
  });
  $( "#autocomplete2" ).autocomplete({
    source: availableTags
  });

  $( "#datepicker" ).datepicker({
    inline: true
  });

  $( "#radioset" ).buttonset();




  Placeholdem( document.querySelectorAll( '[placeholder]' ) );

})