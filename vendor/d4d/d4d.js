var d4d = (function () {
'use strict';

var country_dict = {"CIV":"Cote d'Ivoire","CUW":"CuraÃƒÆ’Ã‚Â§ao","STP":"Sao Tome and Principe","ASM":"American Samoa","AUS":"Australia","BRN":"Brunei Darussalam","CHN":"China","FJI":"Fiji","FSM":"Micronesia, Fed. Sts.","GUM":"Guam","HKG":"Hong Kong SAR, China","IDN":"Indonesia","JPN":"Japan","KHM":"Cambodia","KIR":"Kiribati","KOR":"Korea, Rep.","LAO":"Lao PDR","MAC":"Macao SAR, China","MHL":"Marshall Islands","MMR":"Myanmar","MNG":"Mongolia","MNP":"Northern Mariana Islands","MYS":"Malaysia","NCL":"New Caledonia","NZL":"New Zealand","PHL":"Philippines","PLW":"Palau","PNG":"Papua New Guinea","PRK":"Korea, Dem. Rep.","PYF":"French Polynesia","SGP":"Singapore","SLB":"Solomon Islands","THA":"Thailand","TLS":"Timor-Leste","TON":"Tonga","TUV":"Tuvalu","TWN":"Taiwan, China","VNM":"Vietnam","VUT":"Vanuatu","WSM":"Samoa","ALB":"Albania","AND":"Andorra","ARM":"Armenia","AUT":"Austria","AZE":"Azerbaijan","BEL":"Belgium","BGR":"Bulgaria","BIH":"Bosnia and Herzegovina","BLR":"Belarus","CHE":"Switzerland","CHI":"Channel Islands","CYP":"Cyprus","CZE":"Czech Republic","DEU":"Germany","DNK":"Denmark","ESP":"Spain","EST":"Estonia","FIN":"Finland","FRA":"France","FRO":"Faeroe Islands","GBR":"United Kingdom","GEO":"Georgia","GRC":"Greece","GRL":"Greenland","HRV":"Croatia","HUN":"Hungary","IMN":"Isle of Man","IRL":"Ireland","ISL":"Iceland","ITA":"Italy","KAZ":"Kazakhstan","KGZ":"Kyrgyz Republic","LIE":"Liechtenstein","LTU":"Lithuania","LUX":"Luxembourg","LVA":"Latvia","MCO":"Monaco","MDA":"Moldova","MKD":"Macedonia, FYR","MNE":"Montenegro","NLD":"Netherlands","NOR":"Norway","POL":"Poland","PRT":"Portugal","ROU":"Romania","RUS":"Russian Federation","SMR":"San Marino","SRB":"Serbia","SVK":"Slovak Republic","SVN":"Slovenia","SWE":"Sweden","TJK":"Tajikistan","TKM":"Turkmenistan","TUR":"Turkey","UKR":"Ukraine","UZB":"Uzbekistan","ABW":"Aruba","ARG":"Argentina","ATG":"Antigua and Barbuda","BHS":"Bahamas, The","BLZ":"Belize","BOL":"Bolivia","BRA":"Brazil","BRB":"Barbados","CHL":"Chile","COL":"Colombia","CRI":"Costa Rica","CUB":"Cuba","CYM":"Cayman Islands","DMA":"Dominica","DOM":"Dominican Republic","ECU":"Ecuador","GRD":"Grenada","GTM":"Guatemala","GUY":"Guyana","HND":"Honduras","HTI":"Haiti","JAM":"Jamaica","KNA":"St. Kitts and Nevis","LCA":"St. Lucia","MAF":"St. Martin (French part)","MEX":"Mexico","NIC":"Nicaragua","PAN":"Panama","PER":"Peru","PRI":"Puerto Rico","PRY":"Paraguay","SLV":"El Salvador","SUR":"Suriname","SXM":"Sint Maarten (Dutch part)","TCA":"Turks and Caicos Islands","TTO":"Trinidad and Tobago","URY":"Uruguay","VCT":"St. Vincent and the Grenadines","VEN":"Venezuela, RB","VIR":"Virgin Islands (U.S.)","ARE":"United Arab Emirates","BHR":"Bahrain","DJI":"Djibouti","DZA":"Algeria","EGY":"Egypt, Arab Rep.","IRN":"Iran, Islamic Rep.","IRQ":"Iraq","ISR":"Israel","JOR":"Jordan","KWT":"Kuwait","LBN":"Lebanon","LBY":"Libya","MAR":"Morocco","MLT":"Malta","OMN":"Oman","PSE":"West Bank and Gaza","QAT":"Qatar","SAU":"Saudi Arabia","SYR":"Syrian Arab Republic","TUN":"Tunisia","YEM":"Yemen, Rep.","BMU":"Bermuda","CAN":"Canada","USA":"United States","AFG":"Afghanistan","BGD":"Bangladesh","BTN":"Bhutan","IND":"India","LKA":"Sri Lanka","MDV":"Maldives","NPL":"Nepal","PAK":"Pakistan","AGO":"Angola","BDI":"Burundi","BEN":"Benin","BFA":"Burkina Faso","BWA":"Botswana","CAF":"Central African Republic","CMR":"Cameroon","COD":"Congo, Dem. Rep.","COG":"Congo, Rep.","COM":"Comoros","CPV":"Cabo Verde","ERI":"Eritrea","ETH":"Ethiopia","GAB":"Gabon","GHA":"Ghana","GIN":"Guinea","GMB":"Gambia, The","GNB":"Guinea-Bissau","GNQ":"Equatorial Guinea","KEN":"Kenya","LBR":"Liberia","LSO":"Lesotho","MDG":"Madagascar","MLI":"Mali","MOZ":"Mozambique","MRT":"Mauritania","MUS":"Mauritius","MWI":"Malawi","NAM":"Namibia","NER":"Niger","NGA":"Nigeria","RWA":"Rwanda","SDN":"Sudan","SEN":"Senegal","SLE":"Sierra Leone","SOM":"Somalia","SSD":"South Sudan","SWZ":"Swaziland","SYC":"Seychelles","TCD":"Chad","TGO":"Togo","TZA":"Tanzania","UGA":"Uganda","ZAF":"South Africa","ZMB":"Zambia","ZWE":"Zimbabwe"};
var region_dict = {"BMU":"HIC;OED","CAN":"HIC;OED","USA":"HIC;OED","ASM":"UMC;EAS","AUS":"HIC;EAS","BRN":"UMC;EAS","CHN":"UMC;EAS","FJI":"UMC;EAS","FSM":"LMC;EAS","GUM":"UMC;EAS","HKG":"UMC;EAS","IDN":"LMC;EAS","JPN":"HIC;EAS","KHM":"LIC;EAS","KIR":"LMC;EAS","KOR":"HIC;EAS","LAO":"LMC;EAS","MAC":"UMC;EAS","MHL":"UMC;EAS","MMR":"LMC;EAS","MNG":"UMC;EAS","MNP":"UMC;EAS","MYS":"UMC;EAS","NCL":"UMC;EAS","NZL":"HIC;EAS","PHL":"LMC;EAS","PLW":"UMC;EAS","PNG":"LMC;EAS","PRK":"LIC;EAS","PYF":"UMC;EAS","SGP":"UMC;EAS","SLB":"LMC;EAS","THA":"UMC;EAS","TLS":"LMC;EAS","TON":"UMC;EAS","TUV":"UMC;EAS","TWN":"UMC;EAS","VNM":"LMC;EAS","VUT":"LMC;EAS","WSM":"LMC;EAS","ALB":"UMC;ECS","AND":"UMC;ECS","ARM":"LMC;ECS","AUT":"HIC;ECS","AZE":"UMC;ECS","BEL":"HIC;ECS","BGR":"UMC;ECS","BIH":"UMC;ECS","BLR":"UMC;ECS","CHE":"HIC;ECS","CHI":"UMC;ECS","CYP":"UMC;ECS","CZE":"HIC;ECS","DEU":"HIC;ECS","DNK":"HIC;ECS","ESP":"HIC;ECS","EST":"HIC;ECS","FIN":"HIC;ECS","FRA":"HIC;ECS","FRO":"UMC;ECS","GBR":"HIC;ECS","GEO":"LMC;ECS","GRC":"HIC;ECS","GRL":"UMC;ECS","HRV":"UMC;ECS","HUN":"HIC;ECS","IMN":"UMC;ECS","IRL":"HIC;ECS","ISL":"HIC;ECS","ITA":"HIC;ECS","KAZ":"UMC;ECS","KGZ":"LMC;ECS","LIE":"UMC;ECS","LTU":"UMC;ECS","LUX":"HIC;ECS","LVA":"UMC;ECS","MCO":"UMC;ECS","MDA":"LMC;ECS","MKD":"UMC;ECS","MNE":"UMC;ECS","NLD":"HIC;ECS","NOR":"HIC;ECS","POL":"HIC;ECS","PRT":"HIC;ECS","ROU":"UMC;ECS","RUS":"UMC;ECS","SMR":"HIC;ECS","SRB":"UMC;ECS","SVK":"HIC;ECS","SVN":"HIC;ECS","SWE":"HIC;ECS","TJK":"LMC;ECS","TKM":"UMC;ECS","TUR":"UMC;ECS","UKR":"LMC;ECS","UZB":"LMC;ECS","ABW":"HIC;LCN","ARG":"HIC;LCN","ATG":"HIC;LCN","BHS":"HIC;LCN","BLZ":"UMC;LCN","BOL":"LMC;LCN","BRA":"UMC;LCN","BRB":"HIC;LCN","CHL":"HIC;LCN","COL":"UMC;LCN","CRI":"UMC;LCN","CUB":"UMC;LCN","CUW":"HIC;LCN","CYM":"HIC;LCN","DMA":"UMC;LCN","DOM":"UMC;LCN","ECU":"UMC;LCN","GRD":"UMC;LCN","GTM":"LMC;LCN","GUY":"LMC;LCN","HND":"LMC;LCN","HTI":"LIC;LCN","JAM":"UMC;LCN","KNA":"HIC;LCN","LCA":"UMC;LCN","MAF":"HIC;LCN","MEX":"UMC;LCN","NIC":"LMC;LCN","PAN":"UMC;LCN","PER":"UMC;LCN","PRI":"HIC;LCN","PRY":"UMC;LCN","SLV":"LMC;LCN","SUR":"UMC;LCN","SXM":"HIC;LCN","TCA":"HIC;LCN","TTO":"HIC;LCN","URY":"HIC;LCN","VCT":"UMC;LCN","VEN":"HIC;LCN","VIR":"HIC;LCN","ARE":"HIC;MEA","BHR":"HIC;MEA","DJI":"LMC;MEA","DZA":"UMC;MEA","EGY":"LMC;MEA","IRN":"UMC;MEA","IRQ":"UMC;MEA","ISR":"HIC;MEA","JOR":"UMC;MEA","KWT":"HIC;MEA","LBN":"UMC;MEA","LBY":"UMC;MEA","MAR":"LMC;MEA","MLT":"HIC;MEA","OMN":"HIC;MEA","PSE":"LMC;MEA","QAT":"HIC;MEA","SAU":"HIC;MEA","SYR":"LMC;MEA","TUN":"UMC;MEA","YEM":"LMC;MEA","AFG":"LIC;SAS","BGD":"LMC;SAS","BTN":"LMC;SAS","IND":"LMC;SAS","LKA":"LMC;SAS","MDV":"UMC;SAS","NPL":"LIC;SAS","PAK":"LMC;SAS","AGO":"UMC;SSA","BDI":"LIC;SSA","BEN":"LIC;SSA","BFA":"LIC;SSA","BWA":"UMC;SSA","CAF":"LIC;SSA","CIV":"LMC;SSA","CMR":"LMC;SSA","COD":"LIC;SSA","COG":"LMC;SSA","COM":"LIC;SSA","CPV":"LMC;SSA","ERI":"LIC;SSA","ETH":"LIC;SSA","GAB":"UMC;SSA","GHA":"LMC;SSA","GIN":"LIC;SSA","GMB":"LIC;SSA","GNB":"LIC;SSA","GNQ":"HIC;SSA","KEN":"LMC;SSA","LBR":"LIC;SSA","LSO":"LMC;SSA","MDG":"LIC;SSA","MLI":"LIC;SSA","MOZ":"LIC;SSA","MRT":"LMC;SSA","MUS":"UMC;SSA","MWI":"LIC;SSA","NAM":"UMC;SSA","NER":"LIC;SSA","NGA":"LMC;SSA","RWA":"LIC;SSA","SDN":"LMC;SSA","SEN":"LMC;SSA","SLE":"LIC;SSA","SOM":"LIC;SSA","SSD":"LIC;SSA","STP":"LMC;SSA","SWZ":"LMC;SSA","SYC":"HIC;SSA","TCD":"LIC;SSA","TGO":"LIC;SSA","TZA":"LIC;SSA","UGA":"LIC;SSA","ZAF":"UMC;SSA","ZMB":"LMC;SSA","ZWE":"LIC;SSA"};
var region_list = ["Africa","Arab World","Central Europe and the Baltics","East Asia & Pacific (all income levels)","East Asia & Pacific (developing only)","Europe & Central Asia","Europe & Central Asia (developing only)","European Union","Latin America & Caribbean (all income levels)","Latin America & Caribbean (developing only)","Least developed countries: UN classification","Middle East & North Africa (all income levels)","Middle East & North Africa","North America","South Asia","Sub-Saharan Africa (all income levels)","Sub-Saharan Africa (developing only)","Sub-Saharan Africa (excluding high income)","Latin America & Caribbean","East Asia & Pacific","OECD members"];
var list_EAS = ["ASM","AUS","BRN","CHN","FJI","FSM","GUM","HKG","IDN","JPN","KHM","KIR","KOR","LAO","MAC","MHL","MMR","MNG","MNP","MYS","NCL","NZL","PHL","PLW","PNG","PRK","PYF","SGP","SLB","THA","TLS","TON","TUV","TWN","VNM","VUT","WSM"];
var list_ECS = ["ALB","AND","ARM","AUT","AZE","BEL","BGR","BIH","BLR","CHE","CYP","CZE","DEU","DNK","ESP","EST","FIN","FRA","FRO","GBR","GEO","GRC","GRL","HRV","HUN","IMN","IRL","ISL","ITA","KAZ","KGZ","LIE","LTU","LUX","LVA","MCO","MDA","MKD","MNE","NLD","NOR","POL","PRT","ROU","RUS","SMR","SRB","SVK","SVN","SWE","TJK","TKM","UKR","UZB"];
var list_LCN = ["ABW","ARG","ATG","BHS","BLZ","BOL","BRA","BRB","CHL","COL","CRI","CUB","CUW","CYM","DMA","DOM","ECU","GRD","GTM","GUY","HND","HTI","JAM","KNA","LCA","MAF","NIC","PAN","PER","PRI","PRY","SLV","SUR","SXM","TCA","TTO","URY","VCT","VEN","VIR"];
var list_MEA = ["ARE","BHR","IRN","IRQ","ISR","JOR","KWT","LBN","MLT","OMN","PSE","QAT","SAU","SYR","YEM","TUR"];
var list_OED = ["BMU","CAN","USA","MEX"];
var list_SAS = ["AFG","BGD","BTN","IND","LKA","MDV","NPL","PAK"];
var list_SSA = ["AGO","BDI","BEN","BFA","BWA","CAF","CIV","CMR","COD","COG","COM","CPV","ERI","ETH","GAB","GHA","GIN","GMB","GNB","GNQ","KEN","LBR","LSO","MDG","MLI","MOZ","MRT","MUS","MWI","NAM","NER","NGA","RWA","SDN","SEN","SLE","SOM","SSD","STP","SWZ","SYC","TCD","TGO","TZA","UGA","ZAF","ZMB","ZWE","TUN","DZA","LBY","MAR","EGY","DJI"];
var south_america = ["BRA","ARG","BOL","CHL","COL","ECU","GBR","GUY","PER","PRY","SUR","URY","VEN"];
var europe = ["DNK","AND","ALB","AUT","BIH","BEL","BGR","BLR","CHE","CYP","CZE","DEU","EST","ESP","FIN","FRO","FRA","GBR","GRC","HRV","HUN","IRL","ISL","ITA","LIE","LTU","LUX","LVA","MCO","MDA","MNE","MKD","MLT","NCL","NLD","NOR","POL","PRT","ROU","SRB","RUS","SWE","SVN","SVK","SMR","TUR","UKR","VAT"];
var central_america = ["HND","BLZ","CRI","GTM","NIC","PAN","SLV"];
var africa = ["UGA","NGA","STP","TZA","SLE","GNB","CPV","SYC","TUN","MDG","KEN","COD","MRT","DZA","ERI","GNQ","MUS","SEN","COM","ETH","CIV","GHA","ZMB","NAM","RWA","SXM","SOM","CMR","COG","ESH","BEN","BFA","TGO","NER","LBY","LBR","MWI","GMB","TCD","GAB","DJI","BDI","AGO","GIN","ZWE","ZAF","MOZ","SWZ","MLI","BWA","SDN","MAR","EGY","LSO","SSD","CAF"];
var asia = ["PHL","JPN","THA","IND","KOR","BGD","CHN","BHR","MMR","IDN","SGP","RUS","SHN","MYS","AZE","ARM","VNM","TJK","UZB","TLS","KHM","BTN","GEO","KAZ","TKM","MNG","LAO","PAK","BRN","AFG","PRK","NCL","TWN","NPL","LKA","KGZ"];
var oceania = ["IDN","PLW","SLB","AUS","NZL","NRU","TUV","PNG","MHL","FSM","VUT","MYS","FJI","PHL"];
var middle_east = ["SAU","BHR","TUR","OMN","IRN","YEM","KWT","EGY","ISR","JOR","IRQ","QAT","ARE","SYR","LBN","CYP","NCL"];
var north_america_no_central = ["GRL","LCA","UMI","USA","VIR","CAN","CUB","KNA","GRD","DMA","ATG","TTO","BRB","JAM","BHS","VCT","HTI","DOM","MEX","PRI"];
var common_ressources = {
	country_dict: country_dict,
	region_dict: region_dict,
	region_list: region_list,
	list_EAS: list_EAS,
	list_ECS: list_ECS,
	list_LCN: list_LCN,
	list_MEA: list_MEA,
	list_OED: list_OED,
	list_SAS: list_SAS,
	list_SSA: list_SSA,
	south_america: south_america,
	europe: europe,
	central_america: central_america,
	africa: africa,
	asia: asia,
	oceania: oceania,
	middle_east: middle_east,
	north_america_no_central: north_america_no_central
};

/**
 * Display a comparison between indicators, in the format of timeseries.
 * It uses Chart module from Highcharts.
 *
 * @param {String} container - Where should the dataviz be displayed ?
 * @param {Object} return_data - All the data from the parsing.
 * @param {String} credits - How should the dataviz be credited ? This will be interpreted as HTML.

 * @returns {Object} Highcharts.Chart  
 */

var display_comparison = function (container, return_data, credits) {
    return new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: container
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        credits: {
            enabled: false
        },
        colors: ['#bc456b', '#e2a1b5', '#355ca8', '#b7bee5'],
        title: {

            text: return_data.indicatorName_1 + ' <br> ' + return_data.indicatorName_2,
            x: -20,
            style: {
                "fontSize": "14px"
            }
        },
        subtitle: {
            useHTML: true, // to allow target blank
            text: credits,
            x: -20,
        },
        xAxis: {
            valueDecimals: 0,
            tickInterval: 1,
            categories: return_data.date,

        },
        yAxis: {
            title: {
                text: ""
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight: 'normal'
            }
        },
        tooltip: {
            valueSuffix: '',
            valueDecimals: 2
        },

        series: return_data.series,
    });





};

