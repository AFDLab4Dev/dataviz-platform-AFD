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
}
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
    }
    // Miscellaneous fonctions
function OnChartComplete(chart) { // on complete
    if (iterator < 2) {
        var textX = chart.plotLeft + chart.plotWidth + 100;
        var textY = chart.plotTop + chart.plotHeight + 5;
        var span = '<span id="watermarkDetails" style="position:absolute; text-align:right;"><table style="width:100%;"><td><a href="http://data.afd.fr" target="_blank"><img src="../img/logoDATA.jpg" width="80px";border="0" > </a></td></tr><td style="font-size:10px; font-family:Trebuchet MS; color: #999999"><i>powered by Highcharts</i></td></table>';
        $("#watermark").append(span);
        span = $('#watermarkDetails');
        span.css('left', textX - span.width());
        span.css('top', textY + span.height());
    }
}


// =================================== DATAVIZ TYPES =======================================================
function dataviz_type1(container, API_params, common_ressources, furnisher_obj, furnisher_name) {
    var get = furnisher_obj[furnisher_name].prepare_type1(common_ressources, API_params);
    $.getJSON(get[2], function(json) {
        var return_data = furnisher_obj[furnisher_name].parse_type1(json, get[0], get[1], API_params)
        display_dataviz_type1(return_data, container, get[0], get[1], furnisher_obj[furnisher_name].source)
    });

}

function dataviz_type2(container, API_params, common_ressources, furnisher_obj, furnisher_name) {
    var url = furnisher_obj[furnisher_name].prepare_type2(common_ressources, API_params);
    $.getJSON(url, function(json) {
        var return_data = furnisher_obj[furnisher_name].parse_type2(json, API_params['Country_Select'])
        display_dataviz_type2(return_data, container, API_params);

    });

}

function dataviz_type3(container, API_params, common_ressources, furnisher_obj, furnisher_name) {
    var get = furnisher_obj[furnisher_name].prepare_type3(common_ressources, API_params);

    var promise = furnisher_obj[furnisher_name].parse_type3(get, API_params['Country_Select'], API_params)
    promise.then(function(return_data) {
        display_dataviz_type3(return_data, container, API_params, furnisher_obj[furnisher_name].source);
    });
    


}

function dataviz_type4(container, API_params, common_ressources, furnisher_obj, furnisher_name) {
     var get = furnisher_obj[furnisher_name].prepare_type4(common_ressources, API_params);
     var promise = furnisher_obj[furnisher_name].parse_type4(get[1],get[0],common_ressources)
    promise.then(function(return_data) {
      display_dataviz_type4(return_data, container, furnisher_obj[furnisher_name].source)
    });
     


}



// type 1 dataviz is an Highchart dataviz with line graph, comparison with regional unit, world. Possibility to add an optional second country

function display_dataviz_type1(return_data, anchor, cname, CnameExtra, credits) {




    var chart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: anchor
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
    }, OnChartComplete);




    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: "'Open Sans', sans-serif"
            }

        }
    });

    return chart
}




// function display_dataviz_type2 display a indicator which give a comparison point of view at regional level

//value suffix to be changed
function display_dataviz_type2(return_data, container, API_params) {
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

}


function display_dataviz_type3(return_data, container, API_params, credits) {
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
    }, OnChartComplete);





}

function display_dataviz_type4(return_data, container, credits) {
  console.log( return_data.label)
    return new Highcharts.Chart({
        chart: {renderTo: container, polar: true, type: 'line'},
        title: {text: '',x: 0, style: {"fontSize": "14px"}},
        credits: { enabled: false },
        subtitle: {useHTML: true, text: credits},

       xAxis: {
         categories: return_data.label,
          tickmarkPlacement: 'on',lineWidth: 0
        },

       yAxis: {gridLineInterpolation: 'polygon', lineWidth: 0, tickInterval:1},
        tooltip: {shared: true, valuePrefix: '', valueSuffix: '', valueDecimals: 2},

        series: return_data.series
            }, OnChartComplete);
}





