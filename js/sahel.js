var view = [21.841, 4.92, 5]
/*
var map = new mapboxgl.Map({
        container: 'sahel',
        preserveDrawingBuffer: true,
    });

map.setStyle("mapbox://styles/etibdv/cj0cviykv00br2sqpvtoco9j8");
map.setZoom(5)
map.setCenter([4.92, 21.841])
*/

// load data for pop and informa
var inform_d = $.Deferred();
var geometry_pop_d = $.Deferred();
 

$.getJSON( "data/inform.json", function( data ) {
	inform_d.resolve(data);

});

$.getJSON( "data/geometry_pop.geojson", function( data ) {
	geometry_pop_d.resolve(data);
});




// Object to handle hash issues
function hash_to_dict(hash) {
        var temporary_list = hash.slice(1,hash.length).split("?");
        var dictionary = new Object;
        temporary_list.forEach(function(element){
            var pieces = element.split('=');
            if (pieces.length == 2) {
                dictionary[pieces[0]] = parseInt(pieces[1]);
            }
        });
        return dictionary;

    };

function dict_to_hash(dict) {
        var temp_str = '';
        var keys = Object.keys(dict);
        keys.forEach(function(key){
            temp_str = temp_str+key+"="+dict[key]+"?"
        })
        var hash = temp_str.slice(0,-1);
        window.location.hash = hash;
        return hash
        //document.getElementById("link_glance").value = window.location.href+"#"+this.hash;

}





function array_to_dict(array, key) {
	var new_dict ={};
	array.forEach(function(element){
		var str_key = key.map(function(data){return element[data].toString()}).join('');
		new_dict[str_key] = element;
		});
	return new_dict
}

function calculate_mean(dict_value) {
	var sum_weight = 0;
	var sum_indicator = 0;
	Object.keys(dict_value).forEach(function(key){


		sum_weight = sum_weight + dict_value[key]["weight"];
		sum_indicator = sum_indicator + dict_value[key]["weight"]*dict_value[key]["value"];
	});


	return sum_indicator/sum_weight

};

function round_plus(number, decimal) {
	var factor = Math.pow(10,decimal);
	return Math.round(number*factor)/factor
}

function generate_new_prop(properties, parameters, inform, key) {
	var str_key = key.map(function(data){return properties[data].toString()}).join('');
	var needed_value = {};
	Object.keys(parameters).forEach(function(key){
		needed_value[key] = {"weight": parseInt(parameters[key]), "value": inform[str_key][key] };
	});


	return needed_value
 }

// Because class aren't working ... ? 
var layer_to_show = new Object;
function init_layer(layer) {
	layer_to_show.type = layer.type;
	layer_to_show.crs = layer.crs;
}
function set_layer(layer) {
	layer_to_show.features = layer;
};







function set_map(){
	map = L.map('sahel')

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.light'
    }).addTo(map);
   
   var Indicator = layer_to_show.features[0].properties.render
   
   var Max = 0;
   var Min = 100000;
   var pop_max = 0;
 
   layer_to_show.features.map(function(f){
   if(f.properties.render > Max){
   Max = f.properties.render;
   }
   if(f.properties.spsum > pop_max){
   pop_max = f.properties.spsum;
   }
   if(f.properties.render < Min){
   Min = f.properties.render;
   }
   })


  
  
	// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};
	info.update = function (props) {
		this._div.innerHTML =(props ?'<h3>Summary</h3><br><h4> Custom INFORM index:'  +round_plus(props.render,2) + '</h4><br><h4> Density per km2 (NOT EXACT!):'+Math.round(props.density/100)+'</h4>':'');
	};

	info.addTo(map);

  
   var geojson;
   function getColor(d, Max, Min) {
		return d > round_plus(( Min + (4/5)*(Max-Min)),2) ? '#b81b34' : 
				d > round_plus(( Min +(3/5)*(Max-Min)),2 )? '#db4551'  :
				d > round_plus( (Min + (2/5)*(Max-Min)),2)   ? '#f47461' :
				d > round_plus(  (Min+ (1/5)*(Max-Min)),2)  ?  '#ffa474':
				d > round_plus( Min,2 )  ? '#ffd59b':
							'#ffffe0';

	}
	function getOpacity(d, pop) {
		return Math.min(((d*4)/(pop_max))+0.2,1)
	}
  
	function style(feature) {

			return {
				opacity: 0.01,

				fillOpacity: Math.round(feature.properties.density/100) >= pop_th_global ? 0.9 : 0.1  ,
				fillColor: getColor(feature.properties.render, Max,Min)
			};
		}

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
    
    
	geojson = L.geoJson(layer_to_show,{
  		onEachFeature: onEachFeature,
      style:style
  }).addTo(map);
  
  
  	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {
		var div = L.DomUtil.create('div', 'info legend'),
			grades = [round_plus(Min, 2), round_plus(Min+(1/5)*(Max-Min),2),round_plus(Min+(2/5)*(Max-Min),2), round_plus(Min+(3/5)*(Max-Min),2),round_plus(Min+(4/5)*(Max-Min),2),round_plus(Max,2)],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];


			labels.push(
				'<i style="background:' + getColor(from+(Max-Min)/12, Max, Min) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}


		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);

	map.setView([view[0], view[1]],view[2]);
  
  
      }

      
function update_form_value(id_form_element, value){
	document.getElementById(id_form_element+"_label").innerHTML = value+"%";


}
function init_parameters(hash){
	var parameters = hash_to_dict(hash);
	

	var list_parameters = ["inform_VULNERABILITY", "inform_HAZARD", "inform_LACK_OF_COPING_CAPACITY"];

	list_parameters.forEach(function(item){

		if (Object.keys(parameters).indexOf(item) === -1){
			parameters[item] = parseInt(document.getElementById(item).value);
			update_form_value(item, parameters[item])


		} else {
			document.getElementById(item).value = parameters[item].toString();
			update_form_value(item, parameters[item])
		}
	});

	window.location.hash = dict_to_hash(parameters);
	return parameters
}

function update_map(){
	var gjson = []
	var layer_parameters = init_parameters('');
	pop_th_global = get_threshold()
	console.log(pop_th_global)
	g_global.features.forEach(function(element){
    var render = calculate_mean(generate_new_prop(element.properties, layer_parameters, inform_global, ['ISO','ID_1']));
	var new_element = element

	new_element.properties.density = (element.properties.spsum*1000000) / turf.area(element.geometry)
	new_element.properties.render = render;
	gjson.push(new_element)
    });
    map.remove()
    set_layer(gjson);
    set_map();


};



function get_threshold(){
	var value = parseInt(document.getElementById("population_threshold").value)
	document.getElementById("population_threshold_label").innerHTML = value+" habitants/km^2";

	return value

}

var g_global
var inform_global 
var pop_th_global = get_threshold()
$.when( inform_d, geometry_pop_d).done(function ( i, g ) {
	var gjson = []
    var inform = array_to_dict(i, ['ISO','ID_1']);
    inform_global = inform;
    init_layer(g)
    g_global = g;
    var layer_parameters = init_parameters(window.location.hash);
    g.features.forEach(function(element){
    	var render = calculate_mean(generate_new_prop(element.properties, layer_parameters, inform, ['ISO','ID_1']));
		var new_element = element
		new_element.properties.render = render;
		new_element.properties.density = (element.properties.spsum*1000000) / turf.area(element.geometry)

		gjson.push(new_element)
    });
    set_layer(gjson);
    set_map();


});







