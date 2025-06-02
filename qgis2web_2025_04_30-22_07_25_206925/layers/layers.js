var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'قائم شهر محدوده شهری',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> قائم شهر محدوده شهری'
            });
var format_hospital_2 = new ol.format.GeoJSON();
var features_hospital_2 = format_hospital_2.readFeatures(json_hospital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_2.addFeatures(features_hospital_2);
var lyr_hospital_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospital_2, 
                style: style_hospital_2,
                popuplayertitle: 'hospital',
                interactive: true,
                title: '<img src="styles/legend/hospital_2.png" /> hospital'
            });
var format_taxiandbus_3 = new ol.format.GeoJSON();
var features_taxiandbus_3 = format_taxiandbus_3.readFeatures(json_taxiandbus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taxiandbus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taxiandbus_3.addFeatures(features_taxiandbus_3);
var lyr_taxiandbus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taxiandbus_3, 
                style: style_taxiandbus_3,
                popuplayertitle: 'taxi and bus',
                interactive: true,
                title: '<img src="styles/legend/taxiandbus_3.png" /> taxi and bus'
            });
var format_atashneshani_4 = new ol.format.GeoJSON();
var features_atashneshani_4 = format_atashneshani_4.readFeatures(json_atashneshani_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atashneshani_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atashneshani_4.addFeatures(features_atashneshani_4);
var lyr_atashneshani_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atashneshani_4, 
                style: style_atashneshani_4,
                popuplayertitle: 'atashneshani',
                interactive: true,
                title: '<img src="styles/legend/atashneshani_4.png" /> atashneshani'
            });
var format_pompbenzin_5 = new ol.format.GeoJSON();
var features_pompbenzin_5 = format_pompbenzin_5.readFeatures(json_pompbenzin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pompbenzin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pompbenzin_5.addFeatures(features_pompbenzin_5);
var lyr_pompbenzin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pompbenzin_5, 
                style: style_pompbenzin_5,
                popuplayertitle: 'pomp benzin',
                interactive: true,
                title: '<img src="styles/legend/pompbenzin_5.png" /> pomp benzin'
            });
var format_bazar_6 = new ol.format.GeoJSON();
var features_bazar_6 = format_bazar_6.readFeatures(json_bazar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bazar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bazar_6.addFeatures(features_bazar_6);
var lyr_bazar_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bazar_6, 
                style: style_bazar_6,
                popuplayertitle: 'bazar',
                interactive: true,
                title: '<img src="styles/legend/bazar_6.png" /> bazar'
            });
var format_masjed_7 = new ol.format.GeoJSON();
var features_masjed_7 = format_masjed_7.readFeatures(json_masjed_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjed_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjed_7.addFeatures(features_masjed_7);
var lyr_masjed_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjed_7, 
                style: style_masjed_7,
                popuplayertitle: 'masjed',
                interactive: true,
                title: '<img src="styles/legend/masjed_7.png" /> masjed'
            });
var format_edarat_8 = new ol.format.GeoJSON();
var features_edarat_8 = format_edarat_8.readFeatures(json_edarat_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edarat_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edarat_8.addFeatures(features_edarat_8);
var lyr_edarat_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_edarat_8, 
                style: style_edarat_8,
                popuplayertitle: 'edarat',
                interactive: true,
                title: '<img src="styles/legend/edarat_8.png" /> edarat'
            });
var format_sinama_9 = new ol.format.GeoJSON();
var features_sinama_9 = format_sinama_9.readFeatures(json_sinama_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sinama_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sinama_9.addFeatures(features_sinama_9);
var lyr_sinama_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sinama_9, 
                style: style_sinama_9,
                popuplayertitle: 'sinama',
                interactive: true,
                title: '<img src="styles/legend/sinama_9.png" /> sinama'
            });
var format_school_10 = new ol.format.GeoJSON();
var features_school_10 = format_school_10.readFeatures(json_school_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_10.addFeatures(features_school_10);
var lyr_school_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_school_10, 
                style: style_school_10,
                popuplayertitle: 'school',
                interactive: true,
                title: '<img src="styles/legend/school_10.png" /> school'
            });
var format_ketabkhane_11 = new ol.format.GeoJSON();
var features_ketabkhane_11 = format_ketabkhane_11.readFeatures(json_ketabkhane_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ketabkhane_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ketabkhane_11.addFeatures(features_ketabkhane_11);
var lyr_ketabkhane_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ketabkhane_11, 
                style: style_ketabkhane_11,
                popuplayertitle: 'ketabkhane',
                interactive: true,
                title: '<img src="styles/legend/ketabkhane_11.png" /> ketabkhane'
            });
