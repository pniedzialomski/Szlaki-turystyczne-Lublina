//MAPA GLÓWNA
var mymap = L.map('mapid').setView([51.247, 22.56], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap);
//MARKERY
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var restaurantIcon = L.AwesomeMarkers.icon({
    icon: 'utensils',
    prefix: 'fa',
    markerColor: 'lightgray',
    iconSize: [35,40]
});
var clubIcon = L.AwesomeMarkers.icon({
    icon: 'glass-martini',
    prefix: 'fa',
    markerColor: 'pink',
    iconSize: [35,40]
});
var museumIcon = L.AwesomeMarkers.icon({
    icon: 'landmark',
    prefix: 'fa',
    markerColor: 'brown',
    iconSize: [35,40]
});
var theatreIcon = L.AwesomeMarkers.icon({
    icon: 'theater-masks',
    prefix: 'fa',
    markerColor: 'orange',
    iconSize: [35,40]
});
var placeIcon = L.AwesomeMarkers.icon({
    icon: 'archway',
    prefix: 'fa',
    markerColor: 'darkred',
    iconSize: [35,40]
});
var greenareaIcon = L.AwesomeMarkers.icon({
    icon: 'tree',
    prefix: 'fa',
    markerColor: 'darkgreen',
    iconSize: [35,40]
});
var goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var violetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greyIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
//WYŚWIETLANIE TREŚCI POPUPÓW PUNKTÓW SZLAKÓW


//DODANIE PUNKTOW Z GEOJSONA
//var data = new L.GeoJSON.AJAX('przystanki.geojson');

var btn0 = document.getElementById("szlaki");
var btn1 = document.getElementById("szlak1");
var btn2 = document.getElementById("szlak2");
var btn3 = document.getElementById("szlak3");
var btn4 = document.getElementById("szlak4");
var btn5 = document.getElementById("szlak5");
var btnUmcs = document.getElementById("szlakUmcs");
var btnKul = document.getElementById("szlakKul");
var btnstud = document.getElementById("szlakStud");
var btnRemove = document.getElementById("clearMap");