/**
 * Display a comparison between subnational area, on a map.
 * It uses Leaflet to display data.
 *
 * @param {String} container - Where should the dataviz be displayed ?
 * @param {Object} return_data - All the data from the parsing.
 * @param {String} credits - How should the dataviz be credited ? This will be interpreted as HTML.

 * @returns {Object} Highcharts.Chart  
 */


var display_infranational = function (container, return_data, credits) {
    if (map == undefined) {
        var map = L.map(container).setView([return_data.view[1], return_data.view[2]], return_data.view[3]);

    } else {
        map.remove();
        map = L.map(container).setView([return_data.view[1], return_data.view[2]], return_data.view[3]);

    }


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.light'
    }).addTo(map);

    var Indicator = return_data.json.features[0].properties.Indicator;

    var Max = 0;
    var Min = 100000;

    return_data.json.features.map(function(f) {
        if (f.properties.Value > Max) {
            Max = f.properties.Value;
        }
        if (f.properties.Value < Min) {
            Min = f.properties.Value;
        }
    });

    function getColor(d, Max, Min) {

        return d > Math.round(Min + (4 / 5) * (Max - Min)) ? '#092f47' :
            d > Math.round(Min + (3 / 5) * (Max - Min)) ? '#3e6b82' :
            d > Math.round(Min + (2 / 5) * (Max - Min)) ? '#50A1D8' :
            d > Math.round(Min + (1 / 5) * (Max - Min)) ? '#77abce' :
            d > Math.round(Min) ? '#90c3db' :
            '#E0E9F0';
    }

    function style(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.Value, Max, Min)
        };
    }


    // control that shows state info on hover
    var info = L.control();

    info.onAdd = function(map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };
    info.update = function(props) {
        this._div.innerHTML = (props ? '<h3>' + Indicator + '</h3>' + '<h4>' + props.CharacteristicLabel.substr(2, props.CharacteristicLabel.length) + '</h4>' + props.Value + ' %' + '<br><h3> Survey Year</h3><h4>' + props.SurveyYear + '</h4>' :
            Indicator);
    };

    info.addTo(map);

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties);
    }

    var geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }


    geojson = L.geoJson(return_data.json, {
        onEachFeature: onEachFeature,
        style: style
    }).addTo(map);


    var legend = L.control({
        position: 'bottomright'
    });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [Min, Math.round(Min + (1 / 5) * (Max - Min)), Math.round(Min + (2 / 5) * (Max - Min)), Math.round(Min + (3 / 5) * (Max - Min)), Math.round(Min + (4 / 5) * (Max - Min)), Math.round(Max)],
            labels = [],
            from, to;

        for (var i = 0; i < grades.length; i++) {
            from = grades[i];
            to = grades[i + 1];

            labels.push(
                '<i style="background:' + getColor(from + 1, Max, Min) + '"></i> ' +
                from + (to ? '&ndash;' + to : '+'));
        }

        div.innerHTML = labels.join('<br>');
        return div;
    };

    return map
};