var format_parkvafazayesabz_12 = new ol.format.GeoJSON();
var features_parkvafazayesabz_12 = format_parkvafazayesabz_12.readFeatures(json_parkvafazayesabz_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkvafazayesabz_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkvafazayesabz_12.addFeatures(features_parkvafazayesabz_12);
var lyr_parkvafazayesabz_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkvafazayesabz_12, 
                style: style_parkvafazayesabz_12,
                popuplayertitle: 'park va fazaye sabz',
                interactive: true,
                title: '<img src="styles/legend/parkvafazayesabz_12.png" /> park va fazaye sabz'
            });
var format_parking_13 = new ol.format.GeoJSON();
var features_parking_13 = format_parking_13.readFeatures(json_parking_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parking_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parking_13.addFeatures(features_parking_13);
var lyr_parking_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parking_13, 
                style: style_parking_13,
                popuplayertitle: 'parking',
                interactive: true,
                title: '<img src="styles/legend/parking_13.png" /> parking'
            });
var format_meydanbar_14 = new ol.format.GeoJSON();
var features_meydanbar_14 = format_meydanbar_14.readFeatures(json_meydanbar_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meydanbar_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meydanbar_14.addFeatures(features_meydanbar_14);
var lyr_meydanbar_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_meydanbar_14, 
                style: style_meydanbar_14,
                popuplayertitle: 'meydan bar',
                interactive: true,
                title: '<img src="styles/legend/meydanbar_14.png" /> meydan bar'
            });
var format_daneshgah_15 = new ol.format.GeoJSON();
var features_daneshgah_15 = format_daneshgah_15.readFeatures(json_daneshgah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_daneshgah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_daneshgah_15.addFeatures(features_daneshgah_15);
var lyr_daneshgah_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_daneshgah_15, 
                style: style_daneshgah_15,
                popuplayertitle: 'daneshgah',
                interactive: true,
                title: '<img src="styles/legend/daneshgah_15.png" /> daneshgah'
            });
var format_gym_16 = new ol.format.GeoJSON();
var features_gym_16 = format_gym_16.readFeatures(json_gym_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gym_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gym_16.addFeatures(features_gym_16);
var lyr_gym_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gym_16, 
                style: style_gym_16,
                popuplayertitle: 'gym',
                interactive: true,
                title: '<img src="styles/legend/gym_16.png" /> gym'
            });
var format_bank_17 = new ol.format.GeoJSON();
var features_bank_17 = format_bank_17.readFeatures(json_bank_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bank_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bank_17.addFeatures(features_bank_17);
var lyr_bank_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bank_17, 
                style: style_bank_17,
                popuplayertitle: 'bank',
                interactive: true,
                title: '<img src="styles/legend/bank_17.png" /> bank'
            });
var format_helalahmar_18 = new ol.format.GeoJSON();
var features_helalahmar_18 = format_helalahmar_18.readFeatures(json_helalahmar_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_helalahmar_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helalahmar_18.addFeatures(features_helalahmar_18);
var lyr_helalahmar_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_helalahmar_18, 
                style: style_helalahmar_18,
                popuplayertitle: 'helal ahmar',
                interactive: true,
                title: '<img src="styles/legend/helalahmar_18.png" /> helal ahmar'
            });
var format_edareabvafazelab_19 = new ol.format.GeoJSON();
var features_edareabvafazelab_19 = format_edareabvafazelab_19.readFeatures(json_edareabvafazelab_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edareabvafazelab_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edareabvafazelab_19.addFeatures(features_edareabvafazelab_19);
var lyr_edareabvafazelab_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_edareabvafazelab_19, 
                style: style_edareabvafazelab_19,
                popuplayertitle: 'edare ab va fazelab',
                interactive: true,
                title: '<img src="styles/legend/edareabvafazelab_19.png" /> edare ab va fazelab'
            });
var format_police_20 = new ol.format.GeoJSON();
var features_police_20 = format_police_20.readFeatures(json_police_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_police_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_police_20.addFeatures(features_police_20);
var lyr_police_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_police_20, 
                style: style_police_20,
                popuplayertitle: 'police',
                interactive: true,
                title: '<img src="styles/legend/police_20.png" /> police'
            });
var format_mokhaberat_21 = new ol.format.GeoJSON();
var features_mokhaberat_21 = format_mokhaberat_21.readFeatures(json_mokhaberat_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mokhaberat_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mokhaberat_21.addFeatures(features_mokhaberat_21);
var lyr_mokhaberat_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mokhaberat_21, 
                style: style_mokhaberat_21,
                popuplayertitle: 'mokhaberat',
                interactive: true,
                title: '<img src="styles/legend/mokhaberat_21.png" /> mokhaberat'
            });
