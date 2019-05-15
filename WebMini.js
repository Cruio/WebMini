
//This is quite possibly the worst function ever created, but alas, here we are.
$('#nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href
  var newcontent = '#'+$(this).attr("class").split(" ")[0];
  var target = '#'+$(this).attr("class").split(" ")[1];
  var replace = '#'+$(this).attr("class").split(" ")[2];


  $(replace).remove();                              // Remove old content
  //ID of old content to remove
  $(target).load(url +' '+ newcontent).hide().fadeIn('slow'); // New content
  //Where to place it      //The new content

  //alert(url);
  //alert lets you display a message, good for testing whether variables have the right values
});

$('#scoreRefresh a').on('click', function(e){
  e.preventDefault();
  var url = this.href;
  $('#listOfScores').remove();                              // Remove old content
  //ID of old content to remove
  $('#scoreContainer').load(url + ' #mongoScore').hide().fadeIn('slow');
    //Where to place it      //The new content
});


function hello(){
  var blargh ="hello there young mango"
  document.getElementById('content').innerHTML = blargh;
}