/**
 * Display a regional map of one indicator.
 * It uses Chart module from Highmaps.
 *
 * @param {String} container - Where should the dataviz be displayed ?
 * @param {Object} return_data - All the data from the parsing.
 * @param {String} credits - How should the dataviz be credited ? This will be interpreted as HTML.

 * @returns {Object} Highcharts.Map  
 */

var display_regionalmap = function (container, return_data, API_params) {
    return new Highcharts.Map({
        chart: {
            renderTo: container
        },
        title: {
            text: return_data.ind_label
        },
        credits: {
            enabled: false,
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },
        tooltip: {
            shared: true,
            valuePrefix: '',
            valueSuffix: '',
            valueDecimals: 2
        },
        series: [{
            data: return_data.dataMAP,
            mapData: Highcharts.maps[return_data.map],
            joinBy: 'hc-key',
            name: return_data.ind_label,
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }]
    });

};

/**
 * Display a comparison between indicators, in the format of a spider.
 * It uses Chart module from Highcharts.
 *
 * @param {String} container - Where should the dataviz be displayed ?
 * @param {Object} return_data - All the data from the parsing.
 * @param {String} credits - How should the dataviz be credited ? This will be interpreted as HTML.

 * @returns {Object} Highcharts.Chart  
 */

var display_spider = function (container, return_data, credits) {
    return new Highcharts.Chart({
        chart: {
            renderTo: container,
            polar: true,
            type: 'line'
        },
        title: {
            text: '',
            x: 0,
            style: {
                "fontSize": "14px"
            }
        },
        credits: {
            enabled: false
        },
        subtitle: {
            useHTML: true,
            text: credits
        },

        xAxis: {
            categories: return_data.label,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            tickInterval: 1
        },
        tooltip: {
            shared: true,
            valuePrefix: '',
            valueSuffix: '',
            valueDecimals: 2
        },

        series: return_data.series
    });
};

