/* Ejercicio 1: se dan dos elementos. Debes recorrer ambas y retornar solo los elementos que se repitan en ambas. */

var l1 = [1, 2, 3];
var l2 = [2, 3, 4];

function intersection(){
	var l3 = [];
	for(var i=0; i<l1.length; i++){
		for (var j=0; j<l2.length; j++){
			if(l1[i]==l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}
console.log(intersection(l1, l2));

function intersectionSet2(l1, l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1
	});	
};
console.log(intersectionSet2(l1, l2));
