function getSoul(){
    var on_device = false;
    var user_id = 1
    sendSoulInfo(on_device, user_id);
}

function pushSoul(){
  var on_device = true;
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
 $.post({
   url: http,
   data:JSON.stringify(data);,
   function(success){
     alert("SUCCESS: "+success);
   },
   function(error){
     alert("Error: "+error);
   }
 });
 */
}
