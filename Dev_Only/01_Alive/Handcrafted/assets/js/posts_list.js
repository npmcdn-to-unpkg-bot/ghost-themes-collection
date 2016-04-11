// Create this file inside /js/ directory!

var getRecentPosts = function (amount, callback) {
  var rss = $("link[type='application/rss+xml']").attr("href");

  $.get(rss, function (data) {
    var recent = [];
    var parsed = $.parseXML(data);
    var posts = $(data).find("item");

    if (amount) posts = posts.slice(0, amount); // Only display the first number of posts (defined by amount)

    for (var i = 0; posts && i < posts.length; i++) {
      var post = posts.eq(i);
      recent.push({
        title: post.find("title").text(),
        content: post.find("description").text(),
        url: post.find("link").text(),
        date: post.find("pubDate").text()
      });


    }

    callback(recent); // Done collecting posts, process to callback
  });
};

var crop = function (str, words) {
  var cache = str.split(/\s+/, words);
  return cache.join(" ");
}

// Gets called on document ready
$(function () {
  var num_posts = 3;
  var num_words = 80;

  getRecentPosts(num_posts, function (posts) { // Display [x-null] posts!
    var template = "";
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var excerpt = crop($("<div/>").html(post.content).text(), num_words); // strip html and crop string!

      template += "<article class='article'><div class='article-img'></div><a href='" + post.url + "'> <h2>" + post.title + "</h2></a> <h6><time>" + post.date.substr(5, 11) + "</time></h6> <p>" + excerpt + "</p><a class='btn btn-sm btn-green' href='" + post.url + "'>Read more</a></article>";
    }
    $("#posts_list").html(template)
  });
});