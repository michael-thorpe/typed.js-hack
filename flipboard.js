
var ref = document.referrer;
if (ref.match(/^https?:\/\/([^\/]+\.)?flipboard\.com(\/|$)/i)) {
  var div = document.getElementById('flipboard');
  div.style.visibility = 'visible';
}
