var wms_layers = [];

var format_carta_sintesi_geo_0 = new ol.format.GeoJSON();
var features_carta_sintesi_geo_0 = format_carta_sintesi_geo_0.readFeatures(json_carta_sintesi_geo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carta_sintesi_geo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carta_sintesi_geo_0.addFeatures(features_carta_sintesi_geo_0);
var lyr_carta_sintesi_geo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carta_sintesi_geo_0, 
                style: style_carta_sintesi_geo_0,
                popuplayertitle: "carta_sintesi_geo",
                interactive: true,
    title: 'carta_sintesi_geo<br />\
    <img src="styles/legend/carta_sintesi_geo_0_0.png" /> PARCHI<br />\
    <img src="styles/legend/carta_sintesi_geo_0_1.png" /> FIUMI<br />\
    <img src="styles/legend/carta_sintesi_geo_0_2.png" /> ISOLATI<br />\
    <img src="styles/legend/carta_sintesi_geo_0_3.png" /> PASSERELLE<br />'
        });
var format_auroraLayer_1 = new ol.format.GeoJSON();
var features_auroraLayer_1 = format_auroraLayer_1.readFeatures(json_auroraLayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_auroraLayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_auroraLayer_1.addFeatures(features_auroraLayer_1);
var lyr_auroraLayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_auroraLayer_1, 
                style: style_auroraLayer_1,
                popuplayertitle: "auroraLayer",
                interactive: false,
                title: '<img src="styles/legend/auroraLayer_1.png" /> auroraLayer'
            });
var format_gentrificationBuildings_2 = new ol.format.GeoJSON();
var features_gentrificationBuildings_2 = format_gentrificationBuildings_2.readFeatures(json_gentrificationBuildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gentrificationBuildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gentrificationBuildings_2.addFeatures(features_gentrificationBuildings_2);
var lyr_gentrificationBuildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gentrificationBuildings_2, 
                style: style_gentrificationBuildings_2,
                popuplayertitle: "gentrificationBuildings",
                interactive: true,
                title: '<img src="styles/legend/gentrificationBuildings_2.png" /> gentrificationBuildings'
            });
var format_defeatedSpaces_3 = new ol.format.GeoJSON();
var features_defeatedSpaces_3 = format_defeatedSpaces_3.readFeatures(json_defeatedSpaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_defeatedSpaces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_defeatedSpaces_3.addFeatures(features_defeatedSpaces_3);
var lyr_defeatedSpaces_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_defeatedSpaces_3, 
                style: style_defeatedSpaces_3,
                popuplayertitle: "defeatedSpaces",
                interactive: true,
                title: '<img src="styles/legend/defeatedSpaces_3.png" /> defeatedSpaces'
            });
var format_ex_quartieri_4 = new ol.format.GeoJSON();
var features_ex_quartieri_4 = format_ex_quartieri_4.readFeatures(json_ex_quartieri_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ex_quartieri_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ex_quartieri_4.addFeatures(features_ex_quartieri_4);
var lyr_ex_quartieri_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ex_quartieri_4, 
                style: style_ex_quartieri_4,
                popuplayertitle: "ex_quartieri",
                interactive: false,
                title: '<img src="styles/legend/ex_quartieri_4.png" /> ex_quartieri'
            });

lyr_carta_sintesi_geo_0.setVisible(true);lyr_auroraLayer_1.setVisible(true);lyr_gentrificationBuildings_2.setVisible(true);lyr_defeatedSpaces_3.setVisible(true);lyr_ex_quartieri_4.setVisible(true);
var layersList = [lyr_carta_sintesi_geo_0,lyr_auroraLayer_1,lyr_gentrificationBuildings_2,lyr_defeatedSpaces_3,lyr_ex_quartieri_4];
lyr_carta_sintesi_geo_0.set('fieldAliases', {'Layer': 'Layer', });
lyr_auroraLayer_1.set('fieldAliases', {'Name': 'Name', });
lyr_gentrificationBuildings_2.set('fieldAliases', {'Name': 'Name', 'Location': 'Location', 'Date': 'Conquer', 'Source': 'More info', });
lyr_defeatedSpaces_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Date': 'Defeat', 'Doc': 'More info', });
lyr_ex_quartieri_4.set('fieldAliases', {'IDQUART': 'IDQUART', 'DESCR': 'DESCR', });
lyr_carta_sintesi_geo_0.set('fieldImages', {'Layer': 'Hidden', });
lyr_auroraLayer_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_gentrificationBuildings_2.set('fieldImages', {'Name': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'Source': 'ExternalResource', });
lyr_defeatedSpaces_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Doc': 'ExternalResource', });
lyr_ex_quartieri_4.set('fieldImages', {'IDQUART': 'Range', 'DESCR': 'TextEdit', });
lyr_carta_sintesi_geo_0.set('fieldLabels', {});
lyr_auroraLayer_1.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_gentrificationBuildings_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Location': 'hidden field', 'Date': 'inline label - visible with data', 'Source': 'inline label - visible with data', });
lyr_defeatedSpaces_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Doc': 'inline label - visible with data', });
lyr_ex_quartieri_4.set('fieldLabels', {'IDQUART': 'no label', 'DESCR': 'no label', });
lyr_ex_quartieri_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});