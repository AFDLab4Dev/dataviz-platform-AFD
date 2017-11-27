var API_list = {"WDI":{furnisher_fr:"Banque Mondiale", indicators : "../data/wdi.json"},
                "DHS":{furnisher_fr:"USAID", indicators: "../data/dhs.json"}}

var furnisher = {
  WDI : {prepare_type4: prepare_api_request_wdi_type4, parse_type4: parse_data_wdi_type4, prepare_type3: prepare_api_request_wdi_type3, parse_type3: parse_data_wdi_type3, prepare_type1 : prepare_api_request_wdi_type1, prepare_type2 : prepare_api_request_wdi_type2, parse_type1: parse_data_WDI_type1, parse_type2: parse_data_WDI_type2, source: '<b>Source: </b> <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/889386" target="_blank">World Bank Data API</a><br><b>Author: </b><a href="https://twitter.com/EtienneDavid" target="_blank">Etienne David, AFD</a> and <a href="https://twitter.com/thomas_roca" target="_blank">Thomas Roca, AFD</a>' },
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

  // Consommation d'énergie
  dataviz_type1('type1_wdi_fossilfuel', wrapper(country,"EG.USE.COMM.FO.ZS"), common_ressources, furnisher, 'WDI')
  dataviz_type1('type1_wdi_electric', wrapper(country,"EG.USE.ELEC.KH.PC"), common_ressources, furnisher, 'WDI')

  // Energie alternatives
  dataviz_type3('type3_wdi_alternativeenergy_combustiblerenewables', wrapper(country, ["EG.USE.COMM.CL.ZS","EG.USE.CRNW.ZS"]), common_ressources, furnisher, 'WDI')

   // Emission
    dataviz_type1('type1_wdi_CO2', wrapper(country, "EN.ATM.CO2E.PC"), common_ressources, furnisher, 'WDI')
    dataviz_type3('type3_wdi_methane_othergreenhouse', wrapper(country, ["EN.ATM.METH.KT.CE","EN.ATM.GHGO.KT.CE"]), common_ressources, furnisher, 'WDI' )

    // Perception des populations
    //dataviz_type4('type4_wdi_satisfaction', wrapper(country, "FP.CPI.TOTL.ZG"), common_ressources, furnisher, 'WDI' )

    //Espérance de vie à la naissance
    dataviz_type3('type3_wdi_lifeexp_mf', wrapper(country, ["SP.DYN.LE00.FE.IN","SP.DYN.LE00.MA.IN"]), common_ressources, furnisher, 'WDI' )
    
    // Distribution de la population
    dataviz_type4('type4_wdi_popdistribution', wrapper(country, ["SP.POP.0014.TO.ZS","SP.POP.1564.TO.ZS","SP.POP.65UP.TO.ZS"]), common_ressources, furnisher, 'WDI' )

    // Population régionale
    dataviz_type2('type2_wdi_totalpopulation',wrapper(country, "SP.POP.TOTL"), common_ressources, furnisher, 'WDI' )

    // Evolution du taux d'alphabétisation, durée d'études et enseignants par classe
    //type3_wdi_literacymw
    dataviz_type3('type3_wdi_literacymw', wrapper(country, ["SE.ADT.LITR.FE.ZS","SE.ADT.LITR.MA.ZS"]), common_ressources, furnisher, 'WDI' )

    //type4_inscriptioneleveparniveau
    dataviz_type4('type4_inscriptioneleveparniveau', wrapper(country, ["SE.PRM.ENRR","SE.SEC.ENRR","SE.TER.ENRR"]), common_ressources, furnisher, 'WDI' )
    //Dépenses de santé et protection sociale
    //type3_wdi_govexp_healexp
    dataviz_type3('type3_wdi_govexp_healexp', wrapper(country, ["SE.XPD.TOTL.GD.ZS","SH.XPD.PUBL.GX.ZS"]), common_ressources, furnisher, 'WDI' )

    //type4_wdi_servicesociaux
    dataviz_type4('type4_wdi_servicesociaux', wrapper(country, ["SH.XPD.PUBL","SH.XPD.OOPC.ZS","SP.POP.DPND.OL"]), common_ressources, furnisher, 'WDI' )

    //type4_wdi_servicesanté
    dataviz_type4('type4_wdi_servicesanté', wrapper(country, ["SH.MED.BEDS.ZS","SH.MED.PHYS.ZS","SH.MED.NUMW.P3"]), common_ressources, furnisher, 'WDI' )

    //type4_wdi_satisfaction

    // Satisfaction et optimisme des populations
    //type3_wdi_lifetoday_lifefiveyear
    //dataviz_type3('type3_wdi_lifeexp_mf', wrapper(country, ["SP.DYN.LE00.FE.IN","SP.DYN.LE00.MA.IN"]), common_ressources, furnisher, 'WDI' )


    //Bien-être subjectif
    //type4_wdi_wellbeing

     //Perception des conditions de travail
     //type4_wdi_perceptioncondition


}

var common_ressources
$.when( common_ressources_d).done(function ( i) {
    common_ressources = i;
    update_dashboard();
    
    });