// type 1 dataviz is an Highchart dataviz with line graph, comparison with regional unit, world. Possibility to add an optional second country

/**
 * Display a line chart of one indicator, in the format of timeserie.
 * A second country can be add.
 * It uses Chart module from Highcharts.
 *
 * @param {String} container - Where should the dataviz be displayed ?
 * @param {Object} return_data - All the data from the parsing.
 * @param {String} credits - How should the dataviz be credited ? This will be interpreted as HTML.

 * @returns {Object} Highcharts.Chart  
 */


var display_timeserie = function (container, return_data, credits) {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: container
        },
        colors: ['#6e9fc5', '#ffdf51', '#a6ca6d', '#ad46d6', '#f26a2e', '#00adef', '#f4bb90'],
        title: {
            text: return_data.indicatorName
        },
        credits: {
            enabled: false,
        },

        subtitle: {
            text: credits
        },
        xAxis: {
            categories: return_data.date, //.reverse() to have the min year on the left 
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
            }
        },
        tooltip: {
            valueDecimals: 2,
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
        },
        series: return_data.series
    });




    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: "'Open Sans', sans-serif"
            }

        }
    });

    return chart
};

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with DHS indicators.
 *
 * @param {url_array} is the array containing the necessary url(s) to make the API calls.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.
 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
  */

  var parse_dhs_comparison = function (url_array, API_params, common_ressources) {
  };

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url} is the url to make the API call.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.

 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
  */

var parse_dhs_infranational = function(url_array, API_params, common_ressources) {
    var deferred = $.Deferred();
    var iso2 = common_ressources.iso3toiso2[API_params['Country_Select']];

    $.getJSON(url_array[0], function(yearData) {
        var temp = yearData.features.length;
        console.log(iso2, yearData);
        if (yearData.features.length == 0) {
            return_data = {};
            return_data.json = { features: [], crs: { properties: { name: "ESPG:4326" }, type: 'name' } };
            return_data.view = [];
            return_data.year = 0;
            deferred.resolve(return_data);
        } else {
            if (yearData.features[0].geometry.coordinates.length === 0) {

                $.getJSON(url_array[0].slice(0, -22), function(yearData) {
                    var temp1 = yearData.features.length;
                    if (temp1 == 0) {
                        return_data = {};
                        return_data.json = { features: [], crs: { properties: { name: "ESPG:4326" }, type: 'name' } };
                        return_data.view = [];
                        return_data.year = 0;
                        deferred.resolve(return_data);
                    } else {
                        var surveyyear = yearData.features[temp1 - 1].properties.SurveyYear;
                        var apiURL = url_array[0].slice(0, -22) + "&surveyYear=" + surveyyear.toString();
                        var return_data = {};
                        $.getJSON(apiURL, function(returnData) {
                            return_data.json = returnData;
                            return_data.view = common_ressources.gps_dict[iso2].split(",");
                            return_data.year = surveyyear.toString();

                            deferred.resolve(return_data);

                        });

                    }
                });


            } else {
                var surveyyear = yearData.features[temp - 1].properties.SurveyYear;

                var apiURL = url_array[0] + "&surveyYear=" + surveyyear.toString();
                var return_data = {};
                $.getJSON(apiURL, function(returnData) {

                    return_data.json = returnData;
                    return_data.view = common_ressources.gps_dict[iso2].split(",");
                    return_data.year = surveyyear.toString();

                    deferred.resolve(return_data);

                });

            }
        }
    });

    return deferred.promise()
};

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url} is the url to make the API call.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.

 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
 */


var parse_dhs_regionalmap = function(url_array, API_params, common_ressources) {
    var deferred = $.Deferred();
    var cname = API_params['Country_Select'];
    $.getJSON(url_array[0], function(json) {

            var return_data = new Object;
            return_data.ind_label = json.Data[0].Indicator;

            // create empty array

            var data_jsonMAP = [];
            $.each(json.Data, function(i, value) {

                var iso2 = value.DHS_CountryCode;
                var isoLC = iso2.toLowerCase();
                if (isoLC == "ia") {
                    isoLC = "in";
                }
                if (isoLC == "bt") {
                    isoLC = "bw";
                }
                if (isoLC == "bu") {
                    isoLC = "bi";
                }
                if (isoLC == "kk") {
                    isoLC = "kz";
                }
                if (isoLC == "mb") {
                    isoLC = "md";
                }
                if (isoLC == "ek") {
                    isoLC = "gq";
                }
                if (isoLC == "nm") {
                    isoLC = "na";
                }
                if (isoLC == "dr") {
                    isoLC = "do";
                }
                data_jsonMAP.push('{"hc-key": "' + isoLC + '","value":' + value.Value + '}');
            });

            data_jsonMAP = data_jsonMAP.map(function(x) {
                return x.replace("undefined", "null")
            });



            return_data.dataMAP = JSON.parse('[' + data_jsonMAP + ']');

            if ($.inArray(cname, common_ressources.asia) != -1) {
                return_data.map = "custom/asia";
            }

            if ($.inArray(cname, common_ressources.africa) != -1) {
                return_data.map = "custom/africa";
            }

            if ($.inArray(cname, common_ressources.europe) != -1) {
                return_data.map = "custom/europe";
            }

            if ($.inArray(cname, common_ressources.oceania) != -1) {
                return_data.map = "custom/oceania";
            }

            if ($.inArray(cname, common_ressources.south_america) != -1) {
                return_data.map = "custom/south-america";
            }

            if ($.inArray(cname, common_ressources.north_america_no_central) != -1) {
                return_data.map = "custom/north-america-no-central";
            }

            if ($.inArray(cname, common_ressources.middle_east) != -1) {
                return_data.map = "custom/middle-east";
            }

            if ($.inArray(cname, common_ressources.central_america) != -1) {
                return_data.map = "custom/central-america";
            }

            deferred.resolve(return_data);
        });
        return deferred.promise()

    };

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url} is the url to make the API call.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.

 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
 */


var parse_dhs_timeserie = function(url_array, API_params, common_ressources) {
    var deferred = $.Deferred();
    var cname = common_ressources.country_dict[API_params['Country_Select']];
    var CnameExtra = common_ressources.country_dict[API_params['Country_SelectExtra']];

    $.getJSON(url_array[0], function(json) {
            var return_data = new Object;
            return_data.arrayCountry = [];
            return_data.arrayCountryExtra = [];
            return_data.date = [];


            $.each(json.Data, function(index, value) {

                var iso3 = common_ressources.iso2toiso3[value.DHS_CountryCode]; // get the country code from API
                if (value.CharacteristicLabel == "Total") { // in the API answer only  consider aggregated data
                    switch (iso3) {
                        case (API_params['Country_Select']):
                            return_data.arrayCountry.push(value.Value);
                            return_data.arrayCountryExtra.push(null);
                            break;
                        case (API_params['Country_SelectExtra']):
                            return_data.arrayCountry.push(null);
                            return_data.arrayCountryExtra.push(value.Value);
                            break;
                        default:
                            break;
                    }

                    return_data.date.push(value.SurveyYear);
                }
                return_data.indicatorName = value.Indicator;
            });




            // temporary array holds objects with position and sort-value
            var mapped = return_data.date.map(function(el, i) {
                return {
                    index: i,
                    date: el,
                    value_c: return_data.arrayCountry[i],
                    value_ce: return_data.arrayCountryExtra[i]
                };
            });

            // sorting the mapped array containing the reduced values
            mapped.sort(function(a, b) {
                if (a.date > b.date) {
                    return 1;
                }
                if (a.date < b.date) {
                    return -1;
                }
                return 0;
            });

            // container for the resulting order
            return_data.date = mapped.map(function(el) {
                return return_data.date[el.index];
            });
            return_data.arrayCountry = mapped.map(function(el) {
                return return_data.arrayCountry[el.index];
            });
            return_data.arrayCountryExtra = mapped.map(function(el) {
                return return_data.arrayCountryExtra[el.index];
            });


            for (var i = 0; i < return_data.date.length - 1; i++) {
                if (return_data.date[i + 1] == return_data.date[i]) {
                    return_data.date.splice(i + 1, 1);
                    switch (null) {
                        case (return_data.arrayCountry[i]):

                            return_data.arrayCountry[i] = return_data.arrayCountry[i + 1];
                            return_data.arrayCountry.splice(i + 1, 1);
                            return_data.arrayCountryExtra.splice(i + 1, 1);
                            break;
                        case (return_data.arrayCountryExtra[i]):
                            return_data.arrayCountryExtra[i] = return_data.arrayCountryExtra[i + 1];
                            return_data.arrayCountry.splice(i + 1, 1);
                            return_data.arrayCountryExtra.splice(i + 1, 1);
                            break;
                    }
                }
            }







            return_data.series = [{
                type: 'column',
                name: cname,
                data: return_data.arrayCountry,
                color: '#6e9fc5'
            }, {
                type: 'spline',
                name: cname + " (Trend)",
                data: return_data.arrayCountry,
                connectNulls: true,
                marker: {
                    lineWidth: 2,
                    lineColor: '#6e9fc5',
                    fillColor: 'white'
                },
                color: '#6e9fc5'
            }, {
                type: 'column',
                name: CnameExtra,
                data: return_data.arrayCountryExtra,
                color: '#a6ca6d'
            }, {
                type: 'spline',
                name: CnameExtra + " (Trend)",
                data: return_data.arrayCountryExtra,
                connectNulls: true,
                marker: {
                    lineWidth: 2,
                    lineColor: '#a6ca6d',
                    fillColor: 'white'
                },
                color: '#a6ca6d'
            }];

            deferred.resolve(return_data);

        });


        return deferred.promise()
    };

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url_array} is the array containing the necessary url(s) to make the API calls.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.
 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
  */

var parse_wdi_comparison = function (url_array, API_params, common_ressources) {
    var deferred = $.Deferred();
    var request_1 = $.Deferred();
    var request_2 = $.Deferred();
    var cname = common_ressources.country_dict[API_params['Country_Select']];


    var return_data = new Object;
    return_data.arrayRegion_1 = [];
    return_data.arrayCountry_1 = [];
    return_data.arrayRegion_2 = [];
    return_data.arrayCountry_2 = [];
    $.getJSON(url_array[0], function(json) {
        var date_1 = [];

        $.each(json[1], function(i, data) {
            switch (1) {
                case ($.inArray(data.country.value, common_ressources.region_list)> -1 ? 1 :-1):
                    return_data.region_name = data.country.value;
                    return_data.arrayRegion_1.push(parseFloat(data.value));
                    break;
                default:
                    return_data.arrayCountry_1.push(parseFloat(data.value));
                    break;

            }
            date_1.push(data.date);
            return_data.indicatorName_1 = data.indicator.value;

        });


        request_1.resolve(date_1);

    });

    $.getJSON(url_array[1], function(json) {
        var date_2 = [];

        $.each(json[1], function(i, data) {
            switch (1) {
                case ($.inArray(data.country.value, common_ressources.region_list)> -1 ? 1 :-1):
                    return_data.region_name = data.country.value;
                    return_data.arrayRegion_2.push(parseFloat(data.value));
                    break;
                default:
                    return_data.arrayCountry_2.push(parseFloat(data.value));
                    break;

            }
            date_2.push(data.date);
            return_data.indicatorName_2 = data.indicator.value;

        });



        request_2.resolve(date_2);

    });




    $.when(request_1, request_2).done(function(date_1, date_2) {
        return_data.date = date_1.reverse();

        return_data.series = [{
            name: cname + " - " + return_data.indicatorName_1,
            data: return_data.arrayCountry_1.reverse()
        }, {
            name: return_data.region_name + " - " + return_data.indicatorName_1,
            data: return_data.arrayRegion_1.reverse()
        }, {
            name: cname + " - " + return_data.indicatorName_2,
            data: return_data.arrayCountry_2.reverse()
        }, {
            name: return_data.region_name + " - " + return_data.indicatorName_2,
            data: return_data.arrayRegion_2.reverse()
        }];


        deferred.resolve(return_data);


    });

    return deferred.promise();

};

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url} is the url to make the API call.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.
 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
  */

var parse_wdi_regionalmap = function (url_array, API_params, common_ressources) {
        var deferred = $.Deferred();
        var cname = API_params['Country_Select'];
        $.getJSON(url_array[0], function(json) {
            // store indicator label
            var return_data = new Object;

            return_data.ind_label = json[1][0].indicator.value;
                // create empty array

            var data_jsonMAP = [];
            $.each(json[1], function(i, item) {
                var iso2 = item.country.id.toLowerCase();
                data_jsonMAP.push('{"hc-key": "' + iso2 + '","value":' + item.value + '}');
            });


            return_data.dataMAP = JSON.parse('[' + data_jsonMAP + ']');

            if ($.inArray(cname, common_ressources.asia) != -1) {
                return_data.map = "custom/asia";
            }

            if ($.inArray(cname, common_ressources.africa) != -1) {
                return_data.map = "custom/africa";
            }

            if ($.inArray(cname, common_ressources.europe) != -1) {
                return_data.map = "custom/europe";
            }

            if ($.inArray(cname, common_ressources.oceania) != -1) {
                return_data.map = "custom/oceania";
            }

            if ($.inArray(cname, common_ressources.south_america) != -1) {
                return_data.map = "custom/south-america";
            }

            if ($.inArray(cname, common_ressources.north_america_no_central) != -1) {
                return_data.map = "custom/north-america-no-central";
            }

            if ($.inArray(cname, common_ressources.middle_east) != -1) {
                return_data.map = "custom/middle-east";
            }

            if ($.inArray(cname, common_ressources.central_america) != -1) {
                return_data.map = "custom/central-america";
            }


            deferred.resolve(return_data);

        });

        return deferred.promise()
};

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url_array} is the url to make all necesseray API calls.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
* @param common_ressources dictionary with data useful to handle conversion.
 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
  */

var parse_wdi_spider = function (url_array, API_params, common_ressources) {
    var deferred = $.Deferred();
    var raw_data = new Object;
    var cname = common_ressources.country_dict[API_params['Country_Select']];


    function parse_wdi_4_each(data) {
        var raw = new Object;
        raw.label = data[0].indicator.value;

        raw.country = data.filter(item => item.country.value == cname).filter(item => item.value != null)[0];


        raw.region = data.filter(item => $.inArray(item.country.value, common_ressources.region_list) > -1);
        raw.region_label = raw.region[0].country.value;
        raw.region = raw.region.filter(item => item.value != null)[0];

        raw.income = data.filter(item => $.inArray(item.country.value, common_ressources.income_list) > -1);
        raw.income_label = raw.income[0].country.value;
        raw.income = raw.income.filter(item => item.value != null)[0];

        raw.world = data.filter(item => $.inArray(item.country.value, common_ressources.world_list) > -1).filter(item => item.value != null)[0];
        return raw


    }

    $.when.apply($, url_array.map(function(item) {
        return $.getJSON(item).then(function(data) {
            raw_data[data[1][0].indicator.id] = parse_wdi_4_each(data[1]);


        });
    })).then(function() {
        var return_data = new Object;
        return_data.label = [];
        return_data.arrayCountry = [];
        return_data.arrayRegion = [];
        return_data.arrayIncome = [];
        return_data.arrayWorld = [];
        Object.keys(raw_data).forEach(function(key, index) {
            return_data.label.push(raw_data[key].label);
            return_data.region_label = raw_data[key].region_label;
            return_data.income_label = raw_data[key].income_label;
            return_data.arrayCountry.push(typeof raw_data[key].country != "undefined" ? parseInt(raw_data[key].country.value) : null);
            return_data.arrayRegion.push(typeof raw_data[key].region != "undefined" ? parseInt(raw_data[key].region.value) : null);
            return_data.arrayIncome.push(typeof raw_data[key].income != "undefined" ? parseInt(raw_data[key].income.value) : null);
            return_data.arrayWorld.push(typeof raw_data[key].world != "undefined" ? parseInt(raw_data[key].world.value) : null);
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
        });

        return_data.series = [{
            name: cname,
            data: return_data.arrayCountry,
            color: '#83b3ea',
            pointPlacement: "on"
        }, {
            name: return_data.region_label,
            data: return_data.arrayRegion,
            color: '#4572A7'
        }, {
            name: return_data.income_label,
            data: return_data.arrayIncome,
            color: '#c3d69b'
        }, {
            name: 'World',
            data: return_data.arrayWorld,
            color: '#f4bb90',
            pointPlacement: 'on'
        }];
        deferred.resolve(return_data);

    });

    return deferred.promise()

};

/**
 * Prepare an objet return_data for display_comparison from a public API.
 * This function works with WDI indicators.
 *
 * @param {url} is the url to make the API call.
 * @param {API_params} dictionary with parameters needed for the API calls. API_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.

 * @returns {defered.promise()} delever an object (return_data) containing all information needed to create Highcharts object when all API calls are over. 
  */


var parse_wdi_timeserie = function (url_array, API_params, common_ressources) {
    var deferred = $.Deferred();
    var cname = common_ressources.country_dict[API_params['Country_Select']];
    var CnameExtra = common_ressources.country_dict[API_params['Country_SelectExtra']];


    $.getJSON(url_array[0], function(json) {

            var return_data = new Object;
            return_data.arrayRegion = [];
            return_data.arrayIncome = [];
            return_data.arrayWorld = [];
            return_data.arrayCountry = [];
            return_data.arrayCountryExtra = [];
            return_data.date = [];

            $.each(json[1], function(i, data) {

                switch (1) {
                    case ($.inArray(data.country.value, common_ressources.region_list)> -1 ? 1 :-1 ):
                        return_data.region_name = data.country.value;
                        return_data.arrayRegion.push(parseFloat(data.value));
                        break;
                    case ($.inArray(data.country.value, common_ressources.income_list)> -1 ? 1 :-1):
                        return_data.income_name = data.country.value;
                        return_data.arrayIncome.push(parseFloat(data.value));

                        break;
                    case ($.inArray(data.country.value, common_ressources.world_list)> -1 ? 1 :-1):
                        return_data.arrayWorld.push(parseFloat(data.value));

                        break;
                    default:
                        switch (data.country.value) {
                            case cname:
                                return_data.arrayCountry.push(parseFloat(data.value));
                                break;
                            case CnameExtra:
                                return_data.arrayCountryExtra.push(parseFloat(data.value));
                                break;
                            default:
                                break;
                        }
                }

                return_data.indicatorName = data.indicator.value;
                return_data.date.push(data.date);
                return_data.date.reverse();
            });

            return_data.series = [{
                name: cname,
                data: return_data.arrayCountry.reverse()
            }, {
                name: return_data.region_name,
                data: return_data.arrayRegion.reverse()
            }, {
                name: return_data.income_name,
                data: return_data.arrayIncome.reverse()
            }, {
                name: 'World',
                data: return_data.arrayWorld.reverse()
            }, {
                name: CnameExtra,
                data: return_data.arrayCountryExtra.reverse()
            }];
            deferred.resolve(return_data);
        });


    return deferred.promise()

};

/**
 * Prepare the url for an API call.
 * This function works with DHS indicators.
 *
 * @param {API_params} dictionary with parameters for api call. API_params should follow the syntax described in API documentation.
 * @param {viz_params} dictionary with parameters needed for the visualisation. viz_params should follow the syntax described in API documentation.
 * @returns {url_array} an array contaning all url neded for API calls. 
  */

var prepare_dhs = function (API_params, viz_params, common_ressources) {

    var isolist = "";

    //Get country
    isolist = isolist + common_ressources.iso3toiso2[API_params['Country_Select']];

    // Get second country
    isolist = isolist + (API_params['Country_SelectExtra'] != undefined ? ";" + common_ressources.iso3toiso2[API_params['Country_SelectExtra']] : "");

    // Other countries ?
    if (viz_params["neighbourg"] == true) {
        var isolist_iso2 = common_ressources["list_" + common_ressources.region_dict[API_params['Country_Select']].split(";")[1]].map(function (el) {
            return common_ressources.iso3toiso2[el]
        });
        isolist = isolist + ";" + String(isolist_iso2);
    }

    //subnational ? 
    var geometry = (viz_params["geometry"] == true ? "&returnGeometry=true&" : "");

    var breakdown = (viz_params["breakdown"] == true ? "&breakdown=subnational" : "");

    //need geojson ?
    var format = (viz_params["geojson"] == true ? "?f=geojson" : "?f=json");



    var url_array = API_params['Ind_Select'].map(function (indicator) {
        return "https://api.dhsprogram.com/rest/dhs/data/" + format + geometry + "&countryIds=" + isolist + "&indicatorIds=" + indicator + breakdown;
    });
    return url_array
};

/**
 * Prepare the url for an API call.
 * This function works with WDI indicators.
 *
 * @param {API_params} dictionary with parameters for api call. API_params should follow the syntax described in API documentation.
 * @param {viz_params} dictionary with parameters needed for the visualisation. viz_params should follow the syntax described in API documentation.
 * @param common_ressources dictionary with data useful to handle conversion.

 * @returns {url_array} an array contaning all url neded for API calls. 
  */

