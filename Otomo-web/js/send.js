var on_device=false;
function getSoul(){
    on_device = false;
    var user_id = 1
    sendSoulInfo(on_device, user_id);
}

function pushSoul(){
  on_device = true;
  var user_id = 1
  sendSoulInfo(on_device, user_id);
}

function sendSoulInfo(ondevice, id) {
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
 $.ajax({
   type: 'POST',
   url: "http://192.168.2.29:9000/soul",
   data: data,
   success: function(success){
     alert(success);
   }
 });
}
