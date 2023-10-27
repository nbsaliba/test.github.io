var wms_layers = [];

var format_Lbn_admbnda_L1_0 = new ol.format.GeoJSON();
var features_Lbn_admbnda_L1_0 = format_Lbn_admbnda_L1_0.readFeatures(json_Lbn_admbnda_L1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lbn_admbnda_L1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lbn_admbnda_L1_0.addFeatures(features_Lbn_admbnda_L1_0);
var lyr_Lbn_admbnda_L1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lbn_admbnda_L1_0, 
                style: style_Lbn_admbnda_L1_0,
                interactive: false,
                title: '<img src="styles/legend/Lbn_admbnda_L1_0.png" /> Lbn_admbnda_L1'
            });
var format_Niveau1_1 = new ol.format.GeoJSON();
var features_Niveau1_1 = format_Niveau1_1.readFeatures(json_Niveau1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau1_1.addFeatures(features_Niveau1_1);
var lyr_Niveau1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Niveau1_1, 
                style: style_Niveau1_1,
                interactive: true,
                title: '<img src="styles/legend/Niveau1_1.png" /> Niveau1'
            });
var format_PCI_Lebanon_2 = new ol.format.GeoJSON();
var features_PCI_Lebanon_2 = format_PCI_Lebanon_2.readFeatures(json_PCI_Lebanon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCI_Lebanon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCI_Lebanon_2.addFeatures(features_PCI_Lebanon_2);
var lyr_PCI_Lebanon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCI_Lebanon_2,
maxResolution:28004.466152261964,
 minResolution:140.0223307613098,

                style: style_PCI_Lebanon_2,
                interactive: true,
                title: '<img src="styles/legend/PCI_Lebanon_2.png" /> PCI_Lebanon'
            });
var format_Lbn_admbnda_L2_3 = new ol.format.GeoJSON();
var features_Lbn_admbnda_L2_3 = format_Lbn_admbnda_L2_3.readFeatures(json_Lbn_admbnda_L2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lbn_admbnda_L2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lbn_admbnda_L2_3.addFeatures(features_Lbn_admbnda_L2_3);
var lyr_Lbn_admbnda_L2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lbn_admbnda_L2_3,
maxResolution:140.0223307613098,
 minResolution:0.00028004466152261963,

                style: style_Lbn_admbnda_L2_3,
                interactive: false,
    title: 'Lbn_admbnda_L2<br />\
    <img src="styles/legend/Lbn_admbnda_L2_3_0.png" /> <br />\
    <img src="styles/legend/Lbn_admbnda_L2_3_1.png" /> <br />'
        });
var format_Niveau2_4 = new ol.format.GeoJSON();
var features_Niveau2_4 = format_Niveau2_4.readFeatures(json_Niveau2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau2_4.addFeatures(features_Niveau2_4);
var lyr_Niveau2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Niveau2_4,
maxResolution:140.0223307613098,
 minResolution:0.00028004466152261963,

                style: style_Niveau2_4,
                interactive: true,
                title: '<img src="styles/legend/Niveau2_4.png" /> Niveau2'
            });

