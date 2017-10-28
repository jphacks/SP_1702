(function () {

  var $arrow;
  var $window;
  var stageW;
  var stageH;

  var isMotion;

  var SensorValueLoad = true;

  $(function () {
    $arrow = $("#arrow");
    $window = $(window);

    isMotion = false;

    $(window).on("resize", resizeHandler);
    resizeHandler();

    // DeviceMotion Event
    window.addEventListener("devicemotion", devicemotionHandler);
  });

  // 加速度が変化
  function devicemotionHandler(event) {
    if (!SensorValueLoad) return;

    // 加速度
    // X軸
    var x = event.acceleration.x;
    // Y軸
    var y = event.acceleration.y;
    // Z軸
    var z = event.acceleration.z;

    $arrow.stop();

    var l = 20;
    if (x > l || x < -l || y > l || y < -l) { // 右
      $arrow.css({
        x: -stageW
      });
      $arrow.children("img").css({
        "-webkit-transform": "rotate(90deg)",
        "-moz-transform": "rotate(90deg)",
        "transform": "rotate(90deg)"
      });
      pushSoul();
      SensorValueLoad = false;
      SensorValueLoadControl();
    }
    else return;


    isMotion = true;

  }

  function resizeHandler(event) {
    stageW = $window.width();
    stageH = $window.height();
  }

  function SensorValueLoadControl(){

    if(SensorValueLoad == false){
      setTimeout(function(){
        SensorValueLoad = true;
      }, 250);
    }

  }
})();
