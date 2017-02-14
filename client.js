$(document).ready(function(){
  for (var i = 0; i < 10; i++) {
    var newButton = $('<button></button>');
    newButton.text('Click me! I am a button!');
    newButton.data('idNumber', i); // ids are common, but often not displayed on the page
    newButton.data('coolSecret', 'Kris has big ears');
    newButton.data('coolSecret', 'Firebase is awesome!!');
    $('body').append(newButton);
  }

  $('button').on('click', function(){
    console.log($(this).data()); // information stored, but not shown on page
    console.log($(this).data().idNumber + ' was clicked!');
  });
});
