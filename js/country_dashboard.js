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

  // revenu
  dataviz_type1('revenu_graph', wrapper(country,"NY.GDP.MKTP.KD.ZG"), common_ressources, furnisher, 'WDI')
  dataviz_type2('revenu_map', wrapper(country,"NY.GDP.MKTP.KD.ZG"), common_ressources, furnisher, 'WDI')

  // GDP per capita (constant 2011 USD)
   dataviz_type1('evo_revenu_graph', wrapper(country, "NY.GDP.PCAP.PP.KD"), common_ressources, furnisher, 'WDI')

   // inflation (should be change to IMF data)
    dataviz_type1('inflation', wrapper(country, "FP.CPI.TOTL.ZG"), common_ressources, furnisher, 'WDI')

    // Balance courante
    dataviz_type1('balance_courante', wrapper(country, "BN.CAB.XOKA.CD"), common_ressources, furnisher, 'WDI' )

    // Evolution du taux de change
    dataviz_type1('taux_dechange', wrapper(country, "PA.NUS.FCRF"), common_ressources, furnisher, 'WDI' )

    // Recettes, dépenses et dettes publiques
    //dataviz_type3('taux_dechange', wrapper(country, "FP.CPI.TOTL.ZG"), common_ressources, furnisher, 'IMF' )
    //dataviz_type1('debt_type1', wrapper(country, "FP.CPI.TOTL.ZG"), common_ressources, furnisher, 'IMF' )

    // Pauvreté Monétaire
    dataviz_type4('poverty',wrapper(country, ["SI.POV.DDAY", "SI.POV.RUHC","SI.POV.URHC","SI.POV.NAHC"]), common_ressources, furnisher, 'WDI' )

    //Marché du travail des femmes
    dataviz_type1('chomage', wrapper(country, "SL.UEM.TOTL.ZS"), common_ressources, furnisher, 'WDI' )
    dataviz_type3('chomage_femme', wrapper(country, ["SL.UEM.TOTL.FE.NE.ZS","SL.UEM.TOTL.MA.NE.ZS"]), common_ressources, furnisher, 'WDI' )
    dataviz_type3('part_femme', wrapper(country, ["SL.EMP.INSV.FE.ZS","SL.TLF.CACT.FE.ZS"]), common_ressources, furnisher, 'WDI' )

    // Décomposition de la valeur ajoutée par secteur 
    dataviz_type4('addedvalue_type4', wrapper(country, ["NV.AGR.TOTL.ZS","NV.IND.TOTL.ZS","NV.SRV.TETC.ZS"]), common_ressources, furnisher, 'WDI' )

    //Investissement 
    //dataviz_type1('investment_imf', wrapper(country, "FP.CPI.TOTL.ZG"), common_ressources, furnisher, 'IMF' )

    // Credit domestique
    dataviz_type1('net_domestic_credit', wrapper(country, "FM.AST.DOMS.CN"), common_ressources, furnisher, 'WDI' )
    dataviz_type1('domestic_credit_private_sector', wrapper(country, "FS.AST.PRVT.GD.ZS"), common_ressources, furnisher, 'WDI' )

    //Taxes
    dataviz_type1('domestic_credit_private_sector', wrapper(country, "GC.TAX.TOTL.GD.ZS"), common_ressources, furnisher, 'WDI' )

    //Energie import
    dataviz_type1('energy_import', wrapper(country, "EG.IMP.CONS.ZS"), common_ressources, furnisher, 'WDI' )


    // Access to water and electicity
    dataviz_type3('access_electricity_water_type3', wrapper(country, ["SH.H2O.SAFE.ZS","EG.ELC.ACCS.ZS"]), common_ressources, furnisher, 'WDI' )
    dataviz_type2('map_access_electricity', wrapper(country, "EG.ELC.ACCS.ZS"), common_ressources, furnisher, 'WDI' )

    // Mobile et internet
    dataviz_type3('use_internet_mobile_type3', wrapper(country, ["IT.CEL.SETS.P2","IT.NET.USER.ZS"]), common_ressources, furnisher, 'WDI' )
    dataviz_type2('map_access_internet', wrapper(country, "IT.NET.USER.ZS"), common_ressources, furnisher, 'WDI' )



}

var common_ressources
$.when( common_ressources_d).done(function ( i) {
    common_ressources = i;
    update_dashboard();
    
    });