var format_edaremanabetabii_22 = new ol.format.GeoJSON();
var features_edaremanabetabii_22 = format_edaremanabetabii_22.readFeatures(json_edaremanabetabii_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edaremanabetabii_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edaremanabetabii_22.addFeatures(features_edaremanabetabii_22);
var lyr_edaremanabetabii_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_edaremanabetabii_22, 
                style: style_edaremanabetabii_22,
                popuplayertitle: 'edare manabe tabii',
                interactive: true,
                title: '<img src="styles/legend/edaremanabetabii_22.png" /> edare manabe tabii'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr_hospital_2.setVisible(true);lyr_taxiandbus_3.setVisible(true);lyr_atashneshani_4.setVisible(true);lyr_pompbenzin_5.setVisible(true);lyr_bazar_6.setVisible(true);lyr_masjed_7.setVisible(true);lyr_edarat_8.setVisible(true);lyr_sinama_9.setVisible(true);lyr_school_10.setVisible(true);lyr_ketabkhane_11.setVisible(true);lyr_parkvafazayesabz_12.setVisible(true);lyr_parking_13.setVisible(true);lyr_meydanbar_14.setVisible(true);lyr_daneshgah_15.setVisible(true);lyr_gym_16.setVisible(true);lyr_bank_17.setVisible(true);lyr_helalahmar_18.setVisible(true);lyr_edareabvafazelab_19.setVisible(true);lyr_police_20.setVisible(true);lyr_mokhaberat_21.setVisible(true);lyr_edaremanabetabii_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr_hospital_2,lyr_taxiandbus_3,lyr_atashneshani_4,lyr_pompbenzin_5,lyr_bazar_6,lyr_masjed_7,lyr_edarat_8,lyr_sinama_9,lyr_school_10,lyr_ketabkhane_11,lyr_parkvafazayesabz_12,lyr_parking_13,lyr_meydanbar_14,lyr_daneshgah_15,lyr_gym_16,lyr_bank_17,lyr_helalahmar_18,lyr_edareabvafazelab_19,lyr_police_20,lyr_mokhaberat_21,lyr_edaremanabetabii_22];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Province_C': 'Province_C', 'Region_Typ': 'Region_Typ', 'Region_Nam': 'Region_Nam', 'Region_Top': 'Region_Top', 'Region_Eng': 'Region_Eng', 'Center_Nam': 'Center_Nam', 'Center_Top': 'Center_Top', 'Center_Eng': 'Center_Eng', 'Province_T': 'Province_T', 'Province_N': 'Province_N', 'Province_1': 'Province_1', 'Province_E': 'Province_E', 'County_Cod': 'County_Cod', 'County_Typ': 'County_Typ', 'County_Nam': 'County_Nam', 'County_Top': 'County_Top', 'County_Eng': 'County_Eng', 'District_C': 'District_C', 'District_T': 'District_T', 'District_N': 'District_N', 'District_1': 'District_1', 'District_E': 'District_E', 'Rural_Code': 'Rural_Code', 'Rural_Type': 'Rural_Type', 'Rural_Name': 'Rural_Name', 'Rural_Topo': 'Rural_Topo', 'Rural_Engl': 'Rural_Engl', 'Code': 'Code', 'Region_Cod': 'Region_Cod', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Type': 'Type', 'Type_Des': 'Type_Des', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_2': 'Shape_Ar_2', });