function positive(number) {
    if (number > -1) {
        return 1
    } else {
        return -1
    }
}



//=================================== WDI 


function prepare_api_request_wdi_type1(common_ressources, API_params) {

    //Get country and region name name from dictionary   
    var cname = common_ressources.country_dict[API_params['Country_Select']];
    var region = common_ressources.region_dict[API_params['Country_Select']];

    // if another country is added we need to change some parameters


    if (API_params['Country_SelectExtra'] != "") {
        var ExtraUrl = ";" + API_params['Country_SelectExtra']
        var CnameExtra = common_ressources.country_dict[API_params['Country_SelectExtra']];
        var nbSerie = 5
    } else {
        var ExtraUrl = ""
        var CnameExtra = "Add a country"
        var nbSerie = 4
    }
    API_params['Country_Select'] + ";" + region + ExtraUrl

    // display is the amount of information retrieved from the API query    
    var display = nbSerie * ((API_params['end'] - API_params['start']) + 1);
    // Set url request
    var url = "http://api.worldbank.org/countries/" + API_params['Country_Select'] + ";" + region + ExtraUrl + ";WLD/indicators/" + API_params['Ind_Select'] + "?date=" + API_params['start'] + ":" + API_params['end'] + "&per_page=" + display + "&MRV=" + (display / nbSerie) + "&format=jsonP&prefix=?"
    return [cname, CnameExtra, url]

}

