var API_list = {"WDI":{furnisher_fr:"Banque Mondiale", indicators : "../data/wdi.json"},
                "DHS":{furnisher_fr:"USAID", indicators: "../data/dhs.json"}}
var furnisher = {
  WDI : {prepare_type1 : prepare_api_request_wdi_type1, prepare_type2 : prepare_api_request_wdi_type2, parse_type1: parse_data_WDI_type1, parse_type2: parse_data_WDI_type2, source: '<b>Source: </b> <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/889386" target="_blank">World Bank Data API</a><br><b>Author: </b><a href="https://twitter.com/EtienneDavid" target="_blank">Etienne David, AFD</a> and <a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD</a>' },
  DHS: {prepare_type5: prepare_api_request_dhs_type5, parse_type5 : parse_data_dhs_type5 ,prepare_type1: prepare_api_request_dhs_type1, parse_type1: parse_data_dhs_type1, prepare_type2: prepare_api_request_dhs_type2, parse_type2: parse_data_dhs_type2, source:'<b>Source: </b> <a href="http://api.dhsprogram.com/#/index.html" target="_blank">DHS programme API</a> | <a href="http://www.dhsprogram.com/data/Data-Tools-and-Manuals.cfm" target="_blank">Data description</a><br><b>Author: </b><a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD and</a> <a href="https://twitter.com/EtienneDavid" target="_blank">Etienne David, AFD</a>'},
 }

var common_ressources_d =  $.Deferred();

$.getJSON( "data/common_resources.json", function( data ) {
    common_ressources_d.resolve(data);

});


// States variable
var iterator=0;
var income_list = ["High income", "High income: OECD", "High income: nonOECD", "Low income", "Middle income", "Lower middle income", "Upper middle income", "Low & middle income"];
var world_list = ["World", "world", "WLD", "World"];
var API_parameters = ["Furnisher","Country_Select","Ind_Select","end","start","Country_SelectExtra"]


var d1 = $.Deferred();;


function updateAPI(){
    load_indicators();
}

//To load indicators when users choose something

function load_indicators(){
    var indicator_type = $( "#Furnisher option:selected" ).val();
    $.getJSON("data/"+indicator_type+".json", function(json){
        var sel = $("#Ind_Select");
        sel.empty();
        $.each(json, function(index) {
            var temp = json[index];
            if (temp.length > 50) {
                temp = temp.slice(0,50)
            }
            sel.append($("<option>").attr('value',index).text(temp));

        });
        sel.selectpicker('refresh')
        d1.resolve()
        displayData()
    });
}


// update parameters dictionnary given an hash. 
function hash_to_dict(hash, parameters_dictionary = new Object){
  var temporary_list = hash.slice(1,).split("?");
  temporary_list.forEach(function(element){
    var pieces = element.split('=');
    if (pieces.length == 2) {
      parameters_dictionary[pieces[0]] = pieces[1];
            }
        });
  return parameters_dictionary

}

// update hash given a dictionary
function dict_to_hash(parameters_dictionary){
  var temp_str = '';
  var keys = Object.keys(parameters_dictionary);
  keys.forEach(function(key){
    temp_str = temp_str+key+"="+parameters_dictionary[key]+"?";
    })
  var hash = temp_str.slice(0,-1);
  window.location.hash = hash;
  document.getElementById("link_glance").value = window.location.href;
  $("#Ind_Select").selectpicker('refresh')

  return hash
}


function init_parameters_dictionary(hash, parameters_array){
  var temp_dict = new Object;
  var temp_hash_dict = hash_to_dict(hash);
  parameters_array.forEach(function(element){

            if (element in temp_hash_dict){
                temp_dict[element] = temp_hash_dict[element];
                document.getElementById(element).value = temp_dict[element];
            } else {
                temp_dict[element] = document.getElementById(element).value;

            };
        });
  return temp_dict

}

function hide(id){
  var element= document.getElementById(id);
  element.style.visibility = 'hidden'
  element.style.height = 0;
}

function show(id){
    var element= document.getElementById(id);
  element.style.visibility = 'visible'
  element.style.height = "auto";

}

function displayData() {
  // Get parameters from hash or update them
  if (iterator == 0) {
    var API_params = new Object;
      API_params = init_parameters_dictionary(window.location.hash, API_parameters);
      console.log(API_params)
      dict_to_hash(API_params);
  } else {
      API_params = init_parameters_dictionary('', API_parameters);
      dict_to_hash(API_params);
  }
  iterator=iterator+1;


  dataviz_type1('container', API_params, common_ressources, furnisher, API_params['Furnisher'])
  dataviz_type2('Mapcontainer', API_params, common_ressources, furnisher, API_params['Furnisher'])

  if (API_params['Furnisher'] == "DHS"){
      show('subnational')

      dataviz_type5('infra', API_params, common_ressources, furnisher, API_params['Furnisher'])
  } else {
    hide('subnational')

    }

  


 
};





// INIT OF INDICATOR.HTML

var common_ressources
$.when( common_ressources_d).done(function ( i) {
  map = L.map('infra')
    common_ressources = i;
    load_indicators();
    $.when( d1).done(function ( v1) {
    });
    });

