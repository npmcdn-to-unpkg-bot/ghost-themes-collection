$(document).ready(function(e) {
  // listen for form submission  
  document.querySelector('form').addEventListener('submit', search);
  // wake up the search app
  $.ajax({
    type: 'GET',
    url: "http://ghost-search.herokuapp.com/wakeup"
  });
});

function search() {
  event.preventDefault();
  $('#results').html("Searching for posts containing '" + $('#keyword').val() + "'.....");
  $.ajax({
    type: 'GET',
    url: "http://ghost-search.herokuapp.com/search?q=" + $('#keyword').val() ,
    success: function(data) {
      var html = '';
      var results = JSON.parse(data); 
      for (var i = 0; i < results.length; i++) {
        html += "<p><span class='lead'><a href='"+results[i]._source.url+"'>"+results[i]._source.title+"</a></span><br/><span class='small'>Published: "+results[i]._source.published_at+"</span></p>";
      }
      if (html === '') {
        $('#results').html('<p>No matching blog posts found containing: '+$('#keyword').val() +'</p>');
      } else {
        var notification = "<p class='small'>Found " + results.length + " blog posts matching your search criteria.</p>";
        $('#results').html(notification + html);
      }
    },
    failure: function(err) {
      $('#results').html('<p>Error performing search: ' + err + '</p>'); 
    }
  });
}