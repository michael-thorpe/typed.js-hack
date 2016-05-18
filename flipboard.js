
var ref = document.referrer;
if (ref.match(/^https?:\/\/([^\/]+\.)?flipboard\.com(\/|$)/i)) {
  document.getElementById("flipboard").className = "";
}