lyr_Lbn_admbnda_L1_0.setVisible(true);lyr_Niveau1_1.setVisible(true);lyr_PCI_Lebanon_2.setVisible(true);lyr_Lbn_admbnda_L2_3.setVisible(true);lyr_Niveau2_4.setVisible(true);
var layersList = [lyr_Lbn_admbnda_L1_0,lyr_Niveau1_1,lyr_PCI_Lebanon_2,lyr_Lbn_admbnda_L2_3,lyr_Niveau2_4];
lyr_Lbn_admbnda_L1_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Na_1': 'admin0Na_1', 'admin0Pcod': 'admin0Pcod', 'admin0RefN': 'admin0RefN', 'admin0AltN': 'admin0AltN', 'admin0Al_1': 'admin0Al_1', 'admin0Al_2': 'admin0Al_2', 'admin0Al_3': 'admin0Al_3', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'PCI_All': 'PCI_All', 'PCI_Level': 'PCI_Level', });
lyr_Niveau1_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name_PCI': 'Name_PCI', 'Level': 'Level', 'Location': 'Location', 'Code_PCI': 'Code_PCI', 'Category': 'Category', });
lyr_PCI_Lebanon_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name_PCI': 'Name_PCI', 'Level': 'Level', 'Location': 'Location', 'Code_PCI': 'Code_PCI', 'Category': 'Category', });
lyr_Lbn_admbnda_L2_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'admin1Name': 'admin1Name', 'admin1Na_1': 'admin1Na_1', 'admin1Pcod': 'admin1Pcod', 'admin1RefN': 'admin1RefN', 'admin1AltN': 'admin1AltN', 'admin1Al_1': 'admin1Al_1', 'admin1Al_2': 'admin1Al_2', 'admin1Al_3': 'admin1Al_3', 'admin0Name': 'admin0Name', 'admin0Na_1': 'admin0Na_1', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'PCI_All': 'PCI_All', 'PCI_Level': 'PCI_Level', });
lyr_Niveau2_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin1Name': 'admin1Name', 'admin1Na_1': 'admin1Na_1', 'admin1Pcod': 'admin1Pcod', 'admin1RefN': 'admin1RefN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name_PCI': 'Name_PCI', 'Level': 'Level', 'Location': 'Location', 'Code_PCI': 'Code_PCI', 'Category': 'Category', 'Descriptio': 'Descriptio', });
lyr_Lbn_admbnda_L1_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Na_1': 'TextEdit', 'admin0Pcod': 'TextEdit', 'admin0RefN': 'TextEdit', 'admin0AltN': 'TextEdit', 'admin0Al_1': 'TextEdit', 'admin0Al_2': 'TextEdit', 'admin0Al_3': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'PCI_All': 'Range', 'PCI_Level': 'Range', });
lyr_Niveau1_1.set('fieldImages', {'OBJECTID': 'Hidden', 'admin0Name': 'Hidden', 'admin0Pcod': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Name_PCI': 'TextEdit', 'Level': 'Range', 'Location': 'TextEdit', 'Code_PCI': 'Range', 'Category': 'TextEdit', });
lyr_PCI_Lebanon_2.set('fieldImages', {'OBJECTID': 'Range', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name_PCI': 'TextEdit', 'Level': 'Range', 'Location': 'TextEdit', 'Code_PCI': 'Range', 'Category': 'TextEdit', });
lyr_Lbn_admbnda_L2_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Na_1': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin1RefN': 'TextEdit', 'admin1AltN': 'TextEdit', 'admin1Al_1': 'TextEdit', 'admin1Al_2': 'TextEdit', 'admin1Al_3': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Na_1': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'PCI_All': 'TextEdit', 'PCI_Level': 'TextEdit', });
lyr_Niveau2_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Na_1': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin1RefN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name_PCI': 'TextEdit', 'Level': 'Range', 'Location': 'TextEdit', 'Code_PCI': 'Range', 'Category': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_Lbn_admbnda_L1_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'admin0Name': 'no label', 'admin0Na_1': 'no label', 'admin0Pcod': 'no label', 'admin0RefN': 'no label', 'admin0AltN': 'no label', 'admin0Al_1': 'no label', 'admin0Al_2': 'no label', 'admin0Al_3': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'PCI_All': 'no label', 'PCI_Level': 'no label', });
lyr_Niveau1_1.set('fieldLabels', {'Name_PCI': 'inline label', 'Level': 'inline label', 'Location': 'inline label', 'Code_PCI': 'inline label', 'Category': 'inline label', });
lyr_PCI_Lebanon_2.set('fieldLabels', {'OBJECTID': 'inline label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Name_PCI': 'inline label', 'Level': 'no label', 'Location': 'no label', 'Code_PCI': 'no label', 'Category': 'no label', });
lyr_Lbn_admbnda_L2_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'admin1Name': 'no label', 'admin1Na_1': 'no label', 'admin1Pcod': 'no label', 'admin1RefN': 'no label', 'admin1AltN': 'no label', 'admin1Al_1': 'no label', 'admin1Al_2': 'no label', 'admin1Al_3': 'no label', 'admin0Name': 'no label', 'admin0Na_1': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'PCI_All': 'no label', 'PCI_Level': 'no label', });
lyr_Niveau2_4.set('fieldLabels', {'OBJECTID': 'inline label', 'admin1Name': 'no label', 'admin1Na_1': 'no label', 'admin1Pcod': 'no label', 'admin1RefN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Name_PCI': 'no label', 'Level': 'no label', 'Location': 'no label', 'Code_PCI': 'no label', 'Category': 'no label', 'Descriptio': 'no label', });
lyr_Niveau2_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});