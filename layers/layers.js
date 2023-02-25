var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bati_Bey_1 = new ol.format.GeoJSON();
var features_Bati_Bey_1 = format_Bati_Bey_1.readFeatures(json_Bati_Bey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bati_Bey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bati_Bey_1.addFeatures(features_Bati_Bey_1);
var lyr_Bati_Bey_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bati_Bey_1, 
                style: style_Bati_Bey_1,
                interactive: true,
                title: '<img src="styles/legend/Bati_Bey_1.png" /> Bati_Bey'
            });
var format_pourqgis2web_2 = new ol.format.GeoJSON();
var features_pourqgis2web_2 = format_pourqgis2web_2.readFeatures(json_pourqgis2web_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pourqgis2web_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pourqgis2web_2.addFeatures(features_pourqgis2web_2);
var lyr_pourqgis2web_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pourqgis2web_2, 
                style: style_pourqgis2web_2,
                interactive: true,
                title: '<img src="styles/legend/pourqgis2web_2.png" /> pourqgis2web'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bati_Bey_1.setVisible(true);lyr_pourqgis2web_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bati_Bey_1,lyr_pourqgis2web_2];
lyr_Bati_Bey_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_CrBati': 'FID_CrBati', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'H_bati': 'Hauteur', 'H_p': 'H_p', 'beta': 'beta', 'y': 'y', 'buffer_max': 'buffer_max', });
lyr_pourqgis2web_2.set('fieldAliases', {'Numero': 'Numero', 'Nom': 'Nom', 'Mohafazat': 'Mohafazat', 'Caza': 'Caza', 'CF': 'CF', 'Altitude': 'Altitude', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Period': 'Period', 'url': 'url', });
lyr_Bati_Bey_1.set('fieldImages', {'OBJECTID': 'Hidden', 'FID_CrBati': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'H_bati': 'TextEdit', 'H_p': 'Hidden', 'beta': 'Hidden', 'y': 'Hidden', 'buffer_max': 'TextEdit', });
lyr_pourqgis2web_2.set('fieldImages', {'Numero': 'TextEdit', 'Nom': 'TextEdit', 'Mohafazat': 'TextEdit', 'Caza': 'TextEdit', 'CF': 'TextEdit', 'Altitude': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Period': 'TextEdit', 'url': 'TextEdit', });
lyr_Bati_Bey_1.set('fieldLabels', {'H_bati': 'inline label', 'buffer_max': 'inline label', });
lyr_pourqgis2web_2.set('fieldLabels', {'Numero': 'no label', 'Nom': 'no label', 'Mohafazat': 'no label', 'Caza': 'no label', 'CF': 'no label', 'Altitude': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Period': 'no label', 'url': 'no label', });
lyr_pourqgis2web_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});