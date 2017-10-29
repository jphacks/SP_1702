var on_device=true;
var user_id = 1;

var getSoulAudio = new Audio("audio/get.mp3");
var pushSoulAudio = new Audio("audio/push.mp3");

/*****************************************/
/*************Soulの受信関数**************/
/*****************************************/

function getSoul(){
  if(!on_device) return;
  //本体デバイスにいない(スマホ端末にいる)ときはon_deviceはfalse
  on_device = false;
  getSoulAudio.play();
  showSoul();
  sendSoulInfo(on_device, user_id);
}

/*****************************************/
/*************Soulの送信関数**************/
/*****************************************/

function pushSoul(){
  if(on_device) return;
  //本体デバイスにいる(スマホ端末にいない)ときはon_deviceはtrue
  on_device = true;
  pushSoulAudio.play();
  hideSoul();
  sendSoulInfo(on_device, user_id);
}

/*****************************************/
/*************Soulの送信関数**************/
/*****************************************/

function sendSoulInfo(ondevice, id) {
  //サーバーとの通信データ形式
  /*
  {"on_device": bool,
  "user_id": into}
  */
  var data={
    on_device : ondevice,
    user_id   : id
  };
  //alert(JSON.stringify(data));
  /*
  $.post(
  "http://192.168.2.29:9000/soul",
  data,
  function(success){
  alert("SUCCESS: ");
},
"json"
);
*/
/*
$.ajax({
type: 'POST',
url: "http://192.168.2.29:9000/soul",
data: JSON.stringify(data),
success: function(success){
//alert(success);
}
});
*/

}

function showSoul(){
  $soul = $("#soul");
  //$soul.show().;
  //$soul.css("visibility","visible");
  changedOpacity(0);
  //bigSoul();
}

function hideSoul(){
  $soul = $("#soul");
  //$soul.css("visibility","hidden");
  changedOpacity(1);
}

function changedOpacity(flag){
  if(flag){
    $("#soulBtn").css("opacity", "1.0");
    $('#soul')
    .css({opacity: '1'})
    .animate({opacity: '0.0'}, 2000);
    //$("#soulBtn").css("background-color: lemonchiffon");
  }else{
    $("#soulBtn").css("opacity", "0.2");
    $('#soul')
    .css({opacity: '0.0'})
    .animate({opacity: '1'}, 2000);

  }
}

function getSoulAudioPlay() {
  audioElem = new Audio();
  audioElem.src = "audio/getSoulAudio.mp3";
  audioElem.play();
}

function AudioPlay(val) {
  if(val == 0){
    audioElem = new Audio();
    audioElem.src = "audio/getSoulAudio.mp3";
    audioElem.play();
  }else if (val == 1) {
    audioElem = new Audio();
    audioElem.src = "audio/pushSoulAudio.mp3";
    audioElem.play();
  }
}
