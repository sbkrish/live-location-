
var x = navigator.geolocation;
x.getCurrentPosition(loadMap);

function loadMap(position) {
    var myLat = position.coords.latitude;
    var myLong = position.coords.longitude;
    var coords = new google.maps.LatLng(myLat, myLong);
    var mapOptions = {
        zoom: 13,
        center: coords
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: coords
    });
    var floatLat = Number(myLat).toFixed(6);
    var floatLong = Number(myLong).toFixed(6);
    document.getElementById("latitude").textContent = floatLat;
    document.getElementById("longitude").textContent = floatLong;
    document.getElementById("input_lat").setAttribute('value', floatLat);
    document.getElementById("input_long").setAttribute('value', floatLong);

    //jquery 
    $("#info").hide();
    $("#submit").show();
    $("#table").show();
}

function initMap() {}

function myFunction() {
    var floatLat = document.getElementById("input_lat").value;
    var floatLong = document.getElementById("input_long").value;
    var dataString = 'lat=' + floatLat + '&long=' + floatLong;

    //store data in MySQL using ajax

    $.ajax({
        type: "POST",
        url: "save-data.php",
        data: dataString,
        cache: false,
        success: function (html) {
            $("#submit").remove();
            $("#success-msg").show();
        }
    });
    return false;
}

