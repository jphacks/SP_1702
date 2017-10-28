var on_device=true;
var user_id = 1;


/*****************************************/
/*************Soulの受信関数**************/
/*****************************************/

function getSoul(){
  if(!on_device) return;
  //本体デバイスにいない(スマホ端末にいる)ときはon_deviceはfalse
    on_device = false;
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
 $.ajax({
   type: 'POST',
   url: "http://192.168.2.29:9000/soul",
   data: JSON.stringify(data),
   success: function(success){
     //alert(success);
   }
 });

}

function showSoul(){
  $soul = $("#soul");
  //$soul.show().;
  $soul.css("visibility","visible");
  changedBtnColor(0);
  //bigSoul();
}

function hideSoul(){
  $soul = $("#soul");
  $soul.css("visibility","hidden");
  changedBtnColor(1);
}

function changedBtnColor(flag){
  if(flag){
    $("#soulBtn").css("opacity", "1.0");
    //$("#soulBtn").css("background-color: lemonchiffon");
  }else{
    $("#soulBtn").css("opacity", "0.2");
  }
}
