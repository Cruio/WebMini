
//This is quite possibly the worst function ever created, but alas, here we are.
$('ul a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href
  var newcontent = '#'+$(this).attr("class").split(" ")[0];
  var target = '#'+$(this).attr("class").split(" ")[1];
  var replace = '#'+$(this).attr("class").split(" ")[2];


  $('ul a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator
  $(replace).remove();                              // Remove old content
  //ID of old content to remove
  $(target).load(url +' '+ newcontent).hide().fadeIn('slow'); // New content
  //Where to place it      //The new text

  //alert(replace);
  //alert lets you display a message, good for testing whether variables have the right values
});
