function initMap() {
	var map = new google.maps.Map(document.getElementById('js-map'), {
		zoom: 10,
		scrollwheel: false,
		center: {
			lat: 40.679244,
			lng: -74.0992518,
		},
		styles: [
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
      }
    ]
  },
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
      }
    ]
  },
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
      }
    ]
  },
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f5f5"
      }
    ]
  },
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#bdbdbd"
      }
    ]
  },
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
      }
    ]
  },
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
      }
    ]
  },
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
      }
    ]
  },
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
      }
    ]
  },
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
      }
    ]
  },
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
      }
    ]
  },
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dadada"
      }
    ]
  },
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
      }
    ]
  },
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
      }
    ]
  },
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
      }
    ]
  },
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
      }
    ]
  },
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c9c9c9"
      }
    ]
  },
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
      }
    ]
  }
]
	});
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			map.setCenter(pos);
		});
	}

}


//	var markerImage = new google.maps.MarkerImage(
//		'img/map-icon.png',
//		new google.maps.Size(40, 48),
//		new google.maps.Point(0, 0)
//	);

//	var markers = locations.map(function (location, i) {
//		return new google.maps.Marker({
//			position: location,
//			icon: markerImage,
//			label: labels[i % labels.length],
//			map: map
//		});
//	});
//	var markerCluster = new MarkerClusterer(map, markers, {
//		imagePath: 'img/'
//	});
//	map.setOptions({
//		styles: styleArray
//	});
//}
//var locations = [
//	{
//		lat: 37.759436,
//		lng: -122.410546
//		},
//	{
//		lat: 37.759896,
//		lng: -122.414346
//		},
//	{
//		lat: 37.760650,
//		lng: -122.411694
//		},
//	{
//		lat: 37.762756,
//		lng: -122.411614
//		},
//	{
//		lat: 37.761860,
//		lng: -122.411664
//		}
//]