function parse_data_WDI_type1(json, cname, CnameExtra, API_params) {
    var return_data = new Object;
    return_data.arrayRegion = [];
    return_data.arrayIncome = [];
    return_data.arrayWorld = [];
    return_data.arrayCountry = [];
    return_data.arrayCountryExtra = [];
    return_data.date = [];

    $.each(json[1], function(i, data) {

        switch (1) {
            case (positive($.inArray(data.country.value, common_ressources.region_list))):
                return_data.region_name = data.country.value;
                return_data.arrayRegion.push(parseFloat(data.value))
                break;
            case (positive($.inArray(data.country.value, income_list))):
                return_data.income_name = data.country.value;
                return_data.arrayIncome.push(parseFloat(data.value))

                break;
            case (positive($.inArray(data.country.value, world_list))):
                return_data.arrayWorld.push(parseFloat(data.value))

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
    }]


    return return_data

};


function prepare_api_request_wdi_type2(common_ressources, API_params) {
    // prepare api request for type 2 

    var isolist
    var region_iso3 = ["EAS", "ECS", "LCN", "MEA", "OED", "SAS", "SSA"]
    for (var i = 0, len = region_iso3.length; i < len; i++) {
        if ($.inArray(API_params['Country_Select'], common_ressources["list_" + region_iso3[i]]) != -1) {
            isolist = common_ressources["list_" + region_iso3[i]];
            break;
        }
    }
    var url_isolist = String(isolist).replace(/,/g, ';');
    var display = isolist.length;
    var urlMAP = "http://api.worldbank.org/countries/" + url_isolist + "/indicators/" + API_params['Ind_Select'] + "?date=" + API_params['end'] + ":" + API_params['end'] + "&per_page=" + display + "&MRV=1" + "&format=jsonP&prefix=?"
    return urlMAP
}


function parse_data_WDI_type2(json, cname) {
    // store indicator label
    var return_data = new Object;
    return_data.ind_label = json[1][0].indicator.value
        // create empty array

    var data_jsonMAP = []
    $.each(json[1], function(i, json) {
        iso2 = json.country.id.toLowerCase();
        data_jsonMAP.push('{"hc-key": "' + iso2 + '","value":' + json.value + '}')
    });


    return_data.dataMAP = JSON.parse('[' + data_jsonMAP + ']')

    if ($.inArray(cname, common_ressources.asia) != -1) {
        return_data.map = "custom/asia"
    }

    if ($.inArray(cname, common_ressources.africa) != -1) {
        return_data.map = "custom/africa"
    }

    if ($.inArray(cname, common_ressources.europe) != -1) {
        return_data.map = "custom/europe"
    }

    if ($.inArray(cname, common_ressources.oceania) != -1) {
        return_data.map = "custom/oceania"
    }

    if ($.inArray(cname, common_ressources.south_america) != -1) {
        return_data.map = "custom/south-america"
    }

    if ($.inArray(cname, common_ressources.north_america_no_central) != -1) {
        return_data.map = "custom/north-america-no-central"
    }

    if ($.inArray(cname, common_ressources.middle_east) != -1) {
        return_data.map = "custom/middle-east"
    }

    if ($.inArray(cname, common_ressources.central_america) != -1) {
        return_data.map = "custom/central-america"
    }

    return return_data

}



function prepare_api_request_wdi_type3(common_ressources, API_params) {
    //Get country and region name name from dictionary   
    var cname = common_ressources.country_dict[API_params['Country_Select']];
    var region = common_ressources.region_dict[API_params['Country_Select']].split(';')[1];
    var nbSeries = 4;
    // if another country is added we need to change some parameters

    // display is the amount of information retrieved from the API query    
    var display = nbSeries * ((API_params['end'] - API_params['start']) + 1);
    // Set url request

    var url_ind1 = "http://api.worldbank.org/countries/" + API_params['Country_Select'] + ";" + region + "/indicators/" + API_params['Ind_Select'][0] + "?date=" + API_params['start'] + ":" + API_params['end'] + "&per_page=" + display + "&MRV=" + (display / nbSeries) + "&format=jsonP&prefix=?"
    var url_ind2 = "http://api.worldbank.org/countries/" + API_params['Country_Select'] + ";" + region + "/indicators/" + API_params['Ind_Select'][1] + "?date=" + API_params['start'] + ":" + API_params['end'] + "&per_page=" + display + "&MRV=" + (display / nbSeries) + "&format=jsonP&prefix=?"
    return [cname, url_ind1, url_ind2]
}

function parse_data_wdi_type3(get, cname, API_params) {
    var deferred = $.Deferred();
    var request_1 = $.Deferred();
    var request_2 = $.Deferred();

    var return_data = new Object;
    return_data.arrayRegion_1 = [];
    return_data.arrayCountry_1 = [];
    return_data.arrayRegion_2 = [];
    return_data.arrayCountry_2 = [];
    var date_1 = [];
    var date_2 = [];

    $.getJSON(get[1], function(json) {
            var date_1 = []

            $.each(json[1], function(i, data) {
                    switch (1) {
                        case (positive($.inArray(data.country.value, common_ressources.region_list))):
                            return_data.region_name = data.country.value;
                            return_data.arrayRegion_1.push(parseFloat(data.value))
                            break;
                        default:
                            return_data.arrayCountry_1.push(parseFloat(data.value));
                            break;

                    }
                    date_1.push(data.date)
                    return_data.indicatorName_1 = data.indicator.value;

                });


                request_1.resolve(date_1);

            }); 

    $.getJSON(get[2], function(json) {
                          var date_2 = []

            $.each(json[1], function(i, data) {
                  switch (1) {
                    case (positive($.inArray(data.country.value, common_ressources.region_list))):
                          return_data.region_name = data.country.value;
                          return_data.arrayRegion_2.push(parseFloat(data.value))
                      break;
                  default:
                      return_data.arrayCountry_2.push(parseFloat(data.value));
                      break;

                        }
                    date_2.push(data.date)
                    return_data.indicatorName_2 = data.indicator.value;

                    });



                    request_2.resolve(date_2);

                });




    $.when(request_1, request_2).done(function(date_1, date_2) {
              return_data.date = date_1;

              return_data.series = [{
                name: cname + " - " +return_data.indicatorName_1,
                data: return_data.arrayCountry_1
            },{
                name: return_data.region_name + " - " +return_data.indicatorName_1,
                data: return_data.arrayRegion_1
            },{
                name: cname + " - " +return_data.indicatorName_2,
                data: return_data.arrayCountry_2
            },{
                name: return_data.region_name + " - " +return_data.indicatorName_2,
                data: return_data.arrayRegion_2
            }]


              deferred.resolve(return_data);


            });

        return deferred.promise();

        }

function prepare_api_request_wdi_type4(common_ressources, API_params) {
    //Get country and region name name from dictionary   
    var cname = common_ressources.country_dict[API_params['Country_Select']];
    var region = common_ressources.region_dict[API_params['Country_Select']];
    var nbSeries = 4;
    // if another country is added we need to change some parameters

    // display is the amount of information retrieved from the API query    
    var display = nbSeries * ((API_params['end'] - API_params['start']) + 1);
    // Set url request
    var url_array = API_params['Ind_Select'].map(function(i){
      return "http://api.worldbank.org/countries/" + API_params['Country_Select'] + ";" + region + ";WLD/indicators/" + i+ "?date=" + API_params['end'] + ":" + API_params['end'] + "&per_page=" + display + "&MRV=" + (display / nbSeries) + "&format=jsonP&prefix=?"

    });
    
    return [cname, url_array]
}

function parse_data_wdi_type4(url_array, cname, common_ressources){
  var deferred = $.Deferred();
  var raw_data = new Object;

  function parse_wdi_4_each(data){
    var raw = new Object;
    raw.label = data[0].indicator.value;

    raw.country = data.filter(item => item.country.value == cname ).filter(item => item.value !=null)[0]


    raw.region = data.filter(item => $.inArray(item.country.value, common_ressources.region_list) > -1 )
    raw.region_label = raw.region[0].country.value;
    raw.region = raw.region.filter(item => item.value != null)[0]

    raw.income = data.filter(item => $.inArray(item.country.value, income_list) > -1)
    raw.income_label = raw.income[0].country.value;
    raw.income = raw.income.filter(item => item.value != null)[0]

    raw.world = data.filter(item => $.inArray(item.country.value, world_list) > -1).filter(item => item.value != null)[0]
    return raw

    
  }

  $.when.apply($, url_array.map(function(item) {
        return $.getJSON(item).then(function(data){
          raw_data[data[1][0].indicator.id] = parse_wdi_4_each(data[1]);


        });
    })).then(function() {
    var return_data = new Object;
    return_data.label = [];
    return_data.arrayCountry = [];
    return_data.arrayRegion = [];
    return_data.arrayIncome = [];
    return_data.arrayWorld = [];
    Object.keys(raw_data).forEach(function(key,index) {
        return_data.label.push(raw_data[key].label);
        return_data.region_label =  raw_data[key].region_label
        return_data.income_label =  raw_data[key].income_label
        return_data.arrayCountry.push(typeof raw_data[key].country != "undefined"? parseInt(raw_data[key].country.value) : null);
        return_data.arrayRegion.push(typeof raw_data[key].region != "undefined"? parseInt(raw_data[key].region.value) : null);
        return_data.arrayIncome.push(typeof raw_data[key].income != "undefined"? parseInt(raw_data[key].income.value) : null);
        return_data.arrayWorld.push(typeof raw_data[key].world != "undefined"? parseInt(raw_data[key].world.value) : null);
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
                }]
        console.log(return_data.series)
      deferred.resolve(return_data);

    });

    return deferred.promise()

};










//================================= DHS ==============================================================


function prepare_api_request_dhs_type1(common_ressources, API_params) {

    //Get country and region name name from dictionary   
    var cname = common_ressources.country_dict[API_params['Country_Select']];

    if (API_params['Country_SelectExtra'] != "") {
        var ExtraUrl = "," + iso3toiso2[API_params['Country_SelectExtra']];
        var CnameExtra = common_ressources.country_dict[API_params['Country_SelectExtra']];
    } else {
        var ExtraUrl = "";
        var CnameExtra = "Add another country"
    }
    var iso2 = iso3toiso2[API_params['Country_Select']];


    // Set url request
    var url = "https://api.dhsprogram.com/rest/dhs/data?countryIds=" + iso2 + ExtraUrl + "&indicatorIds=" + API_params['Ind_Select'] + "&f=json&perpage=1000&breakdown=all";
    return [cname, CnameExtra, url]

}




function parse_data_dhs_type1(json, cname, CnameExtra, API_params) {
    var return_data = new Object;

    return_data.arrayCountry = [];
    return_data.arrayCountryExtra = [];
    return_data.date = [];
    $.each(json.Data, function(index, value) {

        var iso3 = iso2toiso3[value.DHS_CountryCode] // get the country code from API





        if (value.CharacteristicLabel == "Total") { // in the API answer only  consider aggregated data
            switch (iso3) {
                case (API_params['Country_Select']):
                    return_data.arrayCountry.push(value.Value)
                    return_data.arrayCountryExtra.push(null)
                    break;
                case (API_params['Country_SelectExtra']):
                    return_data.arrayCountry.push(null)
                    return_data.arrayCountryExtra.push(value.Value)
                    break;
                default:
                    break;
            }

            return_data.date.push(value.SurveyYear)
        }
        return_data.indicatorName = value.Indicator
    });




    // temporary array holds objects with position and sort-value
    var mapped = return_data.date.map(function(el, i) {
        return {
            index: i,
            date: el,
            value_c: return_data.arrayCountry[i],
            value_ce: return_data.arrayCountryExtra[i]
        };
    })

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
    }]


    return return_data

};


