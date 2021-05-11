
document.addEventListener('DOMContentLoaded', ()=>{
    var map = L.map('map').setView([50.37212759641259, -4.138262271881104], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmJhdG9yaWpzIiwiYSI6ImNrb2p1YWhnMjAxeXQyb25weHJxMWV6d3gifQ.hs_PND1QC9Fxo6i0OOv1zQ'
    }).addTo(map);

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var addLocModal = document.querySelector('#addLocModal');
    var instance = M.Modal.getInstance(addLocModal);

    map.on('click', clickedMap);

    var latField = document.querySelector('#lat');
    var longField = document.querySelector('#long');
    var w3wField = document.querySelector('#w3w');

    function clickedMap(event){
        instance.open();

        latField.value = event.latlng.lat
        longField.value = event.latlng.lat

        fetch(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${event.latlng.lat}%2C${event.latlng.long}&key=CQ9WSM5L`)
        .then((reponse)=>{
        return response.json();
        })
        then((myJson)=>{
            w3wField.value = myJson.words;
        })

        console.log(event.latlng);
    }
});



