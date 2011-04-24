// Twitter
function time_ago_in_words(from) {
  return distance_of_time_in_words(new Date().getTime(), Date.parse(from));
}
function distance_of_time_in_words(to, from) {
  seconds_ago = ((to - from) / 1000);
  minutes_ago = Math.floor(seconds_ago / 60);
  if (minutes_ago == 0) {
    return "less than a minute";
  }
  if (minutes_ago == 1) {
    return "a minute";
  }
  if (minutes_ago < 45) {
    return minutes_ago + " minutes";
  }
  if (minutes_ago < 90) {
    return " about 1 hour";
  }
  hours_ago = Math.round(minutes_ago / 60);
  if (minutes_ago < 1440) {
    return "about " + hours_ago + " hours";
  }
  if (minutes_ago < 2880) {
    return "1 day";
  }
  days_ago = Math.round(minutes_ago / 1440);
  if (minutes_ago < 43200) {
    return days_ago + " days";
  }
  if (minutes_ago < 86400) {
    return "about 1 month";
  }
  months_ago = Math.round(minutes_ago / 43200);
  if (minutes_ago < 525960) {
    return months_ago + " months";
  }
  if (minutes_ago < 1051920) {
    return "about 1 year";
  }
  years_ago = Math.round(minutes_ago / 525960);
  return "over " + years_ago + " years";
}
twttr.anywhere(function (T) {
  T.User.find("voxxit").timeline().first(5).each(function (tweet) {
    if (tweet.text !== undefined) {
      var tweet_html = '<div class="tweet">';
      var link_regex = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
      tweet_html += tweet.text.replace(link_regex, '<a href="$1">$1</a>');
      tweet_html += '<div class="tweet_hours">';
      tweet_html += '<a href="http://www.twitter.com/';
      tweet_html += 'voxxit/status/' + tweet.id + '">';
      tweet_html += '<time>' + time_ago_in_words(tweet.createdAt) + ' ago</time><\/a><\/div>';
      tweet_html += '<\/div>';
      $('#tweet-container').append(tweet_html);
      T.hovercards();
    }
  });
  T("#follow-button").followButton("voxxit");
  T.hovercards();
});
window.fbAsyncInit = function () {
  FB.init({
    appId: '113988508662719',
    status: true,
    cookie: true,
    xfbml: true
  });
};
(function () {
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.src = "http://connect.facebook.net/en_US/all.js";
  e.async = true;
  document.getElementById('fb-root').appendChild(e);
}());