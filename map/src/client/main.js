import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import style from './style.json';
import cities from './cities.json';

async function main() {
    let map = new maplibregl.Map({
        container: 'map', // container id
        // style: 'https://demotiles.maplibre.org/style.json', // style URL
        style: style,
        center: [0, 0], // starting position [lng, lat]
        zoom: 1 // starting zoom
    });
    map.on('load', function () {
        map.resize();
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [-122.48369693756104, 37.83381888486939],
                        [-122.48348236083984, 37.83317489144141],
                        [-122.48339653015138, 37.83270036637107],
                        [-122.48356819152832, 37.832056363179625],
                        [-122.48404026031496, 37.83114119107971],
                        [-122.48404026031496, 37.83049717427869],
                        [-122.48348236083984, 37.829920943955045],
                        [-122.48356819152832, 37.82954808664175],
                        [-122.48507022857666, 37.82944639795659],
                        [-122.48610019683838, 37.82880236636284],
                        [-122.48695850372314, 37.82931081282506],
                        [-122.48700141906738, 37.83080223556934],
                        [-122.48751640319824, 37.83168351665737],
                        [-122.48803138732912, 37.832158048267786],
                        [-122.48888969421387, 37.83297152392784],
                        [-122.48987674713133, 37.83263257682617],
                        [-122.49043464660643, 37.832937629287755],
                        [-122.49125003814696, 37.832429207817725],
                        [-122.49163627624512, 37.832564787218985],
                        [-122.49223709106445, 37.83337825839438],
                        [-122.49378204345702, 37.83368330777276]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#FF0000',
                'line-width': 80
            }
        });

        map.addSource('cities', {
            'type': 'geojson',
            "data": cities
        });

        map.addLayer({
            'id': 'cities',
            'type': 'circle',
            'source': 'cities',
            // 'layout': {
                // 'line-join': 'round',
                // 'line-cap': 'round'
            // },
            'paint': {
                'circle-radius': 10,
                'circle-color': '#3887be'
            }
        });
    });
}

window.addEventListener("load", () => {
    main();
});

// Option #1

// [out:json][timeout:100];
// // fetch area Russia to search in
// {{geocodeArea:Russia}}->.searchArea;
// // gather results
// (
//   node[place~"city"]["population"](area.searchArea)(if:
//     number(t["population"]) > 1000000);
// );
// // print results
// out body;
// >;
// out skel qt;

// Option #2

// [out:json][timeout:100];
// // gather results
// ( area[name="United Kingdom"]; )->.a;  /* or more selectively: */
// (
//   node[place~"city"]["population"](area.a)(if:
//     number(t["population"]) > 1000000);
// );
// // print results
// out body;
// >;
// out skel qt;