function prepare_api_request_dhs_type2(common_ressources, API_params) {
    // prepare api request for type 2 
    var isolist = common_ressources["list_" + common_ressources.region_dict[API_params['Country_Select']].split(";")[1]];
    var isolist_iso2 = isolist.map(function(el) {
        return iso3toiso2[el]
    });
    var url_isolist = String(isolist_iso2);
    var urlMAP = "https://api.dhsprogram.com/rest/dhs/data?countryIds=" + url_isolist + "&indicatorIds=" + API_params['Ind_Select'] + "&f=json&perpage=1000";
    return urlMAP
}




function parse_data_dhs_type2(json, cname) {
    // store indicator label
    var return_data = new Object;
    return_data.ind_label = json.Data[0].Indicator

    // create empty array

    var data_jsonMAP = []
    $.each(json.Data, function(i, value) {
        iso2 = value.DHS_CountryCode;
        isoLC = iso2.toLowerCase()
        if (isoLC == "ia") {
            isoLC = "in"
        }
        if (isoLC == "bt") {
            isoLC = "bw"
        }
        if (isoLC == "bu") {
            isoLC = "bi"
        }
        if (isoLC == "kk") {
            isoLC = "kz"
        }
        if (isoLC == "mb") {
            isoLC = "md"
        }
        if (isoLC == "ek") {
            isoLC = "gq"
        }
        if (isoLC == "nm") {
            isoLC = "na"
        }
        if (isoLC == "dr") {
            isoLC = "do"
        }
        data_jsonMAP.push('{"hc-key": "' + isoLC + '","value":' + value.Value + '}')
    });

    data_jsonMAP = data_jsonMAP.map(function(x) {
        return x.replace("undefined", "null")
    });



    return_data.dataMAP = JSON.parse('[' + data_jsonMAP + ']')

    if ($.inArray(cname, common_ressources.asia) != -1) {
        return_data.map = "custom/asia"
    }

    if ($.inArray(cname, common_ressources.africa) != -1) {
        return_data.map = "custom/africa"
    }

    if ($.inArray(cname, common_ressources.europe) != -1) {
        return_data.map = "custom/europe"
    }

    if ($.inArray(cname, common_ressources.oceania) != -1) {
        return_data.map = "custom/oceania"
    }

    if ($.inArray(cname, common_ressources.south_america) != -1) {
        return_data.map = "custom/south-america"
    }

    if ($.inArray(cname, common_ressources.north_america_no_central) != -1) {
        return_data.map = "custom/north-america-no-central"
    }

    if ($.inArray(cname, common_ressources.middle_east) != -1) {
        return_data.map = "custom/middle-east"
    }

    if ($.inArray(cname, common_ressources.central_america) != -1) {
        return_data.map = "custom/central-america"
    }

    return return_data

}