window.onload = function() {
        initialize();
    }

    function initialize() {
        var myLatlng = new google.maps.LatLng(47.4150649, 8.273228399999994);

        var myOptions = {
            zoom: 16,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        var infowindow = new google.maps.InfoWindow({
            content: "<b>Adresse:</b><br>Rigiweg 8<br>5507 Mellingen"
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: ""
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }