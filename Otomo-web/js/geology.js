function apiGeolocationSuccess(position) {
    alert("API geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
};

function tryAPIGeolocation() {
    jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDL1SnteI6ZEFYCyKjlnANcVrOCNTuUYPI", function(success) {
        apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
    })
        .fail(function(err) {
            alert("API Geolocation error! \n\n"+JSON.stringify(err));
        });
};

function browserGeolocationSuccess(position) {
    alert("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
};

function browserGeolocationFail(error) {

    switch (error.code) {
        case error.TIMEOUT:
            alert("Browser geolocation error !\n\nTimeout.");
            break;
        case error.PERMISSION_DENIED:
            if(error.message.indexOf("Only secure origins are allowed") == 0) {
                tryAPIGeolocation();
            }
            break;
        case error.POSITION_UNAVAILABLE:
            // dirty hack for safari
            if(error.message.indexOf("Origin does not have permission to use Geolocation service") == 0) {
                tryAPIGeolocation();
            } else {
                alert("Browser geolocation error");
            }
            break;
    }
};

function tryGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            browserGeolocationSuccess,
            browserGeolocationFail,
            {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true});
    }
};
