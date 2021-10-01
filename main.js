//import 'ol/ol.css';

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileImage({
              url: `http://localhost:8080/{z}/{x}/{y}.png`,
            }),
    }),
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([0.0, 22.0]),
    zoom: 2,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};


