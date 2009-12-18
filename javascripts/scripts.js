function write_email(){ 
  document.write([">", "a", "/", "<", "m", "o", "c", ".", "t", "i", "x", "x", "o", "v", "@", "n", "a", "m", "s", "l", "e", "d", "j", ">", "\"", "m", "o", "c", ".", "t", "i", "x", "x", "o", "v", "@", "n", "a", "m", "s", "l", "e", "d", "j", ":", "o", "t", "l", "i", "a", "m", "\"", "=", "f", "e", "r", "h", " ", "a", "<"].reverse().join('')); 
}

var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-489504-10']);
_gaq.push(['_trackPageview']);

(function(){
  var ga = document.createElement('script');
  
  ga.type = 'text/javascript'; 
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
})();

function twitterCallback2(twitters) {
  var statusHTML = [];
  for (var i = 0; i < twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url){
      return '<a href="' + url + '">' + url + '</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return reply.charAt(0) + '<a href="http://twitter.com/' + reply.substring(1) + '" class="twitter-reply">' + reply.substring(1) + '</a>';
    });
    
    statusHTML.push('<div class="twitter-update"><div class="twitter-status">' + status + '</div><div class="twitter-updated-at"><a href="http://twitter.com/' + username + '/statuses/' + twitters[i].id + '">' + relative_time(twitters[i].created_at) + '</a></div><div class="clear"></div></div>');
  }
  document.getElementById('twitter-update-list').innerHTML = statusHTML.join('');
}
 
function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);
 
  if (delta < 60) {
    return 'less than a minute ago';
  } else if(delta < 120) {
    return 'about a minute ago';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
    return 'about an hour ago';
  } else if(delta < (24*60*60)) {
    return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}