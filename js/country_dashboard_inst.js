var API_list = {"WDI":{furnisher_fr:"Banque Mondiale", indicators : "../data/wdi.json"},
                "DHS":{furnisher_fr:"USAID", indicators: "../data/dhs.json"}}

var furnisher = {
  WDI : {prepare_type4: prepare_api_request_wdi_type4, parse_type4: parse_data_wdi_type4, prepare_type3: prepare_api_request_wdi_type3, parse_type3: parse_data_wdi_type3, prepare_type1 : prepare_api_request_wdi_type1, prepare_type2 : prepare_api_request_wdi_type2, parse_type1: parse_data_WDI_type1, parse_type2: parse_data_WDI_type2, source: '<b>Source: </b> <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/889386" target="_blank">World Bank Data API</a><br><b>Author: </b><a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD</a>' },
  DHS: {prepare_type1: prepare_api_request_dhs_type1, parse_type1: parse_data_dhs_type1, prepare_type2: prepare_api_request_dhs_type2, parse_type2: parse_data_dhs_type2, source:'<b>Source: </b> <a href="http://api.dhsprogram.com/#/index.html" target="_blank">DHS programme API</a> | <a href="http://www.dhsprogram.com/data/Data-Tools-and-Manuals.cfm" target="_blank">Data description</a><br><b>Author: </b><a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD and</a> <a href="https://twitter.com/EtienneDavid" target="_blank">Etienne David, AFD</a>'},
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

function get_country_from_hash(hash){
var parameters_dictionary = new Object;
var temporary_list = hash.slice(1,).split("?");
  temporary_list.forEach(function(element){
    var pieces = element.split('=');
    if (pieces.length == 2) {
      parameters_dictionary[pieces[0]] = pieces[1];
            }
        });

  

  if (parameters_dictionary["Country_Select"] != null){
  	document.getElementById("Country_Select").value = parameters_dictionary["Country_Select"]
  	return parameters_dictionary["Country_Select"]
  } else {
  	window.location.hash = "Country_Select="+document.getElementById("Country_Select").value+"?"
  	return document.getElementById("Country_Select").value
  }

};

function wrapper(country, indicator){

	return {"Country_Select" : country, "Ind_Select": indicator , "start" : "1996", "end" : "2016" ,"Country_SelectExtra" : ""}
}

function update_dashboard() {
	if (iterator == 0) {
    	var country = get_country_from_hash(window.location.hash)
  } else {
  	window.location.hash = "Country_Select="+document.getElementById("Country_Select").value+"?"

  	var country = document.getElementById("Country_Select").value
  }
  iterator=iterator+1;

  //Transparence et corruption dans le secteur publique
  dataviz_type1('type1_wdi_cpia', wrapper(country,"IQ.CPA.TRAN.XQ"), common_ressources, furnisher, 'WDI')
  dataviz_type2('type2_wdi_cpia', wrapper(country,"IQ.CPA.TRAN.XQ"), common_ressources, furnisher, 'WDI')

 
  
  //Temps nécessaires à la création d'une entreprise

  dataviz_type1('type1_wdi_startup', wrapper(country,"IC.REG.PROC"), common_ressources, furnisher, 'WDI')
  dataviz_type2('type2_wdi_startup', wrapper(country,"IC.REG.PROC"), common_ressources, furnisher, 'WDI')
  //Dépense militaire
  
    dataviz_type1('type1_wdi_military', wrapper(country,"MS.MIL.XPND.GD.ZS"), common_ressources, furnisher, 'WDI')

  //Politiques environnementales
    dataviz_type1('type1_wdi_cpiaenv', wrapper(country,"IQ.CPA.ENVR.XQ"), common_ressources, furnisher, 'WDI')

  // Migration et réfugiés
  
  
  dataviz_type1('type1_wdi_refugee', wrapper(country,"SM.POP.REFG"), common_ressources, furnisher, 'WDI')
  dataviz_type2('type2_wdi_refugee', wrapper(country,"SM.POP.REFG"), common_ressources, furnisher, 'WDI')

}

var common_ressources
$.when( common_ressources_d).done(function ( i) {
    common_ressources = i;
    update_dashboard();
    
    });


