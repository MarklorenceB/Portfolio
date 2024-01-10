function initMap() {
  // Latitude and Longitude
  var myLatLng = { lat: 14.064211, lng: 121.323337 };

  var map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 10,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "San Pablo City, Philippines", // Title Location
  });
}