var prepare_wdi = function (API_params, viz_params, common_ressources) {

    var isolist ="";

    //Get country
    isolist = isolist + API_params['Country_Select'];

    // Get second country
    isolist = isolist + (API_params['Country_SelectExtra'] != undefined ?  ";" + API_params['Country_SelectExtra'] : "");

    // get region name from dictionary
    isolist = isolist + (viz_params["region"] == true ? ";"+common_ressources.region_dict[API_params['Country_Select']] : "");

    // Other countries ?
    if (viz_params["neighbourg"] == true ){
        var temp;
        var region_iso3 = ["EAS", "ECS", "LCN", "MEA", "OED", "SAS", "SSA"];
        for (var i = 0, len = region_iso3.length; i < len; i++) {
            if ($.inArray(API_params['Country_Select'], common_ressources["list_" + region_iso3[i]]) != -1) {
                temp = common_ressources["list_" + region_iso3[i]];
                break;
            }
        }
        isolist = isolist + ";"+String(temp).replace(/,/g, ';');
    }
    // World ? 
    isolist = isolist + (viz_params["world"] == true ? ";WLD" : "");


    // display is the amount of information retrieved from the API query 

    var display = isolist.length * ((API_params['end'] - API_params['start']) + 1);
    var url_array = API_params['Ind_Select'].map(function(indicator) {
        return "http://api.worldbank.org/countries/" + isolist+"/indicators/" + indicator + "?date=" + API_params['start'] + ":" + API_params['end'] + "&per_page=" + display + "&MRV=" + (display / isolist.length) + "&format=jsonP&prefix=?"
    });

    return url_array

};

var gps_dict = {
    "AL": "ALB,41.1533,20.1683,7",
    "AO": "AGO,-11.2027,17.8739,5",
    "AM": "ARM,40.0691,45.0382,7",
    "AZ": "AZE,40.1431,47.5769,7",
    "BD": "BGD,23.685,90.3563,7",
    "BJ": "BEN,9.30769,2.31583,6",
    "BO": "BOL,-16.2902,-63.5887,5",
    "BT": "BTN,27.5142,90.4336,8",
    "BR": "BRA,-14.235,-51.9253,4",
    "BF": "BFA,12.2383,-1.56159,6",
    "BU": "null,-32.87,26.12,6",
    "KH": "KHM,12.5657,104.991, 7",
    "CM": "CMR,7.36972,12.3547, 5",
    "CF": "CAF,6.61111,20.9394,6",
    "TD": "TCD,15.4542,18.7322,5",
    "CO": "COL,4.57087,-74.2973,5",
    "KM": "COM,-11.875,43.8722,8",
    "CG": "COG,-0.228021,15.8277,6",
    "CD": "COD,-4.03833,21.7587,5",
    "CI": "CIV,7.53999,-5.54708,6",
    "DR": "null,-32.87,26.12,7",
    "EC": "ECU,-1.83124,-78.1834,6",
    "EG": "EGY,26.8206,30.8025,5",
    "ES": "ESP,40.4637,-3.74922,6",
    "ER": "ERI,15.1794,39.7823,7",
    "ET": "ETH,9.145,40.4897,5",
    "GA": "GAB,-0.803689,11.6094,6",
    "GH": "GHA,7.94653,-1.02319,6",
    "GU": "GUM,13.4443,144.794,9",
    "GN": "GIN,9.94559,-9.69664,6",
    "GY": "GUY,4.86042,-58.9302,6",
    "HT": "HTI,18.9712,-72.2852,8",
    "HN": "HND,15.2,-86.2419,7",
    "IA": "null,-32.87,26.12,7",
    "ID": "IDN,-0.789275,113.921,4",
    "JO": "JOR,30.5852,36.2384,7",
    "KK": "null,-32.87,26.12,7",
    "KE": "KEN,-0.023559,37.9062,6",
    "KY": "CYM,19.5135,-80.567,9",
    "LS": "LSO,-29.61,28.2336,8",
    "LB": "LBN,33.8547,35.8623,8",
    "MD": "MDA,47.4116,28.3699,7",
    "MW": "MWI,-13.2543,34.3015,6",
    "MV": "MDV,3.20278,73.2207,7",
    "ML": "MLI,17.5707,-3.99617,5",
    "MR": "MRT,21.0079,-10.9408,5",
    "MX": "MEX,23.6345,-102.553,5",
    "MB": "null,-32.87,26.12,7",
    "MA": "MAR,31.7917,-7.09262,5",
    "MZ": "MOZ,-18.6657,35.5296,5",
    "NM": "null,-32.87,26.12,7",
    "NP": "NPL,28.3949,84.124,7",
    "NC": "NCL,-20.9043,165.618,7",
    "NI": "NIC,12.8654,-85.2072,7",
    "NG": "NGA,9.082,8.67528,6",
    "PK": "PAK,30.3753,69.3451,5",
    "PY": "PRY,-23.4425,-58.4438,6",
    "PE": "PER,-9.18997,-75.0152,5",
    "PH": "PHL,12.8797,121.774,5",
    "RW": "RWA,-1.94028,29.8739,8",
    "ST": "STP,0.18636,6.61308,8",
    "SN": "SEN,14.4974,-14.4524,7",
    "SL": "SLE,8.46056,-11.7799,7",
    "ZA": "ZAF,-30.5595,22.9375,5",
    "LK": "LKA,7.87305,80.7718,7",
    "SD": "SDN,12.8628,30.2176,5",
    "SZ": "SWZ,-26.5225,31.4659,8",
    "TJ": "TJK,38.861,71.2761,6",
    "TZ": "TZA,-6.36903,34.8888,5",
    "TH": "THA,15.87,100.993,5",
    "GM": "GMB,13.4432,-15.3101,8",
    "TL": "TLS,-8.87422,125.728,8",
    "TG": "TGO,8.61954,0.824782,7",
    "TT": "TTO,10.6918,-61.2225,8",
    "TN": "TUN,33.8869,9.5375,6",
    "TR": "TUR,38.9637,35.2433,6",
    "TM": "TKM,38.9697,59.5563,7",
    "UG": "UGA,1.37333,32.2903,7",
    "UA": "UKR,48.3794,31.1656,6",
    "UZ": "UZB,41.3775,64.5853,6",
    "VN": "VNM,14.0583,108.277,6",
    "YE": "YEM,15.5527,48.5164,6",
    "ZM": "ZMB,-13.1339,27.8493,6",
    "ZW": "ZWE,-19.0154,29.1549,6"
};

var income_list = ["High income", "High income: OECD", "High income: nonOECD", "Low income", "Middle income", "Lower middle income", "Upper middle income", "Low & middle income"];

var iso2toiso3 = {
    'AF': 'AFG',
    'AL': 'ALB',
    'AO': 'AGO',
    'AM': 'ARM',
    'AZ': 'AZE',
    'BD': 'BGD',
    'BJ': 'BEN',
    'BO': 'BOL',
    'BT': 'BTN',
    'BR': 'BRA',
    'BF': 'BFA',
    'NM': 'null',
    'KH': 'KHM',
    'CM': 'CMR',
    'CF': 'CAF',
    'TD': 'TCD',
    'CO': 'COL',
    'KM': 'COM',
    'CG': 'COG',
    'CD': 'COD',
    'CI': 'CIV',
    'EC': 'ECU',
    'EG': 'EGY',
    'ES': 'ESP',
    'ER': 'ERI',
    'ET': 'ETH',
    'GA': 'GAB',
    'GH': 'GHA',
    'GU': 'GUM',
    'GN': 'GIN',
    'GY': 'GUY',
    'HT': 'HTI',
    'HN': 'HND',
    'ID': 'IDN',
    'JO': 'JOR',
    'KE': 'KEN',
    'KY': 'CYM',
    'LS': 'LSO',
    'LB': 'LBN',
    'MD': 'MDA',
    'MW': 'MWI',
    'MV': 'MDV',
    'ML': 'MLI',
    'MR': 'MRT',
    'MX': 'MEX',
    'MA': 'MAR',
    'MZ': 'MOZ',
    'NP': 'NPL',
    'NC': 'NCL',
    'NI': 'NIC',
    'NE':'NER',
    'NG': 'NGA',
    'PK': 'PAK',
    'PY': 'PRY',
    'PE': 'PER',
    'PH': 'PHL',
    'RW': 'RWA',
    'ST': 'STP',
    'SN': 'SEN',
    'SL': 'SLE',
    'ZA': 'ZAF',
    'LK': 'LKA',
    'SD': 'SDN',
    'SZ': 'SWZ',
    'TJ': 'TJK',
    'TZ': 'TZA',
    'TH': 'THA',
    'GM': 'GMB',
    'TL': 'TLS',
    'TG': 'TGO',
    'TT': 'TTO',
    'TN': 'TUN',
    'TR': 'TUR',
    'TM': 'TKM',
    'UG': 'UGA',
    'UA': 'UKR',
    'UZ': 'UZB',
    'VN': 'VNM',
    'YE': 'YEM',
    'ZM': 'ZMB',
    'ZW': 'ZWE'
};