let promise = $.getJSON("geojsons/przystanki.geojson");
promise.then(function(data){
    var szlakInfo;

    var wszystkieprz = L.geoJSON(data);
    // Pobieranie oraz filtrowanie danych z geojsona dotyczących punktów
    var szlak1 = L.geoJSON(data, {
        filter: function(feature, layer) {
            return feature.properties.szlak_name == "Jagielloński szlak Unii Lubelskiej";
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr.toString()){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '8':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
            }   
            }
    });
    var szlak2 = L.geoJSON(data, {
        filter: function(feature, layer) {
            return feature.properties.szlak_name == "Szlak pamięci Żydów Lubelskich";
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr.toString()){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '13':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: violetIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
            }   
            }
    });
    var szlak3 = L.geoJSON(data, {
        filter: function(feature, layer) {
            return feature.properties.szlak_name == "Szlak Wielokulturowy";
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr.toString()){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '12':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: greyIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
            }   
            }
    });
    var szlak4 = L.geoJSON(data, {
        filter: function(feature, layer) {
            return feature.properties.szlak_name == "Szlak Zabytków Architektury";
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr.toString()){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '16':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: goldIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
            }   
            }
    });
    var szlak5 = L.geoJSON(data, {
        filter: function(feature, layer) {
            return feature.properties.szlak_name == "Szlak Znanych Lublinian";
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr.toString()){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '17':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: orangeIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
            }   
            }

    });
    let szlakstud = L.geoJSON(data,{
        filter: function(feature, layer){
            return feature.properties.szlak_id == "6"
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '7':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: orangeIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
             }   
        }
    });
    let szlakumcs = L.geoJSON(data,{
        filter: function(feature, layer){
            return feature.properties.szlak_id.toString() == "7"
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '7':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: orangeIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
             }   
        }
    });
    let szlakkul = L.geoJSON(data,{
        filter: function(feature, layer){
            return feature.properties.szlak_id.toString() == "8"
        },
        pointToLayer: function(feature, latlng) {
            switch(feature.properties.przys_nr){
                case '1':
                    return L.marker(latlng, {
                        icon: greenIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                case '7':
                    return L.marker(latlng, {
                        icon: redIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
                default:
                    return L.marker(latlng, {
                        icon: orangeIcon
                    }).on("mouseover", function(){
                    this.bindPopup("<b style='font-size:14px;'>"+feature.properties.szlak_name+"</b><br> Przystanek nr: "+feature.properties.przys_nr.toString()+"<br>"+feature.properties.przys_name).openPopup();
                    });
             }   
        }
    });

    function onEachFeature(feature, layer){
        layer.bindPopup("Prawdopodobny czas przejścia: "+feature.properties.czas.toString()+" minut.");
    }
    //pobieranie danych dotyczących dróg między punktami na szlakach
    var droga1, droga2, droga3, droga4, droga5;
    $.getJSON('geojsons/szlak1.geojson', function(data){
        droga1 = L.geoJSON(data,{
            onEachFeature: onEachFeature
        })
    });
    $.getJSON('geojsons/szlak2.geojson', function(data){
        droga2 = L.geoJSON(data,{
            color: 'violet',
            onEachFeature: onEachFeature
        })
    });         
    $.getJSON('geojsons/szlak3.geojson', function(data){
        droga3 = L.geoJSON(data,{
            color: 'grey',
            onEachFeature: onEachFeature
        })
    }); 
    $.getJSON('geojsons/szlak4.geojson', function(data){
        droga4 = L.geoJSON(data,{
            color: 'yellow',
            onEachFeature: onEachFeature
        })
    }); 
    $.getJSON('geojsons/szlak5.geojson', function(data){
        droga5 = L.geoJSON(data,{
            color: 'orange',
            onEachFeature: onEachFeature
        })
    }); 
    $.getJSON('geojsons/szlakKul.geojson', function(data){
        drogaKul = L.geoJSON(data,{
            color: 'orange',
            onEachFeature: onEachFeature
        })
    }); 
    $.getJSON('geojsons/szlakStud.geojson', function(data){
        drogaStud = L.geoJSON(data,{
            color: 'orange',
            onEachFeature: onEachFeature
        })
    }); 
    $.getJSON('geojsons/szlakUmcs.geojson', function(data){
        drogaUmcs = L.geoJSON(data,{
            color: 'orange',
            onEachFeature: onEachFeature
        })
    }); 

    //Czyszczenie mapy z treści
    function removeSzlaki(){
        mymap.removeLayer(szlak1);
        mymap.removeLayer(szlak2);
        mymap.removeLayer(szlak3);
        mymap.removeLayer(szlak4);
        mymap.removeLayer(szlak5);
        mymap.removeLayer(szlakkul);
        mymap.removeLayer(szlakstud);
        mymap.removeLayer(szlakumcs);
        mymap.removeLayer(wszystkieprz);
        mymap.removeLayer(droga1);
        mymap.removeLayer(droga2);
        mymap.removeLayer(droga3);
        mymap.removeLayer(droga4);
        mymap.removeLayer(droga5);
        mymap.removeLayer(drogaKul);
        mymap.removeLayer(drogaUmcs);
        mymap.removeLayer(drogaStud);
                
    };
    // Wyświetlanie treści na mapie 
    btn0.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(wszystkieprz.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlak1);
        mymap.addLayer(szlak2);
        mymap.addLayer(szlak3);
        mymap.addLayer(szlak4);
        mymap.addLayer(szlak5);
        mymap.addLayer(szlakstud); 
        mymap.addLayer(szlakumcs); 
        mymap.addLayer(szlakkul);  
        mymap.addLayer(droga1);
        mymap.addLayer(droga2);
        mymap.addLayer(droga3);
        mymap.addLayer(droga4);
        mymap.addLayer(droga5); 
        mymap.addLayer(drogaStud);
        mymap.addLayer(drogaUmcs);
        mymap.addLayer(drogaKul);  
    });
    btn1.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlak1.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlak1);
        mymap.addLayer(droga1);
    });
    btn2.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlak2.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlak2);
        mymap.addLayer(droga2);
    });
    btn3.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlak3.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlak3);
        mymap.addLayer(droga3);
    });
    btn4.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlak4.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlak4);
        mymap.addLayer(droga4);
    });
    btn5.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlak5.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlak5);
        mymap.addLayer(droga5);
    });
    btnstud.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlakstud.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlakstud);
        mymap.addLayer(drogaStud);
    });
    btnKul.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlakkul.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlakkul);
        mymap.addLayer(drogaKul);
    });
    btnUmcs.addEventListener("click", function(){
        removeSzlaki();
        mymap.fitBounds(szlakumcs.getBounds(), {
            padding: [50, 50]
        });
        mymap.addLayer(szlakumcs);
        mymap.addLayer(drogaUmcs);
    });
    btnRemove.addEventListener("click", function(){
        removeSzlaki();
    });
});




