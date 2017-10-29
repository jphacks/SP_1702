function lineIntent(msg){
  var uri = "line://msg/text/"+String(msg);
  window.open(uri, "intent");
}