lyr_hospital_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_taxiandbus_3.set('fieldAliases', {'name': 'name', });
lyr_atashneshani_4.set('fieldAliases', {'name': 'name', });
lyr_pompbenzin_5.set('fieldAliases', {'name': 'name', });
lyr_bazar_6.set('fieldAliases', {'name': 'name', });
lyr_masjed_7.set('fieldAliases', {'name': 'name', });
lyr_edarat_8.set('fieldAliases', {'name': 'name', });
lyr_sinama_9.set('fieldAliases', {'name': 'name', });
lyr_school_10.set('fieldAliases', {'name': 'name', });
lyr_ketabkhane_11.set('fieldAliases', {'name': 'name', });
lyr_parkvafazayesabz_12.set('fieldAliases', {'name': 'name', });
lyr_parking_13.set('fieldAliases', {'name': 'name', });
lyr_meydanbar_14.set('fieldAliases', {'name': 'name', });
lyr_daneshgah_15.set('fieldAliases', {'name': 'name', });
lyr_gym_16.set('fieldAliases', {'name': 'name', });
lyr_bank_17.set('fieldAliases', {'name': 'name', });
lyr_helalahmar_18.set('fieldAliases', {'name': 'name', });
lyr_edareabvafazelab_19.set('fieldAliases', {'name': 'name', });
lyr_police_20.set('fieldAliases', {'name': 'name', });
lyr_mokhaberat_21.set('fieldAliases', {'name': 'name', });
lyr_edaremanabetabii_22.set('fieldAliases', {'name': 'name', });
lyr__1.set('fieldImages', {'OBJECTID': '', 'Province_C': '', 'Region_Typ': '', 'Region_Nam': '', 'Region_Top': '', 'Region_Eng': '', 'Center_Nam': '', 'Center_Top': '', 'Center_Eng': '', 'Province_T': '', 'Province_N': '', 'Province_1': '', 'Province_E': '', 'County_Cod': '', 'County_Typ': '', 'County_Nam': '', 'County_Top': '', 'County_Eng': '', 'District_C': '', 'District_T': '', 'District_N': '', 'District_1': '', 'District_E': '', 'Rural_Code': '', 'Rural_Type': '', 'Rural_Name': '', 'Rural_Topo': '', 'Rural_Engl': '', 'Code': '', 'Region_Cod': '', 'Shape_Leng': '', 'Shape_Area': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'Type': '', 'Type_Des': '', 'Shape_Le_2': '', 'Shape_Ar_2': '', });
lyr_hospital_2.set('fieldImages', {'id': '', 'name': '', });
lyr_taxiandbus_3.set('fieldImages', {'name': '', });
lyr_atashneshani_4.set('fieldImages', {'name': '', });
lyr_pompbenzin_5.set('fieldImages', {'name': '', });
lyr_bazar_6.set('fieldImages', {'name': '', });
lyr_masjed_7.set('fieldImages', {'name': '', });
lyr_edarat_8.set('fieldImages', {'name': '', });
lyr_sinama_9.set('fieldImages', {'name': '', });
lyr_school_10.set('fieldImages', {'name': '', });
lyr_ketabkhane_11.set('fieldImages', {'name': '', });
lyr_parkvafazayesabz_12.set('fieldImages', {'name': '', });
lyr_parking_13.set('fieldImages', {'name': '', });
lyr_meydanbar_14.set('fieldImages', {'name': '', });
lyr_daneshgah_15.set('fieldImages', {'name': '', });
lyr_gym_16.set('fieldImages', {'name': '', });
lyr_bank_17.set('fieldImages', {'name': '', });
lyr_helalahmar_18.set('fieldImages', {'name': '', });
lyr_edareabvafazelab_19.set('fieldImages', {'name': '', });
lyr_police_20.set('fieldImages', {'name': '', });
lyr_mokhaberat_21.set('fieldImages', {'name': '', });
lyr_edaremanabetabii_22.set('fieldImages', {'name': '', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'Province_C': 'no label', 'Region_Typ': 'no label', 'Region_Nam': 'no label', 'Region_Top': 'no label', 'Region_Eng': 'no label', 'Center_Nam': 'no label', 'Center_Top': 'no label', 'Center_Eng': 'no label', 'Province_T': 'no label', 'Province_N': 'no label', 'Province_1': 'no label', 'Province_E': 'no label', 'County_Cod': 'no label', 'County_Typ': 'no label', 'County_Nam': 'no label', 'County_Top': 'no label', 'County_Eng': 'no label', 'District_C': 'no label', 'District_T': 'no label', 'District_N': 'no label', 'District_1': 'no label', 'District_E': 'no label', 'Rural_Code': 'no label', 'Rural_Type': 'no label', 'Rural_Name': 'no label', 'Rural_Topo': 'no label', 'Rural_Engl': 'no label', 'Code': 'no label', 'Region_Cod': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'Type': 'no label', 'Type_Des': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_2': 'no label', });
lyr_hospital_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_taxiandbus_3.set('fieldLabels', {'name': 'no label', });
lyr_atashneshani_4.set('fieldLabels', {'name': 'no label', });
lyr_pompbenzin_5.set('fieldLabels', {'name': 'no label', });
lyr_bazar_6.set('fieldLabels', {'name': 'no label', });
lyr_masjed_7.set('fieldLabels', {'name': 'no label', });
lyr_edarat_8.set('fieldLabels', {'name': 'no label', });
lyr_sinama_9.set('fieldLabels', {'name': 'no label', });
lyr_school_10.set('fieldLabels', {'name': 'no label', });
lyr_ketabkhane_11.set('fieldLabels', {'name': 'no label', });
lyr_parkvafazayesabz_12.set('fieldLabels', {'name': 'no label', });
lyr_parking_13.set('fieldLabels', {'name': 'no label', });
lyr_meydanbar_14.set('fieldLabels', {'name': 'no label', });
lyr_daneshgah_15.set('fieldLabels', {'name': 'no label', });
lyr_gym_16.set('fieldLabels', {'name': 'no label', });
lyr_bank_17.set('fieldLabels', {'name': 'no label', });
lyr_helalahmar_18.set('fieldLabels', {'name': 'no label', });
lyr_edareabvafazelab_19.set('fieldLabels', {'name': 'no label', });
lyr_police_20.set('fieldLabels', {'name': 'no label', });
lyr_mokhaberat_21.set('fieldLabels', {'name': 'no label', });
lyr_edaremanabetabii_22.set('fieldLabels', {'name': 'no label', });
lyr_edaremanabetabii_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});