let obiekty = L.markerClusterGroup();

$.getJSON("geojsons/ankiety_obiekty.geojson", function(data){
    let objects = L.geoJSON(data,{
        pointToLayer: function(feature, latlng){
            switch(feature.properties.Kategoria){
                case "Obszary Zielone":
                    return L.marker(latlng, {
                        icon: greenareaIcon
                    }).on("mouseover", function(){
                        this.bindPopup(feature.properties.Nazwa).openPopup();
                    });
            }
            switch(feature.properties.Kategoria){
                case "Restauracje":
                    return L.marker(latlng, {
                        icon: restaurantIcon
                    }).on("mouseover", function(){
                        this.bindPopup(feature.properties.Nazwa).openPopup();
                    });
            }
            switch(feature.properties.Kategoria){
                case "Muzea":
                    return L.marker(latlng, {
                        icon: museumIcon
                    }).on("mouseover", function(){
                        this.bindPopup(feature.properties.Nazwa).openPopup();
                    });
            }
            switch(feature.properties.Kategoria){
                case "Miejsca kultury":
                    return L.marker(latlng, {
                        icon: theatreIcon
                    }).on("mouseover", function(){
                        this.bindPopup(feature.properties.Nazwa).openPopup();
                    });
            }
            switch(feature.properties.Kategoria){
                case "Kluby":
                    return L.marker(latlng, {
                        icon: clubIcon
                    }).on("mouseover", function(){
                        this.bindPopup(feature.properties.Nazwa).openPopup();
                    });
            }
            switch(feature.properties.Kategoria){
                case "Place":
                    return L.marker(latlng, {
                        icon: placeIcon
                    }).on("mouseover", function(){
                        this.bindPopup(feature.properties.Nazwa).openPopup();
                    });
            }
        }
    })
    obiekty.addLayer(objects)
    mymap.addLayer(obiekty);
})
/*
$.getJSON("geojsons/restauracje.geojson", function(data){
    var restauracje = L.geoJSON(data,{
        
        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: restaurantIcon
                }).on("mouseover", function(){
                this.bindPopup(feature.properties.Nazwa).openPopup();
                });
        }
        })
        obiekty.addLayer(restauracje);
    mymap.addLayer(obiekty);
});
$.getJSON("geojsons/kluby.geojson", function(data){
    var kluby = L.geoJSON(data,{
        
        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: clubIcon
                }).on("mouseover", function(){
                this.bindPopup(feature.properties.Nazwa).openPopup();
                });
        }
        })
        obiekty.addLayer(kluby);
    mymap.addLayer(obiekty);
});
$.getJSON("geojsons/muzea.geojson", function(data){
    var muzea = L.geoJSON(data,{
        
        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: museumIcon
                }).on("mouseover", function(){
                this.bindPopup(feature.properties.Nazwa).openPopup();
                });
        }
        })
        obiekty.addLayer(muzea);
    mymap.addLayer(obiekty);
});
$.getJSON("geojsons/miejsca_kultury.geojson", function(data){
    var miejsca_kultury = L.geoJSON(data,{
        
        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: theatreIcon
                }).on("mouseover", function(){
                this.bindPopup(feature.properties.Nazwa).openPopup();
                });
        }
        })
        obiekty.addLayer(miejsca_kultury);
    mymap.addLayer(obiekty);
});
*/
/*
szlaki.addEventListener("click", function(){
    $.getJSON("przystanki.geojson",function(data){
    var datalayer = L.geoJson(data ,{
    onEachFeature: function(feature, featureLayer) {
    featureLayer.bindPopup(feature.properties.przys_name);
    }
    }).addTo(mymap);
    mymap.fitBounds(datalayer.getBounds());
    });
});
*/
/*
btn1.addEventListener("click", function(){
        $.getJSON("przystanki.geojson",function(data){
            datalayer = L.geoJson(data, {
                filter: function(feature, layer) {
                    return feature.properties.szlak_name == "Jagielloński szlak Unii Lubelskiej";
                },
                pointToLayer: function(feature, latlng) {
                    return L.marker(latlng, {}).on('mouseover', function(){
                        this.bindPopup(feature.properties.przys_name).openPopup();
                 });
                 }
             }
          ).addTo(mymap);
          mymap.fitBounds(datalayer.getBounds());
    })
});
*/

/*
var others = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.szlak_id == 1;
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
*/