var iso3toiso2 = {
    'AFG': 'AF',
    'ALB': 'AL',
    'AGO': 'AO',
    'ARM': 'AM',
    'AZE': 'AZ',
    'BGD': 'BD',
    'BEN': 'BJ',
    'BOL': 'BO',
    'BTN': 'BT',
    'BRA': 'BR',
    'BFA': 'BF',
    'null': 'NM',
    'KHM': 'KH',
    'CMR': 'CM',
    'CAF': 'CF',
    'TCD': 'TD',
    'COL': 'CO',
    'COM': 'KM',
    'COG': 'CG',
    'COD': 'CD',
    'CIV': 'CI',
    'ECU': 'EC',
    'EGY': 'EG',
    'ESP': 'ES',
    'ERI': 'ER',
    'ETH': 'ET',
    'GAB': 'GA',
    'GHA': 'GH',
    'GUM': 'GU',
    'GIN': 'GN',
    'GUY': 'GY',
    'HTI': 'HT',
    'HND': 'HN',
    'IDN': 'ID',
    'JOR': 'JO',
    'KEN': 'KE',
    'CYM': 'KY',
    'LSO': 'LS',
    'LBN': 'LB',
    'MDA': 'MD',
    'MWI': 'MW',
    'MDV': 'MV',
    'MLI': 'ML',
    'MRT': 'MR',
    'NER':'NI',
    'MEX': 'MX',
    'MAR': 'MA',
    'MOZ': 'MZ',
    'NPL': 'NP',
    'NCL': 'NC',
    'NIC': 'NI',
    'NGA': 'NG',
    'PAK': 'PK',
    'PRY': 'PY',
    'PER': 'PE',
    'PHL': 'PH',
    'RWA': 'RW',
    'STP': 'ST',
    'SEN': 'SN',
    'SLE': 'SL',
    'ZAF': 'ZA',
    'LKA': 'LK',
    'SDN': 'SD',
    'SWZ': 'SZ',
    'TJK': 'TJ',
    'TZA': 'TZ',
    'THA': 'TH',
    'GMB': 'GM',
    'TLS': 'TL',
    'TGO': 'TG',
    'TTO': 'TT',
    'TUN': 'TN',
    'TUR': 'TR',
    'TKM': 'TM',
    'UGA': 'UG',
    'UKR': 'UA',
    'UZB': 'UZ',
    'VNM': 'VN',
    'YEM': 'YE',
    'ZMB': 'ZM',
    'ZWE': 'ZW'
};

var world_list = ["World", "world", "WLD", "World"];

var dhs_credit = '<b>Source: </b> <a href="http://api.dhsprogram.com/#/index.html" target="_blank">DHS programme API</a> | <a href="http://www.dhsprogram.com/data/Data-Tools-and-Manuals.cfm" target="_blank">Data description</a><br><b>Author: </b><a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD and</a> <a href="https://twitter.com/EtienneDavid" target="_blank">Etienne David, AFD</a>';

var wdi_credits ='<b>Source: </b> <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/889386" target="_blank">World Bank Data API</a><br><b>Author: </b> <a href="https://twitter.com/EtienneDavid"> Etienne David, AFD </a> ; <a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD</a>';

/**
 * Prepare the vizparameters for data preparation
 *
 * @param {String} dataviz_Type of dataviz that will be called
 * @return {viz_params} viz_params dictionary with parameters needed for the visualisation. viz_params should follow the syntax described in API documentation.
  */

  var generate_vizparams = function (dataviz_type) {

  	switch(dataviz_type){
  		case 'comparison':
  		return {neighbourg : false, geometry : false, breakdown: false, geojson : false, region:true , world: false}
  		break;
  		case 'infranational':
   		return {neighbourg : false, geometry : true, breakdown: true, geojson : true, region:false , world: false}
  		break;

  		case 'regionalmap':
   		return {neighbourg : true, geometry : false, breakdown: false, geojson : false, region:false , world: false}
  		break;

  		case 'spider':
  		return {neighbourg : false, geometry : false, breakdown: false, geojson : false, region:true , world: true}
  		break;

  		case 'timeserie':
   		return {neighbourg : false, geometry : false, breakdown: false, region:true , world: true}
  		break;

  		default:
  		return {neighbourg : false, geometry : false, breakdown: false, geojson : false, region:false , world: false}
  		break;
  	}

};

var d4d = {};
d4d.common_ressources = common_ressources;

d4d.common_ressources.income_list = income_list;
d4d.common_ressources.iso2toiso3 = iso2toiso3;
d4d.common_ressources.iso3toiso2 = iso3toiso2;
d4d.common_ressources.world_list = world_list; 
d4d.common_ressources.gps_dict = gps_dict;
d4d.common_ressources.credits = {};
d4d.common_ressources.credits.dhs = dhs_credit;
d4d.common_ressources.credits.wdi = wdi_credits;


d4d.display = {}; 
d4d.display.comparison = display_comparison;
d4d.display.infranational = display_infranational; 
d4d.display.regionalmap = display_regionalmap;
d4d.display.spider = display_spider;
d4d.display.timeserie = display_timeserie;

d4d.parse = {};

d4d.parse.dhs = {};
d4d.parse.dhs.comparison = parse_dhs_comparison;
d4d.parse.dhs.infranational = parse_dhs_infranational;
d4d.parse.dhs.regionalmap = parse_dhs_regionalmap;
d4d.parse.dhs.timeserie = parse_dhs_timeserie;

d4d.parse.wdi = {};
d4d.parse.wdi.comparison = parse_wdi_comparison;
d4d.parse.wdi.spider = parse_wdi_spider;
d4d.parse.wdi.regionalmap = parse_wdi_regionalmap;
d4d.parse.wdi.timeserie = parse_wdi_timeserie;

d4d.prepare = {};
d4d.prepare.dhs = prepare_dhs;
d4d.prepare.wdi = prepare_wdi; 

d4d.generate_vizparams = generate_vizparams;

d4d.make = function (container, dataviz_type, API_params, common) {
		var viz_params = d4d.generate_vizparams(dataviz_type);

        var url_array = d4d.prepare[API_params["Furnisher"].toLowerCase()](API_params, viz_params, common);
       console.log(url_array);
        var promise = d4d.parse[API_params["Furnisher"].toLowerCase()][dataviz_type](url_array, API_params, common);
        promise.then(function(return_data) {
            var chart =d4d.display[dataviz_type](container, return_data, common.credits[API_params["Furnisher"].toLowerCase()]);
        	return chart
        });

    };

return d4d;

}());
