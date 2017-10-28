var on_device=false;
var user_id = 1

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
  alert(JSON.stringify(data));
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
   data: data,
   success: function(success){
     alert(success);
   }
 });
 */
}

function showSoul(){
  $soul = $("#soul");
  $soul.hide();
}

function hideSoul(){
  $soul = $("#soul");
  $soul.show();
}
