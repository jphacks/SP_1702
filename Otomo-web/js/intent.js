function lineIntent(msg){
  var uri = "line://msg/text/"+msg;
  window.open(uri, "intent");